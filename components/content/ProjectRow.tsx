import Image from "next/image";
import Link from "next/link";

const CHIP_COLORS = [
  "border-border bg-main",
  "border-border bg-bold-yellow",
  "border-border bg-coral-pink",
  "border-border bg-sky-blue",
  "border-border bg-vivid-orange",
] as const;

export function ProjectRow({
  href,
  title,
  description,
  year,
  image,
  stack = [],
}: {
  href: string;
  title: string;
  description: string;
  year: string;
  image: string;
  stack?: string[];
  onHover?: (payload: { image: string; x: number; y: number }) => void;
  onLeave?: () => void;
}) {
  return (
    <Link
      href={href}
      className="brutal-box brutal-press group flex flex-col gap-4 bg-card p-4 sm:flex-row sm:items-center"
    >
      <span className="relative h-20 w-full shrink-0 overflow-hidden border-2 border-border bg-muted sm:h-16 sm:w-24">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
          sizes="96px"
        />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-display text-xl font-bold tracking-[-0.02em] text-foreground">
          {title}
        </span>
        <span className="mt-1 block text-sm text-ink-soft">{description}</span>
        {stack.length > 0 ? (
          <span className="mt-2 flex flex-wrap gap-1.5">
            {stack.slice(0, 4).map((item, i) => (
              <span
                key={item}
                className={`border-2 px-1.5 py-0.5 text-[10px] font-bold ${CHIP_COLORS[i % CHIP_COLORS.length]}`}
              >
                {item}
              </span>
            ))}
          </span>
        ) : null}
      </span>
      <span className="shrink-0 font-mono text-xs font-bold sm:self-start">
        {year}
      </span>
    </Link>
  );
}
