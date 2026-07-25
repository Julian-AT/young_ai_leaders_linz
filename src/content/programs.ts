import { SITE_IMAGES } from "@/content/media";

export const PROGRAMS = [
  {
    title: "AI Academy",
    shortDescription: "From your first neural network to production deployment. Learn by building.",
    features: [
      { title: "All skill levels", description: "Beginner to advanced, in parallel." },
      { title: "Hands-on", description: "Every session produces working code." },
      { title: "Expert-led", description: "Practitioners and researchers." },
    ],
    darkTheme: true,
  },
  {
    title: "Community Projects",
    shortDescription: "Real problems from real partners. Small teams, mentored, portfolio-ready.",
    features: [
      { title: "Industry briefs", description: "Problems from our partner network." },
      { title: "Mentorship", description: "Domain experts across the lifecycle." },
      { title: "Portfolio outcomes", description: "Work you can show." },
    ],
    darkTheme: false,
  },
  {
    title: "Hackathon",
    shortDescription: "48 hours. Interdisciplinary teams. Global AI for Good challenges.",
    features: [
      { title: "Global scale", description: "13 hubs competing simultaneously." },
      { title: "Partner challenges", description: "Real problems, real judges." },
      { title: "Recognition", description: "$30K+ in prizes." },
    ],
    darkTheme: true,
  },
  {
    title: "Startup Launchpad",
    shortDescription: "From idea to venture. Equity-free. Mentor-backed.",
    features: [
      { title: "Equity-free", description: "The company is yours." },
      { title: "Mentor network", description: "Founders, investors, operators." },
      { title: "Resources", description: "Compute, space, introductions." },
    ],
    darkTheme: false,
  },
];

export const HOME_PROGRAM_SLIDES = [
  {
    title: "AI Academy",
    description:
      "Workshops and hands-on learning for every skill level. From your first model to production systems.",
    image: SITE_IMAGES.homeAcademy.src,
    imageAlt: SITE_IMAGES.homeAcademy.alt,
  },
  {
    title: "Community Projects",
    description:
      "Applied AI work with real partners. Industry briefs, mentorship, portfolio outcomes.",
    image: SITE_IMAGES.homeProjects.src,
    imageAlt: SITE_IMAGES.homeProjects.alt,
  },
  {
    title: "Startup Launchpad",
    description:
      "From idea to venture. Equity-free incubation with mentorship, network, and resources.",
    image: SITE_IMAGES.homeLaunchpad.src,
    imageAlt: SITE_IMAGES.homeLaunchpad.alt,
  },
];

export const PROGRAM_IMAGES: Record<string, { src: string; alt: string }> = {
  "AI Academy": SITE_IMAGES.programAcademy,
  "Community Projects": SITE_IMAGES.programProjects,
  Hackathon: SITE_IMAGES.programHackathon,
  "Startup Launchpad": SITE_IMAGES.programLaunchpad,
};
