"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowOutIcon } from "@/components/shared/icons";
import { APPLY_URL, SOCIAL_LINKS } from "@/content/site";
import { useReveal } from "@/hooks/use-reveal";
import { useTypewriter } from "@/hooks/use-typewriter";

const TYPING_PHRASES = [
  "Ready to shape the future of AI?",
  "What will you build next?",
  "Linz is building something.",
];

export function Footer() {
  const text = useTypewriter(TYPING_PHRASES);
  const { ref: formRef, revealed } = useReveal(0.3);

  return (
    <footer className="flex flex-col gap-12 pt-12 pb-6 md:gap-20 md:pt-20 lg:gap-30">
      <div
        ref={formRef}
        id="join-cta"
        className="flex flex-col items-start justify-between rounded-md border p-4 transition-[height] duration-500 lg:flex-row lg:items-center lg:rounded-2xl lg:p-6"
        style={{ borderColor: "var(--stroke-primary)" }}
      >
        <div className="flex w-full flex-col justify-between gap-6 self-stretch lg:flex-row lg:items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/logos/yall-logo.png"
              alt=""
              width={36}
              height={36}
              className="rounded-sm"
            />
            <span className="h4 lg:h3 inline-block tracking-[-0.2px]" aria-live="polite">
              {text}
              <span className="ml-0.5 inline-block w-[1ch] animate-pulse">|</span>
            </span>
          </div>
          {revealed ? (
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-small inline-flex w-fit whitespace-nowrap"
            >
              Apply Now
            </a>
          ) : null}
        </div>
      </div>

      <div className="flex flex-col gap-20 md:gap-30 lg:gap-40">
        <div className="grid grid-cols-3 gap-6 md:gap-10 lg:gap-20">
          <div className="col-span-3 md:col-span-2">
            <p className="h4">Young AI Leaders Linz</p>
            <p className="h4 text-secondary">Part of AI for Good</p>
          </div>
          <div className="col-span-3 md:col-span-1">
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
              <nav className="flex flex-col items-start gap-2">
                {SOCIAL_LINKS.map((link) => (
                  <FooterLink key={link.label} href={link.href} icon={link.icon} external>
                    {link.label}
                  </FooterLink>
                ))}
              </nav>
              <nav className="flex flex-col items-start gap-2">
                <FooterLink href="/about">About</FooterLink>
                <FooterLink href="/programs">Programs</FooterLink>
                <FooterLink href="/partners">Partners</FooterLink>
                <FooterLink href="/join">Join Us</FooterLink>
                <button
                  type="button"
                  className="body-sm hover:text-secondary mt-2 flex cursor-pointer items-center gap-1 duration-100 lg:hidden"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  <span>Back to top</span>
                  <BackToTopIcon />
                </button>
              </nav>
              <div className="hidden lg:block">
                <button
                  type="button"
                  className="body-sm hover:text-secondary flex cursor-pointer items-center gap-1 duration-100"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  <span>Back to top</span>
                  <BackToTopIcon />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 md:gap-10 lg:gap-20">
          <div className="col-span-3 md:col-span-2">
            <p className="body-sm text-secondary flex flex-wrap items-center gap-y-1">
              <span>Young AI Leaders Linz 2025</span>
              <span className="mx-2 hidden sm:inline">/</span>
              <span className="mr-2 sm:hidden">&middot;</span>
              <span>office@youngaileaderslinz.at</span>
              <span className="mx-2 hidden sm:inline">/</span>
              <span className="mr-2 sm:hidden">&middot;</span>
              <span>Linz, Austria</span>
            </p>
          </div>
          <div className="col-span-3 md:col-span-1">
            <p className="body-sm text-secondary flex gap-6">
              <Link href="/legal" className="hover:text-primary">
                Legal
              </Link>
              <a
                href="https://aiforgood.itu.int/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                AI for Good
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function BackToTopIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="inline-block">
      <path
        d="M12 19V5M12 5L6 11M12 5L18 11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

function FooterLink({
  href,
  children,
  external,
  icon,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  icon?: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="body-sm hover:text-secondary group relative flex flex-row items-center gap-1 duration-100"
    >
      {icon ? <div>{icon}</div> : null}
      <span className="flex items-center gap-1">{children}</span>
      {external ? (
        <span className="absolute -right-4">
          <ArrowOutIcon className="text-secondary opacity-0 transition-opacity duration-100 group-hover:opacity-100" />
        </span>
      ) : null}
    </Link>
  );
}
