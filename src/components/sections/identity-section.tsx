"use client";

import {
  BookOpen02Icon,
  BubbleChatSpark01Icon,
  Target01Icon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Pillars } from "@/components/sections/pillars";
import { useReveal } from "@/hooks/use-reveal";

const FOCUS_AREAS = [
  {
    title: "Community",
    description:
      "Local roots with a global network. Connect with builders across 100+ hubs worldwide.",
    icon: <HugeiconsIcon icon={UserGroupIcon} size={24} strokeWidth={1.5} />,
  },
  {
    title: "Education",
    description: "Learn by building real projects, not watching lectures and essays.",
    icon: <HugeiconsIcon icon={BookOpen02Icon} size={24} strokeWidth={1.5} />,
  },
  {
    title: "Empowerment",
    description: "Take real ownership from day one. Lead teams, run events and community.",
    icon: <HugeiconsIcon icon={BubbleChatSpark01Icon} size={24} strokeWidth={1.5} />,
  },
  {
    title: "Impact",
    description: "Ship applied AI. Work on problems that actually matter to people.",
    icon: <HugeiconsIcon icon={Target01Icon} size={24} strokeWidth={1.5} />,
  },
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
            Global hub of AI for Good. Applied projects, education, and international collaboration.
          </p>
        </div>
      </div>

      <Pillars items={FOCUS_AREAS} />
    </section>
  );
}
