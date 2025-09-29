import SimpleHero from "@/components/SimpleHero/SimpleHero";

export default function NotFound() {
  return (
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
