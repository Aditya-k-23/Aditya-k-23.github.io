import type { Metadata } from "next";
import { CaseHead, CaseSection, NextCase } from "../../components/case";
import { ExamDiagram } from "../../components/diagrams";

export const metadata: Metadata = {
  title: "TalkLab",
  description:
    "Aditya Kulkarni built the platform behind TalkLab's AI oral exams and took it to a 1,500-student pilot at U of T Scarborough.",
  alternates: { canonical: "/work/talklab/" },
};

export default function TalkLab() {
  return (
    <>
      <CaseHead
        title="TalkLab"
        lede="Oral exams run by an AI examiner, so every student in a large course can be assessed in conversation. I built the platform and took it from prototype to its first pilot."
        facts={[
          { label: "Role", value: "Senior AI engineer, advisor" },
          { label: "Since", value: "2026" },
          { label: "Pilot", value: "1,500 students" },
          { label: "Where", value: "U of T Scarborough" },
        ]}
      />

      <CaseSection label="Pilot">
        <h2>A real-time voice examiner</h2>
        <p>
          I built the voice examiner students talk to, and the tools instructors
          use to enrol and invite a whole course. It runs on LiveKit, Deepgram,
          ElevenLabs, Azure OpenAI and AWS.
        </p>
        <ExamDiagram />
      </CaseSection>

      <CaseSection label="Reliability">
        <h2>Grading that holds steady</h2>
        <p>
          The examiner and the scorer share a contract that&rsquo;s tested on
          every change. A prompt update can&rsquo;t change what a grade measures
          without the tests catching it.
        </p>
      </CaseSection>

      <CaseSection label="Next">
        <h2>Research</h2>
        <p>
          I&rsquo;m planning research on how students respond to an AI examiner
          and what oral assessment needs to work at scale.
        </p>
      </CaseSection>

      <NextCase href="/work/borderpass/" label="BorderPass" />
    </>
  );
}
