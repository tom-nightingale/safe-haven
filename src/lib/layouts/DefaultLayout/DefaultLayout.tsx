import PageWrapper from "@/components/PageWrapper/PageWrapper";
import type { Page } from "@/gql/sanity/codegen";
import ContentBlockDigester from "@/components/ContentBlockDigester/ContentBlockDigester";

type Props = {
  page?: Page;
};
export const DefaultLayout = ({ page }: Props) => {
  const contentBlocks = page?.contentBlocks;

  return (
    <PageWrapper>
      <main>
        <ContentBlockDigester contentBlocks={contentBlocks} />
      </main>
    </PageWrapper>
  );
};

export default DefaultLayout;
