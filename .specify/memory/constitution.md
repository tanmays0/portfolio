# Portfolio Constitution

## Core Principles

### I. Hire-Facing Clarity
This site exists to get serious engineering interviews. Every page, project, and piece of copy must help a hiring manager understand systems depth and product taste. Prefer concrete case studies over decorative fluff.

### II. Five Pillars Only
The Projects section features exactly these portfolio pillars, in build order: ops-mcp, limitlab, cite-rag, diff-review, paylock. Do not treat older apps (FlowForge, ELEVARE, or similar) as serious portfolio pillars. Do not rename pillars unless explicitly asked.

### III. Structure Before Polish
Ship correct information architecture, components, and locale-ready content first. Kinetic heading, list/grid toggle, credentials tabs, and shared certification card variants are product requirements — not optional flourishes. Visual token refinement (exact hex, font metrics) comes after templates work.

### IV. Locale-First Content
Every user-facing string is locale-keyed (`en` / `fr`) from day one. Flat TypeScript/MDX content — no CMS or database for content. Contact is a modal, not a route.

### V. Simplicity & Free-Tier Deployability
Prefer a single Next.js App Router app on Vercel free tier. No CMS, no database, no Strix security scans unless the user explicitly requests them. Avoid speculative abstractions; reuse shared components (FilterChipGroup, CertificationCard variants, detail shell).

## Portfolio Constraints

- Tech baseline: Next.js App Router, TypeScript, Tailwind + CSS variables, next-intl, next-themes, next/font, next/image, Framer Motion, lucide-react + brand icons.
- Typeface: Geist or Space Grotesk (not Inter).
- Signature UI: KineticHeading (4-copy character echo stack, staggered spring entrance) on every page H1.
- Public URLs for live demos when available; placeholders (`#`) acceptable until deploys exist.

## Development Workflow

1. Spec Kit: constitution → specify → plan → tasks → implement → converge until Converged.
2. Build order: foundation → KineticHeading + chrome → About → Work → Writing → Resume → Certifications → motion/responsive polish.
3. Placeholder content is acceptable for the initial scaffold; swap real assets later without schema changes.

## Governance

This constitution supersedes ad-hoc implementation preferences. Amendments require updating this file with version bump and date. Spec Kit artifacts under `specs/` must remain consistent with these principles.

**Version**: 1.0.0 | **Ratified**: 2026-09-19 | **Last Amended**: 2026-09-19
