import SectionHeading from "./SectionHeading";

const EXPERIENCE = [
  {
    dates: "2023 – 2025",
    role: "Flutter Core Team Member",
    org: "GDG on Campus Zagazig",
    points: [
      "Selected for the 2024–2025 Flutter Core Team after a year as a Flutter track member, helping organize and deliver the chapter's Flutter sessions and activities.",
      "Supported fellow students through tech talks and tutorials on Flutter and Dart.",
    ],
  },
  {
    dates: "Feb 2025 – Mar 2025",
    role: "Mobile App Development",
    org: "Digital Egypt Youth Program, NTI",
    points: [
      "Earned a 98% final score across 90 technical hours and 30 hours of freelancing coaching.",
      "Designed and delivered hands-on mobile app projects with a focus on practical, client-ready development.",
    ],
  },
  {
    dates: "Feb 2023 – Feb 2024",
    role: "Software Engineering Program",
    org: "ALX Africa",
    points: [
      "Selected from thousands of applicants for an intensive 12-month, project-based program covering C, shell scripting, system engineering and DevOps.",
      "Contributed to open source during Hacktoberfest 2023, and strengthened my skills in data structures, algorithms, Linux and Git.",
    ],
  },
];

const CERTIFICATIONS = [
  {
    name: "Mobile App Development (98%)",
    issuer: "Digital Egypt Youth Program, NTI · 2025",
  },
  { name: "Software Engineering Program", issuer: "ALX Africa · 2024" },
  {
    name: "Flutter Core Team, Certificate of Completion",
    issuer: "GDG on Campus Zagazig · 2024–2025",
  },
  {
    name: "Flutter Member, Certificate of Appreciation",
    issuer: "GDSC Zagazig · 2023–2024",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="mx-auto flex w-full max-w-7xl flex-wrap gap-16 px-6 py-24 lg:px-12"
    >
      <div className="flex min-w-0 flex-[999_1_32rem] flex-col gap-10">
        <SectionHeading
          id="experience-heading"
          eyebrow="Experience"
          title="Where I've"
          accent="grown"
        />

        <ol className="flex flex-col gap-10 border-l-2 border-brand-sky pl-8">
          {EXPERIENCE.map((item) => (
            <li key={item.role} className="relative flex flex-col gap-2">
              <span
                aria-hidden="true"
                className="absolute top-1 -left-[2.6rem] size-4 rounded-full border-[3px] border-white bg-brand-accent"
              />
              <p className="text-sm font-semibold text-brand-accent">
                {item.dates}
              </p>
              <h3 className="text-xl font-semibold text-gray-900">
                {item.role}
                <span className="font-normal text-gray-600"> · {item.org}</span>
              </h3>
              <ul className="flex list-disc flex-col gap-1.5 pl-5 leading-relaxed text-gray-700 marker:text-brand-sky">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>

      <aside
        aria-label="Education and certifications"
        className="flex min-w-0 flex-[1_1_20rem] flex-col gap-8 self-start rounded-2xl bg-brand-sky/12 p-8"
      >
        <div className="flex flex-col gap-3">
          <h3 className="font-heading text-xl font-extrabold text-gray-900">
            Education
          </h3>
          <div className="flex flex-col gap-0.5">
            <p className="font-semibold text-gray-900">
              B.Sc. Computers &amp; Information
            </p>
            <p className="text-sm text-gray-700">
              Zagazig University · Graduated 2026
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-heading text-xl font-extrabold text-gray-900">
            Certifications
          </h3>
          <ul className="flex flex-col gap-4">
            {CERTIFICATIONS.map((cert) => (
              <li key={cert.name} className="flex flex-col gap-0.5">
                <span className="font-semibold text-gray-900">{cert.name}</span>
                <span className="text-sm text-gray-700">{cert.issuer}</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </section>
  );
}
