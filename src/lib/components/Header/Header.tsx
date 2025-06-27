"use client";
import type { Navigation } from "@/gql/sanity/codegen";
import Container from "@/components/Container/Container";
import PrimaryNav from "@/components/PrimaryNav/PrimaryNav";
import Button from "@/components/Button/Button";
import { FaBars } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";

type Props = {
  primaryNav: Navigation;
  secondaryNav: Navigation;
};

const Header = ({ primaryNav, secondaryNav }: Props) => {
  console.log(primaryNav);
  console.log(secondaryNav);

  return (
    <Container>
      <div className="flex w-full items-center justify-between gap-4 xl:gap-16">
        <div className="flex aspect-square w-20 items-center justify-center bg-white">
          Logo
        </div>
        <PrimaryNav navItems={primaryNav} />
        <div className="flex items-center gap-3">
          <Button
            iconOnly
            icon={<FaBars />}
            classes="button-icon-only"
            onClick={() => {
              console.log("open secondary menu");
            }}
          />
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
