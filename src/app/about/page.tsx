import type { Metadata } from "next";
import Image from "next/image";

import { WhatDrivesUs } from "@/components/sections/what-drives-us";
import { ThemeBand } from "@/components/shared/theme-band";
import { ABOUT } from "@/content/about";
import { PHOTO_CREDIT, SITE_IMAGES } from "@/content/media";

export const metadata: Metadata = {
  title: "About",
  description: "The Austrian hub of the AI for Good youth network. Founded 2025.",
};

export default function AboutPage() {
  return (
    <>
      <section className="grid grid-cols-3 gap-6 pt-20 pb-40 md:gap-10 md:pt-30 md:pb-30 lg:gap-20 lg:pt-20 lg:pb-10">
        <div className="col-span-3 lg:col-span-2">
          <h1 className="h1 mb-6 max-w-[20ch] text-balance">{ABOUT.title}</h1>
          <p className="body-md max-w-[40ch] text-balance">{ABOUT.subtitle}</p>
        </div>
      </section>

      <ThemeBand>
        <section className="flex flex-col gap-12 py-40">
          <div className="grid grid-cols-3 gap-6 md:gap-10 lg:gap-20">
            <div className="col-span-3 lg:col-span-2">
              <h2 className="h3 text-balance">{ABOUT.networkTitle}</h2>
            </div>
            <div className="col-span-3 lg:col-span-1">
              <p className="body-md lg:max-w-none">{ABOUT.networkBody}</p>
            </div>
          </div>

          <figure className="relative aspect-video w-full overflow-hidden rounded-2xl bg-[rgb(40,37,37)]">
            <Image
              src={SITE_IMAGES.aboutAudience.src}
              alt={SITE_IMAGES.aboutAudience.alt}
              fill
              sizes="(max-width: 1280px) 100vw, 1120px"
              quality={80}
              className="object-cover"
              priority
            />
            <figcaption className="caption absolute right-3 bottom-3 rounded bg-black/40 px-2 py-1 text-[rgb(187,184,178)]">
              {PHOTO_CREDIT}
            </figcaption>
          </figure>

          <dl className="flex flex-col gap-10 md:flex-row md:gap-0 md:divide-x">
            {ABOUT.networkStats.map((stat, i) => (
              <div
                key={stat.value}
                className={
                  i === 0
                    ? "md:basis-1/3 md:pr-10 lg:pr-20"
                    : i === ABOUT.networkStats.length - 1
                      ? "md:basis-1/3 md:pl-10 lg:pl-20"
                      : "md:basis-1/3 md:px-10 lg:px-20"
                }
              >
                <dt className="h3 font-mono">{stat.value}</dt>
                <dd className="body-md text-secondary mt-1">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </section>
      </ThemeBand>

      <WhatDrivesUs />
    </>
  );
}
