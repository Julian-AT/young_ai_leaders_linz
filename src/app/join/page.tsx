import type { Metadata } from "next";
import Image from "next/image";

import { WhoJoins } from "@/components/sections/who-joins";
import { ThemeBand } from "@/components/shared/theme-band";
import { PHOTO_CREDIT, SITE_IMAGES } from "@/content/media";
import { APPLY_URL, CONTACT_EMAIL } from "@/content/site";

export const metadata: Metadata = {
  title: "Join Us",
  description: "Be part of Austria's youth-led AI community.",
};

const BENEFITS = [
  { title: "Events", description: "Hackathons, workshops, delegations." },
  { title: "Network", description: "100+ hubs. Cross-border projects." },
  { title: "Outcomes", description: "Portfolio, mentorship, startup support." },
] as const;

export default function JoinPage() {
  return (
    <>
      <section className="grid grid-cols-3 gap-6 pt-20 pb-40 md:gap-10 md:pt-30 md:pb-30 lg:gap-20 lg:pt-20 lg:pb-10">
        <div className="col-span-3 lg:col-span-2">
          <h1 className="h1 mb-6 max-w-[16ch] text-balance">Be part of it.</h1>
          <p className="body-md max-w-[36ch] text-balance">
            If you care about AI and want to build, this is your community.
          </p>
        </div>
      </section>

      <WhoJoins />

      <ThemeBand>
        <section className="flex flex-col gap-12 py-40">
          <h2 className="h3 text-balance">What you get.</h2>

          <figure className="relative aspect-video w-full overflow-hidden rounded-2xl bg-[rgb(40,37,37)]">
            <Image
              src={SITE_IMAGES.joinApplause.src}
              alt={SITE_IMAGES.joinApplause.alt}
              fill
              sizes="(max-width: 1280px) 100vw, 1120px"
              quality={80}
              className="object-cover"
            />
            <figcaption className="caption absolute right-3 bottom-3 rounded bg-black/40 px-2 py-1 text-[rgb(187,184,178)]">
              {PHOTO_CREDIT}
            </figcaption>
          </figure>

          <dl className="flex flex-col gap-10 md:flex-row md:gap-0 md:divide-x">
            {BENEFITS.map((item) => (
              <div
                key={item.title}
                className="md:basis-1/3 md:pr-10 md:pl-10 md:first:pl-0 lg:pr-20 lg:pl-20"
              >
                <dt className="body-md font-medium">{item.title}</dt>
                <dd className="body-sm text-secondary mt-1">{item.description}</dd>
              </div>
            ))}
          </dl>
        </section>
      </ThemeBand>

      <section className="flex flex-col gap-6 py-40">
        <h2 className="h3 text-balance">Apply.</h2>
        <p className="body-md max-w-[44ch]">Rolling admissions. Capped at 50 active members.</p>
        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-small inline-flex w-fit"
          >
            Apply Now
          </a>
          <span className="body-sm text-secondary">{CONTACT_EMAIL}</span>
        </div>
      </section>
    </>
  );
}
