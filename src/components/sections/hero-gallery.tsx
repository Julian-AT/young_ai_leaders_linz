"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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
    src: "/images/workshop.jpeg",
    alt: "Workshop",
    width: 2048,
    height: 1394,
    align: "left",
    initialWidth: 118,
    finalWidth: 226,
    translateYEnd: 350,
    scaleEnd: 0.66,
    centerLeft: 0,
  },
  {
    src: "/images/hackathon.jpg",
    alt: "Hackathon",
    width: 1080,
    height: 1350,
    align: "center",
    initialWidth: 153,
    finalWidth: 238,
    translateYEnd: 35,
    scaleEnd: 0.68,
    centerLeft: 126,
  },
  {
    src: "/images/community.jpeg",
    alt: "Community",
    width: 2048,
    height: 1365,
    align: "center",
    initialWidth: 211,
    finalWidth: 244,
    translateYEnd: 500,
    scaleEnd: 0.65,
    centerLeft: 287,
  },
  {
    src: "/images/event.jpeg",
    alt: "Event",
    width: 2048,
    height: 1536,
    align: "center",
    initialWidth: 290,
    finalWidth: 215,
    translateYEnd: -20,
    scaleEnd: 0.72,
    centerLeft: 506,
  },
  {
    src: "/images/team.jpg",
    alt: "Team",
    width: 1080,
    height: 1080,
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
          src="/images/workshop.jpeg"
          alt="Workshop"
          width={2048}
          height={1394}
          priority
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative col-span-1 row-span-1 aspect-[3/4] overflow-hidden rounded-sm">
        <Image
          src="/images/hackathon.jpg"
          alt="Hackathon"
          width={1080}
          height={1350}
          priority
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative col-span-1 row-span-1 aspect-[3/4] overflow-hidden rounded-sm">
        <Image
          src="/images/community.jpeg"
          alt="Community"
          width={2048}
          height={1365}
          priority
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative col-span-1 row-span-1 aspect-[3/4] overflow-hidden rounded-sm">
        <Image
          src="/images/event.jpeg"
          alt="Event"
          width={2048}
          height={1536}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative col-span-2 row-span-1 aspect-[3/2] overflow-hidden rounded-sm">
        <Image
          src="/images/team.jpg"
          alt="Team"
          width={1080}
          height={1080}
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
