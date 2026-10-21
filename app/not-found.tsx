import Link from "next/link";

export default function NotFound() {
  return (
    <section className="case-head grid">
      <h1>Page not found</h1>
      <p className="lede">
        It may have moved in the redesign. <Link href="/">Go to the home page</Link>.
      </p>
    </section>
  );
}
