import type { Metadata } from "next";

import { Pillars } from "@/components/sections/pillars";
import { ThemeBand } from "@/components/shared/theme-band";

export const metadata: Metadata = {
  title: "About",
  description: "The Austrian hub of the AI for Good youth network. Founded 2025.",
};

const PILLARS = [
  { title: "Community", description: "Local hub, global network." },
  { title: "Education", description: "First principles to production." },
  { title: "Empowerment", description: "Real responsibility from day one." },
  { title: "Impact", description: "Outcomes that matter beyond campus." },
];

export default function AboutPage() {
  return (
    <>
      <section className="grid grid-cols-3 gap-6 pt-20 pb-40 md:gap-10 md:pt-30 md:pb-30 lg:gap-20 lg:pt-20 lg:pb-10">
        <div className="col-span-3 lg:col-span-2">
          <h1 className="h1 mb-6 max-w-[20ch] text-balance">A global network, rooted in Linz.</h1>
          <p className="body-md max-w-[40ch] text-balance">
            Founded in 2025. Part of AI for Good. Building locally, connected globally.
          </p>
        </div>
      </section>

      <ThemeBand>
        <section className="flex flex-col gap-12 py-40">
          <div className="grid grid-cols-3 gap-6 md:gap-10 lg:gap-20">
            <div className="col-span-3 lg:col-span-2">
              <h2 className="h3 text-balance">Part of AI for Good.</h2>
            </div>
            <div className="col-span-3 lg:col-span-1">
              <p className="body-md lg:max-w-none">
                The UN platform for AI and sustainable development. 55,000+ contributors, 180
                countries.
              </p>
            </div>
          </div>

          <figure className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl bg-[rgb(40,37,37)]">
            <span className="font-riforma text-[12px] tracking-widest text-[rgb(96,94,90)] uppercase">
              AI for Good network video
            </span>
          </figure>

          <dl className="flex flex-col gap-10 md:flex-row md:gap-0 md:divide-x">
            <div className="md:basis-1/3 md:pr-10 lg:pr-20">
              <dt className="h3 font-mono">2025</dt>
              <dd className="body-md text-secondary mt-1">Founded</dd>
            </div>
            <div className="md:basis-1/3 md:px-10 lg:px-20">
              <dt className="h3 font-mono">100+</dt>
              <dd className="body-md text-secondary mt-1">Hubs globally</dd>
            </div>
            <div className="md:basis-1/3 md:pl-10 lg:pl-20">
              <dt className="h3 font-mono">UN/ITU</dt>
              <dd className="body-md text-secondary mt-1">Backed by</dd>
            </div>
          </dl>
        </section>
      </ThemeBand>

      <section className="flex flex-col gap-12 py-40">
        <h2 className="h3 text-balance">What drives us.</h2>
        <Pillars items={PILLARS} />
      </section>
    </>
  );
}
