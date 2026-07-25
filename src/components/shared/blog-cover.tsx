import Image from "next/image";
import type { ReactNode } from "react";

function hashSlug(slug: string): number {
  let h = 2166136261;
  for (let i = 0; i < slug.length; i++) {
    h ^= slug.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function createRng(seed: number) {
  let state = seed || 1;
  return () => {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

type PatternId = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

function ConcentricFrames({ rng }: { rng: () => number }) {
  const count = 3 + Math.floor(rng() * 3);
  const cx = 200 + (rng() - 0.5) * 40;
  const cy = 140 + (rng() - 0.5) * 30;
  const open = rng() > 0.5 ? "right" : "left";
  const frames = Array.from({ length: count }, (_, i) => {
    const w = 80 + i * 36;
    const h = 56 + i * 26;
    return { x: cx - w / 2, y: cy - h / 2, w, h, r: 18 + i * 4 };
  });

  return (
    <g fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round">
      {frames.map((f, i) => (
        <path
          key={i}
          d={
            open === "right"
              ? `M ${f.x + f.w * 0.72} ${f.y}
                 H ${f.x + f.r}
                 Q ${f.x} ${f.y} ${f.x} ${f.y + f.r}
                 V ${f.y + f.h - f.r}
                 Q ${f.x} ${f.y + f.h} ${f.x + f.r} ${f.y + f.h}
                 H ${f.x + f.w * 0.72}`
              : `M ${f.x + f.w * 0.28} ${f.y}
                 H ${f.x + f.w - f.r}
                 Q ${f.x + f.w} ${f.y} ${f.x + f.w} ${f.y + f.r}
                 V ${f.y + f.h - f.r}
                 Q ${f.x + f.w} ${f.y + f.h} ${f.x + f.w - f.r} ${f.y + f.h}
                 H ${f.x + f.w * 0.28}`
          }
        />
      ))}
    </g>
  );
}

function VennCircles({ rng }: { rng: () => number }) {
  const baseR = 48 + rng() * 18;
  const spread = 38 + rng() * 16;
  const cx = 200;
  const cy = 142;
  const centers = [
    { x: cx - spread, y: cy - spread * 0.35 },
    { x: cx + spread, y: cy - spread * 0.35 },
    { x: cx, y: cy + spread * 0.55 },
  ];

  return (
    <g fill="none" stroke="currentColor" strokeWidth="1.25">
      {centers.map((c, i) => (
        <circle key={i} cx={c.x} cy={c.y} r={baseR} />
      ))}
      {centers.map((c, i) => (
        <circle key={`d-${i}`} cx={c.x} cy={c.y} r="2.5" fill="currentColor" stroke="none" />
      ))}
      <circle cx={cx} cy={cy} r="2.5" fill="currentColor" stroke="none" />
    </g>
  );
}

function OverlappingTriangles({ rng }: { rng: () => number }) {
  const count = 3 + Math.floor(rng() * 2);
  const flip = rng() > 0.5 ? -1 : 1;
  const cx = 200;
  const cy = 145;

  return (
    <g fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round">
      {Array.from({ length: count }, (_, i) => {
        const s = 42 + i * 28;
        const ox = (i - (count - 1) / 2) * 18 * flip;
        const oy = (i - (count - 1) / 2) * 8;
        const x1 = cx + ox;
        const y1 = cy - s * 0.55 + oy;
        const x2 = cx - s * 0.55 + ox;
        const y2 = cy + s * 0.45 + oy;
        const x3 = cx + s * 0.55 + ox;
        const y3 = cy + s * 0.45 + oy;
        return (
          <g key={i}>
            <path d={`M ${x1} ${y1} L ${x2} ${y2} L ${x3} ${y3} Z`} />
            <circle cx={x1} cy={y1} r="2.2" fill="currentColor" stroke="none" />
          </g>
        );
      })}
    </g>
  );
}

function OrbitRings({ rng }: { rng: () => number }) {
  const cx = 200 + (rng() - 0.5) * 20;
  const cy = 140 + (rng() - 0.5) * 16;
  const rings = 3 + Math.floor(rng() * 2);

  return (
    <g fill="none" stroke="currentColor" strokeWidth="1.25">
      {Array.from({ length: rings }, (_, i) => {
        const rx = 36 + i * 28;
        const ry = 24 + i * 18;
        const angle = rng() * Math.PI * 2;
        const nx = cx + Math.cos(angle) * rx;
        const ny = cy + Math.sin(angle) * ry;
        return (
          <g key={i}>
            <ellipse cx={cx} cy={cy} rx={rx} ry={ry} />
            <circle cx={nx} cy={ny} r="2.5" fill="currentColor" stroke="none" />
          </g>
        );
      })}
      <circle cx={cx} cy={cy} r="3" fill="currentColor" stroke="none" />
    </g>
  );
}

function ArcFan({ rng }: { rng: () => number }) {
  const cx = 200;
  const cy = 210;
  const count = 4 + Math.floor(rng() * 3);
  const start = -Math.PI * (0.85 + rng() * 0.15);
  const end = -Math.PI * (0.15 - rng() * 0.1);

  return (
    <g fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round">
      {Array.from({ length: count }, (_, i) => {
        const r = 50 + i * 28;
        const x1 = cx + Math.cos(start) * r;
        const y1 = cy + Math.sin(start) * r;
        const x2 = cx + Math.cos(end) * r;
        const y2 = cy + Math.sin(end) * r;
        return <path key={i} d={`M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`} />;
      })}
    </g>
  );
}

function NodeGrid({ rng }: { rng: () => number }) {
  const cols = 4 + Math.floor(rng() * 2);
  const rows = 3 + Math.floor(rng() * 2);
  const gapX = 48;
  const gapY = 40;
  const originX = 200 - ((cols - 1) * gapX) / 2;
  const originY = 140 - ((rows - 1) * gapY) / 2;
  const nodes: { x: number; y: number }[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (rng() > 0.18) {
        nodes.push({ x: originX + c * gapX, y: originY + r * gapY });
      }
    }
  }

  const links: [number, number][] = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const dist = Math.hypot(dx, dy);
      if (dist < gapX * 1.6 && rng() > 0.45) {
        links.push([i, j]);
      }
    }
  }

  return (
    <g fill="none" stroke="currentColor" strokeWidth="1.1">
      {links.map(([a, b], i) => (
        <line key={i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y} />
      ))}
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r="2.4" fill="currentColor" stroke="none" />
      ))}
    </g>
  );
}

