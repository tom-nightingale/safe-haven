"use client";

import { type ReactElement } from "react";
import FancyLink from "@/components/FancyLink/FancyLink";
import Typography, { TypeVariant } from "@/components/Typography/Typography";

type Props = {
  label?: string;
  iconOnly?: boolean;
  icon?: ReactElement;
  iconLeft?: ReactElement;
  iconRight?: ReactElement;
  outlined?: boolean;
  classes?: string;
  href?: string;
  newTab?: boolean;
  variant?: TypeVariant;
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
            {iconOnly && (
              <span className="aspect-square opacity-50">{icon}</span>
            )}

            {!iconOnly && (
              <>
                {iconLeft && <span className="opacity-50">{iconLeft}</span>}
                <Typography variant={variant}>{label}</Typography>
                {iconRight && (
                  <span className="text-dark-green opacity-50">
                    {iconRight}
                  </span>
                )}
              </>
            )}
          </a>
        ) : (
          <FancyLink url={href}>
            <button
              className={`button ${outlined ? "outlined" : ""} ${classes ?? ""}`}
            >
              {iconOnly && (
                <span className="aspect-square opacity-50">{icon}</span>
              )}

              {!iconOnly && (
                <>
                  {iconLeft && <span className="opacity-50">{iconLeft}</span>}
                  <Typography variant={variant}>{label}</Typography>
                  {iconRight && (
                    <span className="text-dark-green opacity-50">
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
          {iconOnly && (
            <span className="block aspect-square opacity-50">{icon}</span>
          )}

          {!iconOnly && (
            <>
              {iconLeft && <span className="opacity-50">{iconLeft}</span>}
              <Typography variant={variant}>{label}</Typography>
              {iconRight && (
                <span className="text-dark-green opacity-50">{iconRight}</span>
              )}
            </>
          )}
        </button>
      )}
    </>
  );
};

export default Button;
