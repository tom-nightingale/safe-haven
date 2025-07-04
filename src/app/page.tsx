import { notFound } from "next/navigation";
import createApolloClient from "@/gql/apolloClient";
import {
  GetPageBySlugDocument,
  type GetPageBySlugQuery,
  GetAllStaffDocument,
  type GetAllStaffQuery,
} from "@/gql/sanity/codegen";
import type { Metadata } from "next";
import config from "@/config/config";
// import HomeLayout from "@/layouts/HomeLayout/HomeLayout";
import Container from "@/components/Container/Container";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const client = createApolloClient(fetch);
    const { data } = await client.query<GetPageBySlugQuery>({
      query: GetPageBySlugDocument,
      variables: {
        slug: "home",
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

const GetAllStaff = async (): Promise<GetAllStaffQuery> => {
  try {
    const client = createApolloClient(fetch);
    const { data } = await client.query<GetAllStaffQuery>({
      query: GetAllStaffDocument,
    });
    return data;
  } catch (err) {
    console.log("err", err);
    return notFound();
  }
};

export default async function Home() {
  const { allPage } = await GetSingularPage("home");
  const { allStaff } = await GetAllStaff();
  if (allPage.length < 1) {
    return notFound();
  }
  const page = allPage[0];
  console.log(page);
  console.log("allStaff", allStaff);
  return (
    <>
      <Container>
        <div className="grid grid-cols-12 gap-4">
          {allStaff.length > 0 &&
            allStaff.map(staff => (
              <div className="relative col-span-2 bg-gray-100" key={staff.name}>
                {staff && (
                  // <Card
                  //   image={staff?.profileImage?.image}
                  //   title={staff.name}
                  //   subtitle={staff.jobTitle}
                  // />
                  <></>
                )}
              </div>
            ))}
        </div>
      </Container>
      {/* <HomeLayout /> */}
    </>
  );
}
