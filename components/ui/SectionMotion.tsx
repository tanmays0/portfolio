"use client";

import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

export function SectionMotion({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="w-full">
      {children}
    </Reveal>
  );
}
