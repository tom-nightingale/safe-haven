import Typography, {
  TypeVariant,
  TypeComponent,
} from "@/components/Typography/Typography";
import { Maybe, ImageBlock, Staff } from "@/gql/sanity/codegen";
import Container from "@/components/Container/Container";
import ScallopedTop from "@/components/ScallopedTop/ScallopedTop";
import { useState } from "react";
import type { TypedObject } from "@portabletext/types";
import Card from "@/components/Card/Card";
import SanityImage from "@/components/SanityImage/SanityImage";
import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";
import BlockContent from "@/components/BlockContent/BlockContent";

type StaffSection = {
  _key?: string | Maybe<string>;
  title?: string | Maybe<string>;
  subtitle?: string | Maybe<string>;
  staff?: Maybe<Maybe<Staff>[]>;
};

type Props = {
  section: Maybe<StaffSection>;
  index?: number;
  classes?: string;
};

type ProfileContent = {
  name: string | null;
  jobTitle: string | null;
  biography: TypedObject | TypedObject[] | null;
  image: Maybe<ImageBlock>;
};

const StaffSectionInner = ({ section, classes }: Props) => {
  const buttonClasses = [
    "text-green",
    "text-lilac",
    "text-yellow",
    "text-blue",
  ];

  const bgColors = ["bg-green", "bg-lilac", "bg-yellow", "bg-blue", "bg-peach"];
  const shadowClasses = [
    "bg-green/40",
    "bg-lilac/40",
    "bg-yellow/40",
    "bg-blue/40",
    "bg-peach/40",
  ];

  const [showModal, setShowModal] = useState(false);
  const [profileContent, setProfileContent] = useState<ProfileContent>({
    name: null,
    jobTitle: null,
    biography: null,
    image: null,
  });

  const toggleModal = ({
    name,
    jobTitle,
    biography,
    image,
  }: ProfileContent): void => {
    setProfileContent({ name, jobTitle, biography, image });

    setShowModal(!showModal);
    if (!showModal) {
      document.body.classList.add("locked");
    } else {
      document.body.classList.remove("locked");
    }
  };

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
            variant={TypeVariant.Button1}
            component={TypeComponent.p}
            classes="mt-3"
          >
            {section?.subtitle}
          </Typography>
        )}
        {/* <div className="mt-10 grid grid-cols-1 gap-12 sm:grid-cols-3 md:grid-cols-4"> */}
        <div className="mt-10 flex flex-wrap justify-center gap-12">
          {section?.staff?.map((profile, i) => (
            <div
              className="w-full md:w-[calc(50%-3rem)] lg:w-[calc(33.3%-3rem)] xl:w-[calc(25%-3rem)]"
              key={profile?.name}
            >
              <Card
                image={profile?.profileImage}
                title={profile?.name}
                subtitle={profile?.jobTitle}
                buttonClass={
                  buttonClasses[i] || "button-outline-blue text-blue"
                }
                buttonStyle="icon-only"
                containerClass={bgColors[i]}
                shadowClass={shadowClasses[i]}
                imageFit="contain"
                modalContent={profile?.biographyRaw}
                toggleModal={() =>
                  toggleModal({
                    name: profile?.name || null,
                    jobTitle: profile?.jobTitle || null,
                    biography: profile?.biographyRaw || null,
                    image: profile?.profileImage ?? null,
                  })
                }
              />
            </div>
          ))}
        </div>

        {showModal &&
          createPortal(
            <div className="no-scrollbar fixed top-0 left-0 z-50 flex h-full w-full justify-center bg-black/80 p-8">
              <div className="bg-cream relative flex max-h-min w-full max-w-100 flex-col items-center gap-6 overflow-auto rounded-3xl px-8 pt-16 pb-8">
                <button
                  className="absolute top-6 right-6 cursor-pointer"
                  onClick={() =>
                    toggleModal({
                      name: null,
                      jobTitle: null,
                      biography: null,
                      image: null,
                    })
                  }
                >
                  <FaTimes />
                </button>

                <div className="border-taupe relative aspect-square min-h-40 min-w-40 overflow-hidden rounded-full border-2 bg-white p-2">
                  <SanityImage
                    image={profileContent?.image?.image}
                    alt={profileContent?.name ?? ""}
                    loading="lazy"
                    objectFit="scale-down"
                    classes="mt-2"
                  />
                </div>

                <div className="flex flex-col items-center gap-1">
                  <Typography
                    variant={TypeVariant.H4}
                    component={TypeComponent.p}
                    bold
                  >
                    {profileContent?.name}
                  </Typography>

                  <Typography
                    variant={TypeVariant.H4}
                    component={TypeComponent.p}
                  >
                    {profileContent?.jobTitle}
                  </Typography>

                  {profileContent?.biography && (
                    <div className="mt-4 text-center">
                      <BlockContent content={profileContent?.biography ?? []} />
                    </div>
                  )}
                </div>
              </div>
            </div>,
            document.body,
          )}
      </div>
    </Container>
  );
};

const GridGallerySection = ({ section, index }: Props) => {
  return (
    <>
      {index === 0 ? (
        <StaffSectionInner section={section} />
      ) : (
        <ScallopedTop>
          <StaffSectionInner section={section} classes="pt-16 xl:pt-0" />
        </ScallopedTop>
      )}
    </>
  );
};

export default GridGallerySection;
