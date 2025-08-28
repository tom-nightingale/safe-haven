"use client";

import Container from "@/components/Container/Container";
import Typography, {
  TypeVariant,
  TypeComponent,
} from "@/components/Typography/Typography";
import type { Banner, Link, Maybe } from "@/gql/sanity/codegen";
import { useState, useEffect, useRef, useCallback } from "react";
import { FaTimes } from "react-icons/fa";
import FancyLink from "@/components/FancyLink/FancyLink";

const BannerContainer = ({ banners }: { banners: Banner[] }) => {
  const [activeBanner, setActiveBanner] = useState(0);
  const displayTime = 12000;
  const [showBanners, setShowBanners] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (banners.length > 1 && !intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setActiveBanner(prev => (prev + 1 >= banners.length ? 0 : prev + 1));
      }, displayTime);
    }
  }, [banners.length, displayTime]);

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const closeBanner = () => {
    stopTimer();
    setActiveBanner(0);
    setShowBanners(false);
  };

  useEffect(() => {
    startTimer();

    return () => {
      stopTimer();
    };
  }, [banners.length, startTimer]);

  return (
    showBanners && (
      <div
        className="sticky top-2 z-20 mt-2"
        onMouseEnter={() => {
          stopTimer();
        }}
        onMouseLeave={() => {
          startTimer();
        }}
      >
        <Container classes="relative pt-4">
          {banners.map((banner: Banner, index: number) => (
            <div
              key={banner._id}
              className={`absolute top-0 right-6 left-6 flex items-baseline justify-center gap-4 rounded-xl px-4 py-2 text-center transition-opacity duration-500 ease-in-out ${
                Number(index) === Number(activeBanner)
                  ? "z-20 opacity-100"
                  : "z-0 opacity-0"
              } ${banner?.darkTextTheme ? "text-dark-green" : "text-white"}`}
              style={{
                backgroundColor:
                  banner?.backgroundColour?.value?.toString() ?? "",
              }}
            >
              <Typography
                variant={TypeVariant.Body2}
                component={TypeComponent.p}
                bold
              >
                {banner.content}
              </Typography>

              {banner.links && banner?.links.length > 0 && (
                <div className="flex gap-2">
                  {banner.links.map((link: Maybe<Link>) => (
                    <FancyLink url={link?.href} key={link?._key}>
                      <Typography
                        variant={TypeVariant.Button2}
                        component={TypeComponent.p}
                        classes="!leading-none hover:underline underline-offset-4 decoration-from-font"
                      >
                        {link?.label}
                      </Typography>
                    </FancyLink>
                  ))}
                </div>
              )}

              <button
                className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-white"
                onClick={closeBanner}
              >
                <FaTimes />
              </button>
            </div>
          ))}
        </Container>
      </div>
    )
  );
};

export default BannerContainer;
