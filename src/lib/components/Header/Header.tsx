"use client";

import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";
import type { GetNavigationByIdQuery } from "@/gql/sanity/codegen";

type Props = {
  primaryNav: GetNavigationByIdQuery | undefined;
  secondaryNav: GetNavigationByIdQuery | undefined;
};

const Header = ({ primaryNav, secondaryNav }: Props) => {
  const router = useTransitionRouter();

  console.log(primaryNav);
  console.log(secondaryNav);

  const urls = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "About Us",
      url: "/about-us",
    },
  ];
  return (
    <nav>
      {urls.map(route => (
        <Link
          key={route.label}
          onClick={e => {
            e.preventDefault();
            router.push(route.url, {
              onTransitionReady: pageAnimation,
            });
          }}
          href="/"
        >
          {route.label}
        </Link>
      ))}
    </nav>
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

export default Header;
