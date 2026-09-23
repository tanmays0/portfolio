import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type AccentButtonProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  tone?: "solid" | "ghost" | "dark" | "mint" | "yellow";
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function AccentButton<T extends ElementType = "button">({
  as,
  children,
  className,
  tone = "solid",
  ...props
}: AccentButtonProps<T>) {
  const Tag = as ?? "button";
  const tones = {
    solid:
      "border-border bg-main text-black shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-sm",
    mint: "border-border bg-main text-black shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-sm",
    yellow:
      "border-border bg-bold-yellow text-black shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-sm",
    ghost:
      "border-border bg-card text-foreground shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-sm",
    dark: "border-border bg-black text-white shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-sm",
  } as const;

  return (
    <Tag
      className={cn(
        "inline-flex min-h-10 cursor-pointer items-center justify-center gap-2 border-2 px-4 py-2 text-sm font-bold tracking-[-0.01em] transition duration-150",
        tones[tone],
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
