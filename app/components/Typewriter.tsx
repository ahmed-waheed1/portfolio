"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

const TITLES = [
  "Software Engineer",
  "Flutter Developer",
];

const TYPE_DELAY = 100;
const DELETE_DELAY = 50;
const HOLD_DELAY = 1800;

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(onChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => false
  );
}

export default function Typewriter() {
  const reducedMotion = usePrefersReducedMotion();
  const [titleIndex, setTitleIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Normalize state so an unexpected value (e.g. kept across a Fast Refresh)
  // can never stall the animation: every state below schedules a next step.
  const safeIndex = ((titleIndex % TITLES.length) + TITLES.length) % TITLES.length;
  const title = TITLES[safeIndex];
  const shown = Math.min(Math.max(length, 0), title.length);

  useEffect(() => {
    if (reducedMotion) return;

    if (!deleting && shown === title.length) {
      const hold = setTimeout(() => setDeleting(true), HOLD_DELAY);
      return () => clearTimeout(hold);
    }

    const tick = setTimeout(
      () => {
        const next = shown + (deleting ? -1 : 1);
        if (deleting && next <= 0) {
          // Fully deleted: move on to typing the next title.
          setLength(0);
          setDeleting(false);
          setTitleIndex((safeIndex + 1) % TITLES.length);
        } else {
          setLength(next);
        }
      },
      deleting ? DELETE_DELAY : TYPE_DELAY
    );
    return () => clearTimeout(tick);
  }, [shown, deleting, safeIndex, title.length, reducedMotion]);

  // Screen readers get the stable sr-only text in the h1 instead.
  if (reducedMotion) {
    return <span aria-hidden="true">{TITLES[0]}</span>;
  }

  return (
    <span aria-hidden="true">
      {title.slice(0, shown)}
      <span aria-hidden="true" className="animate-cursor-blink font-light">
        |
      </span>
    </span>
  );
}
