"use client";

import PageWrapper from "@/components/PageWrapper/PageWrapper";

export const HomeLayout = () => {
  return (
    <PageWrapper>
      <main className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 bg-red-500 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
        Home page
      </main>
    </PageWrapper>
  );
};

export default HomeLayout;
