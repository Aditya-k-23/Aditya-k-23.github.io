import Link from "next/link";
import { roles, publications, paperGloss, site } from "../lib/site";
import { getPosts, formatDate } from "../lib/posts";

export default function Home() {
  const posts = getPosts().slice(0, 3);

  return (
    <>
      <section className="hero grid" aria-labelledby="hero-title">
        <h1 id="hero-title">
          Freedom begs resilience.
        </h1>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/adi.webp"
          alt="Portrait of Aditya Kulkarni"
          className="portrait"
          width={176}
          height={220}
        />
        <p className="sub">
          I build software that grants the first and trains the second.
          <span className="now">
            Engineering manager at BorderPass. Building TalkLab.
          </span>
        </p>
      </section>

      <section className="section grid" id="work" aria-labelledby="work-title">
        <h2 className="label" id="work-title">
          Now
        </h2>
        <div className="content">
          <ul className="index">
            {roles.map((r) => {
              const inner = (
                <>
                  <span className="name">
                    {r.org}
                    <span className="meta">{r.role}</span>
                  </span>
                  <span className="what">
                    {r.body}
                    {r.caseStudy && <span className="go">Case study</span>}
                  </span>
                </>
              );
              return (
                <li key={r.org}>
                  {r.caseStudy ? (
                    <Link href={r.caseStudy} className="item">
                      {inner}
                    </Link>
                  ) : (
                    <div className="item">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section grid" aria-labelledby="research-title">
        <h2 className="label" id="research-title">
          Research
        </h2>
        <div className="content">
          <p className="intro">
            How people learn computing, and how to assess it fairly.
          </p>
          <ul className="index papers">
            {publications.map((p) => (
              <li key={p.doi}>
                <a href={p.doi} target="_blank" rel="noopener noreferrer" className="item">
                  <span className="title">{p.title}</span>
                  <span className="venue num">
                    {p.venue} {p.year}
                  </span>
                  <span className="what">{paperGloss[p.year]}</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="more">
            <Link href="/research/">Abstracts, posters, talks and recognition</Link>
          </p>
        </div>
      </section>

      {posts.length > 0 && (
        <section className="section grid" aria-labelledby="writing-title">
          <h2 className="label" id="writing-title">
            Writing
          </h2>
          <div className="content">
            <ul className="index papers">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link href={`/writing/${post.slug}/`} className="item">
                    <span className="title">{post.title}</span>
                    <span className="venue">{formatDate(post.date)}</span>
                    <span className="what">{post.summary}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="section grid contact" id="contact" aria-labelledby="contact-title">
        <h2 className="label" id="contact-title">
          Contact
        </h2>
        <div className="content">
          <p>
            If you&rsquo;re building in mobility, education or AI, I&rsquo;d
            like to hear about it.{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
      </section>
    </>
  );
}
