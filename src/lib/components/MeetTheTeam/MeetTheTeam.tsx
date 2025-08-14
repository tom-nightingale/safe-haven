"use client";

import Typography, {
  TypeVariant,
  TypeComponent,
} from "@/components/Typography/Typography";
// import Container from "@/components/Container/Container";
import Card from "@/components/Card/Card";
import Button from "@/components/Button/Button";
import type { Staff, Maybe, Link, ImageBlock } from "@/gql/sanity/codegen";
import SanityImage from "@/components/SanityImage/SanityImage";

import type { TypedObject } from "@portabletext/types";
import { PortableText } from "@portabletext/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y } from "swiper/modules";
import "swiper/css/scrollbar";
import "swiper/css";
import { useState } from "react";
import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";
import BlockContent from "@/components/BlockContent/BlockContent";

type Props = {
  title?: Maybe<string>;
  text?: TypedObject | TypedObject[];
  links?: Maybe<Maybe<Link>[]>;
  profiles?: Maybe<Maybe<Staff>[]> | undefined | null;
};

type ProfileContent = {
  name: string | null;
  jobTitle: string | null;
  biography: TypedObject | TypedObject[] | null;
  image: Maybe<ImageBlock>;
};

const MeetTheTeam = ({
  title = "Meet The Team",
  text,
  links,
  profiles,
}: Props) => {
  const buttonClasses = [
    "text-green",
    "text-lilac",
    "text-yellow",
    "text-blue",
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
    console.log(name, jobTitle, image);

    setProfileContent({ name, jobTitle, biography, image });

    setShowModal(!showModal);
    if (!showModal) {
      document.body.classList.add("locked");
    } else {
      document.body.classList.remove("locked");
    }
  };

  return (
    <div className="mx-auto max-w-(--breakpoint-3xl)">
      <div className="grid grid-cols-1 gap-10 py-10 md:grid-cols-12 md:gap-10">
        {(title || text || links) && (
          <div className="col-span-12 flex flex-col justify-center gap-6 px-6 text-center xl:col-span-4 xl:text-left">
            <Typography
              variant={TypeVariant.H3}
              component={TypeComponent.p}
              bold
            >
              {title}
            </Typography>

            {text && (
              <Typography
                variant={TypeVariant.Body1}
                component={TypeComponent.span}
              >
                <PortableText value={text} />
              </Typography>
            )}

            <div className="mx-auto xl:mx-0">
              {links && links.length > 0 && (
                <>
                  {links.map(link => {
                    return (
                      <Button
                        key={link?.label}
                        classes="inline-block button-primary button-peach"
                        label={link?.label}
                        href={link?.href}
                      />
                    );
                  })}
                </>
              )}
            </div>
          </div>
        )}
        <div className="relative col-span-12 gap-6 pl-6 xl:col-span-8">
          {profiles && profiles?.length > 0 && (
            <>
              <Swiper
                modules={[Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={1.2}
                scrollbar={{ draggable: true }}
                breakpoints={{
                  600: {
                    slidesPerView: 2.2,
                  },
                  1024: {
                    slidesPerView: 3.2,
                    slidesOffsetAfter: 0,
                  },
                }}
                wrapperClass="p-2"
                slidesOffsetAfter={36}
              >
                {profiles?.map((profile, i) => {
                  return (
                    <SwiperSlide
                      key={`${profile?.name}-${i}`}
                      className="!h-auto"
                    >
                      <Card
                        image={profile?.profileImage}
                        title={profile?.name}
                        subtitle={profile?.jobTitle}
                        buttonClass={
                          buttonClasses[i] || "button-outline-blue text-blue"
                        }
                        buttonStyle="icon-only"
                        containerClass={
                          i === 0
                            ? "bg-green"
                            : i === 1
                              ? "bg-lilac"
                              : "bg-yellow"
                        }
                        shadowClass={
                          i === 0
                            ? "bg-green/10"
                            : i === 1
                              ? "bg-lilac/10"
                              : "bg-yellow/10"
                        }
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
                    </SwiperSlide>
                  );
                })}
              </Swiper>

              {showModal &&
                createPortal(
                  <div className="fixed top-0 left-0 z-50 flex h-full w-full justify-center bg-black/80 p-8">
                    <div className="bg-cream relative flex max-h-min w-full max-w-100 flex-col items-center gap-6 overflow-scroll rounded-3xl px-8 pt-16 pb-8">
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
                            <BlockContent
                              content={profileContent?.biography ?? []}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>,
                  document.body,
                )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
