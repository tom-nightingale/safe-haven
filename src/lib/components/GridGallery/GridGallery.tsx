"use client";

import { Maybe, GallerySection } from "@/gql/sanity/codegen";
import Container from "@/components/Container/Container";
import Button from "@/components/Button/Button";
import GridGallerySection from "@/components/GridGallery/GridGallerySection/GridGallerySection";
import CloudsVector from "@/components/CloudsVector/CloudsVector";

type Props = {
  gallerySections: Maybe<Maybe<GallerySection>[]>;
};

const GridGallery = ({ gallerySections }: Props) => {
  return (
    <>
      <div className="relative overflow-hidden pb-20 md:pb-40">
        <CloudsVector
          fill="white"
          classes="absolute w-[200%] lg:w-[150%] 3xl:w-full top-1"
        />
        <CloudsVector
          classes="absolute top-4 w-[200%] lg:w-[150%] 3xl:w-full text-taupe"
          fillOpacity={1}
        />
        <div className="from-taupe to-cream 3xl:top-30 4xl:top-40 5xl:top-44 xs:top-20 relative top-16 z-10 w-full bg-linear-to-b sm:top-24 md:top-30 xl:top-40">
          <Container>
            <div className="flex items-center justify-center gap-4 py-12 pb-16">
              {gallerySections?.map((section, index) => {
                return (
                  <Button
                    key={index}
                    label={section?.title}
                    classes="button-primary button-blue"
                    href={`#${section?.title?.replaceAll(" ", "").toLowerCase() as string}`}
                  />
                );
              })}
            </div>
          </Container>
        </div>
      </div>
      {gallerySections?.map((section, index) => (
        <GridGallerySection
          key={section?._key}
          section={section}
          index={index}
        />
      ))}
    </>
  );
};

export default GridGallery;
