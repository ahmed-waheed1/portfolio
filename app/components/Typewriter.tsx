"use client";

import { useEffect, useState } from "react";

const TITLES = [
  "Software Engineer",
  "Flutter Developer",
];

const TYPE_DELAY = 100;
const DELETE_DELAY = 50;
const HOLD_DELAY = 1800;

export default function Typewriter() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const title = TITLES[titleIndex];

    if (!deleting && length === title.length) {
      const hold = setTimeout(() => setDeleting(true), HOLD_DELAY);
      return () => clearTimeout(hold);
    }

    if (deleting && length === 0) {
      setDeleting(false);
      setTitleIndex((i) => (i + 1) % TITLES.length);
      return;
    }

    const tick = setTimeout(
      () => setLength((l) => l + (deleting ? -1 : 1)),
      deleting ? DELETE_DELAY : TYPE_DELAY
    );
    return () => clearTimeout(tick);
  }, [length, deleting, titleIndex]);

  return (
    <span>
      {TITLES[titleIndex].slice(0, length)}
      <span className="animate-cursor-blink font-light">|</span>
    </span>
  );
}
