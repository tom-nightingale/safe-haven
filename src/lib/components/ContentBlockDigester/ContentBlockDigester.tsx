import type { ContentBlocks, Maybe } from "@/gql/sanity/codegen";
import Hero from "@/components/Hero/Hero";
import SimpleHero from "@/components/SimpleHero/SimpleHero";
import CardList from "@/components/CardList/CardList";
import TextWithImage from "@/components/TextWithImage/TextWithImage";
import ReviewCards from "@/components/ReviewCards/ReviewCards";
import MeetTheTeam from "@/components/MeetTheTeam/MeetTheTeam";
import Locations from "@/components/Locations/Locations";
import Gallery from "@/components/Gallery/Gallery";
import Downloads from "@/components/Downloads/Downloads";
import GridGallery from "../GridGallery/GridGallery";
import Fees from "@/components/Fees/Fees";

type Props = {
  contentBlocks: ContentBlocks | Maybe<ContentBlocks>;
  nurseryDetails?: {
    address: Maybe<string>;
    directionsLink: Maybe<string>;
    email: Maybe<string>;
    location: Maybe<string>;
    mapsLink: Maybe<string>;
    phone: Maybe<string>;
  };
};

const ContentBlockDigester = ({ contentBlocks, nurseryDetails }: Props) => {
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

          case "SimpleHero":
            return (
              <SimpleHero
                key={idx}
                title={block?.title}
                subtitle={block?.subtitle}
                topLine={block?.topLine}
                buttons={block?.buttons}
                phoneNumber={nurseryDetails?.phone ?? null}
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

          case "Downloads":
            return <Downloads key={idx} downloads={block?.downloads} />;

          case "TextWithImage":
            return (
              <TextWithImage
                key={idx}
                scallopedTop={block?.scallopedTop}
                text={block?.textRaw}
                image={block?.image}
                links={block?.links}
                directionsLink={nurseryDetails?.directionsLink ?? null}
                phoneNumber={nurseryDetails?.phone ?? null}
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
                layout={block?.layout}
              />
            );

          case "LocationDetails":
            return <Locations key={idx} title={block?.title} />;

          case "Gallery":
            return <Gallery key={idx} images={block?.images} />;

          case "Fees":
            return (
              <Fees
                key={idx}
                fees={block?.fees}
                links={block?.links}
                title={block?.title}
                subtitle={block?.subtitle}
                scallopedTop={block?.scallopedTop}
                scallopedBottom={block?.scallopedBottom}
                reverseLayout={block?.reverseLayout}
              />
            );

          case "GridGallery":
            return (
              <GridGallery key={idx} gallerySections={block?.gallerySections} />
            );

          default:
            return null;
        }
      })}
    </>
  );
};

export default ContentBlockDigester;
