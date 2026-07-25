import type { Metadata } from "next";
import Image from "next/image";

import { ThemeBand } from "@/components/shared/theme-band";
import { PHOTO_CREDIT } from "@/content/media";
import { PROGRAM_IMAGES, PROGRAMS } from "@/content/programs";
import { ProgramsSwitcher } from "@/components/sections/programs-switcher";

export const metadata: Metadata = {
  title: "Programs",
  description: "AI Academy, Community Projects, Hackathon, Startup Launchpad.",
};

interface ProgramBlockProps {
  title: string;
  description: string;
  features: { title: string; description: string }[];
  dark: boolean;
  image: { src: string; alt: string };
}

function ProgramBlock({ title, description, features, dark, image }: ProgramBlockProps) {
  const content = (
    <section className="flex flex-col gap-12 py-40">
      <div className="grid grid-cols-3 gap-6 md:gap-10 lg:gap-20">
        <div className="col-span-3 lg:col-span-2">
          <h2 className="h3 text-balance">{title}</h2>
        </div>
        <div className="col-span-3 lg:col-span-1">
          <p className="body-md lg:max-w-none">{description}</p>
        </div>
      </div>

      <figure
        className="relative aspect-video w-full overflow-hidden rounded-2xl"
        style={{ backgroundColor: dark ? "rgb(40,37,37)" : "rgb(227,224,218)" }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 1280px) 100vw, 1120px"
          quality={80}
          className="object-cover"
        />
        <figcaption
          className="caption absolute right-3 bottom-3 rounded px-2 py-1"
          style={{
            backgroundColor: "rgba(0,0,0,0.4)",
            color: "rgb(187,184,178)",
          }}
        >
          {PHOTO_CREDIT}
        </figcaption>
      </figure>

      <dl className="flex flex-col gap-10 md:flex-row md:gap-0 md:divide-x">
        {features.map((f) => (
          <div
            key={f.title}
            className="md:basis-1/3 md:pr-10 md:pl-10 md:first:pl-0 lg:pr-20 lg:pl-20"
          >
            <dt className="body-md font-medium">{f.title}</dt>
            <dd className="body-sm text-secondary mt-1">{f.description}</dd>
          </div>
        ))}
      </dl>
    </section>
  );

  if (dark) return <ThemeBand>{content}</ThemeBand>;
  return content;
}

export default function ProgramsPage() {
  return (
    <>
      <section className="grid grid-cols-3 gap-6 pt-20 pb-20 md:gap-10 md:pt-30 lg:gap-20 lg:pt-20">
        <div className="col-span-3 lg:col-span-2">
          <h1 className="h1 mb-6 max-w-[20ch] text-balance">What we build.</h1>
          <p className="body-md max-w-[38ch] text-balance">
            Four programs designed to take you from learning to shipping.
          </p>
        </div>
      </section>

      <ProgramsSwitcher />
    </>
  );
}
