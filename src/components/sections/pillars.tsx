"use client";

import type { ReactNode } from "react";

import { useReveal } from "@/hooks/use-reveal";

interface Pillar {
  title: string;
  description: string;
  icon?: ReactNode;
}

export function Pillars({ items, className }: { items: Pillar[]; className?: string }) {
  const { ref, revealed } = useReveal(0.2);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${revealed ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"} ${className ?? ""}`}
    >
      <dl className="flex flex-col gap-12 md:flex-row md:gap-0 md:divide-x">
        {items.map((item, i) => (
          <div
            key={item.title}
            className="md:basis-1/4 md:pr-8 md:pl-8 md:first:pl-0 lg:pr-12 lg:pl-12"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {item.icon && <div className="text-secondary mb-3">{item.icon}</div>}
            <dt className="body-md font-medium">{item.title}</dt>
            <dd className="body-md text-secondary mt-2">{item.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
