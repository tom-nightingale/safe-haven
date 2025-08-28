import { notFound } from "next/navigation";
import createApolloClient from "@/gql/apolloClient";
import {
  GetPageBySlugDocument,
  type GetPageBySlugQuery,
} from "@/gql/sanity/codegen";
import type { Metadata } from "next";
import config from "@/config/config";
import DefaultLayout from "@/layouts/DefaultLayout/DefaultLayout";

type Props = {
  params: Promise<{ slug: string[] }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { slug } = await params;
  try {
    const client = createApolloClient(fetch);
    const { data } = await client.query<GetPageBySlugQuery>({
      query: GetPageBySlugDocument,
      variables: {
        // slug: slug.at(-1),
        slug: slug.join("/"),
      },
    });

    const page = data.page[0];

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
  } catch (err) {
    console.log("err", err);
    return notFound();
  }
}

const GetPage = async (slug: string | undefined): Promise<any> => {
  try {
    const client = createApolloClient(fetch);
    const { data } = await client.query<GetPageBySlugQuery>({
      query: GetPageBySlugDocument,
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

// un-comment this to statically generate pages at build time.
export async function generateStaticParams() {
  // get pages
  const slugs = [["our-rooms"]];

  return slugs.map(slugArray => ({
    slug: slugArray.map(String),
  }));
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  // console.log(slug.at(-1));

  const { page } = await GetPage(slug.join("/"));
  if (!page) {
    return notFound();
  }

  return <DefaultLayout page={Array.isArray(page) && page[0]} />;
}
