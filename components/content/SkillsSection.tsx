"use client";

import { Reveal } from "@/components/ui/Reveal";
import { stackCategories } from "@/content/site";

const CHIP_COLORS = [
  "bg-main text-black",
  "bg-bold-yellow text-black",
  "bg-coral-pink text-black",
  "bg-sky-blue text-black",
  "bg-vivid-orange text-black",
  "bg-muted text-foreground",
] as const;

export function SkillsSection() {
  return (
    <section id="about" className="page-pad scroll-mt-24 py-12 md:py-16">
      <div className="brutal-box p-6 md:p-10">
        <Reveal>
          <span className="section-label">Skill Stack</span>
          <h2 className="mt-4 font-display text-3xl font-black uppercase leading-none tracking-tight text-foreground md:text-5xl">
            Tools and Technologies I Work With
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stackCategories.map((cat, catIdx) => (
            <Reveal key={cat.label} delay={0.04 * catIdx}>
              <h3 className="mb-3 border-b-2 border-border pb-2 font-display text-lg font-bold uppercase text-foreground">
                {cat.label}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {cat.tags.map((tag, i) => (
                  <li
                    key={tag}
                    className={`border-2 border-border px-2.5 py-1 text-xs font-bold uppercase shadow-brutal-sm ${
                      CHIP_COLORS[(catIdx + i) % CHIP_COLORS.length]
                    }`}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
