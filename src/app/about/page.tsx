"use client";

import Nav from "@/lib/components/Header/Header";
import PageWrapper from "@/lib/components/PageWrapper/PageWrapper";

const About = () => {
  return (
    <>
      <Nav />
      <PageWrapper>
        <main className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
          About page
        </main>
      </PageWrapper>
    </>
  );
};

export default About;
