// Every page ends with the Contact section, so the footer pulls itself up
// over Contact's bottom padding and sits on its clouds instead of adding a bar.
export default function Footer() {
  return (
    <footer className="relative -mt-28">
      <div className="mx-auto w-full max-w-7xl px-6 pb-8 lg:px-12">
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-900/15 pt-6">
          <p className="text-[0.9375rem] text-gray-800">
            &copy; {new Date().getFullYear()} Ahmed Waheed
          </p>
          <a
            href="#top"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-white/70 px-[1.125rem] text-[0.9375rem] font-medium text-gray-900 transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900"
          >
            Back to top
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
              <path d="M12 19V5" />
              <path d="m5 12 7-7 7 7" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