function NestedDiamonds({ rng }: { rng: () => number }) {
  const count = 3 + Math.floor(rng() * 2);
  const cx = 200;
  const cy = 142;
  const rot = (rng() - 0.5) * 18;

  return (
    <g
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinejoin="round"
      transform={`rotate(${rot} ${cx} ${cy})`}
    >
      {Array.from({ length: count }, (_, i) => {
        const s = 34 + i * 30;
        return (
          <path
            key={i}
            d={`M ${cx} ${cy - s} L ${cx + s} ${cy} L ${cx} ${cy + s} L ${cx - s} ${cy} Z`}
          />
        );
      })}
    </g>
  );
}

function WaveBands({ rng }: { rng: () => number }) {
  const count = 4 + Math.floor(rng() * 3);
  const amp = 18 + rng() * 14;
  const phase = rng() * Math.PI;

  return (
    <g fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round">
      {Array.from({ length: count }, (_, i) => {
        const y = 70 + i * 36;
        const points = Array.from({ length: 9 }, (_, p) => {
          const x = 40 + p * 40;
          const yy = y + Math.sin(phase + p * 0.7 + i * 0.35) * amp;
          return `${p === 0 ? "M" : "L"} ${x} ${yy}`;
        }).join(" ");
        return <path key={i} d={points} />;
      })}
    </g>
  );
}

const PATTERNS: Record<PatternId, (rng: () => number) => ReactNode> = {
  0: (rng) => <ConcentricFrames rng={rng} />,
  1: (rng) => <VennCircles rng={rng} />,
  2: (rng) => <OverlappingTriangles rng={rng} />,
  3: (rng) => <OrbitRings rng={rng} />,
  4: (rng) => <ArcFan rng={rng} />,
  5: (rng) => <NodeGrid rng={rng} />,
  6: (rng) => <NestedDiamonds rng={rng} />,
  7: (rng) => <WaveBands rng={rng} />,
};

interface BlogCoverProps {
  slug: string;
  title: string;
  className?: string;
  /** Real photo override (e.g. /images/site/...). Falls back to geometric SVG. */
  imageSrc?: string;
  imageAlt?: string;
  priority?: boolean;
}

export function BlogCover({
  slug,
  title,
  className,
  imageSrc,
  imageAlt,
  priority = false,
}: BlogCoverProps) {
  const usePhoto = Boolean(imageSrc?.startsWith("/images/site/"));

  if (usePhoto && imageSrc) {
    return (
      <div
        className={["bg-surface-secondary relative overflow-hidden rounded-md", className]
          .filter(Boolean)
          .join(" ")}
      >
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          quality={75}
          priority={priority}
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
    );
  }

  const seed = hashSlug(slug);
  const rng = createRng(seed);
  const patternId = (seed % 8) as PatternId;
  rng();
  rng();

  return (
    <div
      className={[
        "bg-surface-secondary text-secondary relative overflow-hidden rounded-md",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      role="img"
      aria-label={`Illustration for ${title}`}
    >
      <svg
        viewBox="0 0 400 280"
        className="absolute inset-0 h-full w-full transition-transform duration-300 group-hover:scale-[1.02]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {PATTERNS[patternId](rng)}
      </svg>
    </div>
  );
}
