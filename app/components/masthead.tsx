"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "../../lib/site";

export function Masthead({ hasWriting }: { hasWriting: boolean }) {
  const pathname = usePathname() || "/";
  const items = [
    { href: "/#work", label: "Work", match: "/work" },
    { href: "/research/", label: "Research", match: "/research" },
    ...(hasWriting
      ? [{ href: "/writing/", label: "Writing", match: "/writing" }]
      : []),
  ];

  return (
    <header className="masthead">
      <Link href="/" className="home">
        {site.name}
      </Link>
      <nav aria-label="Primary">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={pathname.startsWith(item.match) ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
