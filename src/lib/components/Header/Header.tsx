"use client";
import Image from "next/legacy/image";
import type { Navigation } from "@/gql/sanity/codegen";
import Container from "@/components/Container/Container";
import PrimaryNav from "@/components/PrimaryNav/PrimaryNav";
import { BsTelephone } from "react-icons/bs";
import SecondaryNav from "@/components/SecondaryNav/SecondaryNav";
import config from "@/config/config";
import FancyLink from "@/components/FancyLink/FancyLink";
import NurserySelectButton from "@/components/NurserySelectButton/NurserySelectButton";

type Props = {
  bannerLength: number;
  primaryNav?: Navigation;
  secondaryNav?: Navigation;
};

const Header = ({ primaryNav, secondaryNav, bannerLength }: Props) => {
  const combinedNav = [
    ...(primaryNav?.sections ?? []),
    ...(secondaryNav?.sections ?? []),
  ];

  return (
    <div className={`relative ${bannerLength > 0 ? "pt-4" : ""}`}>
      <Container>
        <div className="flex w-full flex-wrap justify-between gap-4 py-8 xl:pb-0">
          <div className="w-30 mix-blend-multiply sm:w-30 xl:w-40">
            <FancyLink url="/">
              <Image
                src="/logo.png"
                width={201}
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
            <div className="flex items-center gap-3 pr-2 xl:pr-0">
              <SecondaryNav nav={combinedNav} />
              <span className="-order-1 xl:order-2">
                <NurserySelectButton
                  classes="!px-3 xs:!px-5 lg:!px-6 lg:!py-4"
                  buttonIcon={<BsTelephone />}
                  buttonLabel="Get In Touch"
                  typeClasses="hidden xs:block !whitespace-nowrap"
                  iconClasses=""
                />
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
