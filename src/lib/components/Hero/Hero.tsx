"use client";

import Typography, {
  TypeVariant,
  TypeComponent,
} from "@/components/Typography/Typography";
import Container from "@/components/Container/Container";
import HeroCard from "@/components/Hero/HeroCard/HeroCard";
import { PortableText } from "@portabletext/react";
import type { TypedObject } from "@portabletext/types";
import type {
  Maybe,
  ImageBlock,
  HeroCard as HeroCardType,
  Link,
} from "@/gql/sanity/codegen";
import SanityImage from "@/components/SanityImage/SanityImage";
import config from "@/config/config";
import StarsSvg from "@/icons/starsSvg";
import HorseSvg from "@/icons/horseSvg";
import DuckSvg from "@/icons/duckSvg";
import BlocksSvg from "@/icons/blocksSvg";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import NurserySelectButton from "@/components/NurserySelectButton/NurserySelectButton";
import Button from "@/components/Button/Button";

type Props = {
  title: TypedObject | TypedObject[];
  subtitle: TypedObject | TypedObject[];
  image: Maybe<ImageBlock>;
  cards?: Maybe<Maybe<HeroCardType>[]>;
  buttons?: Maybe<Maybe<Link>[]>;
};

const buttonClasses = [
  "button-primary button-peach",
  "button-primary button-outline button-outline-blue",
];

const Hero = ({ title, subtitle, image, cards, buttons }: Props) => {
  const heroImageRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    gsap.fromTo(
      heroImageRef.current,
      { opacity: 0, yPercent: 10 },
      {
        opacity: 1,
        yPercent: 0,
        duration: 0.3,
        delay: 0.3,
        ease: "back.out(2)",
      },
    ),
      gsap.fromTo(
        heroTextRef.current,
        { opacity: 0, yPercent: 10 },
        {
          opacity: 1,
          yPercent: 0,
          duration: 0.6,
          delay: 0.6,
          ease: "back.out(2)",
        },
      ),
      gsap.fromTo(
        heroTextRef.current,
        { opacity: 0, yPercent: 10 },
        {
          opacity: 1,
          yPercent: 0,
          duration: 0.6,
          delay: 0.6,
          ease: "back.out(2)",
        },
      ),
      { scope: heroRef };
  });

  useEffect(() => {
    const heroCards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!heroCards.length) return;

    const tlCards = gsap.timeline({ defaults: { ease: "back.out(2)" } });

    tlCards.fromTo(
      heroCards,
      { opacity: 0, yPercent: 20 },
      { opacity: 1, yPercent: 0, stagger: 0.15, duration: 0.5, delay: 0.7 },
    );
  }, [cards]);

  return (
    <div className="relative" ref={heroRef}>
      <Container>
        <div className="relative -mt-10 grid grid-cols-12 py-10 md:py-12 lg:py-16 xl:py-24">
          <div
            className="3xl:pr-20 relative z-20 col-span-12 grid gap-3 sm:col-span-8 lg:col-span-6 lg:pr-16 xl:pr-30"
            ref={heroTextRef}
          >
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
                  {buttons.length < 2 && <NurserySelectButton />}
                  {buttons.map((link, i) => (
                    <Button
                      key={link?.href}
                      label={link?.label}
                      href={`${link?.href}`}
                      classes={
                        buttons.length < 2
                          ? buttonClasses[i + 1]
                          : buttonClasses[i]
                      }
                    />
                  ))}
                </>
              ) : (
                <NurserySelectButton />
              )}
            </div>
          </div>

          {image && (
            <div className="pointer-events-none absolute right-0 z-2 flex h-full w-full justify-end !opacity-50 md:w-2/3 md:!opacity-100">
              <div className="absolute h-full w-full" ref={heroImageRef}>
                <SanityImage
                  image={image?.image}
                  alt={image?.altText ?? config.COMPANY_NAME}
                  loading="eager"
                  objectFit="contain"
                  objectPosition="75% center"
                />
              </div>
            </div>
          )}
        </div>

        {cards && cards.length > 0 && (
          <div className="relative z-3 mb-20 grid grid-cols-12 gap-y-10 sm:gap-x-8 md:mt-10 lg:mt-0 lg:pl-8 xl:mb-40 xl:gap-x-16">
            {cards.map((card, index) => {
              return (
                <HeroCard
                  key={card?.title}
                  title={card?.title}
                  subtitle={card?.subtitle}
                  link={card?.link}
                  colourTheme={card?.colourTheme}
                  ref={el => void (cardRefs.current[index] = el)}
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
