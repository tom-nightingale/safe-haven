import React from "react";
import type { Metadata } from "next";
// import { Literata, Inter } from "next/font/google";
import "@/styles/globals.css";
import { ViewTransitions } from "next-view-transitions";
import createApolloClient from "@/gql/apolloClient";
import {
  GetNavigationByIdDocument,
  type GetNavigationByIdQuery,
} from "@/gql/sanity/codegen";
import config from "@/config/config";
import Header from "@/components/Header/Header";
import { literataSerif, interSans } from "@/utils/fonts";

export const metadata: Metadata = {
  title: {
    template: `%s | ${config.COMPANY_NAME}`,
    default: config.COMPANY_NAME,
  },
  description: "Generated by create next app",
};

const GetNav = async (navId: string) => {
  try {
    const client = createApolloClient(fetch);
    const { data } = await client.query<GetNavigationByIdQuery>({
      query: GetNavigationByIdDocument,
      variables: {
        id: navId,
      },
    });
    return data ?? undefined;
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const primaryNavData = await GetNav(config.PRIMARY_NAV_ID);
  const secondaryNavData = await GetNav(config.SECONDARY_NAV_ID);

  // Assuming the Navigation object is under a property like 'navigation' in the query result
  const primaryNav = primaryNavData?.Navigation;
  const secondaryNav = secondaryNavData?.Navigation;

  if (!primaryNav || !secondaryNav) {
    return (
      <html lang="en">
        <body
          className={`${literataSerif.variable} ${interSans.variable} antialiased`}
        >
          <div>Navigation data could not be loaded.</div>
        </body>
      </html>
    );
  }

  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${literataSerif.variable} ${interSans.variable} antialiased`}
        >
          <Header primaryNav={primaryNav} secondaryNav={secondaryNav} />
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
