export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  year?: string;
  role?: string;
  stack: string[];
  cover?: ProjectImage;
  mobile?: ProjectImage;
  gallery?: ProjectImage[];
  details?: {
    whatItIs?: string;
    whatIBuilt?: string;
  };
  published: boolean;
};

export type SkillItem = {
  name: string;
  category: string;
  icon: "html" | "css" | "javascript" | "typescript" | "react" | "nextjs" | "tailwind" | "framer";
};

/**
 * Editorial project showcase arranged with polished titles and accurate order.
 */
export const projects: Project[] = [
  {
    slug: "vantage",
    title: "Vantage — Tennis Performance",
    summary:
      "A calm, precision performance interface engineered for competitive athletes and coaches, distilling match telemetry into actionable technical adjustments.",
    year: "2026",
    role: "Frontend Developer",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Data Analytics"],
    cover: {
      src: "/projects/vantage/cover.png",
      alt: "Vantage Tennis Performance Platform",
      width: 1024,
      height: 496,
    },
    details: {
      whatItIs:
        "A high-precision telemetry dashboard and analytics interface for competitive tennis athletes and coaches.",
      whatIBuilt:
        "Engineered responsive telemetry cards, player performance breakdown modules, and a calm, high-contrast dashboard layout.",
    },
    published: true,
  },
  {
    slug: "dentista",
    title: "Dentista — Dental Clinic Essentials",
    summary:
      "A modern digital storefront for professional dental clinics and practitioners, featuring bilingual navigation, curated catalog categories, and a clean medical aesthetic.",
    year: "2026",
    role: "Frontend Developer",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Bilingual UX"],
    cover: {
      src: "/projects/dentista/cover.png",
      alt: "Dentista Dental Clinic Essentials Storefront",
      width: 1024,
      height: 495,
    },
    details: {
      whatItIs:
        "A specialized storefront engineered for clinical dental supplies, offering seamless product browsing and bilingual support (English & Arabic).",
      whatIBuilt:
        "Developed the responsive hero section with organic collage masks, bilingual header controls, and intuitive category browsing navigation.",
    },
    published: true,
  },
  {
    slug: "developer-platform",
    title: "Developer — Email Infrastructure",
    summary:
      "A developer-focused landing page for high-deliverability email infrastructure, highlighting transactional email at scale with an interactive 3D mascot interface.",
    year: "2026",
    role: "Frontend Developer",
    stack: ["React", "TypeScript", "3D Web", "Tailwind CSS"],
    cover: {
      src: "/projects/developer-platform/cover.png",
      alt: "Developer Platform Landing Page",
      width: 1024,
      height: 489,
    },
    details: {
      whatItIs:
        "A SaaS developer documentation and marketing landing page tailored for engineering teams deploying transactional and marketing emails at scale.",
      whatIBuilt:
        "Engineered responsive layout with custom 3D character illumination, high-contrast typography, and documentation CTA flows.",
    },
    published: true,
  },
  {
    slug: "kemo",
    title: "Kemo — Athletic Footwear",
    summary:
      "An exclusive footwear digital storefront blending editorial product presentation, fluid transitions, and responsive collection browsing.",
    year: "2025",
    role: "Frontend Developer",
    stack: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    cover: {
      src: "/projects/kemo/cover.png",
      alt: "Kemo Footwear Storefront",
      width: 1024,
      height: 495,
    },
    details: {
      whatItIs:
        "An athletic footwear e-commerce concept focusing on high-energy brand storytelling and product presentation.",
      whatIBuilt:
        "Built the responsive hero section with dynamic product spotlights, fluid hover transitions, and collection discovery components.",
    },
    published: true,
  },
  {
    slug: "gnoce-jewelry",
    title: "Gnoce Jewelry — Luxury Storefront",
    summary:
      "A clean, minimalist e-commerce interface designed for clarity and elegance, emphasizing curated jewelry collections.",
    year: "2025",
    role: "Frontend Developer",
    stack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    cover: {
      src: "/projects/gnoce-jewelry/cover.png",
      alt: "Gnoce Jewelry Storefront",
      width: 1024,
      height: 491,
    },
    details: {
      whatItIs:
        "A minimalist boutique jewelry storefront designed to put photography and product simplicity front and center.",
      whatIBuilt:
        "Created the responsive hero showcase with clear navigation, promotional CTA banners, and catalog grid integration.",
    },
    published: true,
  },
  {
    slug: "radwan-creative",
    title: "Radwan Creative — 3D Web Experience",
    summary:
      "An experimental creative web experience exploring dynamic lighting, character typography, and immersive visual storytelling.",
    year: "2025",
    role: "Frontend Developer",
    stack: ["React", "WebGL", "Tailwind CSS", "Interactive Motion"],
    cover: {
      src: "/projects/radwan-creative/cover.png",
      alt: "Radwan Creative Web Experience",
      width: 1024,
      height: 490,
    },
    details: {
      whatItIs:
        "An immersive creative portfolio experiment combining atmospheric lighting and bold editorial typography.",
      whatIBuilt:
        "Developed interactive typography layout, responsive header navigation, and custom shader/canvas integration.",
    },
    published: true,
  },
];

/**
 * Core confirmed web development skillset with icon identifiers.
 */
export const skills: SkillItem[] = [
  { name: "HTML5", category: "Markup & Semantics", icon: "html" },
  { name: "CSS3", category: "Styling & Layouts", icon: "css" },
  { name: "JavaScript", category: "ESNext Logic", icon: "javascript" },
  { name: "TypeScript", category: "Type Safety", icon: "typescript" },
  { name: "React", category: "Component UI", icon: "react" },
  { name: "Next.js", category: "App Router & SSR", icon: "nextjs" },
  { name: "Tailwind CSS", category: "Utility-First CSS", icon: "tailwind" },
  { name: "Framer Motion", category: "Fluid Animations", icon: "framer" },
];

export type SocialLink = {
  label: string;
  url: string;
  icon: "github" | "linkedin" | "x" | "instagram";
};

/**
 * Verified direct channels and social profiles.
 */
export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    url: "https://github.com/RadwanEldaly",
    icon: "github",
  },
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/radwan-eldaly-a0b079353",
    icon: "linkedin",
  },
  {
    label: "X",
    url: "https://x.com/EldalyRadwan",
    icon: "x",
  },
  {
    label: "Instagram",
    url: "https://instagram.com/radwan.eldaly.1",
    icon: "instagram",
  },
];
