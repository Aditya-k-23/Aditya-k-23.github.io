import Link from "next/link";
import { roles, publications, paperGloss, site } from "../lib/site";
import { getPosts, formatDate } from "../lib/posts";

export default function Home() {
  const posts = getPosts().slice(0, 3);

  return (
    <>
      <section className="hero row" aria-labelledby="hero-title">
        <div className="note">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/adi.webp"
            alt="Portrait of Aditya Kulkarni"
            className="portrait"
            width={104}
            height={104}
          />
          <p>Toronto</p>
          <p>University of Toronto, CS</p>
        </div>
        <div>
          <h1 id="hero-title">
            I build AI that helps people move countries and prove what they
            know.
          </h1>
          <p className="lede">
            I lead an engineering team at BorderPass, built the platform behind
            TalkLab&rsquo;s AI oral exams, and research how people learn
            computing.
          </p>
        </div>
      </section>

      <section className="block" id="work" aria-labelledby="work-title">
        <div className="row">
          <div />
          <h2 className="section" id="work-title">
            Work
          </h2>
        </div>
        {roles.map((r) => (
          <div className="row entry" key={r.org}>
            <div className="note">
              <p>{r.role}</p>
              <p>{r.since}</p>
            </div>
            <div>
              <h3>
                <a href={r.href} target="_blank" rel="noopener noreferrer">
                  {r.org}
                </a>
              </h3>
              <p>{r.body}</p>
              {r.caseStudy && (
                <p className="more">
                  <Link href={r.caseStudy}>Read the {r.org} case study</Link>
                </p>
              )}
            </div>
          </div>
        ))}
      </section>

      <section className="block" aria-labelledby="research-title">
        <div className="row">
          <div />
          <div>
            <h2 className="section" id="research-title">
              Research
            </h2>
            <p>
              Peer-reviewed work on how people learn computing and how to assess
              it.
            </p>
          </div>
        </div>
        {publications.map((p) => (
          <div className="row paper" key={p.doi}>
            <div className="note">
              <p>
                {p.venue} {p.year}
              </p>
            </div>
            <div>
              <h3>
                <a href={p.doi} target="_blank" rel="noopener noreferrer">
                  {p.title}
                </a>
              </h3>
              <p>{paperGloss[p.year]}</p>
            </div>
          </div>
        ))}
        <div className="row">
          <div />
          <p className="more">
            <Link href="/research/">
              Abstracts, posters, talks and recognition
            </Link>
          </p>
        </div>
      </section>

      {posts.length > 0 && (
        <section className="block" aria-labelledby="writing-title">
          <div className="row">
            <div />
            <h2 className="section" id="writing-title">
              Writing
            </h2>
          </div>
          {posts.map((post) => (
            <div className="row entry" key={post.slug}>
              <div className="note">
                <p>{formatDate(post.date)}</p>
              </div>
              <div>
                <h3>
                  <Link href={`/writing/${post.slug}/`}>{post.title}</Link>
                </h3>
                <p>{post.summary}</p>
              </div>
            </div>
          ))}
        </section>
      )}

      <section className="block" aria-labelledby="contact-title">
        <div className="row">
          <div />
          <div>
            <h2 className="section" id="contact-title">
              Contact
            </h2>
            <p>
              For roles, research or collaboration, email{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
