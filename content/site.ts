export const site = {
  name: "Tanmay Shinde",
  monogram: "TS",
  email: "shinde.tanmay@gmail.com",
  phone: "+91 8007736520",
  location: "Pune, India",
  resumePdf: "/resume.pdf",
  avatar: "/avatar.jpg",
  logoLight: "/logos/ts-mark.png",
  logoDark: "/logos/ts-mark.png",
  socials: {
    linkedin: "https://www.linkedin.com/in/tanmay-shinde-160a60282/",
    github: "https://github.com/tanmays0",
    email: "mailto:shinde.tanmay@gmail.com",
    whatsapp: "https://wa.me/918007736520",
  },
} as const;

export const experience = [
  {
    title: "Full Stack & Software Developer Intern",
    org: "AdMax India",
    dateRange: "Apr 2026 – Sep 2026",
    bullets: [
      "Built and maintained a hyperlocal SaaS ad network across advertiser dashboard, admin panel, marketing site, and screen player",
      "Shipped REST APIs, PostgreSQL schema design, and cross-platform mobile apps for iOS & Android",
      "Stack: React, Node.js, Express, PostgreSQL, React Native, Swift, Android",
    ],
  },
];

export const academic = [
  {
    title: "B.Tech (Information Technology)",
    org: "MIT ADT University, Pune",
    dateRange: "Aug 2023 – Aug 2027",
    bullets: [
      "School of Computing · CGPA 8.52 / 10.0",
      "Focus on full-stack engineering, systems, and product UI",
    ],
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    org: "St. Mary's School, Pune",
    dateRange: "Jun 2021 – Mar 2023",
    bullets: ["Computer Science stream"],
  },
  {
    title: "Secondary School Certificate (SSC)",
    org: "St. Mary's School, Pune",
    dateRange: "Jun 2010 – Mar 2021",
    bullets: ["Computer Science stream"],
  },
];

export const offlineMode = [
  {
    id: "multisport",
    label: "Multi-Sport Athlete & Enthusiast",
    size: "tall" as const,
    shadow: "vivid-orange" as const,
    icon: "trophy" as const,
  },
  {
    id: "travelling",
    label: "Travelling",
    size: "wide" as const,
    shadow: "sky-blue" as const,
    icon: "plane" as const,
  },
  {
    id: "fitness",
    label: "Fitness",
    size: "square" as const,
    shadow: "main" as const,
    icon: "dumbbell" as const,
  },
  {
    id: "hiking",
    label: "Hiking",
    size: "tall-sm" as const,
    shadow: "coral-pink" as const,
    icon: "mountain" as const,
  },
  {
    id: "gaming",
    label: "Gaming",
    size: "square" as const,
    shadow: "coral-pink" as const,
    icon: "gamepad" as const,
  },
  {
    id: "music",
    label: "Music",
    size: "wide" as const,
    shadow: "sky-blue" as const,
    icon: "music" as const,
  },
];

export const stackCategories = [
  {
    label: "Languages",
    tags: [
      "TypeScript",
      "JavaScript (ES6+)",
      "Java",
      "Python",
      "SQL",
      "HTML5",
      "CSS3",
      "Bash",
    ],
  },
  {
    label: "Frontend",
    tags: [
      "React",
      "Next.js",
      "React Native",
      "Tailwind CSS",
      "Vite",
      "Motion",
      "shadcn/ui",
      "Responsive UI",
    ],
  },
  {
    label: "Backend",
    tags: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST APIs",
      "GraphQL",
      "WebSockets",
      "Auth / JWT / OAuth",
      "Serverless",
    ],
  },
  {
    label: "Data & storage",
    tags: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Prisma",
      "BullMQ",
      "Caching",
      "Schema design",
    ],
  },
  {
    label: "Cloud & DevOps",
    tags: [
      "Docker",
      "Vercel",
      "AWS fundamentals",
      "GitHub Actions",
      "CI/CD",
      "Nginx",
      "Linux",
      "Observability",
    ],
  },
  {
    label: "Testing & quality",
    tags: [
      "Jest",
      "Playwright",
      "Selenium",
      "TestNG",
      "API testing",
      "Postman",
    ],
  },
  {
    label: "Engineering practices",
    tags: [
      "System design",
      "DSA",
      "OOP",
      "MVC",
      "Microservices",
      "Code review",
      "Performance",
      "Security basics",
    ],
  },
  {
    label: "Tools",
    tags: ["Git", "GitHub", "VS Code", "Figma", "Jenkins", "Cursor"],
  },
];
