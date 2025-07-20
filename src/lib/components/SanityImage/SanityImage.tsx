import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import type { FitMode } from "@sanity/image-url/lib/types/types";
import config from "@/config/config";
import {
  Maybe,
  type Image as SanityImageType,
  type SanityImageHotspot,
} from "@/gql/sanity/codegen";

const builder = imageUrlBuilder();

const urlFor = (source: string, quality: number) => {
  return builder
    .image(source)
    .dataset("production")
    .projectId(config.SANITY_PROJECT_ID)
    .quality(quality);
};

type Props = {
  image: Maybe<SanityImageType>;
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
  sizes?: string;
  objectFit?: string;
};

export function getPositionFromHotspot(
  hotspot: SanityImageHotspot | null | undefined,
) {
  if (!hotspot || !hotspot.x || !hotspot.y) return "center";
  return `${hotspot.x * 100}% ${hotspot.y * 100}%`;
}

const SanityImage = ({
  image,
  fit = "min",
  loading = "lazy",
  alt = "",
  fill = true,
  classes = fill ? "" : "",
  quality = 100,
  priority = false,
  placeholder = "blur",
  width,
  height,
  sizes,
  objectFit = "contain",
}: Props) => {
  const sourceUrl = image?.asset?.url;
  const blurData = image?.asset?.metadata?.lqip;
  const hotspotData = image?.hotspot;
  if (!sourceUrl) return <></>;
  const imageUrl = urlFor(sourceUrl, quality).fit(fit).url();

  return imageUrl ? (
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
      blurDataURL={blurData ?? undefined}
      sizes={sizes}
      objectFit={objectFit}
      objectPosition={getPositionFromHotspot(hotspotData)}
    />
  ) : (
    <></>
  );
};

export default SanityImage;
