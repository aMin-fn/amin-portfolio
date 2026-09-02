export type ProjectTone = "aqua" | "blue" | "amber" | "violet";
export type ProjectImagePresentation = "desktop" | "mobile";

export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type Metric = {
  value: string;
  label: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  image: string;
  highlights: readonly string[];
  technologies: readonly string[];
};

export type ProjectImage = {
  src: `/${string}`;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  title: string;
  eyebrow: string;
  role: string;
  description: string;
  contributions: readonly string[];
  outcome: string;
  href?: `https://${string}`;
  linkLabel?: string;
  status: "Live" | "Demo" | "Private" | "Private case study" | "Concept";
  technologies: readonly string[];
  tone: ProjectTone;
  image?: ProjectImage;
  images?: readonly ProjectImage[];
  imagePresentation?: ProjectImagePresentation;
  featured?: boolean;
  hideAction?: boolean;
};

export type SkillGroup = {
  title: string;
  items: readonly string[];
};
