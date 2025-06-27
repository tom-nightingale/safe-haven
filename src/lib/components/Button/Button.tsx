"use client";

import { type ReactElement } from "react";
import FancyLink from "@/components/FancyLink/FancyLink";

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
                {label}
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
                  {label}
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
            <span className="block aspect-square opacity-50 transition-all duration-300 will-change-transform group-hover:-rotate-360">
              {icon}
            </span>
          )}

          {!iconOnly && (
            <>
              {iconLeft && <span className="opacity-50">{iconLeft}</span>}
              {label}
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
