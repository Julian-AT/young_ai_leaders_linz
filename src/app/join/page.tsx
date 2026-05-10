import type { Metadata } from "next";

import { Pillars } from "@/components/sections/pillars";
import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { SmoothScroll } from "@/components/shared/smooth-scroll";
import { ThemeBand } from "@/components/shared/theme-band";
import { APPLY_URL } from "@/content/site";

export const metadata: Metadata = {
  title: "Join Us",
  description: "Be part of Austria's youth-led AI community.",
};

const WHO_JOINS = [
  { title: "Students", description: "Build skills. Ship real projects." },
  { title: "Researchers", description: "Bridge theory and practice." },
  { title: "Professionals", description: "Mentor. Network. Give back." },
];

export default function JoinPage() {
  return (
    <>
      <SmoothScroll />
      <Header />
      <main className="page-margins mx-auto max-w-[1280px]">
        <div>
          <section className="grid grid-cols-3 gap-6 pt-20 pb-40 md:gap-10 md:pt-30 md:pb-30 lg:gap-20 lg:pt-20 lg:pb-10">
            <div className="col-span-3 lg:col-span-2">
              <h1 className="h1 mb-6 max-w-[16ch] text-balance">Be part of it.</h1>
              <p className="body-md max-w-[36ch] text-balance">
                If you care about AI and want to build, this is your community.
              </p>
            </div>
          </section>

          <section className="flex flex-col gap-12 py-20">
            <h2 className="h3 text-balance">Who joins.</h2>
            <Pillars items={WHO_JOINS} />
          </section>

          <ThemeBand>
            <section className="flex flex-col gap-12 py-40">
              <h2 className="h3 text-balance">What you get.</h2>

              <figure className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl bg-[rgb(40,37,37)]">
                <span className="font-riforma text-[12px] tracking-widest text-[rgb(96,94,90)] uppercase">
                  Community in action video
                </span>
              </figure>

              <dl className="flex flex-col gap-10 md:flex-row md:gap-0 md:divide-x">
                <div className="md:basis-1/3 md:pr-10 md:first:pl-0 lg:pr-20">
                  <dt className="body-md font-medium">Events</dt>
                  <dd className="body-sm text-secondary mt-1">
                    Hackathons, workshops, delegations.
                  </dd>
                </div>
                <div className="md:basis-1/3 md:px-10 lg:px-20">
                  <dt className="body-md font-medium">Network</dt>
                  <dd className="body-sm text-secondary mt-1">100+ hubs. Cross-border projects.</dd>
                </div>
                <div className="md:basis-1/3 md:pl-10 lg:pl-20">
                  <dt className="body-md font-medium">Outcomes</dt>
                  <dd className="body-sm text-secondary mt-1">
                    Portfolio, mentorship, startup support.
                  </dd>
                </div>
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
              <span className="body-sm text-secondary">office@youngaileaderslinz.at</span>
            </div>
          </section>
        </div>
      </main>
      <div className="page-margins mx-auto max-w-[1280px]">
        <Footer />
      </div>
    </>
  );
}
