import type { Metadata } from "next";

import { Pillars } from "@/components/sections/pillars";
import { ThemeBand } from "@/components/shared/theme-band";
import { getAboutPage } from "@/lib/queries";

export const metadata: Metadata = {
  title: "About",
  description: "The Austrian hub of the AI for Good youth network. Founded 2025.",
};

export default async function AboutPage() {
  const about = await getAboutPage();
  const networkStats: { value: string; label: string; id?: string | null }[] =
    about.networkStats ?? [];
  const pillars: { title: string; description: string; id?: string | null }[] = about.pillars ?? [];

  return (
    <>
      <section className="grid grid-cols-3 gap-6 pt-20 pb-40 md:gap-10 md:pt-30 md:pb-30 lg:gap-20 lg:pt-20 lg:pb-10">
        <div className="col-span-3 lg:col-span-2">
          <h1 className="h1 mb-6 max-w-[20ch] text-balance">{about.title}</h1>
          <p className="body-md max-w-[40ch] text-balance">{about.subtitle}</p>
        </div>
      </section>

      <ThemeBand>
        <section className="flex flex-col gap-12 py-40">
          <div className="grid grid-cols-3 gap-6 md:gap-10 lg:gap-20">
            <div className="col-span-3 lg:col-span-2">
              <h2 className="h3 text-balance">{about.networkTitle}</h2>
            </div>
            <div className="col-span-3 lg:col-span-1">
              <p className="body-md lg:max-w-none">{about.networkBody}</p>
            </div>
          </div>

          <figure className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl bg-[rgb(40,37,37)]">
            <span className="font-riforma text-[12px] tracking-widest text-[rgb(96,94,90)] uppercase">
              AI for Good network video
            </span>
          </figure>

          <dl className="flex flex-col gap-10 md:flex-row md:gap-0 md:divide-x">
            {networkStats.map((stat, i) => (
              <div
                key={stat.value}
                className={
                  i === 0
                    ? "md:basis-1/3 md:pr-10 lg:pr-20"
                    : i === networkStats.length - 1
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

      <section className="flex flex-col gap-12 py-40">
        <h2 className="h3 text-balance">What drives us.</h2>
        <Pillars items={pillars} />
      </section>
    </>
  );
}
