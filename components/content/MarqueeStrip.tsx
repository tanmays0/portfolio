"use client";

import { Star } from "lucide-react";

const TRAITS = [
  "RELIABLE",
  "ADAPTABLE",
  "PROBLEM SOLVER",
  "FULL-STACK",
  "SYSTEMS THINKER",
  "PRODUCT-MINDED",
  "FAST LEARNER",
  "DETAIL OBSESSED",
] as const;

const STAR_COLORS = [
  "text-bold-yellow",
  "text-coral-pink",
  "text-sky-blue",
  "text-main",
  "text-vivid-orange",
] as const;

export function MarqueeStrip() {
  const loop = [...TRAITS, ...TRAITS];

  return (
    <div className="overflow-hidden border-y-2 border-border bg-black py-4 text-white">
      <div className="marquee-track gap-8 px-4">
        {loop.map((trait, i) => (
          <span
            key={`${trait}-${i}`}
            className="flex items-center gap-8 whitespace-nowrap font-display text-lg font-black italic uppercase tracking-wide text-white md:text-2xl"
          >
            {trait}
            <Star
              aria-hidden
              className={`size-5 fill-none stroke-[2.5] ${STAR_COLORS[i % STAR_COLORS.length]}`}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
