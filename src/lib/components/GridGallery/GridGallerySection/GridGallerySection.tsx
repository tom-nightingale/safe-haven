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
  classes?: string;
};

const GallerySectionInner = ({ section, classes }: Props) => {
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
        className={`scroll-m-20 pb-16 text-center ${classes}`}
        id={section?.title?.replaceAll(" ", "").toLowerCase()}
      >
        {section?.title && (
          <Typography variant={TypeVariant.H2} component={TypeComponent.p} bold>
            {section?.title}
          </Typography>
        )}

        {section?.subtitle && (
          <Typography
            variant={TypeVariant.H4}
            component={TypeComponent.p}
            classes="mt-3"
          >
            {section?.subtitle}
          </Typography>
        )}
        <div className="mt-10 grid grid-cols-2 gap-12 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
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
          <GallerySectionInner section={section} classes="pt-16 xl:pt-0" />
        </ScallopedTop>
      )}
    </>
  );
};

export default GridGallerySection;
