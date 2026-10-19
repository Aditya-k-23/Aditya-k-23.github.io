import Link from "next/link";

export default function NotFound() {
  return (
    <section className="case-head row">
      <div className="note">
        <p>404</p>
      </div>
      <div>
        <h1>This page doesn&rsquo;t exist.</h1>
        <p className="lede">
          It may have moved in the redesign. <Link href="/">Go to the home page</Link>{" "}
          or <Link href="/research/">see the research</Link>.
        </p>
      </div>
    </section>
  );
}
