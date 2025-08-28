"use client";

import Image from "next/image";
import type { NavigationSection, Maybe } from "@/gql/sanity/codegen";
import Button from "@/components/Button/Button";
import { FaBars, FaTimes, FaStar } from "react-icons/fa";
import { useState, useRef } from "react";
import FancyLink from "@/components/FancyLink/FancyLink";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import config from "@/config/config";
import { useParams } from "next/navigation";

type Props = {
  nav: NavigationSection[] | Maybe<NavigationSection>[];
};

const SecondaryNav = ({ nav }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuContainer = useRef(null);

  const animationScope = useRef(null);
  const menuOverlay = useRef(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      gsap.set(menuOverlay.current, { opacity: 0 });
      gsap.set(menuContainer.current, {
        opacity: 0,
        xPercent: 100,
      });

      tl.current = gsap
        .timeline({ paused: true })
        .to(menuOverlay.current, {
          opacity: 1,
          duration: 0.1,
          ease: "power2.out",
        })
        .to(menuContainer.current, {
          opacity: 1,
          xPercent: 0,
          duration: 0.4,
          ease: "power2.out",
        });
    },
    { scope: animationScope },
  );

  const openNav = () => {
    setIsOpen(true);
    document.body.classList.add("locked");
    tl.current && tl.current.play();
  };

  const closeNav = () => {
    document.body.classList.remove("locked");
    tl.current &&
      tl.current.reverse().then(() => {
        setIsOpen(false);
      });
  };

  const params = useParams<{ tag: string; item: string; slug: string }>();
  const { slug } = params;

  return (
    <>
      <Button
        iconOnly
        icon={<FaBars />}
        label="Open Navigation"
        classes="button-icon-only text-dark-peach before:border-peach/50"
        onClick={() => {
          openNav();
        }}
      />

      <div
        ref={animationScope}
        className={`fixed top-0 left-0 z-50 h-screen w-full ${isOpen ? "block" : "hidden"}`}
      >
        <div
          ref={menuOverlay}
          className="fixed top-0 left-0 z-10 h-screen w-full bg-black/50"
          onClick={() => closeNav()}
        ></div>

        <div
          className="shadow-peach bg-cream absolute top-4 right-4 bottom-4 z-10 flex h-[calc(100%-32px)] w-4/5 flex-col overflow-y-scroll rounded-3xl xl:w-5/12"
          ref={menuContainer}
        >
          <div className="text-dark-peach absolute top-6 right-6 z-50 cursor-pointer">
            <Button
              iconOnly
              icon={<FaTimes />}
              label="Close Navigation"
              classes="button-icon-only"
              onClick={() => {
                closeNav();
              }}
            />
          </div>

          <div className="p-6 xl:p-8">
            <div className="mb-8 mix-blend-multiply">
              <FancyLink url="/">
                <Image
                  src="/logo.png"
                  width={101.5}
                  height={100.5}
                  loading="eager"
                  quality={100}
                  alt={config.COMPANY_NAME}
                />
              </FancyLink>
            </div>

            <div className="flex flex-col gap-5 font-serif">
              {nav?.length > 0 &&
                nav.map(sect => {
                  return (
                    <div className="group" key={sect?.target?.slug?.current}>
                      <div className="group transition-all duration-200 hover:pl-1">
                        <FancyLink
                          url={`/${sect?.target?.slug?.current ?? ""}`}
                          onClick={closeNav}
                        >
                          <span className="flex items-center gap-3">
                            <span
                              className={`text-dark-peach transition duration-200 group-hover:opacity-100 ${slug && sect?.target?.slug?.current === slug[0] ? "opacity-100" : "opacity-20"}`}
                            >
                              <FaStar />
                            </span>
                            {sect?.target?.title}
                          </span>
                        </FancyLink>
                      </div>
                      <div className="flex flex-col gap-3 pt-3 pl-6">
                        {sect?.children &&
                          sect?.children.length > 0 &&
                          sect?.children.map(child => {
                            return (
                              <div
                                key={child?.target?.title}
                                className={`pl-2 text-sm transition-all duration-200 hover:pl-3 hover:opacity-100 ${slug && child?.target?.slug?.current === slug.at(-1) ? "opacity-100" : "opacity-70"}`}
                              >
                                {/* <FancyLink
                                  url={`/${sect?.target?.slug?.current}/${child?.target?.slug?.current}`}
                                  onClick={closeNav}
                                > */}
                                <FancyLink
                                  // url={`/${sect?.target?.slug?.current}/${child?.target?.slug?.current}`}
                                  // url={`/${sect?.target?.slug?.current}/${child?.target?.slug?.current}`}
                                  url={
                                    child?.target?.slug?.current?.includes(
                                      String(sect?.target?.slug?.current),
                                    )
                                      ? `/${child?.target?.slug?.current}`
                                      : `/${sect?.target?.slug?.current}/${child?.target?.slug?.current}`
                                  }
                                  onClick={closeNav}
                                >
                                  {child?.title
                                    ? child?.title
                                    : child?.target?.title}
                                </FancyLink>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="from-cream pointer-events-none sticky bottom-0 -mt-15 min-h-30 w-full bg-linear-to-t to-transparent" />
        </div>
      </div>
    </>
  );
};

export default SecondaryNav;
