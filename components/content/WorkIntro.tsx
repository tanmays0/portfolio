"use client";

import { WorkListing } from "@/components/content/WorkListing";

type WorkIntroProps = {
  title: string;
};

export function WorkIntro({ title }: WorkIntroProps) {
  return (
    <div className="page-pad pb-24 pt-10">
      <header className="mb-10">
        <span className="section-label">02 / selected work</span>
        <h1 className="mt-4 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.02] tracking-[-0.02em] text-foreground">
          {title}
        </h1>
        <p className="mt-3 max-w-xl text-base text-ink-soft">
          Six builds — AdMax internship plus systems and product UI.
        </p>
      </header>

      <WorkListing />
    </div>
  );
}
