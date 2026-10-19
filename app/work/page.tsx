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
      <section className="case-head row">
        <div />
        <div>
          <h1>Work</h1>
          <p className="lede">
            Two places, one kind of problem: software that helps make a decision
            someone has to live with.
          </p>
        </div>
      </section>
      <section className="block">
        {roles
          .filter((r) => r.caseStudy)
          .map((r) => (
            <div className="row entry" key={r.org}>
              <div className="note">
                <p>{r.role}</p>
              </div>
              <div>
                <h3>
                  <Link href={r.caseStudy!}>{r.org}</Link>
                </h3>
                <p>{r.body}</p>
              </div>
            </div>
          ))}
      </section>
    </>
  );
}
