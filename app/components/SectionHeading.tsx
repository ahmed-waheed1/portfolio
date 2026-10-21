type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  accent: string;
};

// Small uppercase label over a two-tone heading, matching the hero's
// dark-then-accent title.
export default function SectionHeading({
  id,
  eyebrow,
  title,
  accent,
}: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-accent">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-gray-900"
      >
        {title} <span className="text-brand-accent">{accent}</span>
      </h2>
    </div>
  );
}
