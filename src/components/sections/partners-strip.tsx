const PARTNERS = [
  "AI for Good (UN/ITU)",
  "City of Linz",
  "JKU Linz",
  "FH Upper Austria",
  "AI Austria",
  "AI Upper Austria",
  "Business Upper Austria",
  "IT:U Austria",
  "LIT Open Innovation Center",
  "JKU Alumni Club",
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

      <div className="flex flex-wrap gap-x-8 gap-y-4">
        {PARTNERS.map((partner) => (
          <span
            key={partner}
            className="body-sm text-secondary hover:text-primary transition-colors duration-150"
          >
            {partner}
          </span>
        ))}
      </div>
    </section>
  );
}
