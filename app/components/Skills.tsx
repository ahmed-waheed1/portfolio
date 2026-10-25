import SectionHeading from "./SectionHeading";

const SKILL_GROUPS = [
  {
    title: "Mobile",
    skills: [
      "Flutter",
      "Dart",
      "Android",
      "iOS",
      "Web",
      "Bloc (Cubit)",
      "Riverpod",
      "Provider",
    ],
  },
  {
    title: "Architecture",
    skills: ["Clean Architecture", "MVVM", "get_it", "Design patterns", "OOP"],
  },
  {
    title: "Networking & APIs",
    skills: ["REST APIs", "Dio", "http", "Retrofit", "WebSockets"],
  },
  {
    title: "Backend & Cloud",
    skills: [
      "Firebase Auth",
      "Cloud Firestore",
      "Realtime Database",
      "Security Rules",
      "Payments",
    ],
  },
  {
    title: "Data & Storage",
    skills: ["SQLite (Drift)", "Hive", "SharedPreferences"],
  },
  {
    title: "Localization & Accessibility",
    skills: [
      "Arabic / English",
      "RTL layouts",
      "easy_localization",
      "Text scaling",
      "WCAG contrast",
    ],
  },
  {
    title: "Device & Background",
    skills: [
      "ML Kit Pose Detection",
      "Live camera",
      "Compass & location",
      "Notifications",
      "WorkManager",
    ],
  },
  {
    title: "Languages",
    skills: ["Dart", "C", "C++", "Bash"],
  },
  {
    title: "Tools & Practices",
    skills: [
      "Git & GitHub",
      "Linux",
      "Unit tests",
      "Widget tests",
      "End-to-end tests",
      "Data structures & algorithms",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-24 lg:px-12">
        <SectionHeading
          id="skills-heading"
          eyebrow="Skills"
          title="What I"
          accent="work with"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.title}
              className="flex flex-col gap-4 rounded-2xl bg-white p-7 ring-1 ring-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full bg-indigo-50 px-3 py-1.5 text-sm font-medium text-brand-accent"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
