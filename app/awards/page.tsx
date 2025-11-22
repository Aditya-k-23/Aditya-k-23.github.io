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

  const formatCurrency = (value: string): string => {
    const numValue = parseInt(value.replace(/,/g, ""));
    return new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(numValue);
  };

  return (
    <div className="awards-container">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter text-center">
        Awards & Recognition
      </h1>
      <ul className="awards-list">
        {awards.map((award) => (
          <li key={award.id} className="award-item">
            <h2 className="award-name mb-2">{award.name}</h2>
            <p className="award-details">
              {award.institution} • {award.year}
            </p>
            <p className="award-description">{award.description}</p>
            <div className="flex gap-4 mt-3">
              <span className="text-sm text-neutral-600 dark:text-neutral-400">
                {award.category}
              </span>
              {award.value && (
                <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                  {formatCurrency(award.value)}
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AwardsPage;
