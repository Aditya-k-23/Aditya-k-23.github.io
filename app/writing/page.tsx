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
      <section className="case-head row">
        <div />
        <div>
          <h1>Writing</h1>
          <p className="lede">
            Longer thoughts on building AI that people have to trust.
          </p>
        </div>
      </section>
      <section className="block">
        {posts.length === 0 ? (
          <div className="row">
            <div />
            <p>Nothing published yet.</p>
          </div>
        ) : (
          posts.map((post) => (
            <div className="row entry" key={post.slug}>
              <div className="note">
                <p>{formatDate(post.date)}</p>
                {post.draft && <p>Draft</p>}
              </div>
              <div>
                <h3>
                  <Link href={`/writing/${post.slug}/`}>{post.title}</Link>
                </h3>
                <p>{post.summary}</p>
              </div>
            </div>
          ))
        )}
      </section>
    </>
  );
}
