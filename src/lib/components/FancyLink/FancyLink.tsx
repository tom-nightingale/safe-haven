"use client";

import React from "react";
import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
  url: string;
};
const FancyLink = ({ children, url }: Props) => {
  const router = useTransitionRouter();
  const pathname = usePathname();
  return (
    <span className="flex w-max">
      <Link
        onClick={e => {
          e.preventDefault();
          if (pathname !== url) {
            router.push(url, {
              onTransitionReady: pageAnimation,
            });
          }
        }}
        href="/"
      >
        {children}
      </Link>
    </span>
  );
};

const pageAnimation = () => {
  document.documentElement.animate([{ opacity: 1 }, { opacity: 0 }], {
    duration: 700,
    easing: "cubic-bezier(0.76, 0, 0.24, 1)",
    fill: "forwards",
    pseudoElement: "::view-transition-old(root)",
  });
  document.documentElement.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 700,
    easing: "cubic-bezier(0.76, 0, 0.24, 1)",
    fill: "forwards",
    pseudoElement: "::view-transition-new(root)",
  });
};

export default FancyLink;
