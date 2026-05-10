import type { Metadata } from "next";

import { PartnerValueProps } from "@/components/sections/partner-value-props";
import { ThemeBand } from "@/components/shared/theme-band";

export const metadata: Metadata = {
  title: "Partners",
  description: "Our ecosystem across academia, industry, and public institutions.",
};

interface PartnerGroup {
  label: string;
  names: string[];
}

const PARTNER_GROUPS: PartnerGroup[] = [
  { label: "Global", names: ["AI for Good (UN/ITU)"] },
  { label: "Public", names: ["City of Linz", "Digital Competence Initiative Austria"] },
  {
    label: "Academic",
    names: [
      "JKU Linz",
      "Linz Institute for Transformative Change",
      "IT:U Austria",
      "FH Upper Austria",
    ],
  },
  { label: "Industry", names: ["AI Austria", "AI Upper Austria", "Business Upper Austria"] },
  { label: "Community", names: ["JKU Alumni Club", "LIT Open Innovation Center"] },
];

export default function PartnersPage() {
  return (
    <>
      <section className="grid grid-cols-3 gap-6 pt-20 pb-40 md:gap-10 md:pt-30 md:pb-30 lg:gap-20 lg:pt-20 lg:pb-10">
        <div className="col-span-3 lg:col-span-2">
          <h1 className="h1 mb-6 max-w-[22ch] text-balance">Built with partners.</h1>
          <p className="body-md max-w-[40ch] text-balance">
            Academia, industry, and public institutions. Together.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-10 py-20">
        {PARTNER_GROUPS.map((group) => (
          <div key={group.label} className="flex flex-col gap-2">
            <p className="body-sm text-secondary tracking-wider uppercase">{group.label}</p>
            <div className="flex flex-wrap gap-x-8 gap-y-1">
              {group.names.map((name) => (
                <span key={name} className="body-md">
                  {name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <ThemeBand>
        <PartnerValueProps />
      </ThemeBand>

      <section className="py-40">
        <h2 className="h3 mb-4 text-balance">Interested in partnering?</h2>
        <a href="mailto:office@youngaileaderslinz.at" className="btn-small inline-flex">
          Get in touch
        </a>
      </section>
    </>
  );
}
