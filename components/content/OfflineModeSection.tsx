"use client";

import {
  FaDumbbell,
  FaGamepad,
  FaMountain,
  FaMusic,
  FaPlane,
  FaTrophy,
} from "react-icons/fa6";
import { Reveal } from "@/components/ui/Reveal";
import { offlineMode } from "@/content/site";

const ICONS = {
  trophy: FaTrophy,
  plane: FaPlane,
  dumbbell: FaDumbbell,
  mountain: FaMountain,
  gamepad: FaGamepad,
  music: FaMusic,
} as const;

const SHADOW = {
  "vivid-orange": "shadow-[4px_4px_0_#ff8c42]",
  "sky-blue": "shadow-[4px_4px_0_#87ceeb]",
  main: "shadow-[4px_4px_0_#88e788]",
  "coral-pink": "shadow-[4px_4px_0_#ff6b9d]",
} as const;

const SIZE = {
  tall: "min-h-[220px] md:row-span-2 md:min-h-[280px]",
  "tall-sm": "min-h-[180px] md:row-span-2 md:min-h-[220px]",
  wide: "min-h-[120px] md:col-span-2",
  square: "min-h-[140px]",
  full: "min-h-[110px] md:col-span-4",
} as const;

export function OfflineModeSection() {
  return (
    <section className="relative overflow-hidden bg-[#b8e8c4] py-16 text-black md:py-24 dark:bg-[#1f4a2e]">
      <div className="page-pad relative">
        <Reveal>
          <div className="relative mx-auto max-w-3xl border-2 border-border bg-white p-6 text-center shadow-brutal-lg md:p-10">
            <span className="absolute top-3 right-3 border-2 border-border bg-sky-blue px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-black shadow-brutal-sm md:top-4 md:right-4">
              Offline Mode
            </span>
            <h2 className="font-display text-2xl font-black uppercase leading-none tracking-tight text-black md:text-4xl lg:text-5xl">
              When I&apos;m Not Coding?
            </h2>
          </div>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 md:mt-14 md:grid-cols-4 md:gap-5">
          {offlineMode.map((item, index) => {
            const Icon = ICONS[item.icon];
            return (
              <Reveal key={item.id} delay={0.03 * index}>
                <article
                  className={`flex h-full flex-col justify-between border-2 border-border bg-white p-4 text-black md:p-5 ${SIZE[item.size]} ${SHADOW[item.shadow]}`}
                >
                  <Icon size={28} className="shrink-0" aria-hidden />
                  <p className="font-display text-lg font-black uppercase leading-tight tracking-tight md:text-xl">
                    {item.label}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
