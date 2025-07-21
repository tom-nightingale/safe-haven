"use client";

import Image from "next/image";
import Container from "@/components/Container/Container";
import type { TypedObject } from "@portabletext/types";
import type { Link, Maybe, ImageBlock } from "@/gql/sanity/codegen";
import ScallopedTop from "@/components/ScallopedTop/ScallopedTop";
import BlockContent from "@/components/BlockContent/BlockContent";
import SanityImage from "@/components/SanityImage/SanityImage";
import config from "@/config/config";
import Button from "@/components/Button/Button";
import Typography, {
  TypeVariant,
  TypeComponent,
} from "@/components/Typography/Typography";
import { useGlobalContext } from "@/context/GlobalContext";
import { FaPhone } from "react-icons/fa";

type Props = {
  scallopedTop?: Maybe<boolean>;
  text: TypedObject | TypedObject[];
  image: Maybe<ImageBlock>;
  links: Maybe<Maybe<Link>[]>;
};
const TextWithImage = ({ scallopedTop, text, image, links }: Props) => {
  const { nurseries } = useGlobalContext();
  const nurseryPhoneNumber = nurseries && nurseries[0]?.phoneNumber;
  return (
    <>
      {scallopedTop ? (
        <ScallopedTop>
          <Container>
            <div className="grid grid-cols-12 gap-8 py-20">
              <div className="block-content col-span-12 lg:col-span-6">
                <BlockContent content={text} />
              </div>
              <div className="col-span-6">Top.</div>
            </div>
          </Container>
        </ScallopedTop>
      ) : (
        <Container>
          <div className="grid grid-cols-12 gap-8 py-20">
            <div className="block-content col-span-12 lg:col-span-6">
              <BlockContent content={text} />

              {links && links.length > 0 && (
                <div className="mt-10 flex items-center gap-4">
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

                  <a
                    href={`tel:${nurseryPhoneNumber}`}
                    className="flex items-center"
                  >
                    <Typography
                      variant={TypeVariant.Button1}
                      component={TypeComponent.p}
                      classes="flex items-center gap-1"
                    >
                      <span className="mr-1 rotate-90 text-[#7Da8A4]">
                        <FaPhone />
                      </span>
                      Call us on
                      <span className="font-medium">{nurseryPhoneNumber}</span>
                    </Typography>
                  </a>
                </div>
              )}
            </div>

            <div className="relative col-span-12 min-h-80 bg-red-500/10 lg:col-span-6">
              <div className="absolute top-0 left-0 h-full w-full">
                <div className="relative h-full w-full">
                  {/* <!-- Clipped Image SVG --> */}
                  <svg
                    className="relative z-10 mx-auto h-full"
                    width="100%"
                    height="100%"
                    viewBox="0 0 400 300"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <clipPath
                        id="rectangleClip"
                        clipPathUnits="userSpaceOnUse"
                      >
                        <rect x="15%" y="17%" width="70.2%" height="66%" />
                      </clipPath>
                    </defs>
                    {/* <!-- Image with clipping applied --> */}
                    <image
                      width="100%"
                      height="100%"
                      preserveAspectRatio="xMidYMid slice"
                      href="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop"
                      clip-path="url(#rectangleClip)"
                    />
                  </svg>

                  {/* <!-- Frame/Border SVG (positioned on top) --> */}
                  <div className="pointer-events-none absolute top-0 left-0 h-full w-full -rotate-10">
                    <Image
                      fill={true}
                      objectFit="contain"
                      src="/frame.png"
                      loading="lazy"
                      quality={100}
                      alt={config.COMPANY_NAME}
                    />
                  </div>
                </div>

                {/* <SanityImage
                  image={image?.image}
                  alt={image?.altText ?? config.COMPANY_NAME}
                  loading="lazy"
                  objectFit="cover"
                /> */}
              </div>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default TextWithImage;
