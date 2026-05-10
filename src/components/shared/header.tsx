"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { MenuIcon } from "@/components/shared/icons";
import { APPLY_URL, NAV_LINKS } from "@/content/site";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const navUlRef = useRef<HTMLUListElement | null>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => {
      setScrolledPastHero(window.scrollY > 400);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return (
    <div className="page-margins bg-primary text-primary sticky top-0 z-20 mx-auto w-full max-w-[1280px] transition-colors duration-500">
      <header className="relative py-3 md:pt-6 md:pb-4">
        <div className="relative z-40 flex flex-row items-center justify-between md:grid md:grid-cols-3 md:gap-10 lg:gap-20">
          <div className="md:col-span-1">
            <Link href="/" className="relative flex items-center gap-2">
              <Image
                src="/logos/yall-logo.png"
                alt="Young AI Leaders Linz"
                width={28}
                height={28}
                className="rounded-sm"
              />
              <span className="hidden text-[13px] font-medium tracking-tight lg:inline">
                Young AI Leaders Linz
              </span>
            </Link>
          </div>

          <div className="flex min-h-[32px] items-center justify-end md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-3">
            <nav className="hidden w-full md:block">
              <ul
                ref={navUlRef}
                className="body-sm flex h-full min-h-[34px] w-full items-center justify-end gap-6 whitespace-nowrap transition-all duration-500"
                style={{
                  transform: isHome && scrolledPastHero ? "translateX(-140px)" : "none",
                }}
              >
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-secondary transition-colors duration-100"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                {!isHome && (
                  <li>
                    <a
                      href={APPLY_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-small inline-flex whitespace-nowrap"
                    >
                      Apply Now
                    </a>
                  </li>
                )}
              </ul>
            </nav>
            <button
              type="button"
              aria-label="Toggle menu"
              className="cursor-pointer md:hidden"
              onClick={() => setMenuOpen((s) => !s)}
            >
              <MenuIcon open={menuOpen} />
            </button>
          </div>
        </div>
      </header>

      {menuOpen ? (
        <div className="bg-primary text-primary absolute inset-x-0 top-full z-40 flex flex-col gap-4 border-t px-4 py-6 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="body-md"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-small inline-flex w-fit"
          >
            Apply Now
          </a>
        </div>
      ) : null}
    </div>
  );
}
