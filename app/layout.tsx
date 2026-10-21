import "./global.css";
import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { Masthead } from "./components/masthead";
import { Colophon } from "./components/colophon";
import { site } from "../lib/site";
import { getPosts } from "../lib/posts";

const title = "Aditya Kulkarni";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s | ${title}` },
  description: site.description,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_CA",
    type: "website",
  },
  twitter: { card: "summary", title, description: site.description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f2ec" },
    { media: "(prefers-color-scheme: dark)", color: "#17181b" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: "Engineering Manager",
  worksFor: { "@type": "Organization", name: "BorderPass" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "University of Toronto" },
  sameAs: [site.links.linkedin, site.links.github, site.links.orcid],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const hasWriting = getPosts().length > 0;
  return (
    <html lang="en-CA" className={GeistMono.variable}>
      <body>
        <a href="#main" className="skip">
          Skip to content
        </a>
        <div className="frame">
          <Masthead hasWriting={hasWriting} />
          <main id="main">{children}</main>
          <Colophon />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
