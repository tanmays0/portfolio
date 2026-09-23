"use client";

import { useEffect, useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { projects } from "@/content/projects";
import { FilterChipGroup } from "@/components/ui/FilterChipGroup";
import { ViewToggle } from "@/components/ui/ViewToggle";
import { ProjectCard } from "@/components/content/ProjectCard";
import { ProjectRow } from "@/components/content/ProjectRow";

export function WorkListing() {
  const locale = useLocale();
  const tc = useTranslations("common");
  const [filter, setFilter] = useState("all");
  const [mode, setMode] = useState<"list" | "grid">("grid");

  useEffect(() => {
    const stored = window.localStorage.getItem("work-view");
    if (stored === "list" || stored === "grid") setMode(stored);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("work-view", mode);
  }, [mode]);

  const categories = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => set.add(p.categories.join(" / ")));
    return [...set];
  }, []);

  const filtered = projects.filter((p) => {
    if (filter === "all") return true;
    return p.categories.join(" / ") === filter;
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <FilterChipGroup
          options={categories}
          active={filter}
          onChange={setFilter}
          allLabel={tc("all")}
        />
        <ViewToggle
          mode={mode}
          onChange={setMode}
          listLabel={tc("list")}
          gridLabel={tc("grid")}
        />
      </div>

      {filtered.length === 0 ? (
        <p className="border-2 border-border bg-card p-6 text-muted-foreground shadow-brutal">
          {tc("emptyFilter")}
        </p>
      ) : mode === "grid" ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, index) => (
            <ProjectCard
              key={project.slug}
              href={`/${locale}/work/${project.slug}`}
              title={project.name}
              description={project.description}
              year={project.year}
              image={project.image}
              stack={project.stack}
              index={index + 1}
            />
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((project) => (
            <ProjectRow
              key={project.slug}
              href={`/${locale}/work/${project.slug}`}
              title={project.name}
              description={project.description}
              year={project.year}
              image={project.image}
              stack={project.stack}
            />
          ))}
        </div>
      )}
    </div>
  );
}
