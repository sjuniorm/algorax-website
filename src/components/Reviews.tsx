"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Reviews() {
  const { reviews, colors: c } = siteConfig;
  // duplicate items for infinite-scroll marquee effect
  const doubled = [...reviews.items, ...reviews.items];

  return (
    <section
      id="reviews"
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{ background: c.bgPrimary }}
    >
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
            {reviews.label}
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-white leading-tight">
            {reviews.title}
          </h2>
        </motion.div>
      </div>

      {/* Marquee scroll */}
      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10" style={{ background: `linear-gradient(to right, ${c.bgPrimary}, transparent)` }} />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10" style={{ background: `linear-gradient(to left, ${c.bgPrimary}, transparent)` }} />

        <motion.div
          className="flex gap-5 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, ease: "linear", repeat: Infinity }}
        >
          {doubled.map((r, i) => (
            <div
              key={i}
              className="w-[300px] sm:w-[340px] flex-shrink-0 p-6 rounded-xl border border-white/[0.06]"
              style={{ background: c.bgCard }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: r.rating }).map((_, s) => (
                  <Star key={s} size={14} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              {/* Text */}
              <p className="text-sm leading-relaxed mb-5" style={{ color: c.textSecondary }}>
                &ldquo;{r.text}&rdquo;
              </p>
              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  style={{ background: `linear-gradient(135deg, ${c.gradientFrom}, ${c.gradientTo})` }}
                >
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{r.name}</p>
                  <p className="text-[11px]" style={{ color: c.textMuted }}>{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
