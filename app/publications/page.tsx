"use client";

import React, { useEffect, useState } from "react";

// Mock function to fetch publication data
const fetchPublications = async () => {
  return [
    {
      id: 1,
      title: "Finding and Categorizing COVID-19 Papers in CS Education",
      journal: "SIGCSE 2023",
      date: "Mar 15, 2023",
      url: "https://doi.org/10.1145/3545947.3576288",
      posterurl:
        "https://drive.google.com/file/d/1dMXvtjuDkpp9C6JiFXTr847ZRv6IkI8j/view?usp=sharing",
      abstract:
        "In the first 2 years following the outbreak of COVID-19, many papers have been published regarding the impacts and adaptations of the pandemic on computer science education. As a first step towards a systematic literature mapping, this study attempts to develop a process for searching and a categorization schema for papers. The goal of this project is to produce a literature map which will be used to provide an initial assessment of the state of research, as well as a framework for future research directions.  Limiting our search to papers published in the ACM Digital Library in the publications sponsored by SIGCSE, we first create and validate a query and inclusion/exclusion criteria for papers. Using a double evaluator model, we find high agreement with a Cohen's Kappa of 0.93, resulting in 42 papers across 6 conference proceedings. We further validate these findings by independent checking against all papers from SIGCSE2021 TS. We then develop categories across three dimensions: In activity: we find remote teaching, remote assessment, remote work, virtual events and general impact of pandemic. In measurement: we find grades, non-grade assessment, attendance/retention, affect/perception, and mental health. In population: we find K-12 students, university/college students, Educators, and the sub-categories of introductory/CS0/CS1 students, gender, and race. Double rater assessments initially produced a relatively low Kappa score of 0.58, but after protocol revision, and the production of additional categories, the kappa score was raised to a very high 0.94.",
    },
    {
      id: 2,
      title:
        "A Framework for Evaluating the Impact of Production Quality on Coding Demonstration Videos",
      journal: "ITiCSE 2024",
      date: "July 18, 2024",
      url: "https://doi.org/10.1145/3649405.3659507",
      posterurl:
        "https://drive.google.com/file/d/1e5oR_0aB38vB6o3KMpiztGf2PBRAhEl-/view?usp=sharing",
      abstract:
        "This work reports on a pilot study that examines the impact of the production quality of coding demonstration videos on student learning. With an increase in demand for asynchronous content, many instructors find the scripting and development of coding demonstration videos cumbersome and time consuming. However, it is an open question whether it is necessary to carefully script and produce videos to satisfy student desires or provide positive learning outcomes. In this study, participants watched coding demonstration videos, and the impact was measured on attitude surveys and content questions. Students were randomly assigned to watch either high production quality videos which were carefully scripted and edited for concision and accuracy, or low production quality videos which were created on-the-fly by teaching assistants with no preparation time or post video editing. In this pilot study, no statistical significance in test performance was found based on the production quality of the videos. There was an impact on responses to a single question on the CAS. This work develops a methodology for further evaluation of the impact of production quality of coding demonstration videos that will eventually guide practitioners on the time and effort required to maximize student benefit.",
    },
    {
      id: 3,
      title:
        "Literature Mapping: A Scaffolded, Scalable, Low-Overhead Research Experience",
      journal: "SIGCSE 2025",
      date: "January 12, 2025",
      url: "Coming Soon!",
      posterurl:
        "https://drive.google.com/file/d/1rV9a_i3mU03xmOk_0Dj6ibeX-QBuJ1oW/view?usp=sharing",
      abstract:
        "There is a wealth of evidence that involving undergraduate students in research has positive impacts in a variety of areas, from representation and retention to outcomes and self-efficacy. However, developing and growing an undergraduate research program can be daunting, especially for institutions that do not have a large existing research enterprise. In this work, we detail a program that revolves around student-developed literature maps to help students gain the ability to read and assess research papers in a way that is accessible, robust, and requires relatively little faculty overhead. We further detail how this program has been run through 4 iterations, with a total of 47 students producing 5 posters or short papers, and 3 full papers. In this work, we provide our experiences using literature mapping projects to boot-strap an undergraduate research program and provide quantitative and qualitative analysis of the students who have participated. All of the materials, including sample spreadsheets, and scripts to generate LaTeX tables and figures are included for anyone wishing to undertake a literature mapping project of their own.",
    },
  ];
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
