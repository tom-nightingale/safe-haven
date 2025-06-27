"use client";

import {
  type Navigation,
  type NavigationSection,
  Maybe,
} from "@/gql/sanity/codegen";
import NavSection from "./NavSection/NavSection";

type Props = {
  navItems: Navigation | Maybe<NavigationSection>;
};

const PrimaryNav = ({ navItems }: Props) => {
  // Check if navItems is an object and has sections property
  const sections =
    navItems && typeof navItems === "object" && "sections" in navItems
      ? (navItems as Navigation).sections
      : undefined;

  return (
    <nav role="navigation" className="mt-3 hidden gap-6 font-serif xl:flex">
      {sections &&
        sections.length > 0 &&
        sections.map(section => {
          return <NavSection key={section?._key} section={section} />;
        })}
    </nav>
  );
};

export default PrimaryNav;
