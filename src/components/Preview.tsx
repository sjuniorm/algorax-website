"use client";

import { motion } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import { siteConfig } from "@/config/site";

export default function Preview() {
  const { preview, colors: c } = siteConfig;

  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    isDragging.current = true;
    updatePosition(e.clientX);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    updatePosition(e.touches[0].clientX);
  };

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      updatePosition(e.clientX);
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging.current) return;
      updatePosition(e.touches[0].clientX);
    };
    const onUp = () => { isDragging.current = false; };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onUp);
    };
  }, [updatePosition]);

  const beforeImage = preview.beforeImage || "";
  const afterImage = preview.afterImage || "";
  const hasImages = beforeImage && afterImage;

  return (
    <section
      id="preview"
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{ background: c.bgSecondary }}
    >
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.07] blur-[100px]"
        style={{ background: c.gradientFrom }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span
            className="text-[11px] font-semibold tracking-[0.2em] px-3 py-1 rounded-full border bg-white/[0.03]"
            style={{ color: c.accentLight, borderColor: `${c.accent}30` }}
          >
            {preview.label}
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-white leading-tight">
            {preview.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg max-w-xl mx-auto" style={{ color: c.textSecondary }}>
            {preview.subtitle}
          </p>
        </motion.div>

        {/* Before / After Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-4xl mx-auto"
        >
          <div
            ref={containerRef}
            className="relative rounded-2xl overflow-hidden border border-white/[0.08] select-none"
            style={{
              background: c.bgCard,
              cursor: "col-resize",
              aspectRatio: hasImages ? undefined : "16/9",
              minHeight: hasImages ? undefined : "360px",
            }}
            onMouseDown={onMouseDown}
            onTouchStart={onTouchStart}
          >
            {hasImages ? (
              <>
                {/* AFTER image (bottom layer — full width) */}
                <img
                  src={afterImage}
                  alt="With AlgoraX"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  draggable={false}
                />

                {/* BEFORE image (top layer — clipped to left side) */}
                <div
                  className="absolute inset-0 overflow-hidden pointer-events-none"
                  style={{ width: `${position}%` }}
                >
                  <img
                    src={beforeImage}
                    alt="Without AlgoraX"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ width: containerRef.current?.offsetWidth ?? "100%" }}
                    draggable={false}
                  />
                </div>

                {/* Labels */}
                <div className="absolute top-4 left-4 pointer-events-none z-10">
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-black/60 text-white/70 backdrop-blur-sm">
                    WITHOUT
                  </span>
                </div>
                <div className="absolute top-4 right-4 pointer-events-none z-10">
                  <span
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-full text-white backdrop-blur-sm"
                    style={{ background: `linear-gradient(135deg, ${c.gradientFrom}cc, ${c.gradientTo}cc)` }}
                  >
                    WITH ALGORAX
                  </span>
                </div>
              </>
            ) : (
              /* Placeholder when no images are set */
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
                <div className="text-center">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 font-bold text-white text-2xl"
                    style={{ background: `linear-gradient(135deg, ${c.gradientFrom}, ${c.gradientTo})` }}
                  >
                    A
                  </div>
                  <p className="text-white font-semibold mb-1">Before / After Comparison</p>
                  <p className="text-sm max-w-sm" style={{ color: c.textMuted }}>
                    Add your chart screenshots to see the slider in action.
                    See the Customization Guide for instructions.
                  </p>
                </div>
                {/* Mock slider hint */}
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08]" style={{ color: c.textMuted }}>
                    WITHOUT
                  </span>
                  <div
                    className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center shadow-lg"
                    style={{ background: `linear-gradient(135deg, ${c.gradientFrom}, ${c.gradientTo})` }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M4 7H10M4 7L2 5M4 7L2 9M10 7L12 5M10 7L12 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span
                    className="text-xs px-3 py-1 rounded-full text-white"
                    style={{ background: `linear-gradient(135deg, ${c.gradientFrom}80, ${c.gradientTo}80)` }}
                  >
                    WITH ALGORAX
                  </span>
                </div>
              </div>
            )}

            {/* Divider line */}
            {hasImages && (
              <div
                className="absolute top-0 bottom-0 z-20 pointer-events-none"
                style={{ left: `${position}%` }}
              >
                <div className="absolute inset-y-0 -translate-x-1/2 w-[2px] bg-white/80 shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                {/* Handle */}
                <div
                  className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full border-2 border-white flex items-center justify-center shadow-xl pointer-events-auto cursor-col-resize"
                  style={{ background: `linear-gradient(135deg, ${c.gradientFrom}, ${c.gradientTo})` }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5 8H11M5 8L3 6M5 8L3 10M11 8L13 6M11 8L13 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            )}

            {/* Drag hint (fades after first interaction) */}
            {hasImages && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none z-10">
                <span className="text-[10px] font-medium px-3 py-1 rounded-full bg-black/50 text-white/50 backdrop-blur-sm">
                  Drag to compare
                </span>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
