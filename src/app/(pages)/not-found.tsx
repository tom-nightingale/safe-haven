import Link from "next/link";
import SimpleHero from "@/components/SimpleHero/SimpleHero";
import Container from "@/components/Container/Container";
import PageWrapper from "@/components/PageWrapper/PageWrapper";

export default function NotFound() {
  return (
    <PageWrapper>
      <main>
        <SimpleHero
          title={"Page not found"}
          subtitle="404"
          topLine=""
          buttons={[{ href: "/", label: "Return Home" }]}
          phoneNumber={null}
        />
      </main>
    </PageWrapper>
  );
}
