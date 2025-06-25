"use client";
import type { GetNavigationByIdQuery } from "@/gql/sanity/codegen";
import Container from "@/components/Container/Container";
import FancyLink from "@/components/FancyLink/FancyLink";

type Props = {
  primaryNav: GetNavigationByIdQuery | undefined;
  secondaryNav: GetNavigationByIdQuery | undefined;
};

const Header = ({ primaryNav, secondaryNav }: Props) => {
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
    <Container>
      <nav className="font-serif">
        {urls.map(route => (
          <FancyLink key={route.label} url={route.url}>
            {route.label}
          </FancyLink>
        ))}
      </nav>
    </Container>
  );
};

export default Header;
