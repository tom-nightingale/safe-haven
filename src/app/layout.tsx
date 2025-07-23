import React from "react";
import type { Metadata } from "next";
import { literataSerif, interSans } from "@/utils/fonts";
import "@/styles/globals.css";
import { ViewTransitions } from "next-view-transitions";
import createApolloClient from "@/gql/apolloClient";
import {
  GetNavigationByIdDocument,
  GetAllFeedbackDocument,
  GetAllStaffDocument,
  GetAllNurseriesDocument,
  type GetNavigationByIdQuery,
  type GetAllFeedbackQuery,
  type GetAllStaffQuery,
  type GetAllNurseriesQuery,
} from "@/gql/sanity/codegen";
import config from "@/config/config";
import Header from "@/components/Header/Header";

import Footer from "@/components/Footer/Footer";
import { GlobalContextProvider } from "@/context/GlobalContext";

export const metadata: Metadata = {
  title: {
    template: `%s | ${config.COMPANY_NAME}`,
    default: config.COMPANY_NAME,
  },
  description:
    "Safe Haven Day Nursery | Mansfield Woodhouse &amp; South Normanton",
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

const GetReviews = async () => {
  try {
    const client = createApolloClient(fetch);
    const { data } = await client.query<GetAllFeedbackQuery>({
      query: GetAllFeedbackDocument,
    });
    return data ?? undefined;
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

const GetAllStaff = async () => {
  try {
    const client = createApolloClient(fetch);
    const { data } = await client.query<GetAllStaffQuery>({
      query: GetAllStaffDocument,
    });
    return data ?? undefined;
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

const GetAllNurseries = async () => {
  try {
    const client = createApolloClient(fetch);
    const { data } = await client.query<GetAllNurseriesQuery>({
      query: GetAllNurseriesDocument,
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

  const reviews = await GetReviews();
  const nurseries = await GetAllNurseries();
  const staff = await GetAllStaff();

  const primaryNav = primaryNavData?.Navigation ?? undefined;
  const secondaryNav = secondaryNavData?.Navigation ?? undefined;

  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${literataSerif.variable} ${interSans.variable} antialiased`}
        >
          <GlobalContextProvider
            reviews={reviews?.allFeedback}
            staff={staff?.allStaff}
            nurseries={nurseries?.allNursery}
          >
            <Header primaryNav={primaryNav} secondaryNav={secondaryNav} />
            {children}

            <Footer
              primaryNav={primaryNav}
              secondaryNav={secondaryNav}
              nurseries={nurseries?.allNursery}
            />
          </GlobalContextProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
