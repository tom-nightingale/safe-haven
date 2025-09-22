"use client";

import { useRef } from "react";
import FancyLink from "@/components/FancyLink/FancyLink";
import { type NavigationSection, Maybe } from "@/gql/sanity/codegen";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Typography, { TypeVariant } from "@/components/Typography/Typography";
import { usePathname } from "next/navigation";

type Props = {
  section: NavigationSection | Maybe<NavigationSection>;
  isActive: boolean;
  setActiveSectionKey: any;
};

const NavSection = ({
  section,
  setActiveSectionKey,
  isActive = true,
}: Props) => {
  const target = section?.target;
  const children = section?.children;

  gsap.registerPlugin(useGSAP);
  const subnav = useRef(null);

  useGSAP(
    () => {
      if (isActive && subnav.current) {
        gsap.fromTo(
          subnav.current,
          { opacity: 0, yPercent: 10 },
          {
            opacity: 1,
            yPercent: 0,
            duration: 0.3,
            ease: "back.out(2)",
          },
        );
      }
    },
    { dependencies: [isActive], scope: subnav },
  );

  const pathname = usePathname();
  const slug = pathname.split("/").at(-1) as string;

  const hasActiveChild = children?.some(child => {
    return `/${child?.target?.slug?.current}` === pathname;
  });

  return (
    <>
      <div
        className="relative z-20 transition-opacity duration-200 group-hover:opacity-70 hover:!opacity-100"
        key={target?.slug?.current}
        onMouseEnter={() => {
          setActiveSectionKey(
            typeof section?.target?.title === "string"
              ? section.target.title
              : null,
          );
        }}
        onMouseLeave={() => {
          setActiveSectionKey(null);
        }}
      >
        {target?.slug?.current && (
          <FancyLink url={`/${target?.slug?.current}`}>
            <span className="flex flex-col items-center justify-center py-3 text-center">
              <Typography
                variant={TypeVariant.Button1}
                classes={
                  (slug !== "" && target?.slug?.current.includes(slug)) ||
                  hasActiveChild
                    ? "text-peach"
                    : ""
                }
              >
                {target?.title}
              </Typography>
              {children && children?.length > 0 && (
                <span className="pointer-events-none absolute -bottom-2 left-1/2 -mt-2 inline-block -translate-x-1/2">
                  &hellip;
                </span>
              )}
            </span>
          </FancyLink>
        )}

        {children && children?.length > 0 && isActive && (
          <div
            className="absolute top-full left-1/2 -translate-x-1/2 before:absolute before:top-0 before:left-1/2 before:h-4 before:w-4 before:-translate-x-1/2 before:rotate-45 before:bg-white before:content-['']"
            ref={subnav}
          >
            <div className="mt-2 flex w-max flex-col gap-3 rounded-3xl bg-white p-4 shadow-lg">
              {children.map(
                child =>
                  child?.target?.slug?.current && (
                    <FancyLink
                      key={child?.target?.slug?.current}
                      url={`/${child?.target?.slug.current}`}
                    >
                      <Typography
                        variant={TypeVariant.Button2}
                        classes={
                          slug !== "" &&
                          `/${child?.target?.slug?.current}` === pathname
                            ? "text-peach"
                            : "hover:text-peach"
                        }
                      >
                        <>{child?.target?.title}</>
                      </Typography>
                    </FancyLink>
                  ),
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NavSection;
