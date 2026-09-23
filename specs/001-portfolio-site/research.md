# Research: Portfolio Site

## Decision: next-intl for App Router i18n

**Rationale**: Confirmed locale path prefixes (`/en`, `/fr`); next-intl is the standard App Router solution with middleware + `[locale]` segment.

**Alternatives**: next-i18next (Pages Router oriented); manual middleware (more DIY).

## Decision: Framer Motion for kinetic heading & page transitions

**Rationale**: Spec calls for spring/overshoot per-character stagger and AnimatePresence route transitions; Framer Motion fits React/Next well.

**Alternatives**: GSAP (heavier for this use); CSS-only (harder spring trail).

## Decision: Flat TS content modules (+ MDX for blog body)

**Rationale**: Confirmed non-CMS; locale-keyed fields from day one. Blog long-form uses MDX or structured sections in TS for placeholders.

**Alternatives**: Contentlayer/Sanity — rejected per constitution (no CMS).

## Decision: next-themes class strategy

**Rationale**: Dual logo assets need `.dark` class; system preference default + toggle.

## Decision: Geist font via next/font

**Rationale**: Geometric grotesk; avoids Inter per user design rules; first-party Vercel font.
