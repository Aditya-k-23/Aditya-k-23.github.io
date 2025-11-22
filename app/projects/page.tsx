import Link from "next/link";
import { FaArrowRight, FaGithub } from "react-icons/fa";

async function fetchPinnedRepos() {
  const query = `
    query {
      user(login: "Aditya-k-23") {
        pinnedItems(first: 6, types: [REPOSITORY]) {
          nodes {
            ... on Repository {
              id
              name
              description
              url
              openGraphImageUrl
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.PAT_TOKEN}`,
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 3600 }, // ISR support for Next.js
    });

    if (!response.ok) {
      throw new Error("Failed to fetch repositories");
    }

    const data = await response.json();
    return data.data.user.pinnedItems.nodes;
  } catch (error) {
    console.error("Error fetching pinned repositories:", error);
    return [];
  }
}

export default async function ProjectsPage() {
  const projects = await fetchPinnedRepos();

  return (
    <main className="p-4">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter text-center">
        Projects
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
        {projects.map(({ id, name, description, url }) => (
          <article
            key={id}
            className="flex flex-col p-4 border-1 border-gray-50 rounded-lg hover:shadow-lg transition-shadow"
          >
            <h2 className="py-2 font-bold text-xl">{name}</h2>
            <p className="mb-4 text-gray-400 text-large">{description}</p>
            <Link href={url} aria-label={`View ${name} on GitHub`}>
              <FaGithub className="text-2xl mt-auto text-gray-400 hover:text-black dark:hover:text-amber-100/80 transition duration-300 cursor-pointer" />
            </Link>
          </article>
        ))}
      </div>
      <p className="mt-4 text-center text-neutral-600 dark:text-neutral-300">
        Find more on my{" "}
        <Link
          href="https://github.com/Aditya-k-23"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          GitHub
        </Link>{" "}
        <FaArrowRight className="inline text-sm" />
      </p>
    </main>
  );
}
