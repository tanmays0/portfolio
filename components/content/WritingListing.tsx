"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { articles } from "@/content/articles";

export function WritingListing() {
  const locale = useLocale();
  const tc = useTranslations("common");
  const [filter, setFilter] = useState("all");

  const categories = useMemo(
    () => [...new Set(articles.map((a) => a.category))],
    [],
  );

  const filtered = articles.filter(
    (a) => filter === "all" || a.category === filter,
  );

  return (
    <div className="mt-10 grid gap-8 lg:grid-cols-[220px_1fr]">
      <aside className="brutal-box h-fit bg-card p-4">
        <p className="mb-3 font-mono text-xs font-bold uppercase tracking-wider">
          Filter
        </p>
        <div className="flex flex-row flex-wrap gap-2 lg:flex-col">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`min-h-10 border-2 border-border px-3 py-1.5 text-left text-sm font-bold transition ${
              filter === "all"
                ? "bg-main shadow-brutal-sm"
                : "bg-card hover:bg-muted"
            }`}
          >
            {tc("all")}
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              className={`min-h-10 border-2 border-border px-3 py-1.5 text-left text-sm font-bold transition ${
                filter === category
                  ? "bg-main shadow-brutal-sm"
                  : "bg-card hover:bg-muted"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </aside>

      {filtered.length === 0 ? (
        <p className="brutal-box bg-card p-6 text-muted-foreground">
          {tc("emptyFilter")}
        </p>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((article, index) => (
            <Link
              key={article.slug}
              href={`/${locale}/writing/${article.slug}`}
              className="brutal-box brutal-press group flex flex-col overflow-hidden bg-card"
            >
              <div className="relative aspect-[16/10] border-b-2 border-border bg-muted">
                <Image
                  src={article.coverImage}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover"
                />
                <span
                  className={`absolute left-3 top-3 border-2 border-border px-2 py-0.5 font-mono text-[10px] font-bold shadow-brutal-sm ${
                    index % 3 === 0
                      ? "bg-bold-yellow"
                      : index % 3 === 1
                        ? "bg-coral-pink"
                        : "bg-sky-blue"
                  }`}
                >
                  {article.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-2 p-4">
                <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  {article.date} · {article.readTimeMinutes} min
                </p>
                <h2 className="font-display text-lg font-bold tracking-[-0.02em] text-foreground">
                  {article.title}
                </h2>
                <p className="text-sm leading-relaxed text-ink-soft">
                  {article.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
