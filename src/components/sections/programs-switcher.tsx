"use client";

import { useCallback, useState } from "react";

import { ArrowLeftIcon, ArrowRightIcon } from "@/components/shared/icons";
import { HOME_PROGRAM_SLIDES } from "@/content/programs";

export function ProgramsSwitcher() {
  const [active, setActive] = useState(0);
  const count = HOME_PROGRAM_SLIDES.length;

  const goPrev = () => setActive((a) => (a - 1 + count) % count);
  const goNext = () => setActive((a) => (a + 1) % count);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        setActive((a) => (a + 1) % count);
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        setActive((a) => (a - 1 + count) % count);
      }
    },
    [count],
  );

  return (
    <section className="flex flex-col gap-12 py-40">
      <div className="max-w-block-md">
        <h2 className="h3 text-balance">What we build.</h2>
        <p className="body-md mt-6 text-balance">
          Programs that create real impact through education, applied work, and community.
        </p>
      </div>

      <div className="hidden md:grid md:grid-cols-3 md:gap-10 lg:gap-20">
        <div className="md:col-span-2">
          <div className="relative flex aspect-[670/480] h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-[rgb(24,21,21)]">
            {HOME_PROGRAM_SLIDES.map((p, i) => (
              <div
                key={p.title}
                role="tabpanel"
                id={`program-panel-${i}`}
                aria-labelledby={`program-tab-${i}`}
                hidden={i !== active}
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
          <div
            role="tablist"
            aria-label="Programs"
            onKeyDown={handleKeyDown}
            className="flex flex-col gap-6"
          >
            {HOME_PROGRAM_SLIDES.map((p, i) => (
              <div
                key={p.title}
                className={`pb-6 ${i < count - 1 ? "border-b" : ""}`}
                style={{ borderColor: "var(--stroke-primary)" }}
              >
                <button
                  type="button"
                  role="tab"
                  id={`program-tab-${i}`}
                  aria-selected={i === active}
                  aria-controls={`program-panel-${i}`}
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
            <button
              type="button"
              className="btn-icon"
              onClick={goPrev}
              aria-label="Previous program"
            >
              <ArrowLeftIcon />
            </button>
            <button type="button" className="btn-icon" onClick={goNext} aria-label="Next program">
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 md:hidden">
        {HOME_PROGRAM_SLIDES.map((p) => (
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
