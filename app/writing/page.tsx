import type { Metadata } from "next";
import Link from "next/link";
import { getPosts, formatDate } from "../../lib/posts";

export const metadata: Metadata = {
  title: "Writing",
  description: "Essays by Aditya Kulkarni on applied AI, assessment and engineering.",
  alternates: { canonical: "/writing/" },
};

export default function Writing() {
  const posts = getPosts();
  return (
    <>
      <section className="case-head grid">
        <h1>Writing</h1>
          <p className="lede">
            Essays on applied AI, assessment and engineering.
          </p>
      </section>
      <section className="section grid">
        <p className="label">Essays</p>
        <div className="content">
          {posts.length === 0 ? (
            <p>Nothing published yet.</p>
          ) : (
            <ul className="index papers">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link href={`/writing/${post.slug}/`} className="item">
                    <span className="title">{post.title}</span>
                    <span className="venue">
                      {formatDate(post.date)}
                      {post.draft ? ", draft" : ""}
                    </span>
                    <span className="what">{post.summary}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
