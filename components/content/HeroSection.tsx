"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useReducedMotion } from "motion/react";
import { site } from "@/content/site";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: 10, decimals: 0, suffix: "+", label: "projects shipped", color: "bg-vivid-orange" },
  { value: 20, decimals: 0, suffix: "+", label: "certifications", color: "bg-coral-pink" },
  { value: 50, decimals: 0, suffix: "+", label: "technologies", color: "bg-main" },
  { value: 8.5, decimals: 1, suffix: "", label: "CGPA / 10", color: "bg-bold-yellow" },
] as const;

type HeroSectionProps = {
  bio: string;
};

export function HeroSection({ bio }: HeroSectionProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const countRefs = useRef<Array<HTMLParagraphElement | null>>([]);
  const reduce = useReducedMotion();

  useGSAP(
    () => {
      if (!cardRef.current || reduce) {
        STATS.forEach((stat, index) => {
          const el = countRefs.current[index];
          if (el) el.textContent = `${stat.value.toFixed(stat.decimals)}${stat.suffix}`;
        });
        return;
      }

      STATS.forEach((stat, index) => {
        const el = countRefs.current[index];
        if (el) el.textContent = `${(0).toFixed(stat.decimals)}${stat.suffix}`;
      });

      const trigger = ScrollTrigger.create({
        trigger: cardRef.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          STATS.forEach((stat, index) => {
            const el = countRefs.current[index];
            if (!el) return;
            const state = { value: 0 };
            gsap.to(state, {
              value: stat.value,
              duration: 1.4,
              ease: "power2.out",
              onUpdate: () => {
                el.textContent = `${state.value.toFixed(stat.decimals)}${stat.suffix}`;
              },
            });
          });
        },
      });

      return () => trigger.kill();
    },
    { dependencies: [reduce], scope: cardRef },
  );

  const highlight = "technology, design, and real-world problems";
  const parts = bio.split(highlight);

  return (
    <section id="home" className="page-pad scroll-mt-24 pt-8 pb-6 md:pt-12">
      <motion.div
        ref={cardRef}
        className="brutal-box grid gap-0 overflow-hidden lg:grid-cols-[1.1fr_0.9fr]"
        style={{ backgroundColor: "var(--hero-panel)" }}
        initial={reduce ? false : { opacity: 0.01, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex flex-col gap-6 border-b-2 border-border bg-card/40 p-6 md:p-10 lg:border-b-0 lg:border-r-2 dark:bg-card/50">
          <motion.div
            className="relative w-fit"
            initial={reduce ? false : { opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.12, duration: 0.45 }}
          >
            <div className="relative h-44 w-44 overflow-hidden border-2 border-border bg-muted shadow-brutal md:h-52 md:w-52">
              <Image
                src={site.avatar}
                alt={site.name}
                fill
                className="object-cover object-top"
                sizes="208px"
                priority
                unoptimized
              />
            </div>
            <span className="absolute -bottom-3 -left-3 border-2 border-border bg-bold-yellow px-2 py-1 text-xs font-black uppercase text-black shadow-brutal-sm">
              EST 2005
            </span>
          </motion.div>

          <div>
            <h1 className="font-display text-4xl font-black uppercase leading-[0.95] tracking-tight text-foreground md:text-6xl">
              {site.name}
            </h1>
          </div>

          <p className="readable-body max-w-xl text-foreground">
            {parts.length > 1 ? (
              <>
                {parts[0]}
                <mark className="bg-vivid-orange px-1 font-semibold text-black">
                  {highlight}
                </mark>
                {parts[1]}
              </>
            ) : (
              bio
            )}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-0 bg-card">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col justify-between border-2 border-border p-5 text-black md:p-7 ${stat.color} -m-[1px]`}
            >
              <p
                ref={(el) => {
                  countRefs.current[index] = el;
                }}
                className="font-display text-3xl font-black md:text-5xl"
              >
                {(0).toFixed(stat.decimals)}
                {stat.suffix}
              </p>
              <p className="mt-4 text-sm font-bold uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
