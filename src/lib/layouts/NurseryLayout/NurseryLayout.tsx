// import PageWrapper from "@/components/PageWrapper/PageWrapper";
import type { Nursery } from "@/gql/sanity/codegen";
import ContentBlockDigester from "@/components/ContentBlockDigester/ContentBlockDigester";

type Props = {
  page?: Nursery;
  isNurseryPage?: boolean;
};
export const NurseryLayout = ({ page }: Props) => {
  const contentBlocks = page?.contentBlocks;

  const nurseryDetails = {
    address: page?.address,
    directionsLink: page?.directionsLink,
    email: page?.email,
    location: page?.location,
    mapsLink: page?.mapsLink,
    phone: page?.phoneNumber,
    formId: page?.formId,
  };

  return (
    // <PageWrapper>
    // </PageWrapper>
    <main>
      <ContentBlockDigester
        contentBlocks={contentBlocks}
        nurseryDetails={nurseryDetails}
      />
    </main>
  );
};

export default NurseryLayout;
