// One diagram per case study. Capability level only: what flows where and who
// checks it, never how the internals are built. Colours come from CSS tokens.

function Arrow({
  x1,
  y1,
  x2,
  y2,
  keyed = false,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  keyed?: boolean;
}) {
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const s = 6;
  const p1 = [x2 - s * Math.cos(angle - 0.45), y2 - s * Math.sin(angle - 0.45)];
  const p2 = [x2 - s * Math.cos(angle + 0.45), y2 - s * Math.sin(angle + 0.45)];
  return (
    <g>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        className={keyed ? "dg-line key" : "dg-line"}
      />
      <polygon
        points={`${x2},${y2} ${p1[0]},${p1[1]} ${p2[0]},${p2[1]}`}
        className={keyed ? "dg-arrow key" : "dg-arrow"}
      />
    </g>
  );
}

function Box({
  x,
  y,
  w,
  h = 52,
  label,
  sub,
  keyed = false,
}: {
  x: number;
  y: number;
  w: number;
  h?: number;
  label: string;
  sub?: string;
  keyed?: boolean;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={3}
        className={keyed ? "dg-box key" : "dg-box"}
      />
      <text
        x={x + w / 2}
        y={sub ? y + h / 2 - 3 : y + h / 2 + 5}
        textAnchor="middle"
        className="dg-label"
      >
        {label}
      </text>
      {sub && (
        <text
          x={x + w / 2}
          y={y + h / 2 + 14}
          textAnchor="middle"
          className={keyed ? "dg-small key" : "dg-small"}
        >
          {sub}
        </text>
      )}
    </g>
  );
}

export function LunaDiagram() {
  return (
    <figure className="diagram">
      <svg
        viewBox="0 0 600 190"
        className="wide"
        role="img"
        aria-labelledby="luna-title luna-desc"
      >
        <title id="luna-title">How Luna answers a question</title>
        <desc id="luna-desc">
          Someone on the legal team asks a question in plain English. Luna turns
          it into a SQL query over case data and returns the answer directly to
          them, with no engineer in between.
        </desc>
        <Box x={0} y={20} w={150} label="A question" sub="plain English" />
        <Box x={225} y={20} w={150} label="Luna" sub="writes the SQL" keyed />
        <Box x={450} y={20} w={150} label="Case data" />
        <Arrow x1={150} y1={46} x2={223} y2={46} />
        <Arrow x1={375} y1={46} x2={448} y2={46} />
        <Box
          x={150}
          y={124}
          w={300}
          h={52}
          label="An answer"
          sub="straight back to the person who asked"
          keyed
        />
        <Arrow x1={525} y1={72} x2={452} y2={140} />
        <path
          d="M150 150 H75 V74"
          className="dg-line key"
          strokeDasharray="3 4"
        />
        <polygon points="75,72 71,80 79,80" className="dg-arrow key" />
      </svg>
      <svg viewBox="0 0 320 330" className="tall" role="img" aria-label="Someone on the legal team asks a question in plain English; Luna turns it into SQL over case data and the answer goes straight back to them.">
        <Box x={40} y={0} w={240} label="A question" sub="plain English" />
        <Arrow x1={160} y1={52} x2={160} y2={84} />
        <Box x={40} y={86} w={240} label="Luna" sub="writes the SQL" keyed />
        <Arrow x1={160} y1={138} x2={160} y2={170} />
        <Box x={40} y={172} w={240} label="Case data" />
        <Arrow x1={160} y1={224} x2={160} y2={256} />
        <Box x={40} y={258} w={240} label="An answer" sub="straight back to the person who asked" keyed />
        <path d="M40 284 H12 V26 H36" className="dg-line key" strokeDasharray="3 4" />
        <polygon points="38,26 30,22 30,30" className="dg-arrow key" />
      </svg>
      <figcaption>
        The legal team asks and gets an answer. Engineering isn&rsquo;t a step
        in the loop.
      </figcaption>
    </figure>
  );
}

export function ExamDiagram() {
  return (
    <figure className="diagram">
      <svg
        viewBox="0 0 600 200"
        className="wide"
        role="img"
        aria-labelledby="exam-title exam-desc"
      >
        <title id="exam-title">How a TalkLab oral exam flows</title>
        <desc id="exam-desc">
          A student talks with an AI examiner in real time. The conversation
          becomes a transcript, which a scorer grades against the course rubric.
          The examiner and the scorer share one contract describing what was
          asked, and that contract is tested on every change.
        </desc>
        <Box x={0} y={24} w={130} label="Student" sub="speaks" />
        <Box x={190} y={24} w={150} label="AI examiner" sub="voice, real time" keyed />
        <Box x={400} y={24} w={200} label="Transcript" sub="what was asked and said" />
        <Arrow x1={188} y1={58} x2={132} y2={58} />
        <Arrow x1={130} y1={42} x2={188} y2={42} />
        <Arrow x1={340} y1={50} x2={398} y2={50} />
        <Box x={400} y={130} w={200} label="Scorer" sub="grades against the rubric" keyed />
        <Arrow x1={500} y1={76} x2={500} y2={128} />
        <Box x={150} y={130} w={190} label="Shared contract" sub="tested on every change" />
        <path d="M265 76 V128" className="dg-line key" strokeDasharray="3 4" />
        <path d="M340 156 H398" className="dg-line key" strokeDasharray="3 4" />
      </svg>
      <svg viewBox="0 0 320 330" className="tall" role="img" aria-label="A student talks with an AI examiner in real time; the transcript goes to a scorer that grades against the rubric. Examiner and scorer share a contract that is tested on every change.">
        <Box x={0} y={0} w={200} label="Student" sub="speaks" />
        <Arrow x1={90} y1={52} x2={90} y2={84} />
        <Arrow x1={110} y1={84} x2={110} y2={54} />
        <Box x={0} y={86} w={200} label="AI examiner" sub="voice, real time" keyed />
        <Arrow x1={100} y1={138} x2={100} y2={170} />
        <Box x={0} y={172} w={200} label="Transcript" sub="what was asked and said" />
        <Arrow x1={100} y1={224} x2={100} y2={256} />
        <Box x={0} y={258} w={200} label="Scorer" sub="grades against the rubric" keyed />
        <Box x={228} y={150} w={92} h={74} label="Contract" sub="shared" />
        <path d="M200 112 H274 V148" className="dg-line key" strokeDasharray="3 4" />
        <path d="M200 284 H274 V226" className="dg-line key" strokeDasharray="3 4" />
      </svg>
      <figcaption>
        The examiner and the scorer agree on what was asked, and that agreement
        is tested, not assumed.
      </figcaption>
    </figure>
  );
}
