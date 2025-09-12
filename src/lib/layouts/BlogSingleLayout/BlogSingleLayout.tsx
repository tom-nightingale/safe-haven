"use client";

import PageWrapper from "@/components/PageWrapper/PageWrapper";
import type { Post } from "@/gql/sanity/codegen";
import SimpleHero from "@/components/SimpleHero/SimpleHero";
import ReviewCards from "@/components/ReviewCards/ReviewCards";
import Locations from "@/components/Locations/Locations";
import Container from "@/components/Container/Container";
import CloudsVector from "@/components/CloudsVector/CloudsVector";
import BlockContent from "@/components/BlockContent/BlockContent";

type Props = {
  post: Post;
  title?: string;
  subtitle?: string;
};
export const BlogArchiveLayout = ({ post, title }: Props) => {
  return (
    // <PageWrapper>
    <main>
      <SimpleHero title={title ?? "Nursery news"} hideContactDetails={true} />

      <div className="relative overflow-hidden pb-20 md:pb-40">
        <CloudsVector
          fill="white"
          classes="absolute w-[200%] lg:w-[150%] 3xl:w-full top-1"
        />
        <CloudsVector
          classes="absolute top-4 w-[200%] lg:w-[150%] 3xl:w-full text-taupe"
          fillOpacity={1}
        />
        <div className="from-taupe to-cream 3xl:top-30 4xl:top-40 5xl:top-44 xs:top-20 relative top-16 z-10 w-full bg-linear-to-b pt-20 sm:top-24 md:top-30 xl:top-40">
          <Container classes="max-w-(--breakpoint-md) block-content">
            <BlockContent content={post?.contentRaw} />
          </Container>
        </div>
      </div>
      <Locations />
    </main>
    // </PageWrapper>
  );
};

export default BlogArchiveLayout;
