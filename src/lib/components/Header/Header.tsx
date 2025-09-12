"use client";
import Image from "next/image";
import type { Navigation } from "@/gql/sanity/codegen";
import Container from "@/components/Container/Container";
import PrimaryNav from "@/components/PrimaryNav/PrimaryNav";
import Button from "@/components/Button/Button";
import { BsTelephone } from "react-icons/bs";
import SecondaryNav from "@/components/SecondaryNav/SecondaryNav";
import config from "@/config/config";
import FancyLink from "@/components/FancyLink/FancyLink";
import { useGlobalContext } from "@/context/GlobalContext";

type Props = {
  primaryNav?: Navigation;
  secondaryNav?: Navigation;
};

const Header = ({ primaryNav, secondaryNav }: Props) => {
  const combinedNav = [
    ...(primaryNav?.sections ?? []),
    ...(secondaryNav?.sections ?? []),
  ];

  const { nurseries } = useGlobalContext();
  const nurseryPhoneNumber = nurseries && nurseries[0]?.phoneNumber;
  return (
    <div className="relative">
      <Container>
        <div className="flex w-full flex-wrap justify-between gap-4 py-8 xl:pb-0">
          <div className="w-30 mix-blend-multiply sm:w-30 xl:w-40">
            <FancyLink url="/">
              <Image
                src="/logo.png"
                width={203}
                height={201}
                loading="eager"
                quality={100}
                alt={config.COMPANY_NAME}
                priority
              />
            </FancyLink>
          </div>
          <div className="z-100 flex items-center justify-between gap-10 xl:items-start xl:py-12">
            <PrimaryNav navItems={primaryNav} />
            <div className="flex items-center gap-3">
              <SecondaryNav nav={combinedNav} />
              <Button
                label="Get In Touch"
                iconLeft={<BsTelephone />}
                href={`tel:${nurseryPhoneNumber}`}
                classes="button-primary button-peach"
                typeClasses="hidden xs:block !whitespace-nowrap"
                iconClasses="-rotate-90 xs:rotate-0"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
