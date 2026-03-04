"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Shield,
  BarChart3,
  FlaskConical,
  Bell,
  BookOpen,
} from "lucide-react";
import { siteConfig } from "@/config/site";

const iconMap: Record<string, React.ElementType> = {
  TrendingUp,
  Shield,
  BarChart3,
  FlaskConical,
  Bell,
  BookOpen,
};

export default function Features() {
  const { features, colors: c } = siteConfig;

  return (
    <section
      id="features"
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{ background: c.bgSecondary }}
    >
      <div
        className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full opacity-[0.06] blur-[100px]"
        style={{ background: c.gradientTo }}
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
            {features.label}
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-white leading-tight">
            {features.title}
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.items.map((f, i) => {
            const Icon = iconMap[f.icon] || TrendingUp;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="group relative p-6 rounded-xl border border-white/[0.06] hover:border-white/[0.12] transition-all duration-400"
                style={{ background: c.bgCard }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{
                    background: `linear-gradient(135deg, ${c.gradientFrom}15, ${c.gradientTo}15)`,
                    border: `1px solid ${c.gradientFrom}15`,
                  }}
                >
                  <Icon size={19} style={{ color: c.accentLight }} />
                </div>
                <h3 className="text-[15px] font-semibold text-white mb-2">
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: c.textSecondary }}>
                  {f.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
