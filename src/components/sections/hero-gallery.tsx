"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { SITE_IMAGES } from "@/content/media";

interface Tile {
  src: string;
  alt: string;
  width: number;
  height: number;
  align: "left" | "center" | "right";
  initialWidth: number;
  finalWidth: number;
  translateYEnd: number;
  scaleEnd: number;
  centerLeft: number;
}

const TILES: Tile[] = [
  {
    ...SITE_IMAGES.heroSpeaker,
    align: "left",
    initialWidth: 118,
    finalWidth: 226,
    translateYEnd: 350,
    scaleEnd: 0.66,
    centerLeft: 0,
  },
  {
    ...SITE_IMAGES.heroPanel,
    align: "center",
    initialWidth: 153,
    finalWidth: 238,
    translateYEnd: 35,
    scaleEnd: 0.68,
    centerLeft: 126,
  },
  {
    ...SITE_IMAGES.heroNetwork,
    align: "center",
    initialWidth: 211,
    finalWidth: 244,
    translateYEnd: 500,
    scaleEnd: 0.65,
    centerLeft: 287,
  },
  {
    ...SITE_IMAGES.heroSpeakers,
    align: "center",
    initialWidth: 290,
    finalWidth: 215,
    translateYEnd: -20,
    scaleEnd: 0.72,
    centerLeft: 506,
  },
  {
    ...SITE_IMAGES.heroAudience,
    align: "right",
    initialWidth: 397,
    finalWidth: 486,
    translateYEnd: 295,
    scaleEnd: 0.58,
    centerLeft: 0,
  },
];

const TILE_HEIGHT = 320;

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}
function clamp01(n: number) {
  return Math.min(1, Math.max(0, n));
}

function MobileGallery() {
  return (
    <div className="mt-4 grid grid-cols-3 grid-rows-2 gap-1 md:hidden">
      <div className="relative col-span-1 row-span-1 aspect-[3/4] overflow-hidden rounded-sm">
        <Image
          src={SITE_IMAGES.heroSpeaker.src}
          alt={SITE_IMAGES.heroSpeaker.alt}
          width={SITE_IMAGES.heroSpeaker.width}
          height={SITE_IMAGES.heroSpeaker.height}
          priority
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative col-span-1 row-span-1 aspect-[3/4] overflow-hidden rounded-sm">
        <Image
          src={SITE_IMAGES.heroPanel.src}
          alt={SITE_IMAGES.heroPanel.alt}
          width={SITE_IMAGES.heroPanel.width}
          height={SITE_IMAGES.heroPanel.height}
          priority
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative col-span-1 row-span-1 aspect-[3/4] overflow-hidden rounded-sm">
        <Image
          src={SITE_IMAGES.heroNetwork.src}
          alt={SITE_IMAGES.heroNetwork.alt}
          width={SITE_IMAGES.heroNetwork.width}
          height={SITE_IMAGES.heroNetwork.height}
          priority
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative col-span-1 row-span-1 aspect-[3/4] overflow-hidden rounded-sm">
        <Image
          src={SITE_IMAGES.heroSpeakers.src}
          alt={SITE_IMAGES.heroSpeakers.alt}
          width={SITE_IMAGES.heroSpeakers.width}
          height={SITE_IMAGES.heroSpeakers.height}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative col-span-2 row-span-1 aspect-[3/2] overflow-hidden rounded-sm">
        <Image
          src={SITE_IMAGES.heroAudience.src}
          alt={SITE_IMAGES.heroAudience.alt}
          width={SITE_IMAGES.heroAudience.width}
          height={SITE_IMAGES.heroAudience.height}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

function DesktopGallery() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const stickyOffset = 40;
      const vh = window.innerHeight;
      const stickyHeight = Math.min(Math.max(vh * 0.8, 820), 1200);
      const scrollableDistance = el.offsetHeight - stickyHeight;
      const scrolled = stickyOffset - rect.top;
      setProgress(clamp01(scrolled / scrollableDistance));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const textOpacity = clamp01((progress - 0.5) * 3);

  return (
    <div ref={wrapRef} className="relative hidden md:mt-6 md:block lg:mt-20">
      <div className="group relative h-[140vh]">
        <div
          className="sticky h-[calc(100vh_-_500px)] max-h-[1200px] min-h-[820px] w-full"
          style={{ top: 40 }}
        >
          <div
            className="pointer-events-none absolute top-1/2 left-1/2 z-10 w-full max-w-[50ch] px-4 lg:max-w-[74ch]"
            style={{
              opacity: textOpacity,
              transform: "translate(-50%, -50%)",
            }}
          >
            <p className="font-riforma body-md text-center">
              100+ hubs. 13 countries. One mission.
            </p>
          </div>

          <div className="relative size-full">
            {TILES.map((tile, i) => {
              const w = lerp(tile.initialWidth, tile.finalWidth, progress);
              const ty = lerp(0, tile.translateYEnd, progress);
              const sc = lerp(1, tile.scaleEnd, progress);

              const style: React.CSSProperties = {
                height: TILE_HEIGHT,
                width: `${w}px`,
              };

              if (tile.align === "left") {
                style.left = 0;
                style.transformOrigin = "left center";
              } else if (tile.align === "right") {
                style.right = 0;
                style.transformOrigin = "right center";
              } else {
                style.left = `${tile.centerLeft}px`;
                style.transformOrigin = "center center";
              }
              style.transform = `translateY(${ty}px) scale(${sc})`;

              return (
                <div
                  key={tile.src}
                  data-align={tile.align}
                  className="absolute top-0 overflow-hidden rounded-md"
                  style={style}
                >
                  <Image
                    src={tile.src}
                    alt={tile.alt}
                    width={tile.width}
                    height={tile.height}
                    priority={i < 3}
                    className="h-full w-full object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroGallery() {
  return (
    <>
      <MobileGallery />
      <DesktopGallery />
    </>
  );
}
