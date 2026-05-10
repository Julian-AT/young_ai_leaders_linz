import type { Payload } from "payload";

export async function seed(payload: Payload) {
  console.log("Seeding database...");

  // Create admin user
  const existingUsers = await payload.find({ collection: "users", limit: 1 });
  if (existingUsers.docs.length === 0) {
    await payload.create({
      collection: "users",
      data: {
        email: "admin@youngaileaderslinz.at",
        password: "changeme123!",
        role: "admin",
      },
    });
    console.log("Created admin user: admin@youngaileaderslinz.at / changeme123!");
  }

  // Seed SiteSettings
  await payload.updateGlobal({
    slug: "site-settings",
    data: {
      siteName: "Young AI Leaders Linz",
      applyUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLScPMYklf0RthaF-W_tQjiPMNaB8oxb0uT3IDmEkz2-hQnF7sA/viewform",
      contactEmail: "office@youngaileaderslinz.at",
      address: "Linz, Austria",
      organizationDescription: "Part of AI for Good",
    },
  });
  console.log("Seeded SiteSettings");

  // Seed Navigation
  await payload.updateGlobal({
    slug: "navigation",
    data: {
      mainNav: [
        { label: "About", href: "/about", external: false },
        { label: "Programs", href: "/programs", external: false },
        { label: "Partners", href: "/partners", external: false },
        { label: "Join Us", href: "/join", external: false },
      ],
      socialLinks: [
        {
          platform: "linkedin",
          url: "https://www.linkedin.com/company/youngaileaderslinz",
          label: "LinkedIn",
        },
        {
          platform: "instagram",
          url: "https://www.instagram.com/youngaileaderslinz/",
          label: "Instagram",
        },
        {
          platform: "tiktok",
          url: "https://www.tiktok.com/@youngaileaderslinz",
          label: "TikTok",
        },
      ],
    },
  });
  console.log("Seeded Navigation");

  // Seed HomePage
  await payload.updateGlobal({
    slug: "home-page",
    data: {
      heroTitle: "Young AI Leaders Linz",
      heroSubtitle: "",
      missionStatement: "100+ hubs. 13 countries. One mission.",
      identityTitle: "Our Identity",
      identityBody: "",
      focusAreas: [
        { title: "Community", description: "Local hub, global network." },
        { title: "Education", description: "First principles to production." },
        { title: "Empowerment", description: "Real responsibility from day one." },
        { title: "Impact", description: "Outcomes that matter beyond campus." },
      ],
      stats: [
        { value: "100+", label: "Hubs globally" },
        { value: "13", label: "Countries" },
        { value: "55,000+", label: "Contributors" },
      ],
      statsTitle: "A global movement.",
      statsBody: "Founded 2025. Growing fast.",
    },
  });
  console.log("Seeded HomePage");

  // Seed AboutPage
  await payload.updateGlobal({
    slug: "about-page",
    data: {
      title: "A global network, rooted in Linz.",
      subtitle: "Founded in 2025. Part of AI for Good. Building locally, connected globally.",
      pillars: [
        { title: "Community", description: "Local hub, global network." },
        { title: "Education", description: "First principles to production." },
        { title: "Empowerment", description: "Real responsibility from day one." },
        { title: "Impact", description: "Outcomes that matter beyond campus." },
      ],
      networkTitle: "Part of AI for Good.",
      networkBody:
        "The UN platform for AI and sustainable development. 55,000+ contributors, 180 countries.",
      networkStats: [
        { value: "2025", label: "Founded" },
        { value: "100+", label: "Hubs globally" },
        { value: "UN/ITU", label: "Backed by" },
      ],
    },
  });
  console.log("Seeded AboutPage");

  // Seed FooterContent
  await payload.updateGlobal({
    slug: "footer-content",
    data: {
      typingPhrases: [
        { phrase: "Ready to shape the future of AI?" },
        { phrase: "What will you build next?" },
        { phrase: "Linz is building something." },
      ],
      copyrightText: "Young AI Leaders Linz 2025",
      internalLinks: [{ label: "Legal", href: "/legal" }],
      externalLinks: [{ label: "AI for Good", href: "https://aiforgood.itu.int/" }],
    },
  });
  console.log("Seeded FooterContent");

  // Seed Programs
  const programs = [
    {
      title: "AI Academy",
      shortDescription:
        "From your first neural network to production deployment. Learn by building.",
      features: [
        { title: "All skill levels", description: "Beginner to advanced, in parallel." },
        { title: "Hands-on", description: "Every session produces working code." },
        { title: "Expert-led", description: "Practitioners and researchers." },
      ],
      darkTheme: true,
      sortOrder: 1,
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
      sortOrder: 2,
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
      sortOrder: 3,
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
      sortOrder: 4,
    },
  ];

  for (const program of programs) {
    await payload.create({ collection: "programs", data: program });
  }
  console.log("Seeded Programs");

  // Seed Partners
  const partnerGroups = [
    {
      category: "global" as const,
      partners: [{ name: "AI for Good (UN/ITU)", logo: "/logos/ai_for_good.png", scale: 1.1 }],
    },
    {
      category: "public" as const,
      partners: [
        { name: "City of Linz", logo: "/logos/linz.png", scale: 0.7 },
        {
          name: "Digital Austria Kompetenzen",
          logo: "/logos/digital_competence_austria.png",
          scale: 1,
        },
      ],
    },
    {
      category: "academic" as const,
      partners: [
        { name: "JKU Linz", logo: "/logos/JKU_Logo.svg.png", scale: 0.85 },
        {
          name: "Linz Institute for Transformative Change",
          logo: "/logos/linz_institute_transformative_change.webp",
          scale: 1.6,
        },
        { name: "IT:U Austria", logo: "/logos/itu_austria.png", scale: 0.85 },
        { name: "FH Upper Austria", logo: "/logos/fh_upper_austria.png", scale: 1 },
      ],
    },
    {
      category: "industry" as const,
      partners: [
        { name: "AI Factory Austria", logo: "/logos/Logo_AI_Klein.png", scale: 1.5 },
        { name: "AI Austria", logo: "/logos/ai_upper_austria.png", scale: 1.2 },
        {
          name: "Business Upper Austria",
          logo: "/logos/buisiness_upper_austria.webp",
          scale: 1.4,
        },
      ],
    },
    {
      category: "community" as const,
      partners: [
        { name: "JKU Alumni Club", logo: "/logos/jku_alumni.webp", scale: 1.6 },
        {
          name: "LIT Open Innovation Center",
          logo: "/logos/lit_innovation_center.png",
          scale: 1.2,
        },
      ],
    },
  ];

  let sortOrder = 0;
  for (const group of partnerGroups) {
    for (const partner of group.partners) {
      sortOrder++;
      await payload.create({
        collection: "partners",
        data: {
          name: partner.name,
          category: group.category,
          logoPath: partner.logo,
          scale: partner.scale,
          sortOrder,
        },
      });
    }
  }
  console.log("Seeded Partners (without logo uploads — logos remain in /public/ for now)");

  console.log("Seeding complete!");
  return {
    success: true,
    message: "Database seeded. Admin: admin@youngaileaderslinz.at / changeme123!",
  };
}
