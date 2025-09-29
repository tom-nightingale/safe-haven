import { notFound } from "next/navigation";
import createApolloClient from "@/gql/apolloClient";
import {
  GetPageBySlugDocument,
  type GetPageBySlugQuery,
  GetAllPageDocument,
  type GetAllPageQuery,
  type Page,
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
        // slug: slug.at(-1)
        slug: slug.join("/"),
      },
    });

    const page = data.page[0];

    return {
      title: `${page?.seo?.metaTitle ? page?.seo?.metaTitle : page?.title} | ${config.COMPANY_NAME}`,
      description:
        page?.seo?.metaDesc ??
        "Safe Haven Day Nursery | Mansfield Woodhouse &amp; South Normanton",
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

const GetAllPage = async (): Promise<any> => {
  try {
    const client = createApolloClient(fetch);
    const { data } = await client.query<GetAllPageQuery>({
      query: GetAllPageDocument,
    });
    return data;
  } catch (err) {
    console.log("err", err);
    return notFound();
  }
};

// STATICALLY GENERATE PAGES AT BUILD TIME
// ISR one hour increments
// export const revalidate = 3600; // 1 hour seconds
// export const revalidate = 5; // 5 seconds
export async function generateStaticParams() {
  const allPages = await GetAllPage();

  const pageSlugArray =
    allPages?.allPage?.map((page: Page) => [page?.slug?.current]) ?? [];

  return pageSlugArray.map((slugArray: string[]) => ({
    slug: slugArray.map(String),
  }));
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const { page } = await GetPage(slug.join("/"));

  if (!page[0]) {
    return notFound();
  }

  return <DefaultLayout page={Array.isArray(page) && page[0]} />;
}
