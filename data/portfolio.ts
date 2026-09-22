import type {
  Experience,
  Metric,
  NavItem,
  Project,
  SkillGroup,
} from "@/types/portfolio";

export const siteConfig = {
  name: "Amin FOROUZANDEH",
  shortName: "AMIN",
  role: "Frontend Developer",
  location: "Isfahan, Iran",
  timezone: "GMT+3:30",
  email: "aminfn4@gmail.com",
  phone: "+98 905 878 9349",
  github: "https://github.com/aMin-fn",
  linkedin: "https://www.linkedin.com/in/amin-forouzandeh-49129436a",
  resume: "/Amin_Farouzandeh_Resume.pdf",
} as const;

export const navigation: readonly NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const metrics: readonly Metric[] = [
  { value: "3+", label: "Years building production frontends" },
  { value: "5K+", label: "Daily sessions on shipped platforms" },
  { value: "2K+", label: "Active users on a maintained product" },
];

export const marqueeSkills = [
  "TypeScript",
  "React.js",
  "Next.js",
  "JavaScript",
  "TanStack Query",
  "Redux",
  "React Hook Form",
  "Tailwind CSS",
  "REST APIs",
] as const;

export const experiences: readonly Experience[] = [
  {
    company: "Dadeh Gostar Khat e Roshan",
    role: "Frontend Developer",
    period: "Sep 2025 — Present",
    location: "Iran",
    summary:
      "Owning frontend delivery across multi-tenant public services, utility PWAs, analytical dashboards, and AI-powered products.",
    highlights: [
      "Architected a reusable multi-tenant e-services frontend with environment-driven branding, themes, API endpoints, and tenant configuration.",
      "Built API-driven dynamic forms with conditional business logic, validation, reusable data tables, and analytical charts.",
      "Took ownership of existing water and gas PWA codebases, repairing form workflows, application logic, and mobile UI consistency.",
      "Delivered the Narvan AI marketplace and forecasting interfaces as the sole frontend developer.",
    ],
    technologies: ["Next.js", "TypeScript", "Multi-tenant UI", "Dynamic forms"],
    image: "/images/companies/main.webp",
  },
  {
    company: "Digimark AI",
    role: "Frontend Developer",
    period: "Jun 2025 — Sep 2025",
    location: "Iran",
    summary:
      "Developed and maintained responsive B2C interfaces for an established product with a large active user base.",
    highlights: [
      "Shipped real-world customer flows on a high-traffic storefront.",
      "Worked with product and design to tighten UI consistency, usability, and maintainability.",
    ],
    technologies: ["JavaScript", "Responsive UI", "Bootstrap"],
    image: "/images/companies/digimark.webp",
  },
  {
    company: "UniCo",
    role: "Co-Frontend Developer",
    period: "Oct 2024 — May 2025",
    location: "Iran",
    summary:
      "Built a production student platform covering scheduling, professor reviews, academic analytics, and notifications with a two-person frontend team.",
    highlights: [
      "Shared end-to-end delivery across core student workflows still used in production.",
      "Shipped a responsive product that now serves 2K+ active users.",
    ],
    technologies: ["React", "TypeScript", "Product UI"],
    image: "/images/companies/unico.svg",
  },
  {
    company: "Caspian Oxin",
    role: "Frontend Developer Intern",
    period: "5-month internship",
    location: "Iran",
    summary:
      "Started inside a production frontend workflow, contributing user-facing React features and reusable components.",
    highlights: [
      "Implemented assigned product requirements alongside the development team.",
      "Resolved frontend issues and strengthened practical React development skills.",
    ],
    technologies: ["React.js", "JavaScript", "CSS", "Git"],
    image: "/images/companies/caspian.webp",
  },
];

