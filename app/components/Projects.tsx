import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const GITHUB = "https://github.com/ahmed-waheed1";

type Project = {
  name: string;
  arabicName?: string;
  tagline: string;
  description: string;
  tags: string[];
  repo: string;
  image: string;
  status?: string;
  caseStudy?: string;
};

const PROJECTS: Project[] = [
  {
    name: "Hayya",
    arabicName: "حيّ",
    tagline: "Offline prayer times, adhan & Qibla",
    description:
      "Calculates prayer times on the device. It plays the adhan on Android's alarm stream with schedules restored after a reboot and corrects the Qibla compass to true north with its own World Magnetic Model, tested against all 100 of NOAA's reference values.",
    tags: ["Bloc (Cubit)", "get_it", "Hive", "WorkManager"],
    repo: "hayya",
    image: "/projects/hayya.webp",
    status: "In closed testing on Google Play",
    caseStudy: "/projects/hayya/",
  },
  {
    name: "Yalla Quiz",
    arabicName: "يلا كويز",
    tagline: "Real-time multiplayer trivia",
    description:
      "Friends join a room with a code or QR scan and race the same server-synced clock. If the host drops, the next player takes over, and every player sees their own language, English or Arabic, in the same room.",
    tags: ["Firebase Realtime Database", "Bloc (Cubit)", "fpdart", "Web"],
    repo: "yalla_quiz",
    image: "/projects/yalla-quiz.webp",
  },
  {
    name: "Athar",
    arabicName: "أثر",
    tagline: "Calm, bilingual habit tracker",
    description:
      "Streaks, a heatmap and a monthly calendar, fully offline. Arabic is complete down to the details: right-to-left layout, Arabic-Indic digits, Arabic plural forms and weeks that start on Saturday.",
    tags: ["Bloc (Cubit)", "Hive", "get_it", "go_router"],
    repo: "athar",
    image: "/projects/athar.webp",
  },
  {
    name: "Body Lens",
    tagline: "On-device posture & body analysis",
    description:
      "Detects 33 body landmarks fully on-device with Google ML Kit, draws a live skeleton overlay from photos or the camera and scores symmetry from 0 to 100 with posture issues called out.",
    tags: ["ML Kit", "Camera", "Riverpod", "Clean Architecture"],
    repo: "body_lens",
    image: "/projects/body-lens.webp",
  },
  {
    name: "Spendly",
    tagline: "Offline-first budget & expense tracker",
    description:
      "Per-category budgets with 80% spending alerts, pie and bar charts, CSV and PDF export and full English and Arabic support with automatic right-to-left layout.",
    tags: ["Riverpod", "Drift", "go_router", "fl_chart"],
    repo: "spendly",
    image: "/projects/spendly.webp",
  },
  {
    name: "Rootine",
    tagline: "Habit tracker & streak analytics",
    description:
      "Daily check-ins, current and longest streaks, a 30-day heatmap and reminders that reschedule after a reboot. The streak calculator is pure Dart and covered by unit tests.",
    tags: ["Riverpod", "Hive", "fl_chart", "Unit tests"],
    repo: "rootine",
    image: "/projects/rootine.webp",
  },
];

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 transition motion-safe:hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-cta/15">
      {/* screenshot in a phone frame, cropped at the bottom of the panel */}
      <div className="flex h-64 items-end justify-center bg-linear-160 from-brand-sky to-brand-cta pt-8">
        <div className="h-full w-40 overflow-hidden rounded-t-[1.75rem] border-[6px] border-b-0 border-gray-900 bg-white">
          <Image
            src={`${basePath}${project.image}`}
            alt={`${project.name} app screenshot`}
            width={480}
            height={1040}
            className="h-auto w-full"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-7">
        <h3 className="flex items-baseline gap-3 font-heading text-2xl font-extrabold text-gray-900">
          {project.name}
          {project.arabicName && (
            <span
              lang="ar"
              className="font-sans text-lg font-medium text-gray-600"
            >
              {project.arabicName}
            </span>
          )}
        </h3>
        <p className="font-semibold text-brand-accent">{project.tagline}</p>
        {project.status && (
          <p className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-800">
            <span
              aria-hidden="true"
              className="size-2 rounded-full bg-emerald-600"
            />
            {project.status}
          </p>
        )}
        <p className="leading-relaxed text-gray-700">{project.description}</p>

        <ul
          className="mt-auto flex flex-wrap gap-2 pt-2"
          aria-label="Built with"
        >
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md bg-gray-100 px-2.5 py-1 text-sm text-gray-700"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center gap-x-6">
          {project.caseStudy && (
            <Link
              href={project.caseStudy}
              className="inline-flex min-h-11 w-fit items-center gap-2 rounded-sm font-semibold text-brand-accent hover:text-brand-cta-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900"
            >
              Read case study
              <span className="sr-only"> for {project.name}</span>
            </Link>
          )}
          <a
            href={`${GITHUB}/${project.repo}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 w-fit items-center gap-2 rounded-sm font-semibold text-brand-accent hover:text-brand-cta-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900"
          >
            View source
            <span className="sr-only">
              {" "}
              for {project.name} on GitHub (opens in new tab)
            </span>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="bg-brand-sky/8"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-24 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            id="projects-heading"
            eyebrow="Projects"
            title="Things I've"
            accent="built"
          />
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-md border border-brand-cta bg-white px-5 font-medium text-brand-accent transition-colors hover:bg-indigo-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900"
          >
            All code on GitHub
            <span className="sr-only"> (opens in new tab)</span>
            <ArrowIcon />
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.repo} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
