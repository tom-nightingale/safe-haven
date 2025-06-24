export const dynamic = "force-dynamic";

import createApolloClient from "@/gql/apolloClient";
import {
  GetAllPostsDocument,
  type GetAllPostsQuery,
  type Post,
} from "@/gql/sanity/codegen";
import Link from "next/link";

const GetBlogPosts = async (): Promise<any> => {
  try {
    const client = createApolloClient(fetch);
    const { data } = await client.query<GetAllPostsQuery>({
      query: GetAllPostsDocument,
      variables: {
        sort: [{ _createdAt: "DESC" }],
      },
      //   context: {
      //     fetchOptions: {
      //       next: { revalidate: 5 },
      //     },
      //   },
    });
    return data;
  } catch (err) {
    console.log("err", err);
  }
};

export default async function Page() {
  const data = await GetBlogPosts();

  return (
    <>
      {(data.allPost || []).map((post: Post) => (
        <li key={post.title}>
          <Link
            href={`/news/${post?.category?.slug?.current}/${post?.slug?.current}`}
          >
            {post.title}
          </Link>
        </li>
      ))}
    </>
  );
}
