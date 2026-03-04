"use client";

import { motion } from "framer-motion";
import { TrendingUp, BarChart3, Zap } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Preview() {
  const { preview, colors: c } = siteConfig;

  const bars = [
    35, 42, 38, 50, 55, 48, 58, 65, 60, 68, 72, 66, 75, 80, 74,
    82, 88, 84, 90, 78, 85, 92, 88, 94, 90, 86, 82, 88, 92, 96,
  ];

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

        {/* Chart card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-3xl mx-auto"
        >
          {preview.image ? (
            <div className="rounded-2xl overflow-hidden border border-white/[0.08]">
              <img src={preview.image} alt="AlgoraX Preview" className="w-full h-auto" />
            </div>
          ) : (
            <div
              className="rounded-2xl border border-white/[0.08] overflow-hidden"
              style={{ background: c.bgCard }}
            >
              {/* Toolbar */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.05]">
                <div className="flex items-center gap-2.5">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
                  </div>
                  <span className="text-[11px] font-mono" style={{ color: c.textMuted }}>
                    XAUUSD · 15m · AlgoraX
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <TrendingUp size={13} className="text-emerald-400" />
                  <span className="text-[11px] font-mono text-emerald-400">+2.8%</span>
                </div>
              </div>

              {/* Chart bars */}
              <div className="relative h-52 sm:h-64 md:h-72 px-5 py-6 flex items-end">
                <div className="flex items-end gap-[3px] sm:gap-1 h-full w-full">
                  {bars.map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-sm min-w-[3px]"
                      style={{
                        height: `${h}%`,
                        background:
                          i === 13 || i === 23
                            ? `linear-gradient(to top, ${c.gradientFrom}, ${c.gradientTo})`
                            : h > (bars[i - 1] ?? 0)
                            ? "rgba(52,211,153,0.35)"
                            : "rgba(248,113,113,0.25)",
                      }}
                    />
                  ))}
                </div>
                {/* Buy marker */}
                <div className="absolute bottom-[42%] left-[46%]">
                  <span
                    className="text-[9px] font-bold text-white px-1.5 py-0.5 rounded"
                    style={{ background: `linear-gradient(135deg, ${c.gradientFrom}, ${c.gradientTo})` }}
                  >
                    BUY
                  </span>
                </div>
                {/* TP marker */}
                <div className="absolute top-[18%] right-[24%]">
                  <span className="text-[9px] font-bold text-white px-1.5 py-0.5 rounded bg-emerald-500/80">
                    TP
                  </span>
                </div>
              </div>

              {/* Bottom stats */}
              <div className="grid grid-cols-3 border-t border-white/[0.05]">
                {[
                  { icon: TrendingUp, label: "Win Rate", val: "73%" },
                  { icon: BarChart3, label: "Avg R:R", val: "1:2.4" },
                  { icon: Zap, label: "Signals/Day", val: "12" },
                ].map((s, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-center gap-2 py-3.5 ${
                      i < 2 ? "border-r border-white/[0.05]" : ""
                    }`}
                  >
                    <s.icon size={13} style={{ color: c.accentLight }} />
                    <div>
                      <p className="text-[9px] uppercase tracking-wider" style={{ color: c.textMuted }}>{s.label}</p>
                      <p className="text-xs font-semibold text-white">{s.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
