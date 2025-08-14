"use client";

import Button from "@/components/Button/Button";
import SanityImage from "@/components/SanityImage/SanityImage";
import type { ImageBlock } from "@/gql/sanity/codegen";
import { FaPlus } from "react-icons/fa6";
import Typography, {
  TypeVariant,
  TypeComponent,
} from "@/components/Typography/Typography";
import FancyLink from "@/components/FancyLink/FancyLink";
import { Maybe } from "@/gql/sanity/codegen";
import config from "@/config/config";
import type { TypedObject } from "@portabletext/types";
// import { Dispatch, SetStateAction } from "react";

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
  modalContent?: TypedObject | TypedObject[];
  toggleModal?: () => void;
};

const CardInner = ({
  title,
  subtitle,
  image,
  buttonStyle,
  buttonClass,
  buttonText,
  containerClass,
  slim,
  href,
  imageFit,
  modalContent,
  toggleModal,
}: Props) => {
  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-3xl text-white ${containerClass} h-full`}
    >
      <div className="relative flex aspect-[2/1.5] items-start justify-center overflow-hidden bg-white">
        <div
          className={`h-full w-full transition-all duration-200 ${href || modalContent ? "group-hover:scale-105" : ""}`}
        >
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
          {title && (
            <Typography
              variant={TypeVariant.H4}
              component={TypeComponent.p}
              bold
            >
              {title}
            </Typography>
          )}
          {subtitle && (
            <Typography variant={TypeVariant.H6} component={TypeComponent.p}>
              {subtitle}
            </Typography>
          )}
        </div>

        <div
          className={` ${buttonStyle === "icon-only" ? "col-span-4" : "col-span-6"} md:m-0`}
        >
          <div
            className={`${slim ? "mx-auto" : "ml-auto"} flex w-max rounded-full bg-white ${modalContent || href ? "p-0.5" : ""}`}
          >
            {buttonStyle === "full" && (
              <Button
                classes={`button-primary button-outline text-sm ${buttonClass}`}
                outlined={true}
                label={buttonText}
                typeClasses="text-center block mx-auto"
              />
            )}

            {modalContent && (
              <Button
                classes={`p-3 button-outline button-icon-only ${buttonClass}`}
                label={buttonText}
                iconOnly
                icon={<FaPlus />}
                onClick={() => toggleModal && toggleModal()}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
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
  modalContent,
  toggleModal,
}: Props) => {
  return (
    <div className="relative h-full">
      <div
        className={`pointer-events-none absolute -top-2 -left-2 z-0 h-full w-full rounded-3xl ${shadowClass}`}
      ></div>

      {href ? (
        <FancyLink url={href}>
          <CardInner
            title={title}
            subtitle={subtitle}
            image={image}
            imageFit={imageFit}
            buttonText={buttonText}
            buttonClass={buttonClass}
            buttonStyle={buttonStyle}
            containerClass={containerClass}
            slim={slim}
            href={href}
          />
        </FancyLink>
      ) : (
        <CardInner
          title={title}
          subtitle={subtitle}
          image={image}
          imageFit={imageFit}
          buttonText={buttonText}
          buttonClass={buttonClass}
          buttonStyle={buttonStyle}
          containerClass={containerClass}
          slim={slim}
          modalContent={modalContent}
          toggleModal={toggleModal}
        />
      )}
    </div>
  );
};

export default Card;
