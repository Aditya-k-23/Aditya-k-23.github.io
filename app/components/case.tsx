import Link from "next/link";

export function CaseHead({
  title,
  lede,
  facts,
}: {
  title: string;
  lede: string;
  facts: { label: string; value: string }[];
}) {
  return (
    <section className="case-head grid">
      <h1>{title}</h1>
      <p className="lede">{lede}</p>
      <dl className="facts">
        {facts.map((f) => (
          <div key={f.label}>
            <dt>{f.label}</dt>
            <dd>{f.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function CaseSection({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="section grid case-section">
      <p className="label">{label}</p>
      <div className="content prose">{children}</div>
    </section>
  );
}

export function NextCase({ href, label }: { href: string; label: string }) {
  return (
    <div className="next-case">
      <span>Next</span>
      <Link href={href}>{label}</Link>
    </div>
  );
}
