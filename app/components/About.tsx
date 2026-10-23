import SectionHeading from "./SectionHeading";

const FACTS = [
  { value: "6", label: "Flutter apps built end to end, all open on GitHub" },
  { value: "900+", label: "Automated tests in Hayya, my prayer-times app" },
  {
    value: "98%",
    label: "Final score in NTI's Mobile App Development program",
  },
  { value: "2", label: "Years on the Flutter track at GDG on Campus Zagazig" },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="relative">
      {/* fades the hero's pale cloud tops into the white page below */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-full h-20 bg-linear-to-b from-transparent to-white lg:h-48"
      />

      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center gap-16 px-6 pt-12 pb-24 lg:px-12">
        <div className="flex min-w-0 flex-[1_1_28rem] flex-col gap-6">
          <SectionHeading
            id="about-heading"
            eyebrow="About"
            title="Clean code,"
            accent="real apps"
          />
          <p className="text-lg leading-8 text-gray-800">
            I&apos;m a Flutter developer who builds cross-platform apps with
            clean architecture, solid state management and thorough tests. My
            apps range from a real-time multiplayer quiz on Firebase to an
            offline prayer-times app in closed testing on Google Play, and every
            one of them works fully in Arabic and English, right to left
            included.
          </p>
          <p className="text-lg leading-8 text-gray-800">
            I graduated in 2026 with a Bachelor of Computers and Information
            from Zagazig University, came through the ALX Software Engineering
            Program and served on the Flutter Core Team at GDG on Campus
            Zagazig. I&apos;m looking for a junior role where I can ship real
            features and keep learning.
          </p>
          <p className="text-gray-600">
            Based in Egypt · Arabic (native) · English (professional)
          </p>
        </div>

        <dl className="grid min-w-0 flex-[1_1_24rem] grid-cols-2 gap-4">
          {FACTS.map((fact) => (
            // label first for screen readers, shown under the number
            <div
              key={fact.value}
              className="flex flex-col-reverse justify-end gap-2 rounded-2xl bg-brand-sky/12 p-5 sm:p-7"
            >
              <dt className="leading-snug text-gray-800">{fact.label}</dt>
              <dd className="font-heading text-4xl font-extrabold leading-none text-brand-accent">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
