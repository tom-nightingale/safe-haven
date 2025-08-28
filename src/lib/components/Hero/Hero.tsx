"use client";

import Typography, {
  TypeVariant,
  TypeComponent,
} from "@/components/Typography/Typography";
import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";
import { FaPhone } from "react-icons/fa";
import HeroCard from "@/components/Hero/HeroCard/HeroCard";
import { PortableText } from "@portabletext/react";
import type { TypedObject } from "@portabletext/types";
import type {
  Link,
  Maybe,
  ImageBlock,
  HeroCard as HeroCardType,
} from "@/gql/sanity/codegen";
import { useGlobalContext } from "@/context/GlobalContext";
import SanityImage from "@/components/SanityImage/SanityImage";
import config from "@/config/config";
import StarsSvg from "@/icons/starsSvg";
import HorseSvg from "@/icons/horseSvg";
import DuckSvg from "@/icons/duckSvg";
import BlocksSvg from "@/icons/blocksSvg";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type Props = {
  title: TypedObject | TypedObject[];
  subtitle: TypedObject | TypedObject[];
  image: Maybe<ImageBlock>;
  cards?: Maybe<Maybe<HeroCardType>[]>;
  buttons?: Maybe<Maybe<Link>[]>;
};

const Hero = ({ title, subtitle, image, cards, buttons }: Props) => {
  const { nurseries } = useGlobalContext();
  const nurseryPhoneNumber = nurseries && nurseries[0]?.phoneNumber;

  const heroImageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    gsap.fromTo(
      heroImageRef.current,
      { opacity: 0, yPercent: 10 },
      {
        opacity: 1,
        yPercent: 0,
        duration: 0.3,
        delay: 1,
        ease: "back.out(2)",
      },
    ),
      { scope: heroRef };
  });

  return (
    <div className="relative" ref={heroRef}>
      <Container classes="relative">
        <div className="relative -mt-10 grid grid-cols-12 py-10 md:py-12 lg:py-16 xl:py-24">
          <div className="3xl:pr-20 relative z-10 col-span-12 grid gap-3 sm:col-span-8 lg:col-span-6 lg:pr-16 xl:pr-30">
            <Typography
              variant={TypeVariant.H3}
              component={TypeComponent.span}
              classes="text-peach"
            >
              <PortableText value={subtitle} />
            </Typography>

            <Typography variant={TypeVariant.H1} component={TypeComponent.span}>
              <PortableText value={title} />
            </Typography>

            <div className="xs:flex-row xs:flex-wrap mt-3 flex flex-col gap-6 lg:mt-10">
              {buttons && buttons.length > 0 ? (
                <>
                  {buttons.map((button: Maybe<Link>, i: number) => {
                    return (
                      <Button
                        key={button?.label}
                        classes={
                          i === 0
                            ? "button-primary button-peach inline-block"
                            : "button-primary button-outline bg-white button-outline-blue"
                        }
                        label={button?.label}
                        href={button?.href}
                      />
                    );
                  })}
                </>
              ) : (
                <Button
                  classes={"button-primary button-peach inline-block"}
                  label="Book A Viewing"
                  href="/our-nurseries"
                />
              )}

              <a
                href={`tel:${nurseryPhoneNumber}`}
                className="group flex items-center"
              >
                <Typography
                  variant={TypeVariant.Button1}
                  component={TypeComponent.p}
                  classes="flex items-center gap-1"
                >
                  <span className="mr-1 rotate-90 text-[#7Da8A4]">
                    <FaPhone />
                  </span>
                  Call us on
                  <span className="group-hover:text-peach font-medium">
                    {nurseryPhoneNumber}
                  </span>
                </Typography>
              </a>
            </div>
          </div>

          {image && (
            <div
              ref={heroImageRef}
              className="3xl:-right-16 pointer-events-none absolute right-0 z-2 h-full w-full opacity-50 md:-right-8 md:w-2/3 md:opacity-100 lg:right-4"
            >
              <SanityImage
                image={image?.image}
                alt={image?.altText ?? config.COMPANY_NAME}
                loading="eager"
                objectFit="contain"
              />
            </div>
          )}
        </div>

        {cards && cards.length > 0 && (
          <div className="relative z-3 mb-20 grid grid-cols-12 gap-y-10 sm:gap-x-8 md:mt-10 lg:mt-0 lg:pl-8 xl:mb-40 xl:gap-x-16">
            {cards.map(card => {
              return (
                <HeroCard
                  key={card?.title}
                  title={card?.title}
                  subtitle={card?.subtitle}
                  link={card?.link}
                  colourTheme={card?.colourTheme}
                />
              );
            })}
          </div>
        )}

        <StarsSvg classes="absolute top-[16%] left-[32%] pointer-events-none" />
        <DuckSvg classes="absolute top-[60%] left-0 pointer-events-none" />
        <HorseSvg classes="absolute top-full left-[33%] pointer-events-none scale-[60%]" />
        <BlocksSvg classes="absolute top-[90%] right-[12%] pointer-events-none" />
      </Container>
    </div>
  );
};

export default Hero;
