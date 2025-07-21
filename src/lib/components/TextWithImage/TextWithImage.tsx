import Container from "@/components/Container/Container";
import { PortableText } from "@portabletext/react";
import type { TypedObject } from "@portabletext/types";
import type { Link, Maybe, ImageBlock } from "@/gql/sanity/codegen";
import ScallopedTop from "@/components/ScallopedTop/ScallopedTop";

type Props = {
  scallopedTop?: Maybe<boolean>;
  text: TypedObject | TypedObject[];
  image: Maybe<ImageBlock>;
  links: Maybe<Maybe<Link>[]>;
};
const TextWithImage = ({ scallopedTop, text, image, links }: Props) => {
  return (
    <>
      {scallopedTop ? (
        <ScallopedTop>
          <Container>
            <PortableText value={text} />
          </Container>
        </ScallopedTop>
      ) : (
        <>
          <Container>
            <PortableText value={text} />
          </Container>
        </>
      )}
    </>
  );
};

export default TextWithImage;
