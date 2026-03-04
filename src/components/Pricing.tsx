"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Pricing() {
  const { pricing, colors: c } = siteConfig;

  return (
    <section
      id="pricing"
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{ background: c.bgSecondary }}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-[0.07] blur-[100px]"
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
            {pricing.label}
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-white leading-tight">
            {pricing.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg max-w-md mx-auto" style={{ color: c.textSecondary }}>
            {pricing.subtitle}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[56rem] mx-auto items-start">
          {pricing.plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className={`relative rounded-2xl p-7 border transition-all duration-400 ${
                plan.highlighted
                  ? "border-white/[0.15] md:-mt-3 md:mb-[-12px]"
                  : "border-white/[0.06] hover:border-white/[0.12]"
              }`}
              style={{ background: c.bgCard }}
            >
              {/* Gradient top line for highlighted */}
              {plan.highlighted && (
                <div
                  className="absolute top-0 left-4 right-4 h-px"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${c.gradientFrom}, ${c.gradientTo}, transparent)`,
                  }}
                />
              )}

              {/* Badge */}
              {plan.badge && (
                <span
                  className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-wider text-white px-3 py-1 rounded-full mb-5"
                  style={{
                    background: `linear-gradient(135deg, ${c.gradientFrom}, ${c.gradientTo})`,
                  }}
                >
                  <Sparkles size={11} />
                  {plan.badge}
                </span>
              )}

              <h3 className="text-lg font-semibold text-white mb-1">{plan.name}</h3>
              <p className="text-sm mb-5" style={{ color: c.textSecondary }}>{plan.desc}</p>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-sm" style={{ color: c.textMuted }}>{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-7">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <Check size={15} className="mt-0.5 flex-shrink-0" style={{ color: c.accentLight }} />
                    <span className="text-sm" style={{ color: c.textSecondary }}>{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={plan.ctaLink}
                className={`block w-full text-center py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:brightness-110 ${
                  plan.highlighted ? "text-white" : "text-white border border-white/[0.08] bg-white/[0.04]"
                }`}
                style={
                  plan.highlighted
                    ? {
                        background: `linear-gradient(135deg, ${c.gradientFrom}, ${c.gradientTo})`,
                        boxShadow: `0 0 30px ${c.gradientFrom}18`,
                      }
                    : undefined
                }
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm mt-7"
          style={{ color: c.textMuted }}
        >
          Cancel anytime — no questions asked.
        </motion.p>
      </div>
    </section>
  );
}
