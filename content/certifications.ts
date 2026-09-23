export type CertType = "certification" | "specialization";

export type Certification = {
  id: string;
  type: CertType;
  image: string;
  certificateImage: string;
  certificatePdf?: string;
  verifyHref: string;
  title: string;
  description: string;
  keyPoints: string[];
  issuer: string;
  obtainedDate: string;
};

export const certifications: Certification[] = [
  {
    id: "packt-mern-stack",
    type: "specialization",
    image: "/certifications/previews/packt-mern-stack.jpg",
    certificateImage: "/certifications/previews/packt-mern-stack.jpg",
    certificatePdf: "/certifications/pdfs/packt-mern-stack.pdf",
    verifyHref:
      "https://www.coursera.org/account/accomplishments/specialization/423LP3ID5IQF",
    title: "MERN Stack Specialization",
    description:
      "Full-stack MongoDB, Express, React, and Node — building end-to-end web apps with Packt on Coursera.",
    keyPoints: [
      "MongoDB data modeling",
      "Express APIs",
      "React frontends",
      "Node.js services",
    ],
    issuer: "Packt · Coursera",
    obtainedDate: "2025",
  },
  {
    id: "calarts-ui",
    type: "certification",
    image: "/certifications/previews/calarts-ui.jpg",
    certificateImage: "/certifications/previews/calarts-ui.jpg",
    certificatePdf: "/certifications/pdfs/calarts-ui.pdf",
    verifyHref:
      "https://www.coursera.org/account/accomplishments/records/93B0XLMAJSO7",
    title: "Visual Elements of User Interface Design",
    description:
      "UI fundamentals — visual hierarchy, layout, and interface craft from CalArts.",
    keyPoints: [
      "Visual hierarchy",
      "Layout systems",
      "Interface craft",
      "Design critique",
    ],
    issuer: "California Institute of the Arts · Coursera",
    obtainedDate: "Feb 2026",
  },
  {
    id: "ibm-nodejs-express",
    type: "certification",
    image: "/certifications/previews/ibm-nodejs-express.jpg",
    certificateImage: "/certifications/previews/ibm-nodejs-express.jpg",
    certificatePdf: "/certifications/pdfs/ibm-nodejs-express.pdf",
    verifyHref:
      "https://www.coursera.org/account/accomplishments/records/DUGX60FOSB9J",
    title: "Developing Back-End Apps with Node.js and Express",
    description:
      "REST APIs, Express routing, middleware, and server-side patterns with IBM.",
    keyPoints: [
      "Express routing",
      "Middleware & auth patterns",
      "REST API design",
      "Server-side Node.js",
    ],
    issuer: "IBM · Coursera",
    obtainedDate: "Jan 2026",
  },
  {
    id: "selenium-java-automation",
    type: "certification",
    image: "/certifications/previews/selenium-java-automation.jpg",
    certificateImage: "/certifications/previews/selenium-java-automation.jpg",
    certificatePdf: "/certifications/pdfs/selenium-java-automation.pdf",
    verifyHref:
      "https://www.coursera.org/account/accomplishments/records/QR1WIBJ3BOQK",
    title: "Create Your First Automation Script Using Selenium and Java",
    description:
      "Hands-on browser automation with Selenium WebDriver and Java.",
    keyPoints: [
      "Selenium WebDriver",
      "Java test scripts",
      "Locator strategies",
      "Basic automation flows",
    ],
    issuer: "Coursera",
    obtainedDate: "Jan 2026",
  },
  {
    id: "intro-selenium",
    type: "certification",
    image: "/certifications/previews/intro-selenium.jpg",
    certificateImage: "/certifications/previews/intro-selenium.jpg",
    certificatePdf: "/certifications/pdfs/intro-selenium.pdf",
    verifyHref:
      "https://www.coursera.org/account/accomplishments/records/X7EPFJY8IWTQ",
    title: "Introduction to Selenium",
    description:
      "Foundations of automated UI testing with the Selenium ecosystem.",
    keyPoints: [
      "Automation mindset",
      "Browser drivers",
      "Test structure",
      "Debugging failures",
    ],
    issuer: "Coursera",
    obtainedDate: "Jan 2026",
  },
  {
    id: "packt-backend-api",
    type: "certification",
    image: "/certifications/previews/packt-backend-api.jpg",
    certificateImage: "/certifications/previews/packt-backend-api.jpg",
    certificatePdf: "/certifications/pdfs/packt-backend-api.pdf",
    verifyHref:
      "https://www.coursera.org/account/accomplishments/records/X7RACNUWOD7O",
    title: "Backend Development and API Creation",
    description: "Building and structuring backend services and APIs.",
    keyPoints: [
      "API creation",
      "Backend architecture",
      "Request/response design",
      "Service layering",
    ],
    issuer: "Packt · Coursera",
    obtainedDate: "2025",
  },
  {
    id: "ibm-software-engineering",
    type: "certification",
    image: "/certifications/previews/ibm-software-engineering.jpg",
    certificateImage: "/certifications/previews/ibm-software-engineering.jpg",
    certificatePdf: "/certifications/pdfs/ibm-software-engineering.pdf",
    verifyHref:
      "https://www.coursera.org/account/accomplishments/records/1M5K4GJPQFHO",
    title: "Introduction to Software Engineering",
    description:
      "Software lifecycle, collaboration, and engineering practices with IBM.",
    keyPoints: [
      "SDLC basics",
      "Requirements & design",
      "Team collaboration",
      "Quality practices",
    ],
    issuer: "IBM · Coursera",
    obtainedDate: "Nov 2025",
  },
  {
    id: "packt-selenium-frameworks",
    type: "certification",
    image: "/certifications/previews/packt-selenium-frameworks.jpg",
    certificateImage: "/certifications/previews/packt-selenium-frameworks.jpg",
    certificatePdf: "/certifications/pdfs/packt-selenium-frameworks.pdf",
    verifyHref:
      "https://www.coursera.org/account/accomplishments/records/6NAA926IMNVP",
    title: "Selenium Automation and Testing Frameworks",
    description:
      "Test frameworks, patterns, and scalable Selenium automation.",
    keyPoints: [
      "Test frameworks",
      "Page object patterns",
      "Suite organization",
      "Maintainable automation",
    ],
    issuer: "Packt · Coursera",
    obtainedDate: "2025",
  },
  {
    id: "upenn-computational-thinking",
    type: "certification",
    image: "/certifications/previews/upenn-computational-thinking.jpg",
    certificateImage: "/certifications/previews/upenn-computational-thinking.jpg",
    certificatePdf: "/certifications/pdfs/upenn-computational-thinking.pdf",
    verifyHref:
      "https://www.coursera.org/account/accomplishments/records/9D95EB7N5F5V",
    title: "Computational Thinking for Problem Solving",
    description:
      "Problem decomposition, algorithms, and computational thinking from UPenn.",
    keyPoints: [
      "Decomposition",
      "Pattern recognition",
      "Algorithm design",
      "Abstraction",
    ],
    issuer: "University of Pennsylvania · Coursera",
    obtainedDate: "Dec 2023",
  },
  {
    id: "cisco-networking-basics",
    type: "certification",
    image: "/certifications/previews/cisco-networking-basics.jpg",
    certificateImage: "/certifications/previews/cisco-networking-basics.jpg",
    certificatePdf: "/certifications/pdfs/cisco-networking-basics.pdf",
    verifyHref:
      "https://www.linkedin.com/in/tanmay-shinde-160a60282/details/certifications/",
    title: "Networking Basics",
    description:
      "Foundational networking concepts from Cisco Networking Academy.",
    keyPoints: [
      "TCP/IP model",
      "Switching & routing basics",
      "Network security intro",
      "Troubleshooting mindset",
    ],
    issuer: "Cisco Networking Academy",
    obtainedDate: "Jan 2025",
  },
  {
    id: "salesforce-tableau",
    type: "certification",
    image: "/certifications/previews/salesforce-tableau.jpg",
    certificateImage: "/certifications/previews/salesforce-tableau.jpg",
    certificatePdf: "/certifications/pdfs/salesforce-tableau.pdf",
    verifyHref:
      "https://www.linkedin.com/in/tanmay-shinde-160a60282/details/certifications/",
    title: "Tableau Fundamentals",
    description: "Data visualization fundamentals with Tableau via Salesforce.",
    keyPoints: [
      "Chart selection",
      "Dashboards",
      "Data connections",
      "Visual storytelling",
    ],
    issuer: "Salesforce",
    obtainedDate: "Nov 2024",
  },
  {
    id: "packt-frontend-react",
    type: "certification",
    image: "/certifications/previews/packt-frontend.jpg",
    certificateImage: "/certifications/previews/packt-frontend.jpg",
    certificatePdf: "/certifications/pdfs/packt-frontend.pdf",
    verifyHref:
      "https://www.coursera.org/account/accomplishments/verify/G0SBZSD1ERP5",
    title: "Frontend Development with React",
    description:
      "Building interactive UIs with React — components, state, and modern frontend patterns.",
    keyPoints: [
      "React components",
      "State & props",
      "UI composition",
      "Frontend workflows",
    ],
    issuer: "Packt · Coursera",
    obtainedDate: "Apr 2026",
  },
  {
    id: "packt-adv-frontend",
    type: "certification",
    image: "/certifications/previews/packt-adv-frontend.jpg",
    certificateImage: "/certifications/previews/packt-adv-frontend.jpg",
    certificatePdf: "/certifications/pdfs/packt-adv-frontend.pdf",
    verifyHref:
      "https://www.coursera.org/account/accomplishments/verify/OJR4N9N110AU",
    title: "Advanced Frontend Development and Deployment",
    description:
      "Advanced React patterns and shipping frontend apps to production.",
    keyPoints: [
      "Advanced React",
      "Build tooling",
      "Deployment",
      "Production frontend",
    ],
    issuer: "Packt · Coursera",
    obtainedDate: "Apr 2026",
  },
  {
    id: "ibm-mongodb",
    type: "certification",
    image: "/certifications/previews/ibm-mongodb.jpg",
    certificateImage: "/certifications/previews/ibm-mongodb.jpg",
    certificatePdf: "/certifications/pdfs/ibm-mongodb.pdf",
    verifyHref:
      "https://www.coursera.org/account/accomplishments/verify/VZ972HZ4U2C7",
    title: "Node.js & MongoDB: Developing Back-end Database Applications",
    description:
      "Backend apps with Node.js and MongoDB — schemas, queries, and data APIs.",
    keyPoints: [
      "MongoDB collections",
      "Node.js backends",
      "CRUD APIs",
      "Data modeling",
    ],
    issuer: "IBM · Coursera",
    obtainedDate: "Apr 2024",
  },
  {
    id: "microsoft-excel",
    type: "certification",
    image: "/certifications/previews/microsoft-excel.jpg",
    certificateImage: "/certifications/previews/microsoft-excel.jpg",
    certificatePdf: "/certifications/pdfs/microsoft-excel.pdf",
    verifyHref:
      "https://www.coursera.org/account/accomplishments/verify/ZWIXPZDILYSM",
    title: "Preparing Data for Analysis with Microsoft Excel",
    description:
      "Cleaning, shaping, and preparing datasets in Excel for analysis.",
    keyPoints: [
      "Data cleaning",
      "Excel workflows",
      "Analysis prep",
      "Spreadsheet craft",
    ],
    issuer: "Microsoft · Coursera",
    obtainedDate: "Aug 2026",
  },
  {
    id: "figma-prototype",
    type: "certification",
    image: "/certifications/previews/figma-design.jpg",
    certificateImage: "/certifications/previews/figma-design.jpg",
    certificatePdf: "/certifications/pdfs/figma-design.pdf",
    verifyHref:
      "https://www.coursera.org/account/accomplishments/verify/6OOF2PCSATLN",
    title: "Create a High-Fidelity Prototype with Figma",
    description:
      "Hands-on Figma project — high-fidelity prototypes for product UI.",
    keyPoints: [
      "Figma prototyping",
      "High-fidelity UI",
      "Interaction flows",
      "Design handoff",
    ],
    issuer: "Coursera Project Network",
    obtainedDate: "Apr 2026",
  },
  {
    id: "miro-brainstorm",
    type: "certification",
    image: "/certifications/previews/miro.jpg",
    certificateImage: "/certifications/previews/miro.jpg",
    certificatePdf: "/certifications/pdfs/miro.pdf",
    verifyHref:
      "https://www.coursera.org/account/accomplishments/verify/E811OWQI1FDZ",
    title: "Create a Product Design Brainstorming with Miro",
    description:
      "Collaborative product brainstorming and ideation boards in Miro.",
    keyPoints: [
      "Miro boards",
      "Product brainstorming",
      "Design workshops",
      "Team ideation",
    ],
    issuer: "Coursera Project Network",
    obtainedDate: "Apr 2026",
  },
];
