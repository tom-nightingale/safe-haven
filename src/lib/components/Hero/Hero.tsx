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

  return (
    <Container>
      <div className="relative grid grid-cols-12 py-10 md:py-12 lg:py-16 xl:py-24">
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
            {buttons && buttons.length > 0 && (
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
            )}

            <a href={`tel:${nurseryPhoneNumber}`} className="flex items-center">
              <Typography
                variant={TypeVariant.Button1}
                component={TypeComponent.p}
                classes="flex items-center gap-1"
              >
                <span className="mr-1 rotate-90 text-[#7Da8A4]">
                  <FaPhone />
                </span>
                Call us on
                <span className="font-medium">{nurseryPhoneNumber}</span>
              </Typography>
            </a>
          </div>
        </div>

        {image && (
          <div className="transiton-all pointer-events-none absolute -top-4 right-0 z-0 h-[120%] w-full opacity-50 duration-200 md:-right-8 md:h-[150%] md:w-2/3 md:opacity-100 lg:-top-12 lg:right-0 lg:h-[145%] xl:-top-12 2xl:-right-16 2xl:h-[130%]">
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
        <div className="mb-20 grid grid-cols-12 gap-y-10 sm:gap-x-8 md:mt-10 lg:mt-0 lg:pl-8 xl:mb-40 xl:gap-x-16">
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
    </Container>
  );
};

export default Hero;
