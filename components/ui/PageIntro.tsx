import type { ReactNode } from "react";

export function PageIntro({
  index,
  eyebrow,
  title,
  description,
  children,
}: {
  index?: string;
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <header className="mb-2">
      <div className="mb-4 flex flex-wrap items-center gap-3">
        {index ? (
          <span className="border-2 border-border bg-vivid-orange px-2 py-0.5 font-mono text-xs font-bold shadow-brutal-sm">
            {index}
          </span>
        ) : null}
        {eyebrow ? <span className="section-label">{eyebrow}</span> : null}
      </div>
      <div className="brutal-box bg-card p-6 md:p-8">
        {typeof title === "string" ? (
          <h1 className="font-display text-[clamp(2.25rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.02em]">
            {title}
          </h1>
        ) : (
          title
        )}
        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
            {description}
          </p>
        ) : null}
        {children}
      </div>
    </header>
  );
}
