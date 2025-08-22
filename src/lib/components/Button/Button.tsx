"use client";

import { type ReactElement } from "react";
import FancyLink from "@/components/FancyLink/FancyLink";
import Typography, { TypeVariant } from "@/components/Typography/Typography";
import type { Maybe } from "@/gql/sanity/codegen";

type Props = {
  label?: string | Maybe<string>;
  iconOnly?: boolean;
  icon?: ReactElement;
  iconLeft?: ReactElement;
  iconRight?: ReactElement;
  outlined?: boolean;
  classes?: string;
  href?: string | Maybe<string>;
  newTab?: boolean;
  variant?: TypeVariant;
  typeClasses?: string;
  onClick?: () => void;
};

const Button = ({
  label,
  iconOnly,
  icon,
  iconLeft,
  iconRight,
  outlined = false,
  classes,
  href,
  newTab = false,
  variant = TypeVariant.Button1,
  typeClasses = "",
  onClick,
}: Props) => {
  return (
    <>
      {href ? (
        newTab ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`button ${outlined ? "outlined" : ""} ${classes ?? ""}`}
            onClick={onClick}
          >
            {iconOnly && <span className="aspect-square">{icon}</span>}
            {!iconOnly && (
              <>
                {iconLeft && <span className="">{iconLeft}</span>}
                <Typography variant={variant}>{label}</Typography>
                {iconRight && (
                  <span className="text-dark-green block text-center">
                    {iconRight}
                  </span>
                )}
              </>
            )}
          </a>
        ) : (
          <FancyLink url={href}>
            <button className={`button ${classes ?? ""}`}>
              {iconOnly && (
                <span className="aspect-square">
                  {icon} <span className="hidden">{label}</span>
                </span>
              )}

              {!iconOnly && (
                <>
                  {iconLeft && <span className="">{iconLeft}</span>}
                  <Typography classes={typeClasses} variant={variant}>
                    {label}
                  </Typography>
                  {iconRight && (
                    <span className="block text-center text-inherit opacity-50">
                      {iconRight}
                    </span>
                  )}
                </>
              )}
            </button>
          </FancyLink>
        )
      ) : (
        // Button for no href
        <button
          onClick={onClick}
          className={`group button ${outlined ? "outlined" : ""} ${classes ?? ""}`}
        >
          {iconOnly && <span className="block aspect-square">{icon}</span>}
          {!iconOnly && (
            <>
              {iconLeft && <span className="">{iconLeft}</span>}
              <Typography variant={variant}>{label}</Typography>
              {iconRight && (
                <span className="text-dark-green block text-center">
                  {iconRight}
                </span>
              )}
            </>
          )}
        </button>
      )}
    </>
  );
};

export default Button;
