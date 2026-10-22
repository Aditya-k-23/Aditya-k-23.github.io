# adityakulkarni.me

Personal site of Aditya Kulkarni. Next.js (App Router) exported as static HTML and deployed to GitHub Pages by `.github/workflows/nextjs.yml` on every push to `main`.

## Run it

```
pnpm install
pnpm dev      # http://localhost:3000, drafts visible
pnpm build    # static site in out/
```

## Where things live

- `lib/site.ts` holds every public fact: roles, publications, talks, recognition, links. Edit copy here first.
- `app/work/borderpass` and `app/work/talklab` are the case studies. Each gets one diagram from `app/components/diagrams.tsx`.
- `content/writing/*.mdx` are essays. Frontmatter: `title`, `date`, `summary`, `draft`. Drafts only show in `pnpm dev`. The Writing link appears once one essay is public.
- `app/global.css` holds the design tokens (paper, ink, stamp blue) and the margin-note grid.

## Public disclosure rule

Name systems at the capability level, with numbers and scale. No internal architecture.
