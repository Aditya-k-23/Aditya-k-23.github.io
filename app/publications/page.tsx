"use client";

import React, { useEffect, useState } from "react";
import publicationsJSON from "../../lib/publications.json";

const fetchPublications = async () => {
  return publicationsJSON["publications"];
};

const MAX_ABSTRACT_LENGTH = 200;

const PublicationsPage = () => {
  const [publications, setPublications] = useState<
    {
      id: number;
      title: string;
      date: string;
      journal: string;
      url: string;
      posterurl: string;
      abstract: string;
    }[]
  >([]);
  const [expandedAbstracts, setExpandedAbstracts] = useState<Set<number>>(
    new Set()
  );

  useEffect(() => {
    const getPublications = async () => {
      const publicationsData = await fetchPublications();
      setPublications(publicationsData);
    };

    getPublications();
  }, []);

  const toggleAbstract = (id: number) => {
    setExpandedAbstracts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const truncateAbstract = (abstract: string, id: number): string => {
    if (expandedAbstracts.has(id) || abstract.length <= MAX_ABSTRACT_LENGTH) {
      return abstract;
    }
    return abstract.substring(0, MAX_ABSTRACT_LENGTH) + "...";
  };

  return (
    <div>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter text-center">
        Publications
      </h1>
      <div className="publication-grid">
        {publications.map((publication) => {
          const isExpanded = expandedAbstracts.has(publication.id);
          const shouldTruncate =
            publication.abstract.length > MAX_ABSTRACT_LENGTH;
          const displayAbstract = truncateAbstract(
            publication.abstract,
            publication.id
          );

          return (
            <div key={publication.id} className="publication-card">
              <h3 className="text-lg font-semibold mb-2">
                {publication.title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                {publication.journal} • {publication.date}
              </p>
              <p className="mb-4 leading-relaxed">{displayAbstract}</p>
              {shouldTruncate && (
                <button
                  onClick={() => toggleAbstract(publication.id)}
                  className="text-sm text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 mb-4 transition-colors"
                >
                  {isExpanded ? "Show less" : "Read more"}
                </button>
              )}
              <div className="flex gap-4 mt-4">
                <a
                  href={publication.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 underline transition-colors"
                >
                  Read paper
                </a>
                <a
                  href={publication.posterurl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 underline transition-colors"
                >
                  Poster PDF
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PublicationsPage;
