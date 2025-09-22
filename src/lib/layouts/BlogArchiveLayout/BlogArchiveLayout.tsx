// import PageWrapper from "@/components/PageWrapper/PageWrapper";
import type { Post } from "@/gql/sanity/codegen";
import SimpleHero from "@/components/SimpleHero/SimpleHero";
// import ReviewCards from "@/components/ReviewCards/ReviewCards";
import Locations from "@/components/Locations/Locations";
import Container from "@/components/Container/Container";
import CloudsVector from "@/components/CloudsVector/CloudsVector";
import FancyLink from "@/components/FancyLink/FancyLink";
import config from "@/config/config";
import SanityImage from "@/components/SanityImage/SanityImage";
import Typography, {
  TypeVariant,
  TypeComponent,
} from "@/components/Typography/Typography";
import { truncateWords } from "@/utils/truncateWords";
import { toPlainText } from "@portabletext/react";
import Button from "@/components/Button/Button";

type Props = {
  posts?: Post[];
  title?: string;
  subtitle?: string;
};
export const BlogArchiveLayout = ({ posts, title, subtitle }: Props) => {
  const shadowClasses = [
    "bg-green/40",
    "bg-lilac/40",
    "bg-yellow/40",
    "bg-blue/40",
    "bg-peach/40",
  ];

  const buttonClasses = [
    "bg-green/20",
    "bg-lilac/20",
    "bg-yellow/20",
    "bg-blue/20",
    "bg-peach/20",
  ];

  return (
    // <PageWrapper>
    // </PageWrapper>
    <main>
      <SimpleHero
        title={title ?? "Nursery News"}
        subtitle={subtitle ?? "Stay up to date with"}
        hideContactDetails={true}
      />
      <div className="relative overflow-hidden pb-20 md:pb-60">
        <CloudsVector
          fill="white"
          classes="absolute w-[200%] lg:w-[150%] 3xl:w-full top-1"
        />
        <CloudsVector
          classes="absolute top-4 w-[200%] lg:w-[150%] 3xl:w-full text-taupe"
          fillOpacity={1}
        />
        <div className="from-taupe to-cream 3xl:top-30 4xl:top-40 5xl:top-44 xs:top-20 relative top-16 z-10 w-full bg-linear-to-b pt-20 sm:top-24 md:top-30 xl:top-40">
          <Container classes="max-w-(--breakpoint-xl)">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
              {(posts || []).map((post: Post, i: number) => (
                <div className="relative h-full" key={post.title}>
                  <div
                    className={`pointer-events-none absolute -top-2 -left-2 z-0 h-full w-full rounded-3xl ${shadowClasses[i % shadowClasses.length]}`}
                  ></div>
                  <FancyLink
                    url={`/news/${post?.category?.slug?.current}/${post?.slug?.current}`}
                    key={post.title}
                  >
                    <div className="group relative z-1 h-full overflow-hidden rounded-3xl bg-white">
                      <div className="relative flex aspect-[2/1.5] items-start justify-center overflow-hidden bg-white">
                        <div
                          className={`h-full w-full transition-all duration-200 group-hover:scale-105`}
                        >
                          {post.articleImage && (
                            <SanityImage
                              image={post.articleImage?.image}
                              alt={post.title ?? config.COMPANY_NAME}
                              loading="lazy"
                              objectFit="cover"
                            />
                          )}
                        </div>
                      </div>
                      <div className="p-8">
                        <Typography
                          variant={TypeVariant.Button2}
                          component={TypeComponent.h2}
                          classes={`!text-[13px] inline-flex mb-2 rounded-full px-3 py-2 ${buttonClasses[i % buttonClasses.length]}`}
                        >
                          {post.category?.title}
                        </Typography>

                        <Typography
                          variant={TypeVariant.H4}
                          component={TypeComponent.h2}
                          bold
                          classes="mb-2"
                        >
                          {post.title}
                        </Typography>

                        <Typography
                          variant={TypeVariant.Body1}
                          component={TypeComponent.p}
                        >
                          {truncateWords(toPlainText(post?.contentRaw), 15)}
                        </Typography>

                        <Button
                          classes={
                            "button-primary button-peach inline-block mt-4"
                          }
                          label="Read more"
                        />
                      </div>
                    </div>
                  </FancyLink>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </div>
      {/* <ReviewCards /> */}
      <Locations />
    </main>
  );
};

export default BlogArchiveLayout;
