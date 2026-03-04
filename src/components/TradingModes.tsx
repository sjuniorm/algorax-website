"use client";

import { motion } from "framer-motion";
import { TrendingUp, BarChart3, Check } from "lucide-react";
import { siteConfig } from "@/config/site";

const icons = [TrendingUp, BarChart3];

export default function TradingModes() {
  const { tradingModes, colors: c } = siteConfig;

  return (
    <section
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{ background: c.bgPrimary }}
    >
      <div
        className="absolute bottom-0 left-1/4 w-[500px] h-[400px] rounded-full opacity-[0.06] blur-[100px]"
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
            {tradingModes.label}
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-white leading-tight">
            {tradingModes.title}
          </h2>
        </motion.div>

        {/* Dual cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {tradingModes.modes.map((mode, i) => {
            const Icon = icons[i] || TrendingUp;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl border border-white/[0.06] p-7 sm:p-9 transition-all duration-500 hover:border-white/[0.12]"
                style={{ background: c.bgCard }}
              >
                {/* Top accent line on hover */}
                <div
                  className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${c.gradientFrom}, ${c.gradientTo}, transparent)`,
                  }}
                />

                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: `linear-gradient(135deg, ${c.gradientFrom}18, ${c.gradientTo}18)`,
                    border: `1px solid ${c.gradientFrom}20`,
                  }}
                >
                  <Icon size={20} style={{ color: c.accentLight }} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-1">{mode.name}</h3>
                <p className="text-sm mb-6" style={{ color: c.textSecondary }}>
                  {mode.tagline}
                </p>

                {/* Feature list */}
                <ul className="space-y-3.5">
                  {mode.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check
                        size={15}
                        className="mt-0.5 flex-shrink-0"
                        style={{ color: c.accentLight }}
                      />
                      <span className="text-sm" style={{ color: c.textSecondary }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
