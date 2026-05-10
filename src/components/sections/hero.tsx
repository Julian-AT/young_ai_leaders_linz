import { APPLY_URL } from "@/content/site";

export function Hero() {
  return (
    <div className="mt-9 grid grid-cols-3 gap-6 pt-20 pb-40 md:mt-40 md:gap-10 md:pt-30 md:pb-30 lg:gap-20 lg:pt-20 lg:pb-10">
      <div className="col-span-3 lg:col-span-2">
        <h1 className="h1 mb-6 max-w-[20ch] text-balance">Shaping the future of AI.</h1>
        <p className="body-md max-w-[40ch] text-balance">
          Youth-led AI community in Linz. Part of the global AI for Good network.
        </p>
      </div>
      <div className="col-start-1 row-start-2 self-start lg:hidden">
        <a
          href={APPLY_URL}
          target="_blank"
          rel="noreferrer"
          className="btn-small relative inline-flex"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
}
