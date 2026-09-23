# Data Model: Portfolio Site

## LocalizedString

```ts
type LocalizedString = { en: string; fr: string };
```

## Site

- name, tagline, badge, bio, email
- socials: { x, linkedin, github, huggingface, email, whatsapp, youtube }
- resumePdf: `/resume.pdf`
- avatar, logoLight, logoDark

## Project (ordered)

- id/slug: ops-mcp | limitlab | cite-rag | diff-review | paylock
- year, categories: string[]
- image, liveUrl, githubUrl
- name, description, tagline: LocalizedString
- sections: { problem, solution, whoItsFor, howItWorks }: LocalizedString
- stack: string[]

## Article

- slug, category, date, readTimeMinutes
- title, excerpt: LocalizedString
- coverImage
- body: LocalizedString (markdown/MDX string for v1)

## Certification

- id, type: "certification" | "specialization"
- title, description: LocalizedString
- keyPoints: LocalizedString[] (or locale map of string[])
- issuer, obtainedDate: LocalizedString | string
- image, verifyHref, certificateImage

## TimelineEntry / SkillCategory / InfoRow

As used on About credentials tabs; all text LocalizedString or locale-resolved at read time.
