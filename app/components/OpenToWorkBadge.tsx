export default function OpenToWorkBadge() {
  return (
    <a
      href="#contact"
      className="inline-flex min-h-10 items-center gap-2.5 rounded-full bg-white/75 py-1 pr-4 pl-3 text-[0.9375rem] font-medium text-gray-900 shadow-md ring-1 shadow-gray-900/10 ring-white/90 transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900"
    >
      <span aria-hidden="true" className="relative flex size-2.5">
        <span className="absolute inset-0 rounded-full bg-emerald-500 motion-safe:animate-ping" />
        <span className="relative size-2.5 rounded-full bg-emerald-600" />
      </span>
      Open to junior Flutter &amp; mobile roles
      <svg
        aria-hidden="true"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    </a>
  );
}
