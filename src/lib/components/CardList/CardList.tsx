"use client";

import { useRef } from "react";
import Typography, {
  TypeVariant,
  TypeComponent,
} from "@/components/Typography/Typography";
import Container from "@/components/Container/Container";
import Card from "@/components/Card/Card";
import type { Image, Maybe, CardListCard } from "@/gql/sanity/codegen";
import { CardImageType } from "@/utils/propTypes";
import ScallopedTop from "@/components/ScallopedTop/ScallopedTop";
import JigsawSvg from "@/icons/jigsawSvg";
import MobileSvg from "@/icons/mobileSvg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

type Card = {
  href: string;
  image?: Image;
  title: string | undefined;
  subtitle: string;
  containerClass?: string;
  shadowClass?: string;
  buttonText?: string;
  buttonStyle?: "full" | "icon-only";
  buttonClass?: string;
  style?: CardImageType;
};
type Props = {
  cards?: Maybe<Maybe<CardListCard>[]>;
  title?: string | Maybe<string>;
  subtitle?: string | Maybe<string>;
  scallopedTop?: boolean | Maybe<boolean>;
};

const CardList = ({ title, subtitle, cards, scallopedTop }: Props) => {
  const bgColors = ["bg-green", "bg-lilac", "bg-yellow", "bg-blue", "bg-peach"];
  const buttonClasses = [
    "button-outline-green text-green",
    "button-outline-lilac text-lilac",
    "button-outline-yellow text-yellow",
    "button-outline-blue text-blue",
    "button-outline-peach text-peach",
  ];
  const shadowClasses = [
    "bg-green/40",
    "bg-lilac/40",
    "bg-yellow/40",
    "bg-blue/40",
    "bg-peach/40",
  ];

  const cardLayout = cards && cards?.length % 5 === 0 ? "slim" : "default";

  const cardContainer = useRef(null);
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(".box");
      boxes.forEach((box: any, i: number) => {
        gsap.fromTo(
          box,
          { y: 50 },
          {
            duration: 0.4,
            delay: i / 20,
            y: 0,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: box,
              toggleActions: "play none none none",
            },
          },
        );
      });
    },
    { scope: cardContainer },
  );

  const widthClasses = [
    "w-full xs:w-[calc(50%-1rem)] lg:w-[calc(25%-2rem)]",
    "w-full xs:w-[calc(50%-1rem)] lg:w-[calc(25%-2rem)]",
    "w-full xs:w-[calc(50%-1rem)] lg:w-[calc(25%-2rem)]",
    "w-full xs:w-[calc(50%-1rem)] lg:w-[calc(25%-2rem)]",
    "w-full xs:w-[calc(50%-1rem)] lg:w-[calc(20%-2rem)]",
  ];

  return (
    <div className="relative">
      {scallopedTop ? (
        <>
          <ScallopedTop>
            <Container classes="relative">
              <div className="relative z-1 py-4" ref={cardContainer}>
                {(title || subtitle) && (
                  <div className="flex flex-col justify-center gap-6 text-center">
                    <Typography
                      variant={TypeVariant.H2}
                      component={TypeComponent.h2}
                      bold
                    >
                      {title}
                    </Typography>
                    <Typography
                      variant={TypeVariant.Body1}
                      component={TypeComponent.p}
                    >
                      {subtitle}
                    </Typography>
                  </div>
                )}
                {cards && (
                  <div className="mx-auto mt-10 flex max-w-(--breakpoint-3xl) flex-wrap justify-center gap-8 xl:mt-15">
                    {cards.map((card, i) => {
                      return (
                        <div
                          className={`box ${widthClasses[cards.length - 1]}`}
                          key={card?.title}
                        >
                          <Card
                            buttonText={card?.link?.label}
                            href={card?.link?.href}
                            title={card?.title}
                            subtitle={card?.subtitle}
                            image={card?.image}
                            containerClass={bgColors[i] || "bg-blue"}
                            buttonClass={
                              buttonClasses[i] ||
                              "button-outline-blue text-blue"
                            }
                            shadowClass={shadowClasses[i] || "bg-blue/10"}
                          />
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              <JigsawSvg
                stroke="white"
                classes="absolute top-[5%] left-[3%] pointer-events-none opacity-50"
              />
              <MobileSvg
                stroke="white"
                classes="absolute -top-20 right-[2.5%] pointer-events-none opacity-50"
              />
            </Container>
          </ScallopedTop>
        </>
      ) : (
        <div className="relative z-10 pb-10 xl:pb-15" ref={cardContainer}>
          <Container classes="relative">
            {(title || subtitle) && (
              <div className="flex flex-col justify-center gap-6 text-center">
                <Typography
                  variant={TypeVariant.H2}
                  component={TypeComponent.h2}
                  classes="!font-medium"
                >
                  {title}
                </Typography>
                <Typography
                  variant={TypeVariant.Body1}
                  component={TypeComponent.p}
                >
                  {subtitle}
                </Typography>
              </div>
            )}

            {cards && (
              <div className="mx-auto mt-10 flex max-w-(--breakpoint-3xl) flex-wrap justify-center gap-8 xl:mt-15">
                {cards.map((card, i) => {
                  return (
                    <div
                      className={`box ${widthClasses[cards.length - 1]}`}
                      key={card?.title}
                    >
                      <Card
                        buttonText={card?.link?.label}
                        href={card?.link?.href}
                        title={card?.title}
                        subtitle={card?.subtitle}
                        image={card?.image}
                        containerClass={bgColors[i] || "bg-blue"}
                        buttonClass={
                          buttonClasses[i] || "button-outline-blue text-blue"
                        }
                        shadowClass={shadowClasses[i] || "bg-blue/10"}
                        slim={cardLayout === "slim"}
                      />
                    </div>
                  );
                })}
              </div>
            )}

            <JigsawSvg
              stroke="white"
              classes="absolute top-[5%] left-[3%] pointer-events-none opacity-50"
            />
            <MobileSvg
              stroke="white"
              classes="absolute -top-18 right-[2.5%] pointer-events-none opacity-50"
            />
          </Container>
        </div>
      )}
    </div>
  );
};

export default CardList;
