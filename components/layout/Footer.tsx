"use client";

import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="page-pad pb-8 md:pb-12">
      <div className="flex flex-col items-start justify-between gap-4 border-2 border-border bg-bold-yellow px-6 py-6 text-black shadow-brutal md:flex-row md:items-center md:px-8">
        <p className="text-sm font-bold uppercase tracking-wide">
          © {year} Systems & product builds / all errors intended
        </p>
        <p className="text-sm font-medium">
          Built with intent by {site.name}
        </p>
      </div>
    </footer>
  );
}
