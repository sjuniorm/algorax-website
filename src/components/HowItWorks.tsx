"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export default function HowItWorks() {
  const { howItWorks, colors: c } = siteConfig;

  return (
    <section
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{ background: c.bgPrimary }}
    >
      <div
        className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full opacity-[0.06] blur-[100px] -translate-y-1/2"
        style={{ background: c.gradientVia }}
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
            {howItWorks.label}
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-white leading-tight">
            {howItWorks.title}
          </h2>
        </motion.div>

        {/* Steps row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5">
          {howItWorks.steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.12 }}
              className="relative text-center p-7 rounded-xl border border-white/[0.06]"
              style={{ background: c.bgCard }}
            >
              {/* Connector line between cards (desktop) */}
              {i < howItWorks.steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-1/2 -right-3 w-6 h-px"
                  style={{ background: `${c.accent}40` }}
                />
              )}

              {/* Step number */}
              <div
                className="inline-flex w-12 h-12 rounded-xl items-center justify-center text-lg font-bold text-white mb-5"
                style={{
                  background: `linear-gradient(135deg, ${c.gradientFrom}25, ${c.gradientTo}25)`,
                  border: `1px solid ${c.gradientFrom}30`,
                }}
              >
                {step.step}
              </div>

              <h3 className="text-base font-semibold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed max-w-[240px] mx-auto" style={{ color: c.textSecondary }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
