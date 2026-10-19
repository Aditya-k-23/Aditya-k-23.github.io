import type { MetadataRoute } from "next";
import { site } from "../lib/site";
import { getPosts } from "../lib/posts";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/work/", "/work/borderpass/", "/work/talklab/", "/research/"];
  const posts = getPosts().map((p) => `/writing/${p.slug}/`);
  const writing = posts.length ? ["/writing/", ...posts] : [];
  return [...pages, ...writing].map((path) => ({ url: `${site.url}${path}` }));
}
