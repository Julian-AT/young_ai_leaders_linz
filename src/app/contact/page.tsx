import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { ArrowOutIcon } from "@/components/shared/icons";
import { SmoothScroll } from "@/components/shared/smooth-scroll";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Young AI Leaders Linz.",
};

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/youngaileaderslinz" },
  { label: "Instagram", href: "https://www.instagram.com/youngaileaderslinz/" },
  { label: "TikTok", href: "https://www.tiktok.com/@youngaileaderslinz" },
];

export default function ContactPage() {
  return (
    <>
      <SmoothScroll />
      <Header />
      <main className="page-margins mx-auto max-w-[1280px]">
        <div>
          <section className="grid grid-cols-3 gap-6 pt-20 pb-40 md:gap-10 md:pt-30 md:pb-30 lg:gap-20 lg:pt-20 lg:pb-10">
            <div className="col-span-3 lg:col-span-2">
              <h1 className="h1 mb-6 max-w-[18ch] text-balance">Let&apos;s talk.</h1>
              <p className="body-md max-w-[44ch] text-balance">
                Have a question, want to collaborate, or just curious about what we do? Reach out.
              </p>
            </div>
          </section>

          <section className="grid grid-cols-3 gap-6 pb-40 md:gap-10 lg:gap-20">
            <div className="col-span-3 md:col-span-1">
              <p className="body-sm text-secondary mb-3 tracking-wider uppercase">Email</p>
              <a
                href="mailto:office@youngaileaderslinz.at"
                className="body-md hover:text-secondary transition-colors duration-100"
              >
                office@youngaileaderslinz.at
              </a>
            </div>
            <div className="col-span-3 md:col-span-1">
              <p className="body-sm text-secondary mb-3 tracking-wider uppercase">Location</p>
              <p className="body-md">Linz, Austria</p>
            </div>
            <div className="col-span-3 md:col-span-1">
              <p className="body-sm text-secondary mb-3 tracking-wider uppercase">Social</p>
              <div className="flex flex-col gap-2">
                {SOCIALS.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="body-md group hover:text-secondary relative inline-flex w-fit items-center gap-1 transition-colors duration-100"
                  >
                    <span>{s.label}</span>
                    <ArrowOutIcon className="text-secondary opacity-0 transition-opacity duration-100 group-hover:opacity-100" />
                  </Link>
                ))}
              </div>
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
