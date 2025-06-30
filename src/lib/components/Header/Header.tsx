"use client";
import type { Navigation } from "@/gql/sanity/codegen";
import Container from "@/components/Container/Container";
import PrimaryNav from "@/components/PrimaryNav/PrimaryNav";
import Button from "@/components/Button/Button";
import { BsTelephone } from "react-icons/bs";
import SecondaryNav from "@/components/SecondaryNav/SecondaryNav";

type Props = {
  primaryNav: Navigation;
  secondaryNav: Navigation;
};

const Header = ({ primaryNav, secondaryNav }: Props) => {
  return (
    <Container>
      <div className="flex w-full items-center justify-between gap-4">
        <div className="flex aspect-square w-20 items-center justify-center bg-white">
          Logo
        </div>
        <PrimaryNav navItems={primaryNav} />
        <div className="flex items-center gap-3">
          <SecondaryNav nav={secondaryNav} />
          <Button
            label="Get In Touch"
            iconLeft={<BsTelephone />}
            href="tel:01623000000"
            classes="button-primary button-peach"
          />
        </div>
      </div>
    </Container>
  );
};

export default Header;
