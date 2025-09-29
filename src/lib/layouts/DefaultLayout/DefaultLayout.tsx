import type { Page } from "@/gql/sanity/codegen";
import ContentBlockDigester from "@/components/ContentBlockDigester/ContentBlockDigester";

type Props = {
  page?: Page;
};
export const DefaultLayout = ({ page }: Props) => {
  const contentBlocks = page?.contentBlocks;

  return (
    <main>
      <ContentBlockDigester contentBlocks={contentBlocks} />
    </main>
  );
};

export default DefaultLayout;
