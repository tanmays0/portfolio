export type Project = {
  slug: string;
  year: string;
  categories: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  name: string;
  description: string;
  tagline: string;
  problem: string;
  solution: string;
  whoItsFor: string;
  howItWorks: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    slug: "admax",
    year: "2025",
    categories: ["SaaS / Internship"],
    image: "/projects/admax.jpg",
    liveUrl: "#",
    githubUrl: "#",
    name: "admax",
    description:
      "Hyperlocal SaaS ad network — advertiser dashboard, admin, marketing site, and screen player.",
    tagline: "Ads that run on real screens, operated from one control plane.",
    problem:
      "Local advertisers needed a full stack to buy, schedule, and play ads across physical screens—without five disconnected tools.",
    solution:
      "Built and maintained the AdMax India platform end-to-end: REST APIs, Postgres schema, web dashboards, and cross-platform players for iOS & Android.",
    whoItsFor:
      "Teams shipping multi-surface SaaS (web + mobile + edge players) who need a real internship-scale product story.",
    howItWorks:
      "Advertisers book campaigns → admin approves inventory → screen players pull creatives over the API on schedule.",
    stack: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "React Native",
      "Swift",
      "Android",
    ],
  },
  {
    slug: "ops-mcp",
    year: "2026",
    categories: ["Systems / Agent"],
    image: "/projects/ops-mcp.jpg",
    liveUrl: "#",
    githubUrl: "#",
    name: "ops-mcp",
    description: "MCP + Pages control plane for agent operations.",
    tagline: "A control plane that keeps agent tooling operable.",
    problem:
      "Agent stacks sprawl across tools with no shared ops surface for pages, health, and control.",
    solution:
      "ops-mcp exposes an MCP-native control plane with Pages for operators to inspect and steer agents.",
    whoItsFor:
      "Platform engineers and agent builders who need a serious ops layer—not a toy demo.",
    howItWorks:
      "MCP tools register into a control plane; Pages render live status and actions over the same contract.",
    stack: ["TypeScript", "MCP", "Next.js", "Vercel"],
  },
  {
    slug: "limitlab",
    year: "2026",
    categories: ["Systems / Backend"],
    image: "/projects/limitlab.jpg",
    liveUrl: "#",
    githubUrl: "#",
    name: "limitlab",
    description: "Rate limiter with a public Vercel demo.",
    tagline: "Correct limiting you can demo in a browser.",
    problem:
      "Most rate-limit demos hide the algorithm or break under concurrent load.",
    solution:
      "limitlab ships a transparent limiter core plus a Vercel demo that proves behavior live.",
    whoItsFor:
      "Backend engineers evaluating token bucket / sliding window designs.",
    howItWorks:
      "Requests hit the demo API; counters update with visible window math and rejection paths.",
    stack: ["TypeScript", "Vercel", "Edge", "Redis-compatible"],
  },
  {
    slug: "cite-rag",
    year: "2026",
    categories: ["AI / Product UI"],
    image: "/projects/cite-rag.jpg",
    liveUrl: "#",
    githubUrl: "#",
    name: "cite-rag",
    description: "Flagship RAG chat with citations and polished product UI.",
    tagline: "Answers you can trust because every claim cites a source.",
    problem: "Generic AI chat UIs hallucinate and look interchangeable.",
    solution:
      "cite-rag pairs retrieval with citation-first UI, motion, and a deploy-complete ingest path.",
    whoItsFor:
      "Teams that need grounded Q&A for docs—and a portfolio-grade product surface.",
    howItWorks:
      "Docs ingest → embeddings → chat with inline citations and source panels.",
    stack: ["Next.js", "Postgres", "Embeddings", "Motion"],
  },
  {
    slug: "diff-review",
    year: "2026",
    categories: ["Devtools / AI"],
    image: "/projects/diff-review.jpg",
    liveUrl: "#",
    githubUrl: "#",
    name: "diff-review",
    description: "AI PR reviewer with a focused web UI.",
    tagline: "Review diffs faster without losing human judgment.",
    problem:
      "PR noise buries real risks; chat-only reviewers lack a diff-native workspace.",
    solution:
      "diff-review pairs model findings with a web UI built around the patch.",
    whoItsFor:
      "Developers and leads who want AI assist without abandoning the diff.",
    howItWorks:
      "Pull a PR → model annotates hunks → UI lets you accept, dismiss, or comment.",
    stack: ["TypeScript", "GitHub API", "Next.js", "LLM"],
  },
  {
    slug: "paylock",
    year: "2026",
    categories: ["Fintech / Payments"],
    image: "/projects/paylock.jpg",
    liveUrl: "#",
    githubUrl: "#",
    name: "paylock",
    description: "Payment idempotency with checkout and admin UI.",
    tagline: "Charge once—even when the network retries twice.",
    problem:
      "Retries and webhooks create double charges without a durable idempotency story.",
    solution:
      "paylock centers idempotency keys with checkout + admin surfaces that make state obvious.",
    whoItsFor:
      "Product engineers shipping payments who need correctness and a clear demo UI.",
    howItWorks:
      "Checkout issues an idempotency key; admin shows attempt history and final settlement.",
    stack: ["Stripe", "Next.js", "Postgres", "Webhooks"],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index < 0) return { prev: null, next: null };
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  return { prev, next };
}
