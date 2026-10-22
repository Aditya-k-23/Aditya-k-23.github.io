// All public-facing facts live here so they can be checked and edited in one place.
// Disclosure rule: name systems at the capability level, with numbers and scale.
// No internal architecture.

export const site = {
  name: "Aditya Kulkarni",
  shortName: "Adi",
  url: "https://adityakulkarni.me",
  email: "adityaskulkarni23@gmail.com",
  description:
    "Fostering resilience, enabling freedom. Aditya Kulkarni is an engineering manager at BorderPass and is building TalkLab.",
  links: {
    github: "https://github.com/Aditya-k-23",
    linkedin: "https://www.linkedin.com/in/aditya-s-kulkarni/",
    orcid: "https://orcid.org/0000-0002-1836-1651",
    resume:
      "https://drive.google.com/file/d/1wFmW8Gbj99X0p9FjNWM39Mt9OAZ64zpU/view?usp=sharing",
  },
};

export type Role = {
  org: string;
  href: string;
  area: string;
  role: string;
  since: string;
  body: string;
  caseStudy?: string;
};

export const roles: Role[] = [
  {
    org: "BorderPass",
    area: "Mobility",
    href: "https://www.borderpass.ai/",
    role: "Engineering manager",
    since: "Since 2025",
    body: "AI-first legal tech for global mobility. My team builds the AI inside it: plain-English answers over case data, agent tooling for the legal team, and a harness that turns visa-flow specs into designs.",
    caseStudy: "/work/borderpass/",
  },
  {
    org: "TalkLab",
    area: "Learning",
    href: "https://demo.talklab.ca/",
    role: "Senior AI researcher",
    since: "Since 2026",
    body: "Oral exams run by an AI examiner. I built the platform and took it from prototype to a 1,500-student pilot at U of T Scarborough.",
    caseStudy: "/work/talklab/",
  },
  {
    org: "CAIR Lab",
    area: "Research",
    href: "https://www.linkedin.com/company/conversationalairesearchgroup/",
    role: "Researcher",
    since: "Since 2026",
    body: "The Conversational AI Research Group at U of T Scarborough. With Prof. Brian Harrington, I study how people learn, and how they work with AI.",
  },
  {
    org: "Data Sciences Institute, U of T",
    area: "Teaching",
    href: "https://datasciences.utoronto.ca/",
    role: "Instructor",
    since: "Ongoing",
    body: "I teach the Deploying AI bootcamp.",
  },
];

export type Publication = {
  title: string;
  venue: string;
  year: string;
  doi: string;
  poster?: string;
  abstract: string;
};

