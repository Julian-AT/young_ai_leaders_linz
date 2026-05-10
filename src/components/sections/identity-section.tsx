"use client";

import { Pillars } from "@/components/sections/pillars";
import { useReveal } from "@/hooks/use-reveal";

const FOCUS_AREAS = [
  { title: "Community", description: "Local roots, global network." },
  { title: "Education", description: "Learn by building, not watching." },
  { title: "Empowerment", description: "Lead from day one." },
  { title: "Impact", description: "Ship work that matters." },
];

export function IdentitySection() {
  const { ref, revealed } = useReveal(0.15);

  return (
    <section className="flex flex-col gap-16 py-40" ref={ref}>
      <div
        className="grid grid-cols-3 gap-6 transition-all duration-700 md:gap-10 lg:gap-20"
        style={{
          opacity: revealed ? 1 : 0,
          transform: revealed ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <div className="col-span-3 lg:col-span-2">
          <h2 className="h3 max-w-[24ch] text-balance">
            Built by students. Backed by institutions.
          </h2>
        </div>
        <div className="col-span-3 lg:col-span-1">
          <p className="body-md lg:max-w-none">
            The Austrian hub of AI for Good. Applied projects, education, and international
            collaboration.
          </p>
        </div>
      </div>

      <Pillars items={FOCUS_AREAS} />
    </section>
  );
}
