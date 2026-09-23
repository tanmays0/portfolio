# Tasks: Portfolio Site

**Input**: Design documents from `/specs/001-portfolio-site/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md

**Tests**: Optional — not required for v1

## Phase 1: Setup

- [ ] T001 Scaffold Next.js App Router + TypeScript + Tailwind in repo root
- [ ] T002 [P] Add next-intl, next-themes, framer-motion, lucide-react, react-icons
- [ ] T003 [P] Configure CSS variables design tokens in `app/globals.css` + Tailwind theme
- [ ] T004 Init git tracking for app files; ensure `.gitignore` covers `.next`/node_modules

## Phase 2: Foundational

- [ ] T005 Configure `i18n/routing.ts`, middleware, `messages/en.json` + `fr.json`
- [ ] T006 Create root + `[locale]/layout.tsx` with Geist font, ThemeProvider
- [ ] T007 Create locale-keyed content modules under `content/`
- [ ] T008 Add placeholder assets under `public/` (logos, avatar, project/cert images, resume.pdf stub)
- [ ] T009 Redirect `/[locale]` → `/[locale]/about`

**Checkpoint**: Foundation ready

## Phase 3: User Story 1 — About & Chrome (P1)

- [ ] T010 [P] [US1] Build `KineticHeading` component
- [ ] T011 [P] [US1] Build Header, Footer, ThemeLogo, LangSwitch, ContactModal, ThemeToggle
- [ ] T012 [US1] Build TabSwitcher, TimelineList, SkillCategoryRow, InfoRow, SectionHeading, Button
- [ ] T013 [US1] Build CertificationCard (compact) + CertificateLightbox
- [ ] T014 [US1] Implement About page

## Phase 4: User Story 2 — Projects (P1)

- [ ] T015 [P] [US2] FilterChipGroup + ViewToggle
- [ ] T016 [US2] ProjectCard + ProjectRow; work listing page
- [ ] T017 [US2] Project detail (Breadcrumb, MetaRow, ProseSection, StackList, PrevNextNav, ExternalLinkButton)

## Phase 5: User Story 3 — Writing (P2)

- [ ] T018 [US3] ArticleRow + writing listing
- [ ] T019 [US3] Writing detail with free-form prose

## Phase 6: User Story 4 — Resume & Certs (P2)

- [ ] T020 [US4] Resume page + PdfEmbed
- [ ] T021 [US4] Certifications listing with full cards + type filters

## Phase 7: User Story 5 — Polish (P2)

- [ ] T022 [US5] AnimatePresence page transitions + scroll-reveal
- [ ] T023 [US5] Mobile nav, responsive grids, chip scroll, dark-mode/hover polish
- [ ] T024 Verify build; Spec Kit converge notes

## Parallel opportunities

- T002/T003 after T001
- T010/T011 in parallel after foundation
- T015 while finishing About polish