export const projects: readonly Project[] = [
  {
    title: "UniCo",
    eyebrow: "Student Planning & Analytics Platform",
    role: "Co-Frontend Developer · Two-person frontend team",
    description:
      "A production student platform spanning course scheduling, professor reviews, academic analytics, and time-sensitive notifications.",
    contributions: [
      "Shared end-to-end frontend delivery across scheduling, professor reviews, analytics, and notification workflows.",
      "Built and maintained responsive product experiences together with one other frontend developer.",
    ],
    outcome: "2K+ active users",
    links: [{ label: "Visit product", href: "https://uni-co.ir" }],
    status: "Live",
    technologies: ["React", "TypeScript", "State management", "Responsive UI"],
    tone: "amber",
    images: [
      {
        src: "/projects/unico/weekly-schedule.webp",
        alt: "UniCo weekly course schedule builder",
        width: 1364,
        height: 914,
      },
      {
        src: "/projects/unico/professor-details.webp",
        alt: "UniCo professor ratings and AI-generated student feedback summary",
        width: 1349,
        height: 915,
      },
      {
        src: "/projects/unico/dashboard.webp",
        alt: "UniCo student dashboard and academic calendar",
        width: 1400,
        height: 883,
      },
      {
        src: "/projects/unico/academic-analytics.webp",
        alt: "UniCo academic performance analytics and semester grades",
        width: 1400,
        height: 777,
      },
    ],
    featured: true,
  },
  {
    title: "Tavanir E-Services Platform",
    eyebrow: "Multi-tenant Public Service Platform",
    role: "Sole Frontend Developer · Architecture & delivery",
    description:
      "A reusable e-services frontend for Ministry of Energy workflows. Environment-based tenant configuration switches branding, themes, API endpoints, and product settings without duplicating the application.",
    contributions: [
      "Designed API-driven dynamic forms with conditional fields, validation, and service-specific workflows.",
      "Built reusable data tables and charts for operational and customer-service interfaces.",
    ],
    outcome: "One frontend architecture · multiple utility tenants",
    links: [
      { label: "View demo", href: "https://new-eservice.demo.khateroshan.com/" },
    ],
    status: "Demo",
    technologies: [
      "Next.js",
      "TypeScript",
      "Multi-tenant architecture",
      "Dynamic forms",
      "Data visualization",
    ],
    tone: "amber",
    images: [
      {
        src: "/projects/electricity/services-home.webp",
        alt: "National electricity e-services portal home and service discovery interface",
        width: 1600,
        height: 877,
      },
      {
        src: "/projects/electricity/request-details-redacted.webp",
        alt: "Privacy-safe electricity service request tracking and detail interface",
        width: 1600,
        height: 877,
      },
    ],
    featured: true,
  },
  {
    title: "National Water Services",
    eyebrow: "Production Utility Platform",
    role: "Frontend Modernization · Existing PWA",
    description:
      "Took ownership of an existing mobile-first water-services PWA and modernized its interface and application logic across billing, subscription management, and customer-request workflows.",
    contributions: [
      "Repaired incomplete form flows and API-driven business logic across core customer services.",
      "Refined the mobile UI into a consistent and reliable production experience.",
    ],
    outcome: "+4k installs on Café Bazaar",
    links: [
      { label: "Open web app", href: "https://app.nww.ir" },
      { label: "Café Bazaar", href: "https://cafebazaar.ir/app/hamrah.abfa.twa" },
    ],
    status: "Live",
    technologies: ["TypeScript", "REST API", "React Hook Form"],
    tone: "aqua",
    imagePresentation: "mobile",
    images: [
      {
        src: "/projects/nww/customer-dashboard.webp",
        alt: "Mobile water utility billing, requests, and reports dashboard",
        width: 321,
        height: 720,
      },
      {
        src: "/projects/nww/subscription-services.webp",
        alt: "Mobile water-services subscription and customer service dashboard",
        width: 323,
        height: 720,
      },
    ],
  },
  {
    title: "National Gas Services",
    eyebrow: "Utility Customer Portal",
    role: "Frontend Modernization · Existing PWA",
    description:
      "Modernized an existing gas-services PWA, resolving interface and application-logic issues across billing, remote services, customer requests, and reporting workflows.",
    contributions: [
      "Restored form behavior and service flows that were incomplete or unreliable in the inherited codebase.",
      "Reworked the mobile experience for clearer navigation and more consistent interaction patterns.",
    ],
    outcome: "Modernized utility PWA · demo environment",
    status: "Demo",
    technologies: ["TypeScript", "REST API", "Responsive UI"],
    tone: "amber",
    imagePresentation: "mobile",
    images: [
      {
        src: "/projects/nigc/customer-dashboard.webp",
        alt: "Mobile national gas services customer dashboard",
        width: 321,
        height: 720,
      },
    ],
  },
  {
    title: "Narvan AI",
    eyebrow: "AI Marketplace & Forecasting Product",
    role: "Sole Frontend Developer · End-to-end delivery",
    description:
      "An AI product ecosystem combining model discovery, developer onboarding, consumption analytics, and applied forecasting workflows.",
    contributions: [
      "Owned the frontend implementation across marketplace and analytics experiences.",
      "Implemented responsive, data-heavy forecasting views with interactive charts and structured tables.",
    ],
    outcome: "AI marketplace + forecasting analytics",
    status: "Private",
    technologies: ["Next.js", "TypeScript", "TanStack Query", "Data visualization"],
    tone: "violet",
    images: [
      {
        src: "/projects/narvan/forecasting-dashboard.webp",
        alt: "Narvan AI forecasting and consumption analytics dashboard",
        width: 1600,
        height: 874,
      },
      {
        src: "/projects/narvan/ai-marketplace-home.webp",
        alt: "Narvan AI models marketplace landing page",
        width: 1408,
        height: 911,
      },
    ],
    featured: true,
    hideAction: true,
  },
];

export const skillGroups: readonly SkillGroup[] = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript ES6+", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks & UI",
    items: ["React.js", "Next.js", "Tailwind CSS", "Ant Design", "shadcn/ui", "MUI"],
  },
  {
    title: "State & data",
    items: ["Redux", "TanStack Query", "Context API", "REST APIs", "React Hook Form"],
  },
  {
    title: "Engineering",
    items: ["SSR / SSG", "Performance", "Lazy loading", "Code splitting", "Git", "Agile"],
  },
];
