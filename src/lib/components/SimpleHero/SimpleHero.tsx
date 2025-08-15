"use client";

import Typography, {
  TypeVariant,
  TypeComponent,
} from "@/components/Typography/Typography";
import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";
import { FaPhone } from "react-icons/fa";
import type { Link, Maybe } from "@/gql/sanity/codegen";
import { useGlobalContext } from "@/context/GlobalContext";
import StarsSvg from "@/icons/starsSvg";
import HorseSvg from "@/icons/horseSvg";
import DuckSvg from "@/icons/duckSvg";
import BlocksSvg from "@/icons/blocksSvg";

type Props = {
  topLine?: string | Maybe<string>;
  title: string | Maybe<string>;
  subtitle?: string | Maybe<string>;
  buttons?: Maybe<Maybe<Link>[]>;
  phoneNumber?: Maybe<string> | null;
  hideContactDetails?: boolean;
};

const Hero = ({
  topLine,
  title,
  subtitle,
  buttons,
  phoneNumber,
  hideContactDetails = false,
}: Props) => {
  const { nurseries } = useGlobalContext();
  const nurseryPhoneNumber = nurseries && nurseries[0]?.phoneNumber;

  return (
    <div className="relative">
      <Container>
        <div className="relative z-1 flex flex-col items-center justify-center gap-2 text-center">
          <Typography
            variant={TypeVariant.H3}
            component={TypeComponent.p}
            classes="text-peach mb-2"
          >
            {topLine}
          </Typography>

          <Typography variant={TypeVariant.H3} component={TypeComponent.p}>
            {subtitle}
          </Typography>

          <Typography
            variant={TypeVariant.H1}
            component={TypeComponent.h1}
            bold
          >
            {title}
          </Typography>

          {!hideContactDetails && (
            <>
              <div className="mt-6">
                {buttons && buttons.length > 0 ? (
                  <>
                    {buttons.map((button: Maybe<Link>, i: number) => {
                      return (
                        <Button
                          key={button?.label}
                          classes={"button-primary button-peach inline-block"}
                          label={button?.label}
                          href={button?.href}
                        />
                      );
                    })}
                  </>
                ) : (
                  <Button
                    classes={"button-primary button-peach inline-block"}
                    label="Book A Viewing"
                    href="/our-nurseries"
                  />
                )}
              </div>

              <a href={`tel:${nurseryPhoneNumber}`} className="mt-6 mb-10">
                <Typography
                  variant={TypeVariant.Button1}
                  component={TypeComponent.p}
                  classes="flex items-center gap-1"
                >
                  <span className="mr-1 rotate-90 text-[#7Da8A4]">
                    <FaPhone />
                  </span>
                  Call us on
                  <span className="font-medium">
                    {phoneNumber ?? nurseryPhoneNumber}
                  </span>
                </Typography>
              </a>
            </>
          )}
        </div>
      </Container>

      <StarsSvg classes="absolute top-[16%] left-[32%] pointer-events-none" />
      <DuckSvg classes="absolute top-[60%] left-0 pointer-events-none" />
      <HorseSvg classes="absolute top-[60%] left-[63%] pointer-events-none" />
      <BlocksSvg classes="absolute top-[40%] right-[2%] pointer-events-none" />
    </div>
  );
};

export default Hero;
