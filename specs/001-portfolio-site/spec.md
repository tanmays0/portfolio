# Feature Specification: Portfolio Site

**Feature Branch**: `001-portfolio-site`

**Created**: 2026-09-19

**Status**: Draft

**Input**: Reverse-engineered portfolio design system — hire-facing Next.js site with en/fr locales, kinetic headings, five pillar projects, contact modal.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Browse About & Credentials (Priority: P1)

A hiring manager lands on the About page, reads the hero intro, switches Academic / Experience / Stack / Info tabs, previews certifications, and opens Contact or Resume.

**Why this priority**: About is the default home and primary hire-facing surface.

**Independent Test**: Visit `/en/about`, switch all four tabs, open Contact modal, click View resume.

**Acceptance Scenarios**:

1. **Given** locale root `/en`, **When** loaded, **Then** redirects to `/en/about`.
2. **Given** About page, **When** H1 mounts, **Then** KineticHeading animates character echo.
3. **Given** credentials tabs, **When** each tab is selected, **Then** matching content panel shows (timeline / skills / info).
4. **Given** header CONTACT, **When** clicked, **Then** modal opens (no route change).
5. **Given** certifications preview, **When** View all is clicked, **Then** navigates to `/en/certifications`.

---

### User Story 2 - Explore Projects (Priority: P1)

A visitor filters projects, toggles list/grid, opens a case study, follows Live/GitHub, and advances to the next project.

**Why this priority**: Projects prove systems depth; five pillars only.

**Independent Test**: Visit `/en/work`, filter, toggle views, open ops-mcp detail, use next project link.

**Acceptance Scenarios**:

1. **Given** projects listing, **When** filter chip selected, **Then** only matching projects show.
2. **Given** listing, **When** Grid/List toggled, **Then** layout switches without losing filter.
3. **Given** project detail, **When** rendered, **Then** sections Problem → Solution → Who it's for → How it works → Stack appear.
4. **Given** last project in order, **When** Next project clicked, **Then** wraps to first (ops-mcp).

---

### User Story 3 - Read Writing (Priority: P2)

A visitor browses blog articles by category and reads a full article.

**Why this priority**: Secondary depth signal after projects.

**Independent Test**: Visit `/en/writing`, filter, open an article; breadcrumb shows Blog / Category.

**Acceptance Scenarios**:

1. **Given** blog listing, **When** category chip selected, **Then** rows filter.
2. **Given** article detail, **When** breadcrumb shown, **Then** second segment is category (not title).

---

### User Story 4 - Resume & Certifications (Priority: P2)

A visitor views/downloads the PDF resume and browses full certification cards with lightbox and verify links.

**Why this priority**: Credential proof for hiring screens.

**Independent Test**: Visit `/en/resume` and `/en/certifications`; filter by type; open certificate lightbox.

**Acceptance Scenarios**:

1. **Given** resume page, **When** View PDF / Download clicked, **Then** same PDF asset is targeted appropriately.
2. **Given** certifications page, **When** type filter used, **Then** cards filter; full variant shows Issuer + Obtained + Key points.

---

### User Story 5 - Locale & Theme (Priority: P2)

A visitor switches language (path-preserving) and light/dark theme.

**Why this priority**: Confirmed site behaviors; required for polished hire site.

**Independent Test**: From `/en/work/ops-mcp` switch to FR → `/fr/work/ops-mcp`; toggle theme; logos swap via CSS.

**Acceptance Scenarios**:

1. **Given** any localized path, **When** language toggle clicked, **Then** same path under other locale.
2. **Given** theme toggle or system preference, **When** dark class applied, **Then** dark logo visible and light logo hidden.

---

### Edge Cases

- Empty filter result shows a clear empty state.
- Missing project/article slug returns 404.
- Mobile collapses primary nav into hamburger; chips scroll horizontally.
- Contact from footer also opens the same modal.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Locale-prefixed routes for `en` and `fr`; `/[locale]` redirects to About.
- **FR-002**: Global Header (logo, ABOUT/PROJECTS/BLOG, CONTACT modal trigger, lang switch, theme toggle) and Footer (nav, resume, 7 socials, copyright).
- **FR-003**: KineticHeading on every page H1 (4 character copies per mask, stagger, spring).
- **FR-004**: About credentials TabSwitcher with Academic, Experience, Stack, Info.
- **FR-005**: Projects listing with FilterChipGroup + List/Grid ViewToggle; five pillars only.
- **FR-006**: Project detail fixed schema + PrevNextNav wraparound + Live/GitHub buttons.
- **FR-007**: Blog listing (meta + title + excerpt) and free-form article detail.
- **FR-008**: Resume with View/Download + embedded PDF.
- **FR-009**: CertificationCard `compact` | `full` + CertificateLightbox; type filters on listing.
- **FR-010**: All content locale-keyed; placeholder copy acceptable initially.
- **FR-011**: Light/dark via CSS variables + next-themes; dual logo assets.

### Key Entities

- **Site**: name, socials, resume path, avatar, logos.
- **Project**: slug, year, categories, image, locale fields, case-study sections, links.
- **Article**: slug, category, date, readTime, excerpt, body, cover.
- **Certification**: type, title, description, keyPoints, issuer, obtainedDate, image, verifyHref.
- **TimelineEntry**: title, dateRange, org, description (academic/experience).
- **SkillCategory**: label, tags[].
- **InfoRow**: label, value.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: All Section 2 routes resolve in both locales without broken nav.
- **SC-002**: Kinetic heading replays on every client navigation to a page with H1.
- **SC-003**: Five projects appear in order; next wraps.
- **SC-004**: Contact never navigates to a contact route.
- **SC-005**: Certification compact and full share one component API.
- **SC-006**: Site builds and deploys to Vercel free tier.
