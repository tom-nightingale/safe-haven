"use client";

import Typography, {
  TypeVariant,
  TypeComponent,
} from "@/components/Typography/Typography";
import ReviewCard from "@/components/ReviewCards/ReviewCard/ReviewCard";
import { useGlobalContext } from "@/context/GlobalContext";
// import ScallopedTop from "@/components/ScallopedTop/ScallopedTop";
import ScallopedBottom from "@/components/ScallopedBottom/ScallopedBottom";
import type { Maybe } from "@/gql/sanity/codegen";
import Container from "@/components/Container/Container";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

type Props = {
  title?: string | Maybe<string>;
  reviews?: { review: string; name: string; rating: 1 | 2 | 3 | 4 | 5 }[];
  // scallopedTop?: Maybe<boolean>;
  scallopedBottom?: Maybe<boolean>;
};

const ReviewCards = ({ title, scallopedBottom }: Props) => {
  const { reviews } = useGlobalContext();

  return (
    <>
      {scallopedBottom ? (
        <>
          <ScallopedBottom>
            <Container>
              <div className="mx-auto w-full py-12">
                <Typography
                  variant={TypeVariant.H3}
                  component={TypeComponent.h2}
                  bold
                >
                  {title}
                </Typography>
                {reviews && reviews?.length > 0 && (
                  <div className="mt-10">
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
                          spaceBetween: 30,
                        },
                        1280: {
                          slidesPerView: 4,
                        },
                      }}
                    >
                      {reviews.map(review => (
                        <SwiperSlide key={review.name} className="!h-auto">
                          <ReviewCard
                            name={review.name}
                            rating={review.starRating}
                            review={review.contentRaw}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                )}
              </div>
            </Container>
          </ScallopedBottom>
        </>
      ) : (
        <Container>
          <div className="mx-auto w-full py-12">
            <Typography
              variant={TypeVariant.H3}
              component={TypeComponent.h2}
              bold
            >
              {title}
            </Typography>
            {reviews && reviews?.length > 0 && (
              <div className="mt-10">
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
                      spaceBetween: 30,
                    },
                    1280: {
                      slidesPerView: 4,
                    },
                  }}
                >
                  {reviews.map(review => (
                    <SwiperSlide key={review.name} className="!h-auto">
                      <ReviewCard
                        name={review.name}
                        rating={review.starRating}
                        review={review.contentRaw}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
          </div>
        </Container>
      )}
    </>
  );
};

export default ReviewCards;
