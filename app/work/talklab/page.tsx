import type { Metadata } from "next";
import { CaseHead, CaseSection, NextCase } from "../../components/case";
import { ExamDiagram } from "../../components/diagrams";

export const metadata: Metadata = {
  title: "TalkLab",
  description:
    "Aditya Kulkarni built most of the platform behind TalkLab's AI oral exams, piloted with about 1,500 students at U of T Scarborough.",
  alternates: { canonical: "/work/talklab/" },
};

export default function TalkLab() {
  return (
    <>
      <CaseHead
        notes={["Senior AI engineer", "Advisor", "Since 2026"]}
        title="TalkLab"
        lede="TalkLab runs oral exams with an AI examiner, so every student in a large course can be assessed in conversation. I built most of the platform for its first pilot."
      />

      <CaseSection
        notes={["U of T Scarborough", "~1,500 students", "LiveKit, Deepgram, ElevenLabs, Azure OpenAI, AWS"]}
      >
        <h3>Pilot</h3>
        <p>
          The pilot ran at U of T Scarborough with about 1,500 students. I built
          the real-time voice examiner and the tools instructors use to enrol
          and invite a whole course.
        </p>
        <ExamDiagram />
      </CaseSection>

      <CaseSection notes={["Continuous integration"]}>
        <h3>Consistent grading</h3>
        <p>
          The examiner and the scorer share a contract that&rsquo;s tested on
          every change. A prompt update can&rsquo;t change what a grade measures
          without the tests catching it.
        </p>
      </CaseSection>

      <CaseSection notes={["Planned"]}>
        <h3>Research</h3>
        <p>
          I&rsquo;m planning research on how students respond to an AI examiner
          and what oral assessment needs to work at scale.
        </p>
      </CaseSection>

      <NextCase href="/work/borderpass/" label="BorderPass case study" />
    </>
  );
}
