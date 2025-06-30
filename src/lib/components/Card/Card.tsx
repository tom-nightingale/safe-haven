"use client";

import Button from "@/components/Button/Button";
import SanityImage from "@/components/SanityImage/SanityImage";
import { type Image } from "@/gql/sanity/codegen";
import { FaPlus } from "react-icons/fa6";
import Typography, {
  TypeVariant,
  TypeComponent,
} from "@/components/Typography/Typography";

type Props = {
  href: string;
  image: Image;
  title: string;
  subtitle: string;
  containerClass?: string;
  shadowClass?: string;
  buttonText?: string;
  buttonStyle?: "full" | "icon-only";
  buttonClass?: string;
  style?: "profile" | "full";
};

const Card = ({
  href,
  image,
  title,
  subtitle,
  buttonText,
  buttonStyle = "full",
  containerClass = "bg-green",
  shadowClass = "",
  buttonClass = "button-outline-green text-green",
  style = "full",
}: Props) => {
  return (
    <div className="relative">
      <div
        className={`pointer-events-none absolute -top-2 -left-2 z-0 h-full w-full rounded-3xl ${shadowClass}`}
      ></div>
      <div
        className={`text-dark-green relative flex flex-col overflow-hidden rounded-3xl ${containerClass}`}
      >
        <div className="relative flex aspect-[2/1.7] items-start justify-center overflow-hidden bg-white">
          {image && style === "profile" ? (
            <SanityImage image={image} alt={title} loading="lazy" />
          ) : (
            <>
              <SanityImage image={image} alt={title} loading="lazy" />
            </>
          )}
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
                href={href}
              />
            ) : (
              <Button
                classes={`p-3 button-outline ${buttonClass}`}
                label={buttonText}
                iconOnly
                icon={<FaPlus />}
                href={href}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
