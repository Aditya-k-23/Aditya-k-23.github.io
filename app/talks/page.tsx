import type { Metadata } from "next";
import { talks } from "../../lib/site";
import { TalkCard } from "../components/talk-card";

export const metadata: Metadata = {
  title: "Talks",
  description: "Talks, panels and podcast conversations with Aditya Kulkarni.",
  alternates: { canonical: "/talks/" },
};

export default function Talks() {
  return (
    <>
      <section className="case-head grid">
        <h1>Talks</h1>
        <p className="lede">Podcasts, panels and demos.</p>
      </section>
      <section className="talks">
        {talks.map((t) => (
          <TalkCard key={t.url} title={t.title} url={t.url} kind={t.kind} />
        ))}
      </section>
    </>
  );
}
