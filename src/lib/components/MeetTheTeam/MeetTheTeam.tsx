"use client";

import Typography, {
  TypeVariant,
  TypeComponent,
} from "@/components/Typography/Typography";
// import Container from "@/components/Container/Container";
import Card from "@/components/Card/Card";
import Button from "@/components/Button/Button";
import type { Staff, Maybe, Link } from "@/gql/sanity/codegen";
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

  const toggleModal = () => {
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
                        toggleModal={toggleModal}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>

              {showModal &&
                createPortal(
                  <div className="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-black/80 p-8">
                    <div className="rounded-3xl bg-white p-4">
                      <button className="cursor-pointer" onClick={toggleModal}>
                        <FaTimes />
                      </button>

                      <Typography
                        variant={TypeVariant.H4}
                        component={TypeComponent.p}
                        bold
                      >
                        Name
                      </Typography>

                      <Typography
                        variant={TypeVariant.H4}
                        component={TypeComponent.p}
                      >
                        Job title
                      </Typography>

                      <BlockContent content={[]} />
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
