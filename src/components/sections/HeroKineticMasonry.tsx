"use client";

// components/HeroKineticMasonry.tsx
import React, { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

type MediaItem = {
  type: "image" | "video";
  src: string;
  alt?: string;
};

type Props = {
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  items: MediaItem[];
  columnCount?: 1 | 2 | 3;
  speedsSec?: [number, number, number]; // loop durations for columns [col1, col2, col3]
  gapPx?: number;
  className?: string;
};

const chunkIntoColumns = (items: MediaItem[], columns: number) => {
  const cols: MediaItem[][] = Array.from({ length: columns }, () => []);
  items.forEach((item, i) => {
    cols[i % columns].push(item);
  });
  return cols;
};

const ColumnTrack: React.FC<{
  items: MediaItem[];
  direction: "up" | "down";
  duration: number;
  gapPx: number;
}> = ({ items, direction, duration, gapPx }) => {
  const reduceMotion = useReducedMotion();

  // Two clones of the list stacked vertically to create a seamless loop
  const content = (
    <>
      {items.map((it, idx) => (
        <div
          key={`a-${idx}`}
          className="rounded-2xl overflow-hidden shadow-sm"
          style={{ marginBottom: gapPx }}
        >
          {it.type === "image" ? (
            <img
              src={it.src}
              alt={it.alt ?? ""}
              className="w-full h-auto block"
              loading="lazy"
            />
          ) : (
            <video
              src={it.src}
              className="w-full h-auto block"
              muted
              loop
              playsInline
              autoPlay
              onMouseEnter={(e) => e.currentTarget.pause()}
              onMouseLeave={(e) => e.currentTarget.play()}
            />
          )}
        </div>
      ))}
    </>
  );

  const contentClone = (
    <>
      {items.map((it, idx) => (
        <div
          key={`b-${idx}`}
          className="rounded-2xl overflow-hidden shadow-sm"
          style={{ marginBottom: gapPx }}
        >
          {it.type === "image" ? (
            <img
              src={it.src}
              alt={it.alt ?? ""}
              className="w-full h-auto block"
              loading="lazy"
            />
          ) : (
            <video
              src={it.src}
              className="w-full h-auto block"
              muted
              loop
              playsInline
              autoPlay
              onMouseEnter={(e) => e.currentTarget.pause()}
              onMouseLeave={(e) => e.currentTarget.play()}
            />
          )}
        </div>
      ))}
    </>
  );

  // Motion animation: translate a full list height (50% of the double-stack)
  const animate = reduceMotion
    ? {}
    : {
        y: direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"],
        transition: {
          duration,
          repeat: Infinity,
          ease: "linear" as const,
        },
      };

  return (
    <div className="relative h-full overflow-hidden">
      {/* gradient masks to hide seams */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 from-neutral-900 to-transparent bg-gradient-to-b z-10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 from-transparent to-neutral-900 bg-gradient-to-t z-10" />

      <motion.div
        className="will-change-transform"
        style={{ display: "flex", flexDirection: "column" }}
        animate={animate}
      >
        {content}
        {contentClone}
      </motion.div>
    </div>
  );
};

const HeroKineticMasonry: React.FC<Props> = ({
  heading = "Advertisements that sell.",
  subheading = "We create advertisements that increase sales. That's it. One service, delivered well. If it doesn't sell, it isn't creative.",
  ctaLabel = "Book a demo",
  onCtaClick,
  items,
  columnCount = 3,
  speedsSec = [24, 28, 26],
  gapPx = 12,
  className = "",
}) => {
  const columns = useMemo(
    () => chunkIntoColumns(items, columnCount),
    [items, columnCount]
  );

  // Ensure we always have 3 speed values (pad if fewer columns)
  const speeds = [
    speedsSec[0] ?? 24,
    speedsSec[1] ?? 28,
    speedsSec[2] ?? 26,
  ];

  return (
    <section
      className={`w-full bg-neutral-900 text-white py-16 md:py-24 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Copy */}
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
              {heading}
            </h1>
            <p className="mt-4 text-neutral-300 text-lg">
              {subheading}
            </p>
            <div className="mt-6">
              <button
                onClick={onCtaClick}
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-lime-300 text-neutral-900 font-medium hover:brightness-95 active:brightness-90 transition"
              >
                {ctaLabel}
              </button>
            </div>
          </div>

          {/* Right: Animated 3-column masonry */}
          <div className="h-[520px] md:h-[640px] overflow-hidden">
            <div
              className="grid h-full"
              style={{
                gridTemplateColumns:
                  columnCount === 1
                    ? "1fr"
                    : columnCount === 2
                    ? "1fr 1fr"
                    : "1fr 1fr 1fr",
                gap: `${gapPx}px`,
              }}
            >
              {columns.map((col, i) => (
                <div key={i} className="h-full">
                  <ColumnTrack
                    items={col}
                    direction={i % 2 === 0 ? "up" : "down"}
                    duration={speeds[i] ?? speeds[0]}
                    gapPx={gapPx}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroKineticMasonry;
