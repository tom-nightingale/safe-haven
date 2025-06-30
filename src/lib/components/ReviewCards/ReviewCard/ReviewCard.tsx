import Typography, {
  TypeVariant,
  TypeComponent,
} from "@/components/Typography/Typography";
import { FaStar } from "react-icons/fa";
import Button from "@/components/Button/Button";

type Props = {
  review: string;
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
};

const truncateWords = (str: string, wordLimit: number) => {
  return `${str.split(" ").splice(0, wordLimit).join(" ")}...`;
};

const ReviewCard = ({ review, name, rating }: Props) => {
  return (
    <div className="flex flex-col justify-center gap-2 rounded-3xl bg-white p-8 xl:px-12 xl:py-18">
      <Typography
        variant={TypeVariant.Body1}
        component={TypeComponent.p}
        classes=""
      >
        {truncateWords(review, 32)}
      </Typography>

      <Button
        label="Read more"
        onClick={() => console.log("hello world")}
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
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i}>
            <FaStar />
          </span>
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;
