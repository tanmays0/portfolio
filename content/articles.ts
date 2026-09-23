export type Article = {
  slug: string;
  category: string;
  date: string;
  readTimeMinutes: number;
  coverImage: string;
  title: string;
  excerpt: string;
  body: string;
};

export const articles: Article[] = [
  {
    slug: "why-citations-beat-confidence",
    category: "AI",
    date: "2026-08-12",
    readTimeMinutes: 6,
    coverImage: "/projects/cite-rag.jpg",
    title: "Why citations beat confidence scores",
    excerpt:
      "Hire-facing RAG products win when every claim points at a source—not when the model sounds sure.",
    body: `## The trust problem

Confidence scores are easy to show and hard to defend. A hiring manager cannot verify a float.

## Citations as product

Inline citations turn retrieval into UI. The answer becomes inspectable.

## What cite-rag optimizes for

Deploy-complete ingest, clear source panels, and motion that supports reading—not decoration.`,
  },
  {
    slug: "idempotency-keys-in-checkout",
    category: "Systems",
    date: "2026-07-02",
    readTimeMinutes: 5,
    coverImage: "/projects/paylock.jpg",
    title: "Idempotency keys in checkout UIs",
    excerpt:
      "Retries are not edge cases. Your checkout UI should make idempotency visible.",
    body: `## Double charge reality

Clients retry. Proxies retry. Users mash the button.

## Make state obvious

paylock surfaces attempt history so operators see what settled.

## Demo what you claim

A portfolio payments project without idempotency is incomplete.`,
  },
  {
    slug: "mcp-control-planes",
    category: "Agents",
    date: "2026-06-18",
    readTimeMinutes: 7,
    coverImage: "/projects/ops-mcp.jpg",
    title: "MCP needs a control plane",
    excerpt:
      "Tools alone are not operations. ops-mcp argues for Pages + MCP as an ops surface.",
    body: `## Tools without ops

An agent with twenty tools and no health surface will fail in production.

## Pages as the UI contract

The same MCP contract can drive operator Pages.

## Portfolio angle

ops-mcp is the systems/agent pillar for a reason.`,
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
