"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

function easeOutExpo(t: number): number {
  return Math.min(1, 1.001 - Math.pow(2, -10 * t));
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ duration: 1.2, easing: easeOutExpo }}>
      {children}
    </ReactLenis>
  );
}
