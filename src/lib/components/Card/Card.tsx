"use client";

import Button from "@/components/Button/Button";
import SanityImage from "@/components/SanityImage/SanityImage";
import { type Image } from "@/gql/sanity/codegen";
import { FaPlus } from "react-icons/fa6";
import Typography, {
  TypeVariant,
  TypeComponent,
} from "@/components/Typography/Typography";
import FancyLink from "@/components/FancyLink/FancyLink";
import { CardImageType } from "@/utils/propTypes";
import { Maybe } from "@/gql/sanity/codegen";
import config from "@/config/config";

type Props = {
  href?: string;
  image?: Image | Maybe<Image>;
  imageFit?: string;
  title: string | Maybe<string>;
  subtitle?: string | Maybe<string>;
  containerClass?: string;
  shadowClass?: string;
  buttonText?: string;
  buttonStyle?: string;
  buttonClass?: string;
  style?: CardImageType;
};

const Card = ({
  href,
  image,
  imageFit = "cover",
  title,
  subtitle,
  buttonText,
  buttonStyle = "full",
  containerClass = "bg-green",
  shadowClass = "",
  buttonClass = "button-outline-green text-white",
  style = CardImageType.FULL,
}: Props) => {
  return (
    <div className="relative h-full">
      <div
        className={`pointer-events-none absolute -top-2 -left-2 z-0 h-full w-full rounded-3xl ${shadowClass}`}
      ></div>

      <FancyLink url={href}>
        <div
          className={`group relative flex flex-col overflow-hidden rounded-3xl text-white ${containerClass} h-full`}
        >
          <div className="relative flex aspect-[2/1.5] items-start justify-center overflow-hidden bg-white">
            <div className="h-full w-full transition-all duration-200 group-hover:scale-105">
              {image && style === CardImageType.PROFILE ? (
                <SanityImage
                  image={image}
                  alt={title ?? config.COMPANY_NAME}
                  loading="lazy"
                />
              ) : (
                <>
                  <SanityImage
                    image={image}
                    alt={title ?? config.COMPANY_NAME}
                    loading="lazy"
                    objectFit={imageFit}
                  />
                </>
              )}
            </div>
          </div>

          <div className="z-2 grid grid-cols-12 items-center justify-between gap-3 p-6">
            <div className="col-span-7">
              <Typography variant={TypeVariant.H4} component={TypeComponent.p}>
                {title}
              </Typography>
              <Typography variant={TypeVariant.H6} component={TypeComponent.p}>
                {subtitle}
              </Typography>
            </div>

            <div className="col-span-5 md:m-0">
              <div className="ml-auto flex w-max rounded-full bg-white p-0.5">
                {buttonStyle === "full" ? (
                  <Button
                    classes={`button-primary button-outline text-xs ${buttonClass}`}
                    outlined={true}
                    label={buttonText}
                    href={href}
                    typeClasses="text-center block mx-auto !text-sm"
                  />
                ) : (
                  <Button
                    classes={`p-3 button-outline button-icon-only ${buttonClass}`}
                    label={buttonText}
                    iconOnly
                    icon={<FaPlus />}
                    href={href}
                    typeClasses=""
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </FancyLink>
    </div>
  );
};

export default Card;
