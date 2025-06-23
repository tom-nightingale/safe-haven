import { notFound } from "next/navigation";
import createApolloClient from "@/gql/apolloClient";
import {
  GetPostBySlugDocument,
  GetCategoryBySlugDocument,
  GetPostsByCategoryDocument,
  type GetPostBySlugQuery,
  type GetCategoryBySlugQuery,
  type GetPostsByCategoryQuery,
  type Post,
} from "@/gql/sanity/codegen";
import Link from "next/link";

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

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { allPost } = await GetSingularBlogPost(slug.at(-1));
  const { allCategory } = await GetCategory(slug.at(-1));
  if (allPost.length < 1 && allCategory.length < 0) {
    return notFound();
  }

  const data = allPost[0] ? allPost[0] : allCategory[0];
  const type = allPost[0] ? "Post" : "Category";

  let posts = [];
  if (type === "Category") {
    posts = await PostsByCategory(slug.at(-1));
  }

  return (
    <>
      {type}: {data.title}
      {type === "Category" && posts.allPost.length > 0 && (
        <>
          {(posts.allPost || []).map((post: Post) => (
            <li key={post.title}>
              <Link
                href={`/news/${post?.category?.slug?.current}/${post?.slug?.current}`}
              >
                {post.title}
              </Link>
            </li>
          ))}
        </>
      )}
    </>
  );
}
