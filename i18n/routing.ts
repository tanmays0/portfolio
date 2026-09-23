export const locales = ["en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const pathnames = {
  "/": "/",
  "/about": "/about",
  "/work": "/work",
  "/work/[slug]": "/work/[slug]",
  "/writing": "/writing",
  "/writing/[slug]": "/writing/[slug]",
  "/resume": "/resume",
  "/certifications": "/certifications",
} as const;
