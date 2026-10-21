import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPosts, formatDate } from "../../../lib/posts";
import { CustomMDX } from "../../components/mdx";

export const dynamicParams = false;

export function generateStaticParams() {
  const posts = getPosts();
  // A static export needs at least one path; the placeholder renders a 404.
  if (posts.length === 0) return [{ slug: "_" }];
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPosts().find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `/writing/${slug}/` },
    openGraph: { type: "article", title: post.title, description: post.summary },
  };
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPosts().find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article>
      <header className="case-head grid">
        <h1>{post.title}</h1>
        <p className="lede">{post.summary}</p>
        <dl className="facts">
          <div>
            <dt>Published</dt>
            <dd>{post.draft ? "Draft, not public" : formatDate(post.date)}</dd>
          </div>
        </dl>
      </header>
      <section className="section grid">
        <div className="content prose" style={{ gridColumn: "1 / span 8" }}>
          <CustomMDX source={post.content} />
        </div>
      </section>
    </article>
  );
}
