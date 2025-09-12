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
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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
  hideContactDetails = false,
}: Props) => {
  const { nurseries } = useGlobalContext();

  gsap.registerPlugin(useGSAP);
  const subnav = useRef(null);

  useGSAP(
    () => {
      if (subnav.current) {
        gsap.fromTo(
          subnav.current,
          { opacity: 0, yPercent: 10 },
          {
            opacity: 1,
            yPercent: 0,
            duration: 0.3,
            ease: "back.out(2)",
          },
        );
      }
    },
    { dependencies: [], scope: subnav },
  );

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
            <>
              <div className="mt-6">
                {buttons && buttons.length > 0 ? (
                  <>
                    {buttons.map((button: Maybe<Link>, i: number) => {
                      return (
                        <Button
                          key={i}
                          classes={"button-primary button-peach inline-block"}
                          label={button?.label}
                          href={button?.href}
                        />
                      );
                    })}
                  </>
                ) : (
                  <div className="relative">
                    <Button
                      classes={"button-primary button-peach inline-block"}
                      label="Book A Viewing"
                      href="/our-nurseries"
                    />

                    <div
                      className="absolute top-full left-1/2 z-2 -translate-x-1/2 before:absolute before:top-0 before:left-1/2 before:h-4 before:w-4 before:-translate-x-1/2 before:rotate-45 before:bg-white before:content-['']"
                      ref={subnav}
                    >
                      <div className="mt-2 flex w-max flex-col gap-3 rounded-3xl bg-white p-4 shadow-lg">
                        Hello world
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-6 mb-10 flex w-full flex-wrap items-center justify-center gap-8">
                {nurseries &&
                  nurseries.map((nursery, index) => {
                    return (
                      <div key={nursery?.slug?.current ?? index}>
                        <a
                          href={`tel:${nursery?.phoneNumber}`}
                          className="group flex flex-col items-center justify-center gap-1"
                        >
                          <span className="flex gap-2">
                            <span className="mr-1 rotate-90 text-[#7Da8A4]">
                              <FaPhone />
                            </span>
                            <span className="group-hover:text-peach font-medium transition-all duration-200">
                              {nursery?.phoneNumber}
                            </span>
                          </span>
                          <Typography
                            variant={TypeVariant.Button1}
                            component={TypeComponent.p}
                          >
                            {nursery.location ?? "Call us on"}
                          </Typography>
                        </a>
                      </div>
                    );
                  })}
              </div>
            </>
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
