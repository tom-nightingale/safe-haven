import createApolloClient from "@/gql/apolloClient";
import {
  GetAllStaffDocument,
  type GetAllStaffQuery,
} from "@/gql/sanity/codegen";
import HomeLayout from "@/layouts/Home/Home";

export default async function Home() {
  const client = createApolloClient(fetch);
  const { data } = await client.query<GetAllStaffQuery>({
    query: GetAllStaffDocument,
  });

  return (
    <>
      <HomeLayout staff={data} />
    </>
  );
}
