import SocialLinks from "./SocialLinks";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const EMAIL = "ahmedwaheed4047@gmail.com";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative -mt-48 overflow-hidden"
    >
      {/*
        The hero's clouds, flipped so the page ends the way it starts. The
        section overlaps the hero by 12rem and this layer fades in over that
        overlap so the two cloud images blend without a seam. The mask runs
        "to top" because the layer itself is flipped.
      */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -scale-y-100 bg-brand-sky bg-cover bg-center mask-[linear-gradient(to_top,transparent,black_12rem)]"
        style={{ backgroundImage: `url(${basePath}/cloud-bg.png)` }}
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-7 px-6 pt-96 pb-28 text-center lg:px-12">
        <h2
          id="contact-heading"
          className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl"
        >
          Let&apos;s build <span className="text-brand-accent">something</span>
        </h2>

        <p className="max-w-xl text-lg leading-8 text-gray-800">
          I&apos;m open to junior Flutter and mobile developer roles and
          internships. If you&apos;re hiring or want to talk about an app, my
          inbox is open.
        </p>

        <div className="flex w-full flex-wrap justify-center gap-4">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex h-14 w-full max-w-72 items-center justify-center gap-2.5 rounded-md bg-brand-cta text-lg font-medium text-white shadow-lg shadow-blue-500/30 transition-colors hover:bg-brand-cta-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900"
          >
            <svg
              aria-hidden="true"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-10 6L2 7" />
            </svg>
            Email me
          </a>
          <a
            href={`${basePath}/resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 w-full max-w-72 items-center justify-center rounded-md border border-brand-cta bg-white text-lg font-medium text-brand-accent transition-colors hover:bg-indigo-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900"
          >
            Download resume
            <span className="sr-only"> (opens in new tab)</span>
          </a>
        </div>

        <a
          href={`mailto:${EMAIL}`}
          className="rounded-sm text-gray-800 underline-offset-4 hover:text-brand-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900"
        >
          {EMAIL}
        </a>

        <SocialLinks />
      </div>
    </section>
  );
}
