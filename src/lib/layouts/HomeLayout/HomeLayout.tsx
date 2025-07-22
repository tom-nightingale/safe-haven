import PageWrapper from "@/components/PageWrapper/PageWrapper";
import type { Staff, Page } from "@/gql/sanity/codegen";
import ContentBlockDigester from "@/components/ContentBlockDigester/ContentBlockDigester";

type Props = {
  staff?: Staff[];
  page?: Page;
};
export const HomeLayout = ({ page }: Props) => {
  const contentBlocks = page?.contentBlocks;

  return (
    <PageWrapper>
      <main className="">
        <ContentBlockDigester contentBlocks={contentBlocks} />
      </main>
    </PageWrapper>
  );
};

export default HomeLayout;
