"use client";

import { Briefcase01Icon, GraduationScrollIcon, MicroscopeIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Pillars } from "@/components/sections/pillars";

const WHO_JOINS = [
  {
    title: "Students",
    description: "Build skills. Ship results. Whichever sector you're in.",
    icon: <HugeiconsIcon icon={GraduationScrollIcon} size={24} strokeWidth={1.5} />,
  },
  {
    title: "Researchers",
    description: "Bridge the gap between theory and practice.",
    icon: <HugeiconsIcon icon={MicroscopeIcon} size={24} strokeWidth={1.5} />,
  },
  {
    title: "Professionals",
    description: "Mentor. Network. Share your expertise. Give back.",
    icon: <HugeiconsIcon icon={Briefcase01Icon} size={24} strokeWidth={1.5} />,
  },
];

export function WhoJoins() {
  return (
    <section className="flex flex-col gap-12 py-20">
      <h2 className="h3 text-balance">Who joins.</h2>
      <Pillars items={WHO_JOINS} />
    </section>
  );
}
