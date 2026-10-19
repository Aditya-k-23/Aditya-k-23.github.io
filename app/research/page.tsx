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
      <section className="case-head row">
        <div className="note">
          <p>Computing education</p>
          <p>Assessment</p>
          <p>Human–AI interaction</p>
        </div>
        <div>
          <h1>Research</h1>
          <p className="lede">
            I study how people learn computing, and how we measure it. Next, I
            want to know what changes when the examiner is a model.
          </p>
        </div>
      </section>

      <section className="block" aria-labelledby="pubs">
        <div className="row">
          <div />
          <h2 className="section" id="pubs">
            Publications
          </h2>
        </div>
        {publications.map((p) => (
          <div className="row paper" key={p.doi}>
            <div className="note">
              <p>
                {p.venue} {p.year}
              </p>
            </div>
            <div>
              <h3>{p.title}</h3>
              <details className="abstract">
                <summary>Abstract</summary>
                <p>{p.abstract}</p>
              </details>
              <div className="links">
                <a href={p.doi} target="_blank" rel="noopener noreferrer">
                  Paper (ACM DL)
                </a>
                {p.poster && (
                  <a href={p.poster} target="_blank" rel="noopener noreferrer">
                    Poster
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="block" aria-labelledby="talks">
        <div className="row">
          <div className="note">
            <p>Video</p>
          </div>
          <div>
            <h2 className="section" id="talks">
              Talks and conversations
            </h2>
            <ul className="plain">
              {talks.map((t) => (
                <li key={t.url} style={{ gridTemplateColumns: "1fr" }}>
                  <a href={t.url} target="_blank" rel="noopener noreferrer">
                    {t.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="block" aria-labelledby="recognition">
        <div className="row">
          <div className="note">
            <p>University of Toronto</p>
            <p>CS, 2024</p>
          </div>
          <div>
            <h2 className="section" id="recognition">
              Recognition
            </h2>
            <ul className="plain">
              {recognition.map((r) => (
                <li key={r.name}>
                  <span className="yr">{r.year}</span>
                  <span>{r.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
