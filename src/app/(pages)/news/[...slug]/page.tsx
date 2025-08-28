import { notFound } from "next/navigation";
import createApolloClient from "@/gql/apolloClient";
import {
  GetPostBySlugDocument,
  GetCategoryBySlugDocument,
  GetPostsByCategoryDocument,
  type GetPostBySlugQuery,
  type GetCategoryBySlugQuery,
  type GetPostsByCategoryQuery,
} from "@/gql/sanity/codegen";
import BlogArchiveLayout from "@/layouts/BlogArchiveLayout/BlogArchiveLayout";
import BlogSingleLayout from "@/layouts/BlogSingleLayout/BlogSingleLayout";
import config from "@/config/config";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

const GetSingularBlogPost = async (slug: string | undefined): Promise<any> => {
  try {
    const client = createApolloClient(fetch);
    const { data } = await client.query<GetPostBySlugQuery>({
      query: GetPostBySlugDocument,
      variables: {
        slug: slug,
      },
    });
    return data;
  } catch (err) {
    console.log("err", err);
    return notFound();
  }
};

const GetCategory = async (slug: string | undefined): Promise<any> => {
  try {
    const client = createApolloClient(fetch);
    const { data } = await client.query<GetCategoryBySlugQuery>({
      query: GetCategoryBySlugDocument,
      variables: {
        slug: slug,
      },
    });
    return data;
  } catch (err) {
    console.log("err", err);
    return notFound();
  }
};

const PostsByCategory = async (slug: string | undefined): Promise<any> => {
  try {
    const client = createApolloClient(fetch);
    const { data } = await client.query<GetPostsByCategoryQuery>({
      query: GetPostsByCategoryDocument,
      variables: {
        slug: slug,
      },
    });
    return data;
  } catch (err) {
    console.log("err", err);
    return notFound();
  }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { slug } = await params;

  const { allPost } = await GetSingularBlogPost(slug.at(-1));
  const { allCategory } = await GetCategory(slug.at(-1));
  if (allPost.length < 1 && allCategory.length < 0) {
    return notFound();
  }

  const page = allPost[0] ? allPost[0] : allCategory[0];

  return {
    title: `${page?.seo?.metaTitle ? page?.seo?.metaTitle : page?.title} | ${config.COMPANY_NAME}`,
    description:
      page?.seo?.metaDesc ??
      "Safe Haven Day Nursery | Mansfield Woodhouse &amp; South Normanton",
    // keywords: page?.seo?.keywords || [config.COMPANY_NAME],
    openGraph: {
      title: page?.seo?.metaTitle ?? config.COMPANY_NAME,
      description: page?.seo?.metaDesc ?? "",
      siteName: page?.seo?.metaTitle ?? config.COMPANY_NAME,
      images: [],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { allPost } = await GetSingularBlogPost(slug.at(-1));
  const { allCategory } = await GetCategory(slug.at(-1));

  if (!allPost[0] && !allCategory[0]) {
    return notFound();
  }

  const data = allPost[0] ? allPost[0] : allCategory[0];
  const type = allPost[0] ? "Post" : "Category";

  let posts = [];
  let post = null;
  if (type === "Category") {
    posts = await PostsByCategory(slug.at(-1));
  }
  if (type === "Post") {
    const data = await GetSingularBlogPost(slug.at(-1));
    post = data.allPost[0];
  }
  return (
    <>
      {type === "Category" && posts.allPost.length > 0 && (
        <BlogArchiveLayout
          title={data?.title}
          subtitle="News and updates from"
          posts={posts.allPost || []}
        />
      )}

      {type === "Post" && post !== null && (
        <BlogSingleLayout title={post.title} post={post} />
      )}
    </>
  );
}
