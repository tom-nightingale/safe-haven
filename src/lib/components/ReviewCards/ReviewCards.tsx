"use client";

import Typography, {
  TypeVariant,
  TypeComponent,
} from "@/components/Typography/Typography";
import ReviewCard from "@/components/ReviewCards/ReviewCard/ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";

import { Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

type Props = {
  title: string;
  reviews: { review: string; name: string; rating: 1 | 2 | 3 | 4 | 5 }[];
};

const ReviewCards = ({ title, reviews }: Props) => {
  return (
    <div className="py-12">
      <div className="mx-auto w-full">
        <Typography variant={TypeVariant.H3} component={TypeComponent.h2}>
          {title ?? "We Come Highly Recommended"}
        </Typography>
        {reviews?.length > 0 && (
          <div className="mt-10">
            <Swiper
              modules={[Scrollbar, A11y]}
              spaceBetween={20}
              slidesPerView={1.2}
              onSlideChange={() => console.log("slide change")}
              onSwiper={swiper => console.log(swiper)}
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
              {reviews.map((review, i) => (
                <SwiperSlide key={i}>
                  <ReviewCard {...review} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewCards;
