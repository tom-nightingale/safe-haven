import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import type { FitMode } from "@sanity/image-url/lib/types/types";
import config from "@/config/config";

const builder = imageUrlBuilder();

const urlFor = (source: string, quality: number) => {
  return builder
    .image(source)
    .dataset("production")
    .projectId(config.SANITY_PROJECT_ID)
    .quality(quality);
};

type Props = {
  sourceUrl: string;
  fit?: FitMode;
  loading?: "lazy" | "eager";
  alt?: string;
  classes?: string;
  quality?: number;
  fill?: boolean;
  priority?: boolean;
  placeholder?: "blur" | "empty";
  width?: number;
  height?: number;
};

const SanityImage = ({
  sourceUrl,
  fit = "min",
  loading = "lazy",
  alt = "",
  fill = true,
  classes = fill ? "object-cover" : "",
  quality = 100,
  priority = false,
  placeholder = "empty",
  width,
  height,
}: Props) => {
  const placeholderImage = urlFor(sourceUrl, 100)
    .width(24)
    .height(24)
    .blur(10)
    .url();
  const imageUrl = urlFor(sourceUrl, quality).fit(fit).url();

  return (
    <Image
      fill={fill}
      src={imageUrl}
      width={width ? width : undefined}
      height={height ? height : undefined}
      alt={alt}
      className={classes}
      loading={loading}
      priority={priority}
      placeholder={placeholder}
      blurDataURL={placeholder === "blur" ? placeholderImage : undefined}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
};

export default SanityImage;
