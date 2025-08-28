import Typography, {
  TypeVariant,
  TypeComponent,
} from "@/components/Typography/Typography";
import GalleryImage from "@/components/GalleryImage/GalleryImage";
import FsLightbox from "fslightbox-react";
import { useState } from "react";
import { Maybe, ImageBlock } from "@/gql/sanity/codegen";
import Container from "@/components/Container/Container";
import ScallopedTop from "@/components/ScallopedTop/ScallopedTop";

type GallerySection = {
  _key?: string | Maybe<string>;
  title?: string | Maybe<string>;
  subtitle?: string | Maybe<string>;
  images?: Maybe<Maybe<ImageBlock>[]>;
};

type Props = {
  section: Maybe<GallerySection>;
  index?: number;
};

const GallerySectionInner = ({ section }: Props) => {
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

  const sources = section?.images?.map(
    (image: Maybe<ImageBlock>) => image?.image?.asset?.url as string,
  );

  return (
    <Container>
      <div
        key={section?._key}
        className="scroll-m-20 pb-16 text-center"
        id={section?.title?.replaceAll(" ", "").toLowerCase()}
      >
        {section?.title && (
          <Typography variant={TypeVariant.H3} component={TypeComponent.p} bold>
            {section?.title}
          </Typography>
        )}

        {section?.subtitle && (
          <Typography
            variant={TypeVariant.Button1}
            component={TypeComponent.p}
            classes="mt-3"
          >
            {section?.subtitle}
          </Typography>
        )}
        <div className="xs:grid-cols-2 mt-10 grid grid-cols-1 gap-12 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
          {section?.images?.map((image, index) => (
            <GalleryImage
              key={image?._key ?? index}
              image={image}
              index={index}
              openLightboxOnSlide={openLightboxOnSlide}
            />
          ))}
        </div>

        <FsLightbox
          toggler={lightboxController.toggler}
          sources={sources}
          slide={lightboxController.slide}
        />
      </div>
    </Container>
  );
};

const GridGallerySection = ({ section, index }: Props) => {
  return (
    <>
      {index === 0 ? (
        <GallerySectionInner section={section} />
      ) : (
        <ScallopedTop>
          <GallerySectionInner section={section} />
        </ScallopedTop>
      )}
    </>
  );
};

export default GridGallerySection;
