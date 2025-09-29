import React from "react";
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
  GetAllBannersDocument,
  type GetAllBannersQuery,
} from "@/gql/sanity/codegen";
import config from "@/config/config";
import Header from "@/components/Header/Header";
import { GoogleAnalytics } from "@next/third-parties/google";
import BannerContainer from "@/components/BannerContainer/BannerContainer";
import Footer from "@/components/Footer/Footer";
import { GlobalContextProvider } from "@/context/GlobalContext";
import BackToTop from "@/components/BackToTop/BackToTop";

export const revalidate = 3600; // 1 hour

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

const GetAllBanners = async () => {
  try {
    const client = createApolloClient(fetch);
    const { data } = await client.query<GetAllBannersQuery>({
      query: GetAllBannersDocument,
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
  const [primaryNavData, secondaryNavData, reviews, nurseries, staff, banners] =
    await Promise.all([
      GetNav(config.PRIMARY_NAV_ID),
      GetNav(config.SECONDARY_NAV_ID),
      GetReviews(),
      GetAllNurseries(),
      GetAllStaff(),
      GetAllBanners(),
    ]);

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
            {banners && banners?.allBanner?.length > 0 && (
              <BannerContainer banners={banners.allBanner} />
            )}
            <Header primaryNav={primaryNav} secondaryNav={secondaryNav} />

            {children}

            <Footer
              primaryNav={primaryNav}
              secondaryNav={secondaryNav}
              nurseries={nurseries?.allNursery}
            />
          </GlobalContextProvider>
          <GoogleAnalytics gaId={config.GOOGLE_ANALYTICS_ID} />
          <BackToTop />
        </body>
      </html>
    </ViewTransitions>
  );
}
