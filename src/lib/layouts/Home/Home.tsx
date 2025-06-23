"use client";

import Header from "@/components/Header/Header";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import type { GetAllStaffQuery } from "@/gql/sanity/codegen";

type Props = {
  staff: GetAllStaffQuery;
};

export const HomeLayout = ({ staff }: Props) => {
  console.log("staff from layout", staff);
  return (
    <>
      <Header />
      <PageWrapper>
        <main className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
          Home page
        </main>
      </PageWrapper>
    </>
  );
};

export default HomeLayout;
