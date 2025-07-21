import Typography, {
  TypeVariant,
  TypeComponent,
} from "@/components/Typography/Typography";
import { FaCaretRight } from "react-icons/fa";
import Button from "@/components/Button/Button";
import type { Maybe, Link } from "@/gql/sanity/codegen";

type ColourTheme = "peach" | "blue" | "yellow";

type Props = {
  title?: string | Maybe<string>;
  subtitle?: string | Maybe<string>;
  link?: Maybe<Link>;
  colourTheme?: ColourTheme | Maybe<string>;
};
const HeroCard = ({ title, subtitle, link, colourTheme = "peach" }: Props) => {
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
      containerClass: "bg-peach -rotate-3 ",
      shadowClass: "bg-peach/15 rotate-3",
      buttonClass: "shadow-peach text-peach",
      outlineClass: "",
    },
    blue: {
      containerClass: "bg-blue rotate-3 ",
      shadowClass: "bg-blue/15 -rotate-3",
      buttonClass: "shadow-blue text-blue",
      outlineClass: "",
    },
    yellow: {
      containerClass: "bg-yellow -rotate-3",
      shadowClass: "bg-yellow/15 rotate-3",
      buttonClass: "shadow-yellow text-blue",
      outlineClass: "",
    },
  };

  const safeColourTheme = (colourTheme ?? "peach") as ColourTheme;

  return (
    <div
      className={`${theme[safeColourTheme].containerClass} relative col-span-10 col-start-2 flex flex-col justify-center gap-6 rounded-xl p-8 text-white ${colourTheme !== "yellow" ? "sm:col-span-6" : ""} md:col-span-4 lg:col-span-3 xl:py-12`}
    >
      <span
        className={`${theme[safeColourTheme].shadowClass} absolute top-0 left-0 z-0 inline-block h-full w-[99%] rounded-xl`}
      ></span>
      <span className="absolute top-0 left-1 z-0 inline-block h-full w-[98%] -rotate-2 rounded-xl border-2 border-dashed border-white"></span>
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
          classes={`button-shadow ${theme[safeColourTheme].buttonClass} `}
          label={link?.label}
          href={link?.href}
          iconRight={<FaCaretRight />}
        />
      )}
    </div>
  );
};

export default HeroCard;
