import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Contact from "../../components/Contact";
import SectionHeading from "../../components/SectionHeading";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const TITLE = "Hayya case study | Ahmed Waheed";
const DESCRIPTION =
  "How I built Hayya, an offline prayer times, adhan and Qibla app in Flutter: a true-north compass, a reliable adhan and Arabic support enforced by 900+ tests.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/projects/hayya/" },
  openGraph: {
    type: "article",
    url: "/projects/hayya/",
    siteName: "Ahmed Waheed",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Ahmed Waheed - Flutter Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.jpg"],
  },
};

const REPO = "https://github.com/ahmed-waheed1/hayya";

const FACTS = [
  { value: "900+", label: "Automated tests" },
  { value: "100/100", label: "NOAA reference values matched" },
  { value: "2.0×", label: "Largest text size tested" },
  { value: "None", label: "Internet permission in release" },
];

const CHALLENGES = [
  {
    title: "A Qibla compass that points to true north",
    paragraphs: [
      "Android compasses report magnetic north, but the Qibla bearing is measured from true north. The gap is about 4.8° in Cairo and 12.5° in New York, enough to point someone the wrong way.",
      "I implemented the World Magnetic Model (WMM2025) in Dart to add the local declination, and tested it against all 100 of NOAA's official test values. iOS already reports true north, so every compass reading carries which north it uses and is never corrected twice.",
    ],
    image: "/projects/hayya-qibla.webp",
    alt: "Qibla compass showing Facing the Qibla, 136° from true north",
  },
  {
    title: "An adhan that still plays when nobody opens the app",
    paragraphs: [
      "The adhan plays on Android's alarm stream, so it's heard even with notification volume low, and scheduled alarms are restored after a reboot or app update.",
      "For people who rarely open the app, a daily WorkManager task tops up the schedule in a headless isolate. It reuses the app's own scheduler instead of a second copy, and never asks for location or the network in the background.",
    ],
    image: "/projects/hayya-home-dark.webp",
    alt: "Hayya home screen in dark mode, with the next prayer and a countdown",
  },
  {
    title: "Arabic and large text, enforced by tests",
    paragraphs: [
      "Every layout uses directional widgets and every string and number is localized, including Arabic-Indic numerals and Hijri dates.",
      "A text-scale matrix of 320 tests renders every screen at 1.0× to 2.0× text, in both languages, on five screen sizes, and fails on overflow, clipped text or words broken mid-word.",
    ],
    image: "/projects/hayya-home-ar.webp",
    alt: "Hayya home screen in Arabic, laid out right to left",
  },
];

const STACK = [
  "Flutter",
  "Bloc (Cubit)",
  "get_it",
  "go_router",
  "Hive",
  "adhan",
  "WorkManager",
  "flutter_compass",
  "geolocator",
  "easy_localization",
  "hijri",
];

function Phone({
  src,
  alt,
  className = "",
  cropped = false,
}: {
  src: string;
  alt: string;
  className?: string;
  cropped?: boolean;
}) {
  // cropped phones sit on the header's bottom edge, so they have no bottom border
  const frame = cropped
    ? "rounded-t-[1.75rem] border-b-0"
    : "rounded-[2rem] shadow-2xl shadow-gray-900/30";
  return (
    <div
      className={`overflow-hidden border-[7px] border-gray-900 bg-white ${frame} ${className}`}
    >
      <Image
        src={`${basePath}${src}`}
        alt={alt}
        width={400}
        height={711}
        className="h-auto w-full"
      />
    </div>
  );
}

