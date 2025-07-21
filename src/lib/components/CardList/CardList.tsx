"use client";

import Typography, {
  TypeVariant,
  TypeComponent,
} from "@/components/Typography/Typography";
import Container from "@/components/Container/Container";
import Card from "@/components/Card/Card";
import type { Image, Maybe, CardListCard } from "@/gql/sanity/codegen";
import { CardImageType } from "@/utils/propTypes";
import ScallopedTop from "@/components/ScallopedTop/ScallopedTop";

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
  const bgColors = ["bg-green", "bg-lilac", "bg-yellow", "bg-blue"];
  const buttonClasses = [
    "button-outline-green text-green",
    "button-outline-lilac text-lilac",
    "button-outline-yellow text-yellow",
    "button-outline-blue text-blue",
  ];
  const shadowClasses = [
    "bg-green/10",
    "bg-lilac/10",
    "bg-yellow/10",
    "bg-blue/10",
  ];

  return (
    <>
      {scallopedTop ? (
        <>
          <ScallopedTop>
            <Container>
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
                <div className="mx-auto mt-10 grid max-w-(--breakpoint-3xl) grid-cols-1 gap-8 md:grid-cols-2 xl:mt-15 xl:grid-cols-4">
                  {cards.map((card, i) => {
                    return (
                      <Card
                        key={card?.title}
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
                      />
                    );
                  })}
                </div>
              )}
            </Container>
          </ScallopedTop>
        </>
      ) : (
        <div className="py-10 xl:py-15">
          <Container>
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
              <div className="mx-auto mt-10 grid max-w-(--breakpoint-3xl) grid-cols-1 gap-8 md:grid-cols-2 xl:mt-15 xl:grid-cols-4">
                {cards.map((card, i) => {
                  return (
                    <Card
                      key={card?.title}
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
                    />
                  );
                })}
              </div>
            )}
          </Container>
        </div>
      )}
    </>
  );
};

export default CardList;
