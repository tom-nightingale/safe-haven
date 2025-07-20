import { notFound } from "next/navigation";
import createApolloClient from "@/gql/apolloClient";
import {
  GetPageBySlugDocument,
  type GetPageBySlugQuery,
} from "@/gql/sanity/codegen";
import type { Metadata } from "next";
import config from "@/config/config";
import OurRoomsLayout from "@/layouts/OurRoomsLayout/OurRoomsLayout";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const client = createApolloClient(fetch);
    const { data } = await client.query<GetPageBySlugQuery>({
      query: GetPageBySlugDocument,
      variables: {
        slug: "our-rooms",
      },
    });

    const page = data.allPage[0];
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

const GetSingularPage = async (slug: string | undefined): Promise<any> => {
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

export default async function Page() {
  const { allPage } = await GetSingularPage("our-rooms");

  if (allPage.length < 1) {
    return notFound();
  }
  const page = allPage[0];
  return (
    <>
      <OurRoomsLayout title={page?.title} />
    </>
  );
}
