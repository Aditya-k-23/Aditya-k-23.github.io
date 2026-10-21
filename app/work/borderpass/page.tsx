import type { Metadata } from "next";
import { CaseHead, CaseSection, NextCase } from "../../components/case";
import { LunaDiagram } from "../../components/diagrams";

export const metadata: Metadata = {
  title: "BorderPass",
  description:
    "Aditya Kulkarni is an engineering manager at BorderPass, an immigration platform carrying 300+ visa cases a month.",
  alternates: { canonical: "/work/borderpass/" },
};

export default function BorderPass() {
  return (
    <>
      <CaseHead
        title="BorderPass"
        lede="An immigration platform for people moving to Canada. Applicants prepare their files online and lawyers review them. I lead an engineering team building it."
        facts={[
          { label: "Role", value: "Engineering manager" },
          { label: "Since", value: "May 2025" },
          { label: "Visa cases", value: "300+ a month" },
          { label: "Console load time", value: "−57% at p95" },
        ]}
      />

      <CaseSection label="Natural language to SQL">
        <h2>Luna and the agents console</h2>
        <p>
          Luna turns plain-English questions into SQL over case data. With the
          agents console, it gives the legal team direct access to that data, so
          they get answers without filing a request with engineering.
        </p>
        <LunaDiagram />
      </CaseSection>

      <CaseSection label="Platform">
        <h2>Four lawyers, 300+ cases a month</h2>
        <p>
          I rebuilt the legal console the lawyers work in and cut its p95 load
          time by 57%.
        </p>
        <p>
          I set our strategy for hosting language models in Canada, so applicant
          data stays in the country.
        </p>
      </CaseSection>

      <CaseSection label="In progress">
        <h2>Design pipeline</h2>
        <p>
          I&rsquo;m building a pipeline that turns a written flow spec into
          designs made from our component library. New visa flows start from
          the design system instead of a blank canvas.
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
