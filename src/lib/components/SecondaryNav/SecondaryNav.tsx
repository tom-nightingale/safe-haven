"use client";

import type { Navigation } from "@/gql/sanity/codegen";
import Button from "@/components/Button/Button";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useRef } from "react";
import FancyLink from "@/components/FancyLink/FancyLink";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type Props = {
  nav: Navigation;
};

const SecondaryNav = ({ nav }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeButton = useRef(null);
  const menuContainer = useRef(null);

  const animationScope = useRef(null);
  const secondaryNav = useRef(null);
  const tl = useRef(null);

  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      gsap.set(secondaryNav.current, { opacity: 0 });
      gsap.set(menuContainer.current, {
        opacity: 0,
        xPercent: 100,
        // yPercent: 5,
      });
      gsap.set(closeButton.current, { opacity: 0 });

      tl.current = gsap
        .timeline({ paused: true })
        .to(secondaryNav.current, {
          opacity: 1,
          duration: 0.2,
          ease: "power2.out",
        })
        .to(menuContainer.current, {
          opacity: 1,
          xPercent: 0,
          //   yPercent: 0,
          duration: 0.5,
          ease: "power2.out",
        })
        .to(closeButton.current, {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });
    },
    { scope: animationScope },
  );

  const openNav = () => {
    setIsOpen(true);
    tl.current.play();
  };

  const closeNav = () => {
    console.log("closeNav");
    tl.current.reverse().then(() => {
      setIsOpen(false);
    });
  };

  return (
    <>
      <Button
        iconOnly
        icon={<FaBars />}
        classes="button-icon-only"
        onClick={() => {
          openNav();
        }}
      />

      <div
        ref={animationScope}
        className={`absolute top-0 left-0 z-3 h-screen w-full ${isOpen ? "block" : "hidden"}`}
      >
        <div
          ref={secondaryNav}
          className="absolute top-0 left-0 z-10 h-screen w-full bg-black/50"
        ></div>

        <button
          ref={closeButton}
          className="absolute top-8 left-4 z-50 text-white"
          onClick={() => {
            closeNav();
          }}
        >
          <FaTimes />
        </button>

        <div
          className="shadow-peach bg-cream absolute top-4 right-4 bottom-4 z-10 flex h-screen w-4/5 flex-col gap-2 rounded-3xl p-6"
          ref={menuContainer}
        >
          {nav?.sections &&
            nav?.sections.length > 0 &&
            nav.sections.map(sect => {
              return (
                <div className="font-serif" key={sect?.target?.slug?.current}>
                  <div className="transition-all duration-200 hover:pl-2">
                    <FancyLink url={sect?.target?.slug?.current}>
                      {sect.target.title}
                    </FancyLink>
                  </div>
                  <div>
                    {sect?.children &&
                      sect?.children.length > 0 &&
                      sect?.children.map(child => {
                        return (
                          <div
                            key={child?.target?.title}
                            className="pt-2 pl-4 transition-all duration-200 hover:pl-6"
                          >
                            <FancyLink url={child?.target?.slug?.current}>
                              {child?.target?.title}
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
    </>
  );
};

export default SecondaryNav;
