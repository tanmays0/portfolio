"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { projects } from "@/content/projects";
import { AccentButton } from "@/components/ui/AccentButton";

const CARD_COLORS = [
  "bg-main text-black",
  "bg-bold-yellow text-black",
  "bg-coral-pink text-black",
  "bg-sky-blue text-black",
  "bg-vivid-orange text-black",
] as const;

type ProjectsGalleryProps = {
  locale: string;
};

export function ProjectsGallery({ locale }: ProjectsGalleryProps) {
  const reduce = useReducedMotion();

  return (
    <section id="projects" className="page-pad scroll-mt-24 py-12 md:py-16">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="section-label">Gallery of work</span>
          <h2 className="mt-4 font-display text-3xl font-black uppercase leading-none tracking-tight text-foreground md:text-5xl">
            Portfolio
          </h2>
        </div>
        <AccentButton as={Link} href={`/${locale}/work`} tone="ghost">
          View all
        </AccentButton>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            key={project.slug}
            className="brutal-box flex flex-col overflow-hidden"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.45,
              delay: reduce ? 0 : i * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={reduce ? undefined : { y: -4 }}
          >
            <div
              className={`border-b-2 border-border p-5 ${CARD_COLORS[i % CARD_COLORS.length]}`}
            >
              <p className="text-xs font-bold uppercase tracking-wide">
                {project.year} · {project.categories[0]}
              </p>
              <h3 className="mt-2 font-display text-2xl font-black uppercase md:text-3xl">
                {project.name}
              </h3>
            </div>
            <div className="flex flex-1 flex-col gap-4 bg-card p-5 md:p-6">
              <p className="readable-body text-sm md:text-base">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2">
                {project.stack.slice(0, 4).map((tech) => (
                  <li
                    key={tech}
                    className="border-2 border-border bg-muted px-2 py-0.5 text-[10px] font-bold uppercase text-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-2 pt-2">
                <AccentButton
                  as={Link}
                  href={`/${locale}/work/${project.slug}`}
                  tone="mint"
                  className="min-h-9 px-3 text-xs"
                >
                  Case study
                </AccentButton>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
