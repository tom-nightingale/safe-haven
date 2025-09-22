import SimpleHero from "@/components/SimpleHero/SimpleHero";

export default function NotFound() {
  return (
    // <PageWrapper>
    // </PageWrapper>
    <main>
      <SimpleHero
        title={"Page not found"}
        subtitle="404"
        topLine=""
        phoneNumber={null}
      />
    </main>
  );
}
