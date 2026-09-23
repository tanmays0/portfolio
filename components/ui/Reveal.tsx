"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const skipMotion = !mounted || Boolean(reduce);

  return (
    <motion.div
      className={className}
      initial={skipMotion ? false : { opacity: 0.01, y: 16 }}
      whileInView={skipMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={skipMotion ? undefined : { once: true, amount: 0.08 }}
      transition={{ duration: 0.45, delay, ease }}
      style={skipMotion ? undefined : { willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
}
