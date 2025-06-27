"use client";

import { useState, useRef } from "react";
import FancyLink from "@/components/FancyLink/FancyLink";
import { type NavigationSection, Maybe } from "@/gql/sanity/codegen";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type Props = {
  section: NavigationSection | Maybe<NavigationSection>;
};
const NavSection = ({ section }: Props) => {
  const target = section?.target;
  const children = section?.children;

  gsap.registerPlugin(useGSAP);
  const subnav = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const { contextSafe } = useGSAP({ scope: subnav });
  const handleHoverState = contextSafe(() => {
    gsap.to(subnav.current, {
      opacity: 0,
      yPercent: 10,
      duration: 0.3,
      ease: "back.in(2)",
      onComplete: () => setIsHovered(!isHovered),
    });
  });

  useGSAP(
    () => {
      gsap.from(subnav.current, {
        opacity: 0,
        yPercent: 10,
        duration: 0.3,
        ease: "back.out(2)",
      });
    },
    { dependencies: [isHovered], scope: subnav },
  );

  return (
    <div
      className="relative"
      key={target?.slug?.current}
      onMouseEnter={handleHoverState}
      onMouseLeave={handleHoverState}
    >
      {target?.slug?.current && (
        <FancyLink url={target?.slug?.current}>
          <span className="flex flex-col items-center justify-center text-center">
            <span>{target?.title}</span>
            {children && children?.length > 0 && (
              <span className="pointer-events-none -mt-2 inline-block">
                &hellip;
              </span>
            )}
          </span>
        </FancyLink>
      )}

      {children && children?.length > 0 && isHovered && (
        <div
          className="absolute top-full left-1/2 -translate-x-1/2 before:absolute before:top-0 before:left-1/2 before:h-4 before:w-4 before:-translate-x-1/2 before:rotate-45 before:bg-white before:content-['']"
          ref={subnav}
        >
          <div className="mt-2 flex w-max flex-col gap-2 rounded-3xl bg-white p-4">
            {children.map(
              child =>
                child?.target?.slug?.current && (
                  <FancyLink
                    key={child?.target?.slug?.current}
                    url={child?.target?.slug.current}
                  >
                    <span className="block">{child?.target?.title}</span>
                  </FancyLink>
                ),
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavSection;
