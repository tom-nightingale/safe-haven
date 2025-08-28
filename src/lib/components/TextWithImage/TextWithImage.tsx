"use client";

import Container from "@/components/Container/Container";
import type { TypedObject } from "@portabletext/types";
import type { Link, Maybe, ImageBlock } from "@/gql/sanity/codegen";
import ScallopedTop from "@/components/ScallopedTop/ScallopedTop";
import BlockContent from "@/components/BlockContent/BlockContent";
import Button from "@/components/Button/Button";
import Typography, {
  TypeVariant,
  TypeComponent,
} from "@/components/Typography/Typography";
import { useGlobalContext } from "@/context/GlobalContext";
import { FaPhone, FaMapPin } from "react-icons/fa";
import WandSvg from "@/icons/wandSvg";
import StarsSvg from "@/icons/starsSvg";
import RocketSvg from "@/icons/rocketSvg";
import FramedImage from "@/components/FramedImage/FramedImage";

type Props = {
  scallopedTop?: Maybe<boolean>;
  text: TypedObject | TypedObject[];
  image: Maybe<ImageBlock>;
  links: Maybe<Maybe<Link>[]>;
  directionsLink?: Maybe<string>;
  phoneNumber?: Maybe<string>;
};

const TextWithImageInner = ({
  text,
  links,
  image,
  directionsLink,
  phoneNumber,
}: Props) => {
  const { nurseries } = useGlobalContext();
  const nurseryPhoneNumber = nurseries && nurseries[0]?.phoneNumber;
  return (
    <div className="grid grid-cols-12 gap-8 py-10">
      <div className="block-content relative z-1 col-span-12 lg:col-span-6">
        <BlockContent content={text} />
        {links && links.length > 0 && (
          <div
            className={`mt-10 flex flex-wrap gap-4 ${directionsLink ? "flex-col" : "flex-row"}`}
          >
            <div className="flex gap-4">
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

              {directionsLink && (
                <Button
                  key={directionsLink}
                  classes="inline-block button-primary button-green"
                  label="Get Directions"
                  href={directionsLink}
                  newTab
                  iconLeft={<FaMapPin />}
                />
              )}
            </div>

            <a
              href={`tel:${phoneNumber ?? nurseryPhoneNumber}`}
              className={`group flex items-center p-0 ${directionsLink ? "-order-2" : ""}`}
            >
              <Typography
                variant={TypeVariant.Button1}
                component={TypeComponent.span}
                classes="flex items-center gap-1"
              >
                <span className="mr-1 rotate-90 text-[#7Da8A4]">
                  <FaPhone />
                </span>
                Call us on
                <span className="group-hover:text-peach font-medium">
                  {phoneNumber ?? nurseryPhoneNumber}
                </span>
              </Typography>
            </a>
          </div>
        )}
      </div>

      <div className="relative col-span-12 min-h-80 lg:col-span-6">
        <div className="sticky top-10">
          <FramedImage image={image} />
        </div>
      </div>
    </div>
  );
};

const TextWithImage = ({
  scallopedTop,
  text,
  image,
  links,
  directionsLink,
  phoneNumber,
}: Props) => {
  return (
    <div className="relative">
      {scallopedTop ? (
        <ScallopedTop>
          <Container>
            <TextWithImageInner
              text={text}
              links={links}
              image={image}
              directionsLink={directionsLink}
              phoneNumber={phoneNumber}
            />
          </Container>
        </ScallopedTop>
      ) : (
        <Container>
          <TextWithImageInner
            text={text}
            links={links}
            image={image}
            directionsLink={directionsLink}
            phoneNumber={phoneNumber}
          />
        </Container>
      )}

      <StarsSvg classes="absolute top-[10%] left-0 pointer-events-none opacity-50" />
      <RocketSvg classes="absolute top-0 right-[2.5%] pointer-events-none opacity-50" />
      <WandSvg classes="absolute top-[5%] left-[43%] pointer-events-none opacity-50" />
    </div>
  );
};

export default TextWithImage;
