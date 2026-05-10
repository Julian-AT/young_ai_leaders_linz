"use client";

import { useCallback, useState } from "react";

import { ArrowLeftIcon, ArrowRightIcon } from "@/components/shared/icons";

const PROPS = [
  {
    title: "Access emerging talent",
    description: "Pre-vetted engineers, developers, and strategists ready to work.",
  },
  {
    title: "Collaborate on challenges",
    description: "Set a problem. Get prototypes from structured sprints and hackathons.",
  },
  {
    title: "Shape what comes next",
    description: "Build brand affinity with future hires and founders early.",
  },
];

export function PartnerValueProps() {
  const [active, setActive] = useState(0);
  const goPrev = () => setActive((a) => (a - 1 + PROPS.length) % PROPS.length);
  const goNext = () => setActive((a) => (a + 1) % PROPS.length);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      setActive((a) => (a + 1) % PROPS.length);
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      setActive((a) => (a - 1 + PROPS.length) % PROPS.length);
    }
  }, []);

  return (
    <section className="flex flex-col gap-12 py-40">
      <h2 className="h3 text-balance">For organizations.</h2>

      <div className="hidden md:grid md:grid-cols-3 md:gap-10 lg:gap-20">
        <div className="md:col-span-2">
          <div className="relative flex aspect-[670/480] w-full items-center justify-center overflow-hidden rounded-2xl bg-[rgb(40,37,37)]">
            {PROPS.map((p, i) => (
              <div
                key={p.title}
                role="tabpanel"
                id={`partner-panel-${i}`}
                aria-labelledby={`partner-tab-${i}`}
                hidden={i !== active}
                className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
                style={{ opacity: i === active ? 1 : 0 }}
              >
                <span className="font-riforma text-[12px] tracking-widest text-[rgb(96,94,90)] uppercase">
                  Partner collaboration visual
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:col-span-1">
          <div
            role="tablist"
            aria-label="Partner benefits"
            onKeyDown={handleKeyDown}
            className="flex flex-col gap-6"
          >
            {PROPS.map((p, i) => (
              <div
                key={p.title}
                className={`pb-6 ${i < PROPS.length - 1 ? "border-b" : ""}`}
                style={{ borderColor: "var(--stroke-primary)" }}
              >
                <button
                  type="button"
                  role="tab"
                  id={`partner-tab-${i}`}
                  aria-selected={i === active}
                  aria-controls={`partner-panel-${i}`}
                  tabIndex={i === active ? 0 : -1}
                  onClick={() => setActive(i)}
                  className="block w-full max-w-[296px] cursor-pointer text-left transition-opacity"
                  style={{ opacity: i === active ? 1 : 0.2 }}
                >
                  <dt className="body-md">{p.title}</dt>
                  <dd className="body-md text-secondary mt-1">{p.description}</dd>
                </button>
              </div>
            ))}
          </div>

          <div className="mt-auto flex gap-2 pt-6">
            <button type="button" className="btn-icon" onClick={goPrev} aria-label="Previous">
              <ArrowLeftIcon />
            </button>
            <button type="button" className="btn-icon" onClick={goNext} aria-label="Next">
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 md:hidden">
        {PROPS.map((p) => (
          <div
            key={p.title}
            className="border-b pb-6"
            style={{ borderColor: "var(--stroke-primary)" }}
          >
            <p className="body-md font-medium">{p.title}</p>
            <p className="body-md text-secondary mt-1">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
