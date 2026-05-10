import type { Metadata } from "next";

import { ThemeBand } from "@/components/shared/theme-band";

export const metadata: Metadata = {
  title: "Programs",
  description: "AI Academy, Community Projects, Hackathon, Startup Launchpad.",
};

interface ProgramSection {
  title: string;
  description: string;
  features: { dt: string; dd: string }[];
  placeholder: string;
  dark?: boolean;
}

const PROGRAMS: ProgramSection[] = [
  {
    title: "AI Academy",
    description: "From your first neural network to production deployment. Learn by building.",
    features: [
      { dt: "All skill levels", dd: "Beginner to advanced, in parallel." },
      { dt: "Hands-on", dd: "Every session produces working code." },
      { dt: "Expert-led", dd: "Practitioners and researchers." },
    ],
    placeholder: "Academy workshop video",
    dark: true,
  },
  {
    title: "Community Projects",
    description: "Real problems from real partners. Small teams, mentored, portfolio-ready.",
    features: [
      { dt: "Industry briefs", dd: "Problems from our partner network." },
      { dt: "Mentorship", dd: "Domain experts across the lifecycle." },
      { dt: "Portfolio outcomes", dd: "Work you can show." },
    ],
    placeholder: "Projects collaboration video",
  },
  {
    title: "Hackathon",
    description: "48 hours. Interdisciplinary teams. Global AI for Good challenges.",
    features: [
      { dt: "Global scale", dd: "13 hubs competing simultaneously." },
      { dt: "Partner challenges", dd: "Real problems, real judges." },
      { dt: "Recognition", dd: "$30K+ in prizes." },
    ],
    placeholder: "Hackathon event video",
    dark: true,
  },
  {
    title: "Startup Launchpad",
    description: "From idea to venture. Equity-free. Mentor-backed.",
    features: [
      { dt: "Equity-free", dd: "The company is yours." },
      { dt: "Mentor network", dd: "Founders, investors, operators." },
      { dt: "Resources", dd: "Compute, space, introductions." },
    ],
    placeholder: "Launchpad pitch video",
  },
];

function ProgramBlock({ program }: { program: ProgramSection }) {
  const content = (
    <section className="flex flex-col gap-12 py-40">
      <div className="grid grid-cols-3 gap-6 md:gap-10 lg:gap-20">
        <div className="col-span-3 lg:col-span-2">
          <h2 className="h3 text-balance">{program.title}</h2>
        </div>
        <div className="col-span-3 lg:col-span-1">
          <p className="body-md lg:max-w-none">{program.description}</p>
        </div>
      </div>

      <figure
        className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl"
        style={{ backgroundColor: program.dark ? "rgb(40,37,37)" : "rgb(227,224,218)" }}
      >
        <span
          className="font-riforma text-[12px] tracking-widest uppercase"
          style={{ color: program.dark ? "rgb(96,94,90)" : "rgb(138,135,130)" }}
        >
          {program.placeholder}
        </span>
      </figure>

      <dl className="flex flex-col gap-10 md:flex-row md:gap-0 md:divide-x">
        {program.features.map((f) => (
          <div
            key={f.dt}
            className="md:basis-1/3 md:pr-10 md:pl-10 md:first:pl-0 lg:pr-20 lg:pl-20"
          >
            <dt className="body-md font-medium">{f.dt}</dt>
            <dd className="body-sm text-secondary mt-1">{f.dd}</dd>
          </div>
        ))}
      </dl>
    </section>
  );

  if (program.dark) return <ThemeBand>{content}</ThemeBand>;
  return content;
}

export default function ProgramsPage() {
  return (
    <>
      <section className="grid grid-cols-3 gap-6 pt-20 pb-20 md:gap-10 md:pt-30 lg:gap-20 lg:pt-20">
        <div className="col-span-3 lg:col-span-2">
          <h1 className="h1 mb-6 max-w-[20ch] text-balance">What we build.</h1>
          <p className="body-md max-w-[38ch] text-balance">
            Four programs designed to take you from learning to shipping.
          </p>
        </div>
      </section>

      {PROGRAMS.map((program) => (
        <ProgramBlock key={program.title} program={program} />
      ))}
    </>
  );
}
