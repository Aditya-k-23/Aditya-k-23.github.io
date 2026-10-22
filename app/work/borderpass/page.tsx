import type { Metadata } from "next";
import { CaseHead, CaseSection, NextCase } from "../../components/case";
import { LunaDiagram } from "../../components/diagrams";

export const metadata: Metadata = {
  title: "BorderPass",
  description:
    "Aditya Kulkarni leads an engineering team at BorderPass, a multi-jurisdictional, AI-first global mobility platform carrying 300+ visa cases a month.",
  alternates: { canonical: "/work/borderpass/" },
};

export default function BorderPass() {
  return (
    <>
      <CaseHead
        title="BorderPass"
        lede="AI-first legal tech for global mobility, built to work across jurisdictions. Applicants prepare their visa files online and lawyers review them. I lead the engineering team building the AI inside it."
        facts={[
          { label: "Role", value: "Engineering manager" },
          { label: "Since", value: "May 2025" },
          { label: "Visa cases", value: "300+ a month" },
          { label: "Scope", value: "Multi-jurisdictional" },
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

      <CaseSection label="Design tooling">
        <h2>An AI-first design tool for product flows</h2>
        <p>
          I&rsquo;m building an AI-first tool for designing product flows.
          Designers describe a flow by prompting, and it produces designs built
          from our own component library, ready for handoff to engineering.
        </p>
      </CaseSection>

      <CaseSection label="Global visas">
        <h2>One platform, many jurisdictions</h2>
        <p>
          I built the global visas architecture that lets BorderPass take on a
          new country&rsquo;s visas without rebuilding the product. It&rsquo;s
          the foundation of our scale-up beyond a single jurisdiction.
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
