import type { Metadata } from "next";
import Image from "next/image";

import { PartnerValueProps } from "@/components/sections/partner-value-props";
import { ThemeBand } from "@/components/shared/theme-band";

export const metadata: Metadata = {
  title: "Partners",
  description: "Our ecosystem across academia, industry, and public institutions.",
};

interface Partner {
  name: string;
  logo?: string;
}

interface PartnerGroup {
  label: string;
  partners: Partner[];
}

const PARTNER_GROUPS: PartnerGroup[] = [
  {
    label: "Global",
    partners: [{ name: "AI for Good (UN/ITU)" }],
  },
  {
    label: "Public",
    partners: [{ name: "City of Linz" }, { name: "Digital Competence Initiative Austria" }],
  },
  {
    label: "Academic",
    partners: [
      { name: "JKU Linz", logo: "/images/JKU_Logo.svg.png" },
      { name: "Linz Institute for Transformative Change" },
      { name: "IT:U Austria" },
      { name: "FH Upper Austria" },
    ],
  },
  {
    label: "Industry",
    partners: [
      { name: "AI Austria", logo: "/images/asai-logo-farbe-30d346ea.png" },
      { name: "AI Upper Austria", logo: "/images/Logo_AI_Klein.png" },
      { name: "Business Upper Austria" },
    ],
  },
  {
    label: "Community",
    partners: [{ name: "JKU Alumni Club" }, { name: "LIT Open Innovation Center" }],
  },
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

      <section className="flex flex-col gap-16 py-20">
        {PARTNER_GROUPS.map((group) => (
          <div key={group.label} className="flex flex-col gap-4">
            <p className="body-sm text-secondary tracking-wider uppercase">{group.label}</p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {group.partners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex aspect-[3/2] items-center justify-center rounded-lg border p-4"
                  style={{ borderColor: "var(--stroke-primary)" }}
                >
                  {partner.logo ? (
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={120}
                      height={60}
                      className="max-h-[40px] w-auto object-contain grayscale transition-all duration-200 hover:grayscale-0"
                    />
                  ) : (
                    <span className="text-secondary text-center text-[11px] font-medium tracking-wide">
                      {partner.name}
                    </span>
                  )}
                </div>
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
