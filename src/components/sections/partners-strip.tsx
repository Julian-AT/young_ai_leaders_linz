import Image from "next/image";

interface Partner {
  name: string;
  logo?: string;
}

const PARTNERS: Partner[] = [
  { name: "AI for Good (UN/ITU)" },
  { name: "City of Linz" },
  { name: "JKU Linz", logo: "/images/JKU_Logo.svg.png" },
  { name: "FH Upper Austria" },
  { name: "AI Austria", logo: "/images/asai-logo-farbe-30d346ea.png" },
  { name: "AI Upper Austria", logo: "/images/Logo_AI_Klein.png" },
  { name: "Business Upper Austria" },
  { name: "IT:U Austria" },
  { name: "LIT Open Innovation Center" },
  { name: "JKU Alumni Club" },
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
              <span className="body-sm text-secondary text-center text-[11px] font-medium tracking-wide">
                {partner.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