export const publications: Publication[] = [
  {
    title:
      "Literature Mapping: A Scaffolded, Scalable, Low-Overhead Research Experience",
    venue: "SIGCSE TS",
    year: "2025",
    doi: "https://doi.org/10.1145/3641554.3701938",
    poster:
      "https://drive.google.com/file/d/1rV9a_i3mU03xmOk_0Dj6ibeX-QBuJ1oW/view?usp=sharing",
    abstract:
      "There is a wealth of evidence that involving undergraduate students in research has positive impacts in a variety of areas, from representation and retention to outcomes and self-efficacy. However, developing and growing an undergraduate research program can be daunting, especially for institutions that do not have a large existing research enterprise. In this work, we detail a program that revolves around student-developed literature maps to help students gain the ability to read and assess research papers in a way that is accessible, robust, and requires relatively little faculty overhead. We further detail how this program has been run through 4 iterations, with a total of 47 students producing 5 posters or short papers, and 3 full papers. In this work, we provide our experiences using literature mapping projects to boot-strap an undergraduate research program and provide quantitative and qualitative analysis of the students who have participated. All of the materials, including sample spreadsheets, and scripts to generate LaTeX tables and figures are included for anyone wishing to undertake a literature mapping project of their own.",
  },
  {
    title:
      "A Framework for Evaluating the Impact of Production Quality on Coding Demonstration Videos",
    venue: "ITiCSE",
    year: "2024",
    doi: "https://doi.org/10.1145/3649405.3659507",
    poster:
      "https://drive.google.com/file/d/1e5oR_0aB38vB6o3KMpiztGf2PBRAhEl-/view?usp=sharing",
    abstract:
      "This work reports on a pilot study that examines the impact of the production quality of coding demonstration videos on student learning. With an increase in demand for asynchronous content, many instructors find the scripting and development of coding demonstration videos cumbersome and time consuming. However, it is an open question whether it is necessary to carefully script and produce videos to satisfy student desires or provide positive learning outcomes. In this study, participants watched coding demonstration videos, and the impact was measured on attitude surveys and content questions. Students were randomly assigned to watch either high production quality videos which were carefully scripted and edited for concision and accuracy, or low production quality videos which were created on-the-fly by teaching assistants with no preparation time or post video editing. In this pilot study, no statistical significance in test performance was found based on the production quality of the videos. There was an impact on responses to a single question on the CAS. This work develops a methodology for further evaluation of the impact of production quality of coding demonstration videos that will eventually guide practitioners on the time and effort required to maximize student benefit.",
  },
  {
    title: "Finding and Categorizing COVID-19 Papers in CS Education",
    venue: "SIGCSE TS",
    year: "2023",
    doi: "https://doi.org/10.1145/3545947.3576288",
    poster:
      "https://drive.google.com/file/d/1dMXvtjuDkpp9C6JiFXTr847ZRv6IkI8j/view?usp=sharing",
    abstract:
      "In the first 2 years following the outbreak of COVID-19, many papers have been published regarding the impacts and adaptations of the pandemic on computer science education. As a first step towards a systematic literature mapping, this study attempts to develop a process for searching and a categorization schema for papers. The goal of this project is to produce a literature map which will be used to provide an initial assessment of the state of research, as well as a framework for future research directions. Limiting our search to papers published in the ACM Digital Library in the publications sponsored by SIGCSE, we first create and validate a query and inclusion/exclusion criteria for papers. Using a double evaluator model, we find high agreement with a Cohen’s Kappa of 0.93, resulting in 42 papers across 6 conference proceedings. We further validate these findings by independent checking against all papers from SIGCSE2021 TS. We then develop categories across three dimensions: In activity: we find remote teaching, remote assessment, remote work, virtual events and general impact of pandemic. In measurement: we find grades, non-grade assessment, attendance/retention, affect/perception, and mental health. In population: we find K-12 students, university/college students, Educators, and the sub-categories of introductory/CS0/CS1 students, gender, and race. Double rater assessments initially produced a relatively low Kappa score of 0.58, but after protocol revision, and the production of additional categories, the kappa score was raised to a very high 0.94.",
  },
];

// One-line plain-language gloss for each paper, shown on the home page.
export const paperGloss: Record<string, string> = {
  "2025": "A low-overhead model for undergraduate research, run over four cohorts with 47 students.",
  "2024": "A controlled pilot on whether polished coding videos teach better than unscripted ones. We found no significant difference in test scores.",
  "2023": "A search protocol and category scheme for pandemic-era research in CS education.",
};

export const talks = [
  {
    title: "Voices of CMS, with Prof. Brian Harrington",
    kind: "Podcast",
    url: "https://www.youtube.com/watch?v=7lY16KvM2M8",
  },
  {
    title: "Voices of CMS, with Prof. Kathleen Smith",
    kind: "Podcast",
    url: "https://www.youtube.com/watch?v=rPqYNHLfSWk",
  },
  {
    title: "Voices of CMS, with Prof. Sotirios Damouras",
    kind: "Podcast",
    url: "https://www.youtube.com/watch?v=bT_L6cMBj40",
  },
  {
    title: "AI ethics panel, DS3 Datathon",
    kind: "Panel",
    url: "https://www.youtube.com/watch?v=VEJsijYmVk0",
  },
  {
    title: "Pelicula, a movie recommendation engine",
    kind: "Demo",
    url: "https://www.youtube.com/watch?v=tI23EmhWCGc",
  },
];

export const recognition = [
  { year: "2024", name: "University of Toronto Student Leadership Award" },
  {
    year: "2023",
    name: "Computer and Mathematical Sciences Citizenship Award, UTSC",
  },
  { year: "2020–24", name: "International Scholar Award, University of Toronto" },
  { year: "2020–24", name: "University of Toronto Scholar" },
  { year: "2020–24", name: "Dean’s List Scholar" },
];
