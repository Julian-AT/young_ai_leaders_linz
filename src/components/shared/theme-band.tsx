"use client";

import { useEffect, useRef } from "react";

/**
 * Wraps a section with a theme-dark CSS class scope. When the wrapped section
 * scrolls into the upper half of the viewport, the body is given the
 * `theme-dark` class, flipping CSS variables and triggering the 500ms color
 * transition globally. When it leaves, the class is removed.
 */
export function ThemeBand({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let active = false;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const midViewport = window.innerHeight * 0.4;
      const inDarkBand = rect.top <= midViewport && rect.bottom >= midViewport;
      if (inDarkBand && !active) {
        document.body.classList.add("theme-dark");
        active = true;
      } else if (!inDarkBand && active) {
        document.body.classList.remove("theme-dark");
        active = false;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      document.body.classList.remove("theme-dark");
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
