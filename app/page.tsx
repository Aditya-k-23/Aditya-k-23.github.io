import Link from "next/link";
import { roles, publications } from "../lib/site";
import { SocialLinks } from "./components/colophon";
import { getPosts, formatDate } from "../lib/posts";

export default function Home() {
  const posts = getPosts().slice(0, 3);

  return (
    <>
      <section className="intro" aria-labelledby="hero-title">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/adi.webp"
          alt="Portrait of Aditya Kulkarni"
          className="avatar"
          width={208}
          height={208}
        />
        <div className="intro-text">
          <h1 id="hero-title">Hi, I&rsquo;m Adi.</h1>
          <p className="role">Building with resilience, for freedom.</p>
          <p className="bio">
            I lead an engineering team at{" "}
            <a href="https://www.borderpass.ai/" target="_blank" rel="noopener noreferrer">
              BorderPass
            </a>
            {" "}where we build legal tech to empower global mobility. At{" "}
            <a href="https://demo.talklab.ca/" target="_blank" rel="noopener noreferrer">
              TalkLab
            </a>
            , I build AI that assesses what people know through conversation.
            And at U of T&rsquo;s{" "}
            <a href="https://datasciences.utoronto.ca/" target="_blank" rel="noopener noreferrer">
              Data Sciences Institute
            </a>
            , I teach learners to build and ship AI/ML products that hold up in
            the real world.
          </p>
          <SocialLinks />
        </div>
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
          <ul className="index papers">
            {publications.map((p) => (
              <li key={p.doi}>
                <a href={p.doi} target="_blank" rel="noopener noreferrer" className="item">
                  <span className="title">{p.title}</span>
                  <span className="venue num">
                    {p.venue} {p.year}
                  </span>
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

    </>
  );
}
