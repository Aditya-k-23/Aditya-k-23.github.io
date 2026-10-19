import Link from "next/link";

export function CaseHead({
  notes,
  title,
  lede,
}: {
  notes: string[];
  title: string;
  lede: string;
}) {
  return (
    <section className="case-head row">
      <div className="note">
        {notes.map((n) => (
          <p key={n}>{n}</p>
        ))}
      </div>
      <div>
        <h1>{title}</h1>
        <p className="lede">{lede}</p>
      </div>
    </section>
  );
}

export function CaseSection({
  notes,
  children,
}: {
  notes: string[];
  children: React.ReactNode;
}) {
  return (
    <section className="block row">
      <div className="note">
        {notes.map((n) => (
          <p key={n}>{n}</p>
        ))}
      </div>
      <div className="prose">{children}</div>
    </section>
  );
}

export function NextCase({ href, label }: { href: string; label: string }) {
  return (
    <div className="row">
      <div />
      <p className="next-case">
        <Link href={href}>{label}</Link>
      </p>
    </div>
  );
}
