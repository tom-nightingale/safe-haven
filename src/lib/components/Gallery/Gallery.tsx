"use client";

import Container from "@/components/Container/Container";
import type { Maybe, ImageBlock } from "@/gql/sanity/codegen";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import SanityImage from "@/components/SanityImage/SanityImage";
import config from "@/config/config";
import Typography, {
  TypeVariant,
  TypeComponent,
} from "@/components/Typography/Typography";
import { FaMapPin } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";
import "swiper/css";

type Props = {
  images?: Maybe<Maybe<ImageBlock>[]>;
};

const Gallery = ({ images }: Props) => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  function openLightboxOnSlide(number: number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  const sources = images?.map(
    (image: Maybe<ImageBlock>) => image?.image?.asset?.url as string,
  );

  return (
    <>
      {images && images.length > 0 && (
        <div className="py-8 lg:py-20">
          <Container>
            <Swiper
              modules={[A11y]}
              spaceBetween={20}
              slidesPerView={2.4}
              breakpoints={{
                600: {
                  slidesPerView: 3.5,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 4.2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4.2,
                  spaceBetween: 30,
                },
                1280: {
                  slidesPerView: 5,
                  spaceBetween: 30,
                },
              }}
              wrapperClass="py-2"
            >
              {images.map((image: Maybe<ImageBlock>, index: number) => {
                return (
                  <SwiperSlide key={`${image?.image?.asset?.url}-${index}`}>
                    <button
                      onClick={() => openLightboxOnSlide(index + 1)}
                      key={`${image?.image?.asset?.url}-${index}`}
                      className={`relative aspect-square h-full w-full cursor-pointer rounded-3xl bg-white transition-all duration-200 ${index % 2 === 0 ? "-rotate-2 hover:rotate-2" : "rotate-2 hover:-rotate-2"}`}
                    >
                      <span className="bg-peach/10 pointer-events-none absolute top-1 -left-1 z-0 block h-full w-full rounded-3xl"></span>
                      <div className="relative z-10 h-full w-full overflow-hidden rounded-3xl">
                        <SanityImage
                          image={image?.image}
                          alt={image?.altText ?? config.COMPANY_NAME}
                          loading="lazy"
                          fit="fill"
                          fill={true}
                          objectFit="cover"
                        />

                        <Typography
                          variant={TypeVariant.Button1}
                          component={TypeComponent.p}
                          classes="absolute hidden xl:flex items-center gap-1 z-10 bottom-3 left-3 !text-sm text-white"
                        >
                          <FaMapPin />{" "}
                          {image?.label ? image?.label : image?.altText}
                        </Typography>
                      </div>
                    </button>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Container>

          <FsLightbox
            toggler={lightboxController.toggler}
            sources={sources}
            slide={lightboxController.slide}
          />
        </div>
      )}
    </>
  );
};

export default Gallery;
