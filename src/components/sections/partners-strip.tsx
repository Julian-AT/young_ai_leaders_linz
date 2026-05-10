import Image from "next/image";

interface Partner {
  name: string;
  logo?: string;
  scale?: number;
}

const PARTNERS: Partner[] = [
  { name: "AI for Good (UN/ITU)", logo: "/logos/ai_for_good.png" },
  { name: "City of Linz", logo: "/logos/linz.png", scale: 0.8 },
  { name: "JKU Linz", logo: "/logos/JKU_Logo.svg.png", scale: 0.9 },
  { name: "FH Upper Austria", logo: "/logos/fh_upper_austria.png" },
  { name: "AI Factory Austria", logo: "/logos/Logo_AI_Klein.png", scale: 1.4 },
  { name: "Business Upper Austria", logo: "/logos/buisiness_upper_austria.webp", scale: 1.3 },
  { name: "IT:U Austria", logo: "/logos/itu_austria.png", scale: 0.9 },
  { name: "LIT Open Innovation Center", logo: "/logos/lit_innovation_center.png", scale: 1.1 },
  { name: "JKU Alumni Club", logo: "/logos/jku_alumni.webp", scale: 1.4 },
  { name: "Digital Austria Kompetenzen", logo: "/logos/digital_competence_austria.png" },
];

export function PartnersStrip() {
  return (
    <section className="flex flex-col gap-12 py-40">
      <div className="grid grid-cols-3 gap-6 md:gap-10 lg:gap-20">
        <div className="col-span-3 lg:col-span-2">
          <h2 className="h3 text-balance">Our ecosystem.</h2>
        </div>
        <div className="col-span-3 lg:col-span-1">
          <p className="body-md text-balance lg:max-w-none">
            Academia, industry, and public institutions building together.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {PARTNERS.map((partner) => (
          <div
            key={partner.name}
            className="flex aspect-[3/2] items-center justify-center overflow-hidden rounded-lg border p-4"
            style={{ borderColor: "var(--stroke-primary)" }}
          >
            {partner.logo ? (
              <Image
                src={partner.logo}
                alt={partner.name}
                width={160}
                height={80}
                className="max-h-[44px] w-auto object-contain"
                style={{ transform: `scale(${partner.scale ?? 1})` }}
              />
            ) : (
              <span className="text-secondary text-center text-[11px] font-medium tracking-wide">
                {partner.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
