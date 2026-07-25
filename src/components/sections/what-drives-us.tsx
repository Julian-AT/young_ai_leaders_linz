"use client";

import {
  BookOpen02Icon,
  BubbleChatSpark01Icon,
  Target01Icon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Pillars } from "@/components/sections/pillars";
import { ABOUT } from "@/content/about";

const ICONS = [
  <HugeiconsIcon key="community" icon={UserGroupIcon} size={24} strokeWidth={1.5} />,
  <HugeiconsIcon key="education" icon={BookOpen02Icon} size={24} strokeWidth={1.5} />,
  <HugeiconsIcon key="empowerment" icon={BubbleChatSpark01Icon} size={24} strokeWidth={1.5} />,
  <HugeiconsIcon key="impact" icon={Target01Icon} size={24} strokeWidth={1.5} />,
];

export function WhatDrivesUs() {
  return (
    <section className="flex flex-col gap-12 py-40">
      <h2 className="h3 text-balance">What drives us.</h2>
      <Pillars
        items={ABOUT.pillars.map((pillar, i) => ({
          ...pillar,
          icon: ICONS[i],
        }))}
      />
    </section>
  );
}
