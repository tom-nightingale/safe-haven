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

type Props = {
  href: string;
  image: Image;
  imageFit?: string;
  title: string;
  subtitle: string;
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
    <div className="relative">
      <div
        className={`pointer-events-none absolute -top-2 -left-2 z-0 h-full w-full rounded-3xl ${shadowClass}`}
      ></div>

      <FancyLink url={href}>
        <div
          className={`group relative flex flex-col overflow-hidden rounded-3xl text-white ${containerClass}`}
        >
          <div className="relative flex aspect-[2/1.5] items-start justify-center overflow-hidden bg-white">
            <div className="h-full w-full transition-all duration-200 group-hover:scale-105">
              {image && style === CardImageType.PROFILE ? (
                <SanityImage image={image} alt={title} loading="lazy" />
              ) : (
                <>
                  <SanityImage
                    image={image}
                    alt={title}
                    loading="lazy"
                    objectFit={imageFit}
                  />
                </>
              )}
            </div>
          </div>

          <div className="z-2 flex items-center justify-between gap-3 p-6">
            <div>
              <Typography variant={TypeVariant.H4} component={TypeComponent.p}>
                {title}
              </Typography>
              <Typography variant={TypeVariant.H6} component={TypeComponent.p}>
                {subtitle}
              </Typography>
            </div>

            <div className="rounded-full bg-white p-0.5 md:m-0">
              {buttonStyle === "full" ? (
                <Button
                  classes={`button-primary button-outline text-xs ${buttonClass}`}
                  outlined={true}
                  label={buttonText}
                  // href={href}
                />
              ) : (
                <Button
                  classes={`p-3 button-outline button-icon-only ${buttonClass}`}
                  label={buttonText}
                  iconOnly
                  icon={<FaPlus />}
                  // href={href}
                />
              )}
            </div>
          </div>
        </div>
      </FancyLink>
    </div>
  );
};

export default Card;
