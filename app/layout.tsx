import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";

const baseUrl = "https://adityakulkarni.me/";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Aditya Kulkarni | Software Engineer & CS Education Researcher",
    template: "%s | Aditya Kulkarni",
  },
  description:
    "Software engineer at BorderPass and CS education researcher. Computer science graduate from University of Toronto with publications in SIGCSE and ITiCSE. Passionate about building impactful products and advancing computer science education.",
  keywords: [
    "Aditya Kulkarni",
    "Software Engineer",
    "Computer Science Education",
    "University of Toronto",
    "CS Education Research",
    "SIGCSE",
    "ITiCSE",
    "BorderPass",
    "Portfolio",
  ],
  authors: [{ name: "Aditya Kulkarni" }],
  creator: "Aditya Kulkarni",
  openGraph: {
    title: "Aditya Kulkarni | Software Engineer & CS Education Researcher",
    description:
      "Software engineer at BorderPass and CS education researcher. Computer science graduate from University of Toronto with publications in SIGCSE and ITiCSE.",
    url: baseUrl,
    siteName: "Aditya Kulkarni",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Kulkarni | Software Engineer & CS Education Researcher",
    description:
      "Software engineer at BorderPass and CS education researcher. Computer science graduate from University of Toronto.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-black",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
