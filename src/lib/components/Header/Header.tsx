"use-client";

import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";

const Header = () => {
  const router = useTransitionRouter();

  const urls = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "About",
      url: "/about",
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
    duration: 1000,
    easing: "cubic-bezier(0.76, 0, 0.24, 1)",
    fill: "forwards",
    pseudoElement: "::view-transition-old(root)",
  });

  document.documentElement.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 1000,
    easing: "cubic-bezier(0.76, 0, 0.24, 1)",
    fill: "forwards",
    pseudoElement: "::view-transition-new(root)",
  });
};

export default Header;
