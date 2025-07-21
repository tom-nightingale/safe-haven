import type { ContentBlocks, Maybe } from "@/gql/sanity/codegen";
import Hero from "@/components/Hero/Hero";
import CardList from "@/components/CardList/CardList";
import TextWithImage from "@/components/TextWithImage/TextWithImage";
import ReviewCards from "@/components/ReviewCards/ReviewCards";
import MeetTheTeam from "@/components/MeetTheTeam/MeetTheTeam";
import Locations from "@/components/Locations/Locations";

type Props = {
  contentBlocks: ContentBlocks | Maybe<ContentBlocks>;
};

const ContentBlockDigester = ({ contentBlocks }: Props) => {
  const blocks = contentBlocks?.contentblocks;
  return (
    <>
      {blocks?.map((block, idx) => {
        switch (block?.__typename) {
          case "Hero":
            return (
              <Hero
                key={idx}
                title={block?.titleRaw}
                subtitle={block?.subtitleRaw}
                cards={block?.heroCards}
                buttons={block?.buttons}
                image={block?.heroImage}
              />
            );

          case "CardList":
            return (
              <CardList
                key={idx}
                title={block?.title}
                subtitle={block?.subtitle}
                cards={block?.cards}
                scallopedTop={block?.scallopedTop}
              />
            );

          case "TextWithImage":
            return (
              <TextWithImage
                key={idx}
                scallopedTop={block?.scallopedTop}
                text={block?.textRaw}
                image={block?.image}
                links={block?.links}
              />
            );

          case "ReviewsCarousel":
            return (
              <ReviewCards
                key={idx}
                title={block?.title}
                scallopedBottom={block?.scallopedBottom}
              />
            );

          case "StaffCards":
            return (
              <MeetTheTeam
                key={idx}
                title={block?.title}
                text={block?.textRaw}
                links={block?.links}
                profiles={block?.staffProfiles}
              />
            );

          case "LocationDetails":
            return (
              <Locations key={idx} title={block?.title} text={block?.textRaw} />
            );

          //   case "ImageGallery":
          //     return <ImageGalleryComponent key={idx} data={block} />;

          default:
            return null;
        }
      })}
    </>
  );
};

export default ContentBlockDigester;
