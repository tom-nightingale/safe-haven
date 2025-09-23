import Typography, {
  TypeVariant,
  TypeComponent,
} from "@/components/Typography/Typography";
import { FaCaretRight } from "react-icons/fa";
import Button from "@/components/Button/Button";
import type { Maybe, Link } from "@/gql/sanity/codegen";
import FancyLink from "@/components/FancyLink/FancyLink";
import { forwardRef } from "react";

type ColourTheme = "peach" | "blue" | "yellow";

type HeroCardProps = {
  title?: string | Maybe<string>;
  subtitle?: string | Maybe<string>;
  link?: Maybe<Link>;
  colourTheme?: ColourTheme | Maybe<string>;
};

const HeroCard = forwardRef<HTMLDivElement, HeroCardProps>(
  ({ title, subtitle, link, colourTheme }, ref) => {
    const theme: Record<
      ColourTheme,
      {
        containerClass: string;
        shadowClass: string;
        buttonClass: string;
        outlineClass: string;
      }
    > = {
      peach: {
        containerClass: "bg-peach -rotate-3 hover:rotate-3",
        shadowClass: "bg-peach/15 rotate-3",
        buttonClass: "shadow-peach text-peach",
        outlineClass: "",
      },
      blue: {
        containerClass: "bg-blue rotate-3 hover:-rotate-3",
        shadowClass: "bg-blue/15 -rotate-3",
        buttonClass: "shadow-blue text-blue",
        outlineClass: "",
      },
      yellow: {
        containerClass: "bg-yellow -rotate-3 hover:rotate-3",
        shadowClass: "bg-yellow/15 rotate-3",
        buttonClass: "shadow-yellow text-blue",
        outlineClass: "",
      },
    };

    const safeColourTheme = (colourTheme ?? "peach") as ColourTheme;

    return (
      <div
        ref={ref}
        className={`${theme[safeColourTheme].containerClass} group relative col-span-10 col-start-2 cursor-pointer rounded-xl p-8 text-white ${colourTheme !== "yellow" ? "sm:col-span-6" : ""} md:col-span-4 lg:col-span-3 xl:py-12`}
      >
        <FancyLink url={link?.href}>
          <div className="flex flex-col justify-center gap-6">
            <span
              className={`${theme[safeColourTheme].shadowClass} absolute top-0 left-0 z-0 inline-block h-full w-[99%] rounded-xl`}
            ></span>
            <span className="absolute top-0 left-1 z-0 inline-block h-full w-[98%] -rotate-2 rounded-xl border-2 border-dashed border-white transition-all duration-300 group-hover:rotate-1"></span>
            <div>
              <Typography variant={TypeVariant.H5} component={TypeComponent.p}>
                {subtitle}
              </Typography>

              <Typography
                variant={TypeVariant.H5}
                component={TypeComponent.p}
                classes="!font-medium"
              >
                {title}
              </Typography>
            </div>
            {link && (
              <Button
                classes={`button-shadow mr-auto ${theme[safeColourTheme].buttonClass} `}
                label={link?.label}
                iconRight={<FaCaretRight />}
              />
            )}
          </div>
        </FancyLink>
      </div>
    );
  },
);

HeroCard.displayName = "HeroCard";

export default HeroCard;
