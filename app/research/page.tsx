import type { Metadata } from "next";
import { publications, talks, recognition } from "../../lib/site";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Aditya Kulkarni's peer-reviewed research in computing education (SIGCSE, ITiCSE), talks, and recognition.",
  alternates: { canonical: "/research/" },
};

export default function Research() {
  return (
    <>
      <section className="case-head grid">
        <h1>Research</h1>
        <p className="lede">
          How people learn computing, and how to assess it fairly. My papers
          have appeared at SIGCSE and ITiCSE.
        </p>
      </section>

      <section className="section grid" aria-labelledby="pubs">
        <h2 className="label" id="pubs">
          Papers
        </h2>
        <div className="content">
          <ul className="index papers">
            {publications.map((p) => (
              <li key={p.doi}>
                <div className="item">
                  <span className="title">{p.title}</span>
                  <span className="venue num">
                    {p.venue} {p.year}
                  </span>
                  <details className="abstract">
                    <summary>Abstract</summary>
                    <p>{p.abstract}</p>
                  </details>
                  <span className="links-row">
                    <a href={p.doi} target="_blank" rel="noopener noreferrer">
                      Paper
                    </a>
                    {p.poster && (
                      <a href={p.poster} target="_blank" rel="noopener noreferrer">
                        Poster
                      </a>
                    )}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section grid" aria-labelledby="talks">
        <h2 className="label" id="talks">
          Talks
        </h2>
        <div className="content">
          <ul className="plain-list single">
            {talks.map((t) => (
              <li key={t.url}>
                <a href={t.url} target="_blank" rel="noopener noreferrer">
                  {t.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section grid" aria-labelledby="recognition">
        <h2 className="label" id="recognition">
          Recognition
        </h2>
        <div className="content">
          <ul className="plain-list">
            {recognition.map((r) => (
              <li key={r.name}>
                <span className="yr">{r.year}</span>
                <span>{r.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
