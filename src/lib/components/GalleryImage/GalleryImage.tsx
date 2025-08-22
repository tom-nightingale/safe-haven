import SanityImage from "@/components/SanityImage/SanityImage";
import { FaMapPin } from "react-icons/fa";
import Typography, {
  TypeVariant,
  TypeComponent,
} from "@/components/Typography/Typography";
import config from "@/config/config";

type Props = {
  image: any;
  index: number;
  openLightboxOnSlide: (index: number) => void;
};

const GalleryImage = ({ image, index, openLightboxOnSlide }: Props) => {
  return (
    <button
      onClick={() => openLightboxOnSlide(index + 1)}
      key={`${image?.image?.asset?.url}-${index}`}
      className={`relative aspect-square h-full w-full cursor-pointer rounded-3xl bg-white transition-all duration-200 ${index % 2 === 0 ? "-rotate-2 hover:rotate-2" : "rotate-2 hover:-rotate-2"}`}
    >
      <span className="bg-peach/40 pointer-events-none absolute top-1 -left-1 z-0 block h-full w-full rounded-3xl"></span>
      <div className="relative z-10 h-full w-full overflow-hidden rounded-3xl">
        <SanityImage
          image={image?.image}
          alt={image?.altText ?? config.COMPANY_NAME}
          loading="lazy"
          fit="fill"
          fill={true}
          objectFit="cover"
        />

        {image.label && (
          <Typography
            variant={TypeVariant.Button1}
            component={TypeComponent.p}
            classes="absolute hidden xl:flex items-center gap-1 z-10 bottom-3 left-3 !text-sm text-white"
          >
            <FaMapPin /> {image?.label ? image?.label : image?.altText}
          </Typography>
        )}
      </div>
    </button>
  );
};

export default GalleryImage;
