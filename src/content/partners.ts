export type PartnerCategory = "global" | "public" | "academic" | "industry" | "community";

export interface Partner {
  name: string;
  category: PartnerCategory;
  logoPath: string;
  scale: number;
}

export const PARTNERS: Partner[] = [
  {
    name: "AI for Good (UN/ITU)",
    category: "global",
    logoPath: "/logos/ai_for_good.png",
    scale: 1.1,
  },
  { name: "City of Linz", category: "public", logoPath: "/logos/linz.png", scale: 0.7 },
  {
    name: "Digital Austria Kompetenzen",
    category: "public",
    logoPath: "/logos/digital_competence_austria.png",
    scale: 1,
  },
  { name: "JKU Linz", category: "academic", logoPath: "/logos/JKU_Logo.svg.png", scale: 0.85 },
  {
    name: "Linz Institute for Transformative Change",
    category: "academic",
    logoPath: "/logos/linz_institute_transformative_change.webp",
    scale: 1.6,
  },
  { name: "IT:U Austria", category: "academic", logoPath: "/logos/itu_austria.png", scale: 0.85 },
  {
    name: "FH Upper Austria",
    category: "academic",
    logoPath: "/logos/fh_upper_austria.png",
    scale: 1,
  },
  {
    name: "AI Factory Austria",
    category: "industry",
    logoPath: "/logos/Logo_AI_Klein.png",
    scale: 1.5,
  },
  {
    name: "AI Austria",
    category: "industry",
    logoPath: "/logos/ai_upper_austria.png",
    scale: 1.2,
  },
  {
    name: "Business Upper Austria",
    category: "industry",
    logoPath: "/logos/buisiness_upper_austria.webp",
    scale: 1.4,
  },
  {
    name: "JKU Alumni Club",
    category: "community",
    logoPath: "/logos/jku_alumni.webp",
    scale: 1.6,
  },
  {
    name: "LIT Open Innovation Center",
    category: "community",
    logoPath: "/logos/lit_innovation_center.png",
    scale: 1.2,
  },
];
