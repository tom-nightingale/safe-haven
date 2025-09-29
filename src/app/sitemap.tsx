import type { MetadataRoute } from "next";
import createApolloClient from "@/gql/apolloClient";
import { GetSitemapDocument, type GetSitemapQuery } from "@/gql/sanity/codegen";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const client = createApolloClient(fetch);
  const { data } = await client.query<GetSitemapQuery>({
    query: GetSitemapDocument,
  });

  const urls: {
    url: string;
    priority: number;
    changeFrequency:
      | "monthly"
      | "yearly"
      | "always"
      | "hourly"
      | "daily"
      | "weekly"
      | "never"
      | undefined;
  }[] = [];

  const BASE_URL = "https://www.safehavennursery.co.uk";
  const pages = data.pages;
  const blogs = data.blog;
  const nurseries = data.nurseries;

  // Pages | 1 prior
  (pages || []).forEach(page => {
    if (page?.slug?.current) {
      urls.push({
        priority: 1,
        url: page.slug.current === "home" ? "" : page.slug.current,
        changeFrequency: "monthly",
      });
    }
  });

  // nurseries | 1 prior
  (nurseries || []).forEach(nursery => {
    if (nursery?.slug?.current) {
      urls.push({
        priority: 1,
        url: `our-nurseries/${nursery?.slug?.current}`,
        changeFrequency: "monthly",
      });
    }
  });

  // Blog posts | 0.7 prior
  (blogs || []).forEach(blog => {
    if (blog?.slug?.current) {
      urls.push({
        priority: 0.8,
        url: `news/${blog?.category?.slug?.current}/${blog?.slug?.current}`,
        changeFrequency: "monthly",
      });
    }
  });

  return urls.map(entry => {
    return {
      ...entry,
      url: `${BASE_URL}/${entry.url}`,
      lastModified: new Date(),
    };
  });
}
