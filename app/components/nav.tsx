"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = {
  "/": {
    name: "home",
  },
  "/videos": {
    name: "videos",
  },
  "/publications": {
    name: "publications",
  },
  "/awards": {
    name: "awards",
  },
  "/projects": {
    name: "projects",
  },
};

export function Navbar() {
  const pathname = usePathname();

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = pathname === path;
              return (
                <Link
                  key={path}
                  href={path}
                  className={`transition-all flex align-middle relative py-1 px-2 m-1 ${
                    isActive
                      ? "text-neutral-900 dark:text-neutral-100 font-medium"
                      : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
                  }`}
                >
                  {name}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-neutral-900 dark:bg-neutral-100" />
                  )}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
