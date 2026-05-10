"use client";

import { useState } from "react";

import { ArrowLeftIcon, ArrowRightIcon } from "@/components/shared/icons";

interface Program {
  title: string;
  description: string;
  placeholder: string;
}

const PROGRAMS: Program[] = [
  {
    title: "AI Academy",
    description:
      "Workshops and hands-on learning for every skill level. From your first model to production systems.",
    placeholder: "Academy video",
  },
  {
    title: "Community Projects",
    description:
      "Applied AI work with real partners. Industry briefs, mentorship, portfolio outcomes.",
    placeholder: "Projects video",
  },
  {
    title: "Startup Launchpad",
    description:
      "From idea to venture. Equity-free incubation with mentorship, network, and resources.",
    placeholder: "Launchpad video",
  },
];

export function ProgramsSwitcher() {
  const [active, setActive] = useState(0);

  const goPrev = () => setActive((a) => (a - 1 + PROGRAMS.length) % PROGRAMS.length);
  const goNext = () => setActive((a) => (a + 1) % PROGRAMS.length);

  return (
    <section className="flex flex-col gap-12 py-40">
      <div className="max-w-block-md">
        <h2 className="h3 text-balance">What we build.</h2>
        <p className="body-md mt-6 text-balance">
          Programs that create real impact through education, applied work, and community.
        </p>
      </div>

      {/* Desktop: grid with video left, list right */}
      <div className="hidden md:grid md:grid-cols-3 md:gap-10 lg:gap-20">
        <div className="md:col-span-2">
          <div className="relative flex aspect-[670/480] h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-[rgb(24,21,21)]">
            {PROGRAMS.map((p, i) => (
              <div
                key={p.title}
                className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
                style={{ opacity: i === active ? 1 : 0 }}
              >
                <span className="font-riforma text-[12px] tracking-widest text-[rgb(138,135,130)] uppercase">
                  {p.placeholder}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:col-span-1">
          <dl className="flex flex-col gap-6">
            {PROGRAMS.map((p, i) => (
              <div
                key={p.title}
                className={`pb-6 ${i < PROGRAMS.length - 1 ? "border-b" : ""}`}
                style={{ borderColor: "var(--stroke-primary)" }}
              >
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className="block w-full max-w-[296px] cursor-pointer text-left transition-opacity"
                  style={{ opacity: i === active ? 1 : 0.2 }}
                >
                  <dt className="body-md">{p.title}</dt>
                  <dd className="body-md text-secondary mt-1">{p.description}</dd>
                </button>
              </div>
            ))}
          </dl>

          <div className="mt-auto flex gap-2 pt-6">
            <button type="button" className="btn-icon" onClick={goPrev}>
              <ArrowLeftIcon />
              <span className="sr-only">Previous program</span>
            </button>
            <button type="button" className="btn-icon" onClick={goNext}>
              <ArrowRightIcon />
              <span className="sr-only">Next program</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile: stacked */}
      <div className="flex flex-col gap-10 md:hidden">
        {PROGRAMS.map((p) => (
          <div key={p.title} className="flex flex-col gap-4">
            <div className="flex aspect-[670/480] items-center justify-center rounded-2xl bg-[rgb(24,21,21)]">
              <span className="font-riforma text-[11px] tracking-widest text-[rgb(138,135,130)] uppercase">
                {p.placeholder}
              </span>
            </div>
            <div>
              <p className="body-md">{p.title}</p>
              <p className="body-md text-secondary mt-1">{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
