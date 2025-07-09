"use client";
import Image from "next/image";
import type { Navigation, NavigationSection } from "@/gql/sanity/codegen";
import Container from "@/components/Container/Container";
import PrimaryNav from "@/components/PrimaryNav/PrimaryNav";
import Button from "@/components/Button/Button";
import { BsTelephone } from "react-icons/bs";
import SecondaryNav from "@/components/SecondaryNav/SecondaryNav";
import config from "@/config/config";
import FancyLink from "@/components/FancyLink/FancyLink";

type Props = {
  primaryNav: Navigation;
  secondaryNav: Navigation;
};

const Header = ({ primaryNav, secondaryNav }: Props) => {
  const combinedNav: NavigationSection[] = [
    ...primaryNav.sections,
    ...secondaryNav.sections,
  ];
  return (
    <Container>
      <div className="flex w-full justify-between gap-4 py-8">
        <div className="w-20 mix-blend-multiply sm:w-30 xl:w-auto">
          <FancyLink url="/">
            <Image
              src="/logo.png"
              width={203}
              height={201}
              loading="eager"
              quality={100}
              alt={config.COMPANY_NAME}
            />
          </FancyLink>
        </div>
        <div className="flex items-center justify-between gap-10 xl:items-start xl:py-12">
          <PrimaryNav navItems={primaryNav} />
          <div className="flex items-center gap-3">
            <SecondaryNav nav={combinedNav} />
            <Button
              label="Get In Touch"
              iconLeft={<BsTelephone />}
              href="tel:01623000000"
              classes="button-primary button-peach"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
