import SimpleHero from "@/components/SimpleHero/SimpleHero";

export default function NotFound() {
  return (
    // <PageWrapper>
    <main>
      <SimpleHero
        title={"Page not found"}
        subtitle="404"
        topLine=""
        buttons={[{ href: "/", label: "Return Home" }]}
        phoneNumber={null}
      />
    </main>
    // </PageWrapper>
  );
}
