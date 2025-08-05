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
import { FaPhone } from "react-icons/fa";
import WandSvg from "@/icons/wandSvg";
import StarsSvg from "@/icons/starsSvg";
import RocketSvg from "@/icons/rocketSvg";
import FramedImage from "@/components/FramedImage/FramedImage";

type Props = {
  scallopedTop?: Maybe<boolean>;
  text: TypedObject | TypedObject[];
  image: Maybe<ImageBlock>;
  links: Maybe<Maybe<Link>[]>;
};

const TextWithImageInner = ({ text, links, image }: Props) => {
  const { nurseries } = useGlobalContext();
  const nurseryPhoneNumber = nurseries && nurseries[0]?.phoneNumber;
  return (
    <div className="grid grid-cols-12 gap-8 py-10">
      <div className="block-content relative z-1 col-span-12 lg:col-span-6">
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
            <a href={`tel:${nurseryPhoneNumber}`} className="flex items-center">
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

      <div className="relative col-span-12 min-h-80 lg:col-span-6">
        <div className="sticky top-10">
          <FramedImage image={image} />
        </div>
      </div>
    </div>
  );
};

const TextWithImage = ({ scallopedTop, text, image, links }: Props) => {
  return (
    <div className="relative">
      {scallopedTop ? (
        <ScallopedTop>
          <Container>
            <TextWithImageInner text={text} links={links} image={image} />
          </Container>
        </ScallopedTop>
      ) : (
        <Container>
          <TextWithImageInner text={text} links={links} image={image} />
        </Container>
      )}

      <StarsSvg classes="absolute top-[10%] left-0 pointer-events-none opacity-50" />
      <RocketSvg classes="absolute top-0 right-[2.5%] pointer-events-none opacity-50" />
      <WandSvg classes="absolute top-[5%] left-[43%] pointer-events-none opacity-50" />
    </div>
  );
};

export default TextWithImage;
