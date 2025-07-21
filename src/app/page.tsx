import { notFound } from "next/navigation";
import createApolloClient from "@/gql/apolloClient";
import {
  GetHomepageDocument,
  type GetHomepageQuery,
} from "@/gql/sanity/codegen";
import type { Metadata } from "next";
import config from "@/config/config";
import HomeLayout from "@/layouts/HomeLayout/HomeLayout";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const client = createApolloClient(fetch);
    const { data } = await client.query<GetHomepageQuery>({
      query: GetHomepageDocument,
      variables: {
        slug: "home",
      },
    });

    const page = data.page[0];
    return {
      title: page?.seo?.metaTitle ?? config.COMPANY_NAME,
      description: page?.seo?.metaDesc ?? "",
      // keywords: page?.seo?.keywords || [config.COMPANY_NAME],
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

const GetHomepage = async (slug: string | undefined): Promise<any> => {
  try {
    const client = createApolloClient(fetch);
    const { data } = await client.query<GetHomepageQuery>({
      query: GetHomepageDocument,
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

export default async function Home() {
  const { page } = await GetHomepage("home");
  if (!page) {
    return notFound();
  }

  return (
    <>
      <HomeLayout page={Array.isArray(page) && page[0]} />
    </>
  );
}
