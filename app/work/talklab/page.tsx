import type { Metadata } from "next";
import { CaseHead, CaseSection, NextCase } from "../../components/case";
import { ExamDiagram } from "../../components/diagrams";

export const metadata: Metadata = {
  title: "TalkLab",
  description:
    "How Aditya Kulkarni built the platform behind TalkLab's AI oral exams, piloted with about 1,500 students at U of T Scarborough.",
  alternates: { canonical: "/work/talklab/" },
};

export default function TalkLab() {
  return (
    <>
      <CaseHead
        notes={["TalkLab", "AI oral assessment", "Senior AI engineer and advisor"]}
        title="Oral exams at the scale of a lecture hall."
        lede="An oral exam is still the clearest way to find out whether someone understands something. It’s also the hardest to scale, because it happens one student at a time. TalkLab gives every student that conversation, with an AI asking the questions."
      />

      <CaseSection notes={["Pilot", "U of T Scarborough", "~1,500 students"]}>
        <h3>From prototype to a real course</h3>
        <p>
          I built most of the platform behind the first pilot: the live voice
          examiner, the scoring pipeline, and the tooling that lets an
          instructor invite a whole course at once. Roughly 1,500 students took
          part.
        </p>
        <ExamDiagram />
      </CaseSection>

      <CaseSection notes={["Contracts"]}>
        <h3>Grades that mean the same thing tomorrow</h3>
        <p>
          An examiner and a scorer have to agree on what was asked. We treat
          that agreement as a contract and test it on every change, so a prompt
          tweak can&rsquo;t quietly change what a grade means.
        </p>
      </CaseSection>

      <CaseSection
        notes={["Voice", "LiveKit, Deepgram, ElevenLabs, Azure OpenAI, AWS"]}
      >
        <h3>Conversation in real time</h3>
        <p>
          In a spoken exam, silence reads as judgment. Keeping the examiner
          quick isn&rsquo;t polish. It&rsquo;s part of grading fairly.
        </p>
      </CaseSection>

      <CaseSection notes={["Research ahead"]}>
        <h3>The questions it raises</h3>
        <p>
          Building the examiner left me with questions I want to answer
          properly: how students respond to a machine asking the questions,
          and what it takes for oral assessment to hold up at scale.
        </p>
      </CaseSection>

      <NextCase href="/work/borderpass/" label="Next: BorderPass, immigration software" />
    </>
  );
}
