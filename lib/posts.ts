import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Essays live in content/writing/*.mdx with frontmatter:
//   title, date (YYYY-MM-DD), summary, draft (optional, true hides it in production)

export type Post = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  draft: boolean;
  content: string;
};

const dir = path.join(process.cwd(), "content", "writing");

export function getPosts(): Post[] {
  if (!fs.existsSync(dir)) return [];
  const showDrafts = process.env.NODE_ENV !== "production";
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data, content } = matter(raw);
      return {
        slug: file.replace(/\.mdx$/, ""),
        title: String(data.title ?? ""),
        date: String(data.date ?? ""),
        summary: String(data.summary ?? ""),
        draft: Boolean(data.draft),
        content,
      };
    })
    .filter((p) => showDrafts || !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function formatDate(iso: string) {
  const d = new Date(`${iso}T12:00:00`);
  return d.toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
