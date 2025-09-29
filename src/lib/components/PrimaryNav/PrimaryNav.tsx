"use client";

import {
  type Navigation,
  type NavigationSection,
  Maybe,
} from "@/gql/sanity/codegen";
import NavSection from "./NavSection/NavSection";
import { useState } from "react";

type Props = {
  navItems: Navigation | Maybe<NavigationSection>;
};

const PrimaryNav = ({ navItems }: Props) => {
  const sections =
    navItems && typeof navItems === "object" && "sections" in navItems
      ? (navItems as Navigation).sections
      : undefined;

  const [activeSectionKey, setActiveSectionKey] = useState<string | null>(null);

  return (
    <nav
      role="navigation"
      className="group hidden gap-6 font-serif xl:flex xl:items-center"
    >
      {sections &&
        sections.length > 0 &&
        sections.map(section => {
          return (
            <NavSection
              key={section?.target?.title}
              section={section}
              isActive={activeSectionKey === section?.target?.title}
              setActiveSectionKey={setActiveSectionKey}
            />
          );
        })}
    </nav>
  );
};

export default PrimaryNav;