export default function HayyaCaseStudy() {
  return (
    <main className="flex flex-1 flex-col">
      <header className="bg-linear-160 from-brand-sky to-brand-cta text-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-14 px-6 pt-8 lg:px-12">
          <Link
            href="/#projects"
            className="inline-flex min-h-11 w-fit items-center gap-2 rounded-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <svg
              aria-hidden="true"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5" />
              <path d="m11 18-6-6 6-6" />
            </svg>
            Back to all projects
          </Link>

          <div className="flex flex-wrap items-end gap-12">
            <div className="flex min-w-0 flex-[1_1_28rem] flex-col items-start gap-5 pb-16">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3.5 py-1.5 text-sm font-semibold">
                <span
                  aria-hidden="true"
                  className="size-2 rounded-full bg-emerald-300"
                />
                In closed testing on Google Play
              </p>
              <h1 className="font-heading text-5xl font-extrabold tracking-tight sm:text-6xl">
                Hayya{" "}
                <span
                  lang="ar"
                  className="font-sans text-4xl font-semibold opacity-85"
                >
                  حيّ
                </span>
              </h1>
              <p className="max-w-xl text-xl leading-relaxed text-sky-50">
                An offline prayer times, adhan and Qibla app for Android, in
                English and Arabic. No accounts, no ads, no analytics and no
                prayer-time API.
              </p>
              <div className="mt-2 flex flex-wrap gap-3">
                <a
                  href={REPO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center rounded-md bg-white px-5 font-semibold text-brand-accent transition-colors hover:bg-indigo-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  View source on GitHub
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
                <a
                  href="https://ahmed-waheed1.github.io/hayya-privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center rounded-md border border-white/70 px-5 font-medium transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Privacy policy
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
              </div>
            </div>

            <div className="mx-auto flex items-end gap-3 sm:gap-5">
              <Phone
                cropped
                src="/projects/hayya.webp"
                alt="Hayya home screen with the next prayer and a countdown"
                className="h-48 w-24 sm:h-80 sm:w-48"
              />
              <Phone
                cropped
                src="/projects/hayya-qibla.webp"
                alt="Hayya Qibla compass"
                className="h-60 w-28 sm:h-96 sm:w-52"
              />
              <Phone
                cropped
                src="/projects/hayya-tracker.webp"
                alt="Hayya prayer tracker with a streak and heatmap"
                className="h-48 w-24 sm:h-80 sm:w-48"
              />
            </div>
          </div>
        </div>
      </header>

      <section aria-label="At a glance" className="border-b border-gray-200">
        <dl className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-6 px-6 py-8 lg:grid-cols-4 lg:px-12">
          {FACTS.map((fact) => (
            // label first for screen readers, shown under the number
            <div
              key={fact.label}
              className="flex flex-col-reverse justify-end gap-1"
            >
              <dt className="text-[0.9375rem] text-gray-600">{fact.label}</dt>
              <dd className="font-heading text-3xl font-extrabold text-brand-accent">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section
        aria-labelledby="challenges-heading"
        className="mx-auto flex w-full max-w-7xl flex-col gap-20 px-6 py-24 lg:px-12"
      >
        <SectionHeading
          id="challenges-heading"
          eyebrow="Engineering"
          title="Problems I"
          accent="solved"
        />

        {CHALLENGES.map((challenge, index) => (
          <article
            key={challenge.title}
            className={`flex flex-col items-center gap-12 ${index % 2 ? "md:flex-row-reverse" : "md:flex-row"}`}
          >
            <div className="flex min-w-0 flex-1 flex-col gap-4">
              <p
                aria-hidden="true"
                className="font-heading text-xl font-extrabold text-brand-sky"
              >
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="font-heading text-2xl font-extrabold leading-snug text-gray-900 sm:text-[1.75rem]">
                {challenge.title}
              </h3>
              {challenge.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-8 text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>
            <Phone
              src={challenge.image}
              alt={challenge.alt}
              className="w-60 shrink-0 sm:w-64"
            />
          </article>
        ))}
      </section>

      <section aria-labelledby="stack-heading" className="bg-brand-sky/8">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap gap-12 px-6 py-20 lg:px-12">
          <div className="flex min-w-0 flex-[1_1_22rem] flex-col gap-4">
            <h2
              id="stack-heading"
              className="font-heading text-3xl font-extrabold text-gray-900"
            >
              How it&apos;s <span className="text-brand-accent">built</span>
            </h2>
            <p className="text-lg leading-8 text-gray-700">
              Feature-first clean architecture: each feature has its own data,
              domain and presentation layers. State lives in Cubits,
              dependencies are wired with get_it and routing uses go_router.
            </p>
          </div>
          <ul className="flex min-w-0 flex-[1_1_30rem] flex-wrap content-start gap-2.5">
            {STACK.map((item) => (
              <li
                key={item}
                className="rounded-full bg-white px-3.5 py-2 font-medium text-brand-accent ring-1 ring-gray-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="mx-auto flex w-full max-w-7xl justify-center px-6 pt-16 lg:px-12">
        <Link
          href="/#projects"
          className="inline-flex min-h-12 items-center gap-2 rounded-md border border-brand-cta bg-white px-5 font-medium text-brand-accent transition-colors hover:bg-indigo-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900"
        >
          See all projects
        </Link>
      </div>

      <Contact />
    </main>
  );
}
