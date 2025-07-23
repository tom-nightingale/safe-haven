"use client";

import Button from "@/components/Button/Button";
import SanityImage from "@/components/SanityImage/SanityImage";
import type { Image, ImageBlock } from "@/gql/sanity/codegen";
import { FaPlus } from "react-icons/fa6";
import Typography, {
  TypeVariant,
  TypeComponent,
} from "@/components/Typography/Typography";
import FancyLink from "@/components/FancyLink/FancyLink";
import { Maybe } from "@/gql/sanity/codegen";
import config from "@/config/config";

type Props = {
  href?: string | Maybe<string>;
  image?: Maybe<ImageBlock>;
  imageFit?: string;
  title: string | Maybe<string>;
  subtitle?: string | Maybe<string>;
  containerClass?: string;
  shadowClass?: string;
  buttonText?: string | Maybe<string>;
  buttonStyle?: string;
  buttonClass?: string;
  slim?: boolean;
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
  slim = false,
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
              {image && (
                <SanityImage
                  image={image?.image}
                  alt={title ?? config.COMPANY_NAME}
                  loading="lazy"
                  objectFit={imageFit}
                />
              )}
            </div>
          </div>

          <div
            className={`z-2 ${slim ? "text-center" : "grid-cols-12"} grid items-center justify-between gap-3 p-6`}
          >
            <div
              className={`${buttonStyle === "icon-only" ? "col-span-8" : "col-span-6"}`}
            >
              <Typography variant={TypeVariant.H4} component={TypeComponent.p}>
                {title}
              </Typography>
              <Typography variant={TypeVariant.H6} component={TypeComponent.p}>
                {subtitle}
              </Typography>
            </div>

            <div
              className={`${buttonStyle === "icon-only" ? "col-span-4" : "col-span-6"} md:m-0`}
            >
              <div
                className={`${slim ? "mx-auto" : "ml-auto"} flex w-max rounded-full bg-white p-0.5`}
              >
                {buttonStyle === "full" ? (
                  <Button
                    classes={`button-primary button-outline text-sm ${buttonClass}`}
                    outlined={true}
                    label={buttonText}
                    typeClasses="text-center block mx-auto"
                  />
                ) : (
                  <Button
                    classes={`p-3 button-outline button-icon-only ${buttonClass}`}
                    label={buttonText}
                    iconOnly
                    icon={<FaPlus />}
                    // href={href}
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
