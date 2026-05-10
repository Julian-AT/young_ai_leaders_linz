import type { Metadata } from "next";
import Image from "next/image";

import { PartnerValueProps } from "@/components/sections/partner-value-props";
import { ThemeBand } from "@/components/shared/theme-band";
import { getPartners, getSiteSettings } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Partners",
  description: "Our ecosystem across academia, industry, and public institutions.",
};

const CATEGORY_LABELS: Record<string, string> = {
  global: "Global",
  public: "Public",
  academic: "Academic",
  industry: "Industry",
  community: "Community",
};

const CATEGORY_ORDER = ["global", "public", "academic", "industry", "community"];

export default async function PartnersPage() {
  const [{ docs: partners }, settings] = await Promise.all([getPartners(), getSiteSettings()]);

  const grouped = CATEGORY_ORDER.map((category) => ({
    label: CATEGORY_LABELS[category] ?? category,
    partners: partners.filter((p) => p.category === category),
  })).filter((g) => g.partners.length > 0);

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
        {grouped.map((group) => (
          <div key={group.label} className="flex flex-col gap-4">
            <p className="body-sm text-secondary tracking-wider uppercase">{group.label}</p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {group.partners.map((partner) => {
                const logoSrc =
                  typeof partner.logo === "object" && partner.logo?.url
                    ? partner.logo.url
                    : partner.logoPath;

                return (
                  <div
                    key={partner.name}
                    className="flex aspect-[3/2] items-center justify-center overflow-hidden rounded-lg border p-5"
                    style={{ borderColor: "var(--stroke-primary)" }}
                  >
                    {logoSrc ? (
                      <Image
                        src={logoSrc}
                        alt={partner.name}
                        width={160}
                        height={80}
                        className="max-h-[48px] w-auto object-contain"
                        style={{ transform: `scale(${partner.scale ?? 1})` }}
                      />
                    ) : (
                      <span className="text-secondary text-center text-[11px] font-medium tracking-wide">
                        {partner.name}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      <ThemeBand>
        <PartnerValueProps />
      </ThemeBand>

      <section className="py-40">
        <h2 className="h3 mb-4 text-balance">Interested in partnering?</h2>
        <a href={`mailto:${settings.contactEmail}`} className="btn-small inline-flex">
          Get in touch
        </a>
      </section>
    </>
  );
}
