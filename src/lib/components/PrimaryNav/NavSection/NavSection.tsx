"use client";

import { useRef, useState } from "react";
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

  const [isHovered, setIsHovered] = useState(false);

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
  const hasActiveChild =
    children &&
    slug !== "" &&
    children.filter(child => child?.target?.slug?.current?.includes(slug));

  return (
    <>
      {/* <div
        className={`pointer-events-none absolute top-0 left-0 z-10 min-h-screen w-full transition-all duration-300 ${isHovered ? "bg-peach/5" : "bg-transparent"}`}
      ></div> */}

      <div
        className="relative z-20 transition-opacity duration-200 group-hover:opacity-70 hover:!opacity-100"
        key={target?.slug?.current}
        onMouseEnter={() => {
          setActiveSectionKey(
            typeof section?.target?.title === "string"
              ? section.target.title
              : null,
          );
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setActiveSectionKey(null);
          setIsHovered(false);
        }}
      >
        {target?.slug?.current && (
          <FancyLink url={`/${target?.slug?.current}`}>
            <span className="flex flex-col items-center justify-center py-3 text-center">
              <Typography
                variant={TypeVariant.Button1}
                classes={
                  (slug !== "" && target?.slug?.current.includes(slug)) ||
                  (hasActiveChild && hasActiveChild.length > 0)
                    ? "text-peach"
                    : ""
                }
              >
                {target?.title}
              </Typography>
              {children && children?.length > 0 && (
                <span className="pointer-events-none absolute bottom-0 left-1/2 -mt-2 inline-block -translate-x-1/2">
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
            <div className="mt-2 flex w-max flex-col gap-2 rounded-3xl bg-white p-4 shadow-lg">
              {children.map(
                child =>
                  child?.target?.slug?.current && (
                    <FancyLink
                      key={child?.target?.slug?.current}
                      url={`/${target?.slug?.current}/${child?.target?.slug.current}`}
                    >
                      <Typography
                        variant={TypeVariant.Button2}
                        classes={
                          slug !== "" &&
                          `${target?.slug?.current}/${child.target.slug.current}`.includes(
                            slug,
                          )
                            ? "text-peach"
                            : ""
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
