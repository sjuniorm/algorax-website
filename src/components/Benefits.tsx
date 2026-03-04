"use client";

import { motion } from "framer-motion";
import { Settings, Target, Lock } from "lucide-react";
import { siteConfig } from "@/config/site";

const featureIcons = [Settings, Target, Lock];

export default function Benefits() {
  const { benefits, colors } = siteConfig;

  return (
    <section
      id="benefits"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: colors.bgPrimary }}
    >
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/3 w-[500px] h-[400px] rounded-full opacity-10 blur-[120px]"
        style={{ background: colors.gradientFrom }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block text-xs font-semibold tracking-[0.2em] mb-4 px-3 py-1 rounded-full border border-white/10 bg-white/5"
            style={{ color: colors.accentLight }}
          >
            {benefits.sectionLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {benefits.sectionTitle}
          </h2>
          <p className="text-base sm:text-lg text-[#a0a0c0] max-w-2xl mx-auto">
            {benefits.sectionSubtitle}
          </p>
        </motion.div>

        {/* Live market images (if provided) */}
        {benefits.images.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {benefits.images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden border border-white/10"
              >
                <img
                  src={img}
                  alt={`Live market example ${i + 1}`}
                  className="w-full h-auto"
                />
              </motion.div>
            ))}
          </div>
        )}

        {/* Extra features cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.extraFeatures.map((feature, i) => {
            const Icon = featureIcons[i] || Settings;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-500"
                style={{ background: colors.bgCard }}
              >
                {/* Hover gradient line at top */}
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${colors.gradientFrom}, ${colors.gradientTo}, transparent)`,
                  }}
                />

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: `linear-gradient(135deg, ${colors.gradientFrom}20, ${colors.gradientTo}20)`,
                  }}
                >
                  <Icon size={22} style={{ color: colors.accentLight }} />
                </div>

                <h3 className="text-lg font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#a0a0c0] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
