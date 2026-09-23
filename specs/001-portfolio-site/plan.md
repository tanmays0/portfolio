# Implementation Plan: Portfolio Site

**Branch**: `001-portfolio-site` | **Date**: 2026-09-19 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/001-portfolio-site/spec.md`

## Summary

Greenfield hire-facing portfolio: Next.js App Router with locale prefixes, design tokens, kinetic headings, and pages for About, Work (five pillars), Writing, Resume, and Certifications. Flat locale-keyed content; no CMS.

## Technical Context

**Language/Version**: TypeScript 5.x / Node 20+

**Primary Dependencies**: Next.js (App Router), Tailwind CSS, next-intl, next-themes, framer-motion, lucide-react, react-icons (brand), next/font (Geist), next/image

**Storage**: Local TS/MDX content + `public/` assets (N/A database)

**Testing**: Manual route/smoke checks; no mandatory automated test suite in v1

**Target Platform**: Modern browsers; Vercel hosting

**Project Type**: Single Next.js web application

**Performance Goals**: Fast first paint; kinetic heading ~0.5–1s; page transitions 150–250ms

**Constraints**: Free-tier Vercel; no CMS/DB; five pillars only; Spec Kit constitution

**Scale/Scope**: ~8 route templates; ~20 UI components; placeholder content

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] Hire-facing clarity
- [x] Five pillars only
- [x] Structure before polish
- [x] Locale-first content
- [x] Simplicity & free-tier deployability

## Project Structure

### Documentation (this feature)

```text
specs/001-portfolio-site/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
└── tasks.md
```

### Source Code (repository root)

```text
app/
├── [locale]/
│   ├── layout.tsx
│   ├── page.tsx              # redirect → about
│   ├── about/page.tsx
│   ├── work/page.tsx
│   ├── work/[slug]/page.tsx
│   ├── writing/page.tsx
│   ├── writing/[slug]/page.tsx
│   ├── resume/page.tsx
│   └── certifications/page.tsx
├── globals.css
└── layout.tsx
components/
├── layout/   # Header Footer ContactModal ThemeLogo LangSwitch
├── ui/       # Button KineticHeading SectionHeading FilterChipGroup ...
└── content/  # Timeline CertificationCard ProjectCard ArticleRow PdfEmbed
content/      # site.ts projects.ts articles.ts certifications.ts about.ts
i18n/         # routing request messages
messages/     # en.json fr.json
public/       # logos avatar projects certifications resume.pdf
middleware.ts
```

## Complexity Tracking

N/A — single app, no additional services.
