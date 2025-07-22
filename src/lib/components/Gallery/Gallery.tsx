"use client";

import Container from "@/components/Container/Container";
import type { Maybe, ImageBlock } from "@/gql/sanity/codegen";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import SanityImage from "@/components/SanityImage/SanityImage";
import config from "@/config/config";

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

  const tiltClasses = [
    "-rotate-2",
    "rotate-2",
    "-rotate-2",
    "rotate-2",
    "-rotate-2",
  ];

  const hoverClasses = [
    "hover:rotate-2",
    "hover:-rotate-2",
    "hover:rotate-2",
    "hover:-rotate-2",
    "hover:rotate-2",
  ];

  return (
    <>
      {images && images.length > 0 && (
        <>
          <Container>
            <div className="grid grid-cols-4 gap-12 py-10 md:grid-cols-10 md:py-20">
              {images
                .slice(0, 5)
                .map((image: Maybe<ImageBlock>, index: number) => {
                  return (
                    <button
                      onClick={() => openLightboxOnSlide(index + 1)}
                      key={`${image?.image?.asset?.url}-${index}`}
                      className={`relative col-span-2 aspect-square cursor-pointer rounded-3xl ${index === 4 ? "col-start-2 md:col-start-auto" : ""} bg-white transition-all duration-200 ${tiltClasses[index]} ${hoverClasses[index]}`}
                    >
                      <span className="bg-peach/3 pointer-events0none absolute top-1 -left-1 z-0 block h-full w-full rounded-3xl"></span>
                      <div className="relative block aspect-square h-full w-full rounded-3xl bg-white">
                        <SanityImage
                          image={image?.image}
                          alt={
                            image?.image?.asset?.altText ?? config.COMPANY_NAME
                          }
                          loading="lazy"
                        />
                      </div>
                    </button>
                  );
                })}
            </div>
          </Container>

          <FsLightbox
            toggler={lightboxController.toggler}
            sources={sources}
            slide={lightboxController.slide}
          />
        </>
      )}
    </>
  );
};

export default Gallery;
