import Link from "next/link";

export default function Home() {
  return (
    <div className="p-20">
      <h1 className="">Next x Tailwind x Motion.</h1>

      <div className="">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate.
        </p>

        <p>
          Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>

        <Link href="/about">Go to About</Link>
      </div>
    </div>
  );
}
