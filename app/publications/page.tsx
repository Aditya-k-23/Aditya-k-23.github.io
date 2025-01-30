"use client";

import React, { useEffect, useState } from "react";
import publicationsJSON from "../../lib/publications.json";

// Mock function to fetch publication data
const fetchPublications = async () => {
  return publicationsJSON["publications"];
};

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

  useEffect(() => {
    const getPublications = async () => {
      const publicationsData = await fetchPublications();
      setPublications(publicationsData);
    };

    getPublications();
  }, []);

  return (
    <div>
      <h1 className="page-title">My Publications</h1>
      <div className="publication-grid">
        {publications.map((publication) => (
          <div key={publication.id} className="publication-card">
            <h3>{publication.title}</h3>
            <p>
              {publication.journal} • {publication.date}
            </p>
            <p>{publication.abstract}</p>
            <a href={publication.url} target="_blank" rel="noopener noreferrer">
              <u>Read more</u>
            </a>
            <a
              href={publication.posterurl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <u>Poster PDF</u>{" "}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PublicationsPage;
