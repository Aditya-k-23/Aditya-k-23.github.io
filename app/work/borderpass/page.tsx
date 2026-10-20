import type { Metadata } from "next";
import { CaseHead, CaseSection, NextCase } from "../../components/case";
import { LunaDiagram } from "../../components/diagrams";

export const metadata: Metadata = {
  title: "BorderPass",
  description:
    "Aditya Kulkarni leads an engineering team and owns the platform architecture at BorderPass, an immigration platform carrying 300+ visa cases a month.",
  alternates: { canonical: "/work/borderpass/" },
};

export default function BorderPass() {
  return (
    <>
      <CaseHead
        notes={["Software lead", "Joined May 2025", "Leading since Jan 2026"]}
        title="BorderPass"
        lede="BorderPass is an immigration platform for people moving to Canada. Applicants prepare their files online and lawyers review them. I lead an engineering team and own the platform architecture."
      />

      <CaseSection notes={["Natural language to SQL"]}>
        <h3>Luna and the agents console</h3>
        <p>
          Luna turns plain-English questions into SQL over case data. With the
          agents console, it gives the legal team direct access to that data, so
          they get answers without filing a request with engineering.
        </p>
        <LunaDiagram />
      </CaseSection>

      <CaseSection notes={["300+ cases a month", "Four lawyers", "−57% p95 load time"]}>
        <h3>Platform</h3>
        <p>
          The platform lets four lawyers carry 300+ visa cases a month. I
          rebuilt the legal console they work in and cut its p95 load time by
          57%.
        </p>
        <p>
          I set our strategy for hosting language models in Canada, so applicant
          data stays in the country.
        </p>
      </CaseSection>

      <CaseSection notes={["In progress"]}>
        <h3>Design pipeline</h3>
        <p>
          I&rsquo;m building a pipeline that turns a written flow spec into
          designs made from our component library. New visa flows start from
          the design system instead of a blank canvas.
        </p>
      </CaseSection>

      <CaseSection notes={["Leadership"]}>
        <h3>Team</h3>
        <p>
          I lead a team of engineers and interns. I set up our on-call rotation
          and led the code-quality overhaul that gave each business rule a
          single home.
        </p>
      </CaseSection>

      <NextCase href="/work/talklab/" label="TalkLab case study" />
    </>
  );
}
