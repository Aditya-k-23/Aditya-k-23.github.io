import type { Metadata } from "next";
import { CaseHead, CaseSection, NextCase } from "../../components/case";
import { LunaDiagram } from "../../components/diagrams";

export const metadata: Metadata = {
  title: "BorderPass",
  description:
    "How Aditya Kulkarni leads engineering at BorderPass, an immigration legal tech platform handling more than 300 visa cases a month.",
  alternates: { canonical: "/work/borderpass/" },
};

export default function BorderPass() {
  return (
    <>
      <CaseHead
        notes={["BorderPass", "Immigration legal tech", "Software lead", "Team of five"]}
        title="Software for the person filing and the lawyer checking."
        lede="A visa application is a long form with a short tolerance for error. Miss a document or misread a rule and an applicant can lose months. So the software has to be quick for the lawyer, forgiving for the applicant, and never clever at the expense of being right."
      />

      <CaseSection notes={["Luna", "Natural language to SQL"]}>
        <h3>Questions without a ticket</h3>
        <p>
          Luna lets the legal team ask questions of case data in plain English
          and get an answer without an engineer in the loop.
        </p>
        <p>
          Nobody should have to file a ticket to learn where a case stands.
        </p>
        <LunaDiagram />
      </CaseSection>

      <CaseSection notes={["Agents console"]}>
        <h3>The legal team, unblocked</h3>
        <p>
          Alongside Luna, the agents console gives the legal team direct access
          to case data. The people closest to an application can act on what
          they see, the moment they see it.
        </p>
      </CaseSection>

      <CaseSection notes={["Platform", "300+ cases a month", "Four lawyers", "−57% p95 load time"]}>
        <h3>Throughput without shortcuts</h3>
        <p>
          Four lawyers carry more than 300 visa cases a month. I rebuilt the
          console they live in and cut its p95 load time by 57%, because a
          lawyer waiting on a page isn&rsquo;t reviewing a case.
        </p>
        <p>
          Applicant data stays in Canada, including when it passes through a
          language model. For people sharing passports and immigration
          histories, where their data lives isn&rsquo;t a footnote.
        </p>
      </CaseSection>

      <CaseSection notes={["In progress"]}>
        <h3>Designs that start on the system</h3>
        <p>
          Visa flows change often, and each one used to begin as a blank canvas.
          I&rsquo;m building a harness that turns a written flow spec into
          designs that already use our components, so designers can spend
          their time on judgment instead of layout.
        </p>
      </CaseSection>

      <CaseSection notes={["Team", "Two engineers, three interns"]}>
        <h3>Leading</h3>
        <p>
          Most of my job is making good decisions cheap to repeat. That means
          review standards people can actually follow, an on-call rotation I
          set up from scratch, and a codebase where each business rule lives in
          one place.
        </p>
        <p>
          The measure I trust is how many decisions the team gets right
          without me in the room.
        </p>
      </CaseSection>

      <NextCase href="/work/talklab/" label="Next: TalkLab, oral exams at scale" />
    </>
  );
}
