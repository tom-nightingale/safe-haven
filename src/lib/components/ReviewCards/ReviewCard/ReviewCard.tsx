import Typography, {
  TypeVariant,
  TypeComponent,
} from "@/components/Typography/Typography";
import { FaStar } from "react-icons/fa";
import Button from "@/components/Button/Button";
import { Maybe } from "@/gql/sanity/codegen";
import { toPlainText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { truncateWords } from "@/utils/truncateWords";
import { useState } from "react";
import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";

type Props = {
  review: PortableTextBlock[]; // or the correct type expected by toPlainText
  name: string | Maybe<string>;
  rating: 1 | 2 | 3 | 4 | 5 | Maybe<number>;
};

type ModalContent = {
  name: string | Maybe<string> | null;
  review: string | Maybe<string> | null;
};
const ReviewCard = ({ review, name, rating }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [_, setReviewModal] = useState<ModalContent>({
    name: null,
    review: null,
  });

  const toggleModal = ({ name, review }: ModalContent): void => {
    setReviewModal({ name, review });
    setShowModal(!showModal);
    if (!showModal) {
      document.body.classList.add("locked");
    } else {
      document.body.classList.remove("locked");
    }
  };

  return (
    <>
      <div className="flex h-full flex-col justify-center gap-2 rounded-3xl bg-white p-8 xl:px-12 xl:py-18">
        <Typography
          variant={TypeVariant.Body1}
          component={TypeComponent.p}
          classes=""
        >
          {truncateWords(toPlainText(review), 25)}
        </Typography>

        <Button
          label="Read more"
          onClick={() => toggleModal({ name, review: toPlainText(review) })}
          classes="!font-semibold text-peach hover:text-dark-peach text-left !font-sans transition-all duration-200 !justify-start m-0"
          variant={TypeVariant.Body1}
        />

        <Typography
          variant={TypeVariant.Button1}
          component={TypeComponent.p}
          classes="!font-medium text-dark-green"
        >
          {name}
        </Typography>
        <div className="text-yellow flex items-center gap-1">
          {Array.from({ length: Number(rating) }).map((_, i) => (
            <span key={i}>
              <FaStar />
            </span>
          ))}
        </div>
      </div>

      {showModal &&
        createPortal(
          <div className="fixed top-0 left-0 z-50 flex h-full w-full justify-center bg-black/80 p-8">
            <div className="bg-cream relative flex max-h-min w-full max-w-130 flex-col items-center gap-6 overflow-scroll rounded-3xl p-12">
              <button
                className="absolute top-6 right-6 cursor-pointer"
                onClick={() =>
                  toggleModal({
                    name: null,
                    review: null,
                  })
                }
              >
                <FaTimes />
              </button>

              <div className="flex flex-col gap-4">
                <Typography
                  variant={TypeVariant.H3}
                  component={TypeComponent.p}
                  classes="!font-medium text-dark-green"
                >
                  {name}
                </Typography>
                <div className="text-yellow flex items-center gap-1">
                  {Array.from({ length: Number(rating) }).map((_, i) => (
                    <span key={i}>
                      <FaStar />
                    </span>
                  ))}
                </div>

                <Typography
                  variant={TypeVariant.Body1}
                  component={TypeComponent.p}
                  classes="text-pretty"
                >
                  {toPlainText(review)}
                </Typography>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};

export default ReviewCard;
