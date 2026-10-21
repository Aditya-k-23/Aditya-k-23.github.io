import type { Metadata } from "next";
import Link from "next/link";
import { roles } from "../../lib/site";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies from Aditya Kulkarni's work at BorderPass and TalkLab.",
  alternates: { canonical: "/work/" },
};

export default function Work() {
  return (
    <>
      <section className="case-head grid">
        <h1>Work</h1>
          <p className="lede">
            Case studies from BorderPass and TalkLab.
          </p>
      </section>
      <section className="section grid">
        <p className="label">Case studies</p>
        <div className="content">
          <ul className="index">
            {roles
              .filter((r) => r.caseStudy)
              .map((r) => (
                <li key={r.org}>
                  <Link href={r.caseStudy!} className="item">
                    <span className="name">
                      {r.org}
                      <span className="meta">{r.role}</span>
                    </span>
                    <span className="what">{r.body}</span>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </section>
    </>
  );
}
