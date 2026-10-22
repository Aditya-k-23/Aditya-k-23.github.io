import type { Metadata } from "next";
import { CaseHead, CaseSection, NextCase } from "../../components/case";
import { LunaDiagram } from "../../components/diagrams";

export const metadata: Metadata = {
  title: "BorderPass",
  description:
    "Aditya Kulkarni leads an engineering team at BorderPass, building the AI inside an immigration platform that carries 300+ visa cases a month.",
  alternates: { canonical: "/work/borderpass/" },
};

export default function BorderPass() {
  return (
    <>
      <CaseHead
        title="BorderPass"
        lede="AI-first legal tech for global mobility. Applicants prepare their visa files online and lawyers review them. I lead the engineering team building the AI inside it."
        facts={[
          { label: "Role", value: "Engineering manager" },
          { label: "Since", value: "May 2025" },
          { label: "Visa cases", value: "300+ a month" },
          { label: "Applicant data", value: "Stays in Canada" },
        ]}
      />

      <CaseSection label="Natural language to SQL">
        <h2>Luna: case data in plain English</h2>
        <p>
          Luna turns a plain-English question into SQL over live case data and
          returns the answer. Together with our agents console, it gives the
          legal team direct access to their own data, with no engineer in the
          loop.
        </p>
        <LunaDiagram />
      </CaseSection>

      <CaseSection label="Agent harness">
        <h2>AI that designs on our terms</h2>
        <p>
          I&rsquo;m building a harness that turns a written visa-flow spec into
          designs made from our own component library. Designers direct it by
          prompting, and the AI follows BorderPass&rsquo;s rules instead of a
          generic model&rsquo;s defaults.
        </p>
      </CaseSection>

      <CaseSection label="Model hosting">
        <h2>Language models, hosted in Canada</h2>
        <p>
          I set our strategy for hosting language models in Canada. Applicants
          share passports and immigration histories, so their data never leaves
          the country, even when a model reads it.
        </p>
      </CaseSection>

      <CaseSection label="Platform">
        <h2>Four lawyers, 300+ cases a month</h2>
        <p>
          I rebuilt the legal console the lawyers work in and cut its p95 load
          time by 57%.
        </p>
      </CaseSection>

      <CaseSection label="Leadership">
        <h2>From engineer to engineering manager</h2>
        <p>
          My work reaches past engineering. I mapped 60 global mobility
          organizations, from relocation firms to AI-native startups, to show
          where BorderPass can win.
        </p>
      </CaseSection>

      <NextCase href="/work/talklab/" label="TalkLab" />
    </>
  );
}
