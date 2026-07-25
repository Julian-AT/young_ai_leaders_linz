"use client";

import { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollToTop() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    // pathname is the navigation trigger for this effect
    void pathname;

    if (!lenis) {
      window.scrollTo(0, 0);
      return;
    }

    lenis.scrollTo(0, { immediate: true, force: true });
  }, [pathname, lenis]);

  return null;
}
