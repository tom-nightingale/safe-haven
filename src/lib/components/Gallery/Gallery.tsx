"use client";

// import Container from "@/components/Container/Container";
import type { Maybe, ImageBlock } from "@/gql/sanity/codegen";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";
import "swiper/css";
import GalleryImage from "@/components/GalleryImage/GalleryImage";

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
        <div className="py-8">
          {/* <Container> */}
          <Swiper
            modules={[A11y]}
            slidesOffsetBefore={20}
            slidesOffsetAfter={40}
            spaceBetween={20}
            slidesPerView={2.4}
            breakpoints={{
              600: {
                slidesPerView: 3.5,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4.2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4.2,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 5.05,
                spaceBetween: 30,
              },
            }}
            wrapperClass="py-2 px-2"
          >
            {images.map((image: Maybe<ImageBlock>, index: number) => {
              return (
                <SwiperSlide key={`${image?.image?.asset?.url}-${index}`}>
                  <GalleryImage
                    image={image}
                    index={index}
                    openLightboxOnSlide={openLightboxOnSlide}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
          {/* </Container> */}

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
