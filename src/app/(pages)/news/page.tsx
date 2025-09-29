import { notFound } from "next/navigation";
import createApolloClient from "@/gql/apolloClient";
import {
  GetAllPostsDocument,
  type GetAllPostsQuery,
} from "@/gql/sanity/codegen";
import BlogArchiveLayout from "@/layouts/BlogArchiveLayout/BlogArchiveLayout";
import {
  GetPageBySlugDocument,
  type GetPageBySlugQuery,
} from "@/gql/sanity/codegen";
import type { Metadata } from "next";
import config from "@/config/config";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const client = createApolloClient(fetch);
    const { data } = await client.query<GetPageBySlugQuery>({
      query: GetPageBySlugDocument,
      variables: {
        slug: "news",
      },
    });

    const page = data.page[0];

    return {
      title: `${page?.seo?.metaTitle ? page?.seo?.metaTitle : page?.title} | ${config.COMPANY_NAME}`,
      description: page?.seo?.metaDesc ?? "",
      keywords: page?.seo?.keywords?.filter(
        (kw): kw is string => typeof kw === "string" && !!kw,
      ) || [config.COMPANY_NAME],
      openGraph: {
        title: page?.seo?.metaTitle ?? config.COMPANY_NAME,
        description: page?.seo?.metaDesc ?? "",
        siteName: page?.seo?.metaTitle ?? config.COMPANY_NAME,
        images: [],
      },
    };
  } catch (err) {
    console.log("err", err);
    return notFound();
  }
}

const GetBlogPosts = async (): Promise<any> => {
  try {
    const client = createApolloClient(fetch);
    const { data } = await client.query<GetAllPostsQuery>({
      query: GetAllPostsDocument,
      variables: {
        sort: [{ _createdAt: "ASC" }],
      },
      context: {
        fetchOptions: {
          next: { revalidate: 5 },
        },
      },
    });
    return data;
  } catch (err) {
    console.log("err", err);
  }
};

export default async function Page() {
  const data = await GetBlogPosts();

  return <BlogArchiveLayout posts={data?.allPost || []} />;
}
