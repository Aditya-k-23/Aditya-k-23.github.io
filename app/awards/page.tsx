"use client";

import { useState, useEffect } from "react";
import awardsJSON from "../../lib/awards.json";
import "../../app/global.css";

const fetchAwards = async () => {
  return awardsJSON["awards"];
};

const AwardsPage = () => {
  const [awards, setAwards] = useState<
    {
      id: number;
      category: string;
      value?: string;
      institution: string;
      name: string;
      description: string;
      year: string;
    }[]
  >([]);

  useEffect(() => {
    const getAwards = async () => {
      const awardsData = await fetchAwards();
      setAwards(awardsData);
    };

    getAwards();
  }, []);

  return (
    <div className="awards-container">
      <h1 className="page-title">My Awards</h1>
      <ul className="awards-list">
        {awards.map((award) => (
          <li key={award.id} className="award-item">
            <h2 className="award-name">{award.name}</h2>
            <p className="award-details">
              {award.institution}, {award.year}
            </p>
            <p className="award-description">{award.description}</p>
            <p className="award-category">Category: {award.category}</p>
            {award.value && (
              <p className="award-value">Value: ${award.value}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AwardsPage;
