"use client";

import { academic, experience } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";

const MARKERS = [
  { shape: "circle" as const, color: "bg-main" },
  { shape: "square" as const, color: "bg-sky-blue" },
  { shape: "diamond" as const, color: "bg-coral-pink" },
  { shape: "square" as const, color: "bg-bold-yellow" },
];

type CareerItem = {
  title: string;
  org: string;
  dateRange: string;
  bullets: string[];
  kind: "Experience" | "Academic";
};

export function CareerSection() {
  const items: CareerItem[] = [
    ...experience.map((e) => ({ ...e, kind: "Experience" as const })),
    ...academic.map((a) => ({ ...a, kind: "Academic" as const })),
  ];

  return (
    <section className="relative overflow-hidden bg-[#ffd6e0] py-16 text-black md:py-24 dark:bg-[#5c2a3a]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.12) 1px, transparent 0)",
          backgroundSize: "18px 18px",
        }}
      />

      <div className="relative page-pad">
        <Reveal>
          <div className="mx-auto max-w-3xl border-2 border-border bg-white p-6 text-center shadow-brutal-lg md:p-10">
            <span className="inline-block border-2 border-border bg-sky-blue px-3 py-1 text-[10px] font-black uppercase tracking-wider text-black shadow-brutal-sm">
              Career Highlights
            </span>
            <h2 className="mt-4 font-display text-3xl font-black uppercase leading-none tracking-tight text-black md:text-5xl">
              A Journey of Growth and Impact
            </h2>
          </div>
        </Reveal>

        <div className="relative mx-auto mt-14 max-w-5xl md:mt-20">
          <div
            aria-hidden
            className="absolute top-0 bottom-0 left-4 w-0.5 bg-border md:left-1/2 md:-translate-x-1/2"
          />

          <ul className="space-y-10 md:space-y-16">
            {items.map((item, index) => {
              const marker = MARKERS[index % MARKERS.length];
              const onLeft = index % 2 === 0;

              return (
                <li key={`${item.title}-${item.dateRange}`} className="relative">
                  <span
                    aria-hidden
                    className={`absolute top-6 left-4 z-10 -translate-x-1/2 border-2 border-border md:left-1/2 ${marker.color} ${
                      marker.shape === "circle"
                        ? "size-4 rounded-full"
                        : marker.shape === "diamond"
                          ? "size-3.5 rotate-45"
                          : "size-3.5"
                    }`}
                  />

                  <div
                    className={`ml-10 md:ml-0 md:grid md:grid-cols-2 md:gap-10 ${
                      onLeft ? "" : "md:[&>*]:col-start-2"
                    }`}
                  >
                    <Reveal delay={0.04 * index}>
                      <article
                        className={`border-2 border-border bg-white p-5 shadow-brutal md:p-7 ${
                          onLeft ? "md:mr-6" : "md:ml-6"
                        }`}
                      >
                        <div className="flex flex-wrap items-center gap-2">
                          <span
                            className={`inline-block border-2 border-border px-2 py-0.5 text-[10px] font-black uppercase text-black shadow-brutal-sm ${
                              item.kind === "Experience"
                                ? "bg-coral-pink"
                                : "bg-sky-blue"
                            }`}
                          >
                            {item.kind}
                          </span>
                          <p className="text-sm font-bold text-sky-blue md:text-base">
                            {item.dateRange}
                          </p>
                        </div>
                        <h3 className="mt-3 font-display text-xl font-black uppercase leading-tight tracking-tight text-black md:text-2xl">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm font-bold uppercase tracking-wide text-black md:text-base">
                          {item.org}
                        </p>
                        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-black/80 md:text-base">
                          {item.bullets.map((bullet) => (
                            <li key={bullet} className="flex gap-2">
                              <span aria-hidden className="mt-2 size-1.5 shrink-0 bg-black" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </article>
                    </Reveal>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
