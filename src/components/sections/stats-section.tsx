"use client";

import Image from "next/image";

import { PHOTO_CREDIT, SITE_IMAGES } from "@/content/media";
import { useReveal } from "@/hooks/use-reveal";

const STATS = [
  { value: "100+", label: "Hubs worldwide" },
  { value: "5,500+", label: "Hackathon applicants" },
  { value: "9+", label: "Institutional partners" },
];

export function StatsSection() {
  const { ref: dlRef, revealed } = useReveal(0.2);

  return (
    <div className="flex flex-col gap-12 py-40">
      <div className="grid grid-cols-3 gap-6 md:gap-10 lg:gap-20">
        <div className="col-span-3 lg:col-span-2">
          <h2 className="h3 text-balance">From Linz to the world.</h2>
        </div>
        <div className="col-span-3 lg:col-span-1">
          <p className="body-md lg:max-w-none">
            Part of the UN AI. Building alongside Zurich, Stanford, London, and Munich.
          </p>
        </div>
      </div>

      <figure className="relative aspect-video w-full overflow-hidden rounded-2xl bg-[rgb(24,21,21)]">
        <Image
          src={SITE_IMAGES.statsCrowd.src}
          alt={SITE_IMAGES.statsCrowd.alt}
          fill
          sizes="(max-width: 1280px) 100vw, 1120px"
          quality={80}
          className="object-cover"
        />
        <figcaption className="caption text-tertiary absolute right-3 bottom-3 rounded bg-black/40 px-2 py-1">
          {PHOTO_CREDIT}
        </figcaption>
      </figure>

      <div
        ref={dlRef}
        className="transition-all duration-700"
        style={{
          opacity: revealed ? 1 : 0,
          transform: revealed ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <dl className="flex flex-col gap-10 md:flex-row md:gap-0 md:divide-x">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="md:basis-1/3 md:pr-10 md:pl-10 md:first:pl-0 lg:pr-20 lg:pl-20"
            >
              <dt className="h3 font-mono">{stat.value}</dt>
              <dd className="body-md text-secondary mt-1">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
