import { APPLY_URL } from "@/content/site";

export function HeroStickyCta() {
  return (
    <div className="pointer-events-none top-[25px] z-50 -mt-[72px] hidden justify-end self-start lg:sticky lg:flex">
      <a
        href={APPLY_URL}
        target="_blank"
        rel="noreferrer"
        className="btn-small pointer-events-auto relative inline-flex"
      >
        Apply Now
      </a>
    </div>
  );
}
