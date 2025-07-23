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
import RabbitSvg from "@/icons/rabbitSvg";
import TrainSvg from "@/icons/trainSvg";

type Props = {
  title?: string | Maybe<string>;
  reviews?: { review: string; name: string; rating: 1 | 2 | 3 | 4 | 5 }[];
  scallopedBottom?: Maybe<boolean>;
};

const ReviewCards = ({ title, scallopedBottom }: Props) => {
  const { reviews } = useGlobalContext();

  return (
    <div className="relative">
      {scallopedBottom ? (
        <>
          <ScallopedBottom>
            <Container>
              <div className="relative z-1 mx-auto w-full py-12">
                <Typography
                  variant={TypeVariant.H3}
                  component={TypeComponent.h2}
                  bold
                >
                  {title}
                </Typography>
                {reviews && reviews?.length > 0 && (
                  <div className="relative mt-10">
                    {/* <div className="from-taupe via-taupe absolute top-0 right-0 z-10 h-[95%] w-1/12 bg-gradient-to-l to-transparent"></div> */}
                    <Swiper
                      modules={[Scrollbar, A11y]}
                      spaceBetween={20}
                      slidesPerView={1.2}
                      scrollbar={{ draggable: true }}
                      slidesOffsetAfter={32}
                      breakpoints={{
                        600: {
                          slidesPerView: 2.2,
                        },
                        1024: {
                          slidesPerView: 3.2,
                          spaceBetween: 30,
                        },
                        1600: {
                          slidesPerView: 4,
                        },
                      }}
                      onReachEnd={() => {
                        console.log("end");
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

                <RabbitSvg classes="absolute top-[0%] right-[5%] pointer-events-none" />
                <TrainSvg classes="absolute top-10 left-1/2 -translate-x-1/2 pointer-events-none" />
              </div>
            </Container>
          </ScallopedBottom>
        </>
      ) : (
        <Container>
          <div className="relative z-1 mx-auto w-full py-12">
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

            <RabbitSvg classes="absolute top-[0%] right-[5%] pointer-events-none" />
            <TrainSvg classes="absolute top-10 left-1/2 -translate-x-1/2 pointer-events-none" />
          </div>
        </Container>
      )}
    </div>
  );
};

export default ReviewCards;
