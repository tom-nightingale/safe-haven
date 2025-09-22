"use client";

import Typography, {
  TypeVariant,
  TypeComponent,
} from "@/components/Typography/Typography";
import Card from "@/components/Card/Card";
import Button from "@/components/Button/Button";
import type { Staff, Maybe, Link, ImageBlock } from "@/gql/sanity/codegen";
import SanityImage from "@/components/SanityImage/SanityImage";

import type { TypedObject } from "@portabletext/types";
import { PortableText } from "@portabletext/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y, Pagination } from "swiper/modules";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
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
  layout?: Maybe<string> | null;
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
  layout,
}: Props) => {
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
    <div className="mx-auto max-w-(--breakpoint-3xl) pb-12">
      <div className="flex flex-col gap-12 xl:grid xl:grid-cols-12">
        {(title || text || links) && (
          <div
            className={`flex flex-col justify-center gap-6 px-6 text-center ${layout === "stacked" ? "xl:col-span-12" : "xl:col-span-4 xl:text-left"}`}
          >
            <Typography
              variant={TypeVariant.H2}
              component={TypeComponent.p}
              bold
            >
              {title}
            </Typography>
            {text && layout !== "stacked" && (
              <Typography
                variant={TypeVariant.Body1}
                component={TypeComponent.span}
              >
                <PortableText value={text} />
              </Typography>
            )}

            {links && links.length > 0 && (
              <div className="mx-auto xl:mx-0">
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
              </div>
            )}
          </div>
        )}

        {profiles && profiles?.length > 0 && (
          <div
            className={`${layout === "stacked" ? "xl:col-span-12" : "xl:col-span-8"}`}
          >
            <Swiper
              modules={[Scrollbar, A11y, Pagination]}
              spaceBetween={20}
              slidesPerView={layout === "stacked" ? 1.2 : 1.2}
              scrollbar={layout === "stacked" ? false : { draggable: true }}
              pagination={layout === "stacked" && profiles.length > 2}
              breakpoints={{
                600: {
                  slidesPerView: 2,
                  slidesOffsetAfter: 20,
                },
                1024: {
                  slidesPerView: layout !== "stacked" ? 3.2 : 4,
                  spaceBetween: 20,
                },
              }}
              wrapperClass={`py-2 ${profiles.length < 4 ? "lg:justify-center" : ""}`}
              className="team-swiper"
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
                        buttonClasses[i % buttonClasses.length] ||
                        "button-outline-blue text-blue"
                      }
                      buttonStyle="icon-only"
                      containerClass={bgColors[i % bgColors.length]}
                      shadowClass={shadowClasses[i % shadowClasses.length]}
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
          </div>
        )}
      </div>
    </div>
  );
};

export default MeetTheTeam;
