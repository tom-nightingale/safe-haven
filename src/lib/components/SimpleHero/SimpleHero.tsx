"use client";

import Typography, {
  TypeVariant,
  TypeComponent,
} from "@/components/Typography/Typography";
import Container from "@/components/Container/Container";
import type { Maybe } from "@/gql/sanity/codegen";
import StarsSvg from "@/icons/starsSvg";
import HorseSvg from "@/icons/horseSvg";
import DuckSvg from "@/icons/duckSvg";
import BlocksSvg from "@/icons/blocksSvg";
import NurserySelectButton from "@/components/NurserySelectButton/ NurserySelectButton";
import Button from "@/components/Button/Button";

type Props = {
  topLine?: string | Maybe<string>;
  title: string | Maybe<string>;
  subtitle?: string | Maybe<string>;
  phoneNumber?: Maybe<string> | null;
  hideContactDetails?: boolean;
  isNurseryPage?: boolean;
};

const Hero = ({
  topLine,
  title,
  subtitle,
  hideContactDetails = false,
  isNurseryPage = false,
}: Props) => {
  return (
    <div className="relative">
      <Container classes="!max-w-(--breakpoint-xl)">
        <div className="relative z-1 flex flex-col items-center justify-center gap-2 text-center">
          <Typography
            variant={TypeVariant.H3}
            component={TypeComponent.p}
            classes="text-peach mb-2"
          >
            {topLine}
          </Typography>

          {subtitle && (
            <Typography variant={TypeVariant.H3} component={TypeComponent.p}>
              {subtitle}
            </Typography>
          )}

          <Typography
            variant={TypeVariant.H1}
            component={TypeComponent.h1}
            bold
          >
            {title}
          </Typography>

          {!hideContactDetails && (
            <div className="mt-6 mb-10">
              {isNurseryPage ? (
                <Button
                  label="Book A Viewing"
                  href="#locationDetails"
                  classes="button button-primary button-peach"
                />
              ) : (
                <NurserySelectButton />
              )}
            </div>
          )}
        </div>
      </Container>

      <StarsSvg classes="absolute top-[16%] left-[32%] w-[20vw] pointer-events-none" />
      <DuckSvg classes="absolute top-[60%] left-0 w-[20vw] pointer-events-none" />
      <HorseSvg classes="absolute top-[60%] left-[63%] w-[20vw] pointer-events-none" />
      <BlocksSvg classes="absolute top-[20%] right-[0%] w-[20vw] pointer-events-none" />
    </div>
  );
};

export default Hero;
