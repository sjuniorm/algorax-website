"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function FAQ() {
  const { faq, colors: c, links } = siteConfig;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{ background: c.bgPrimary }}
    >
      <div
        className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full opacity-[0.06] blur-[100px]"
        style={{ background: c.gradientTo }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span
            className="text-[11px] font-semibold tracking-[0.2em] px-3 py-1 rounded-full border bg-white/[0.03]"
            style={{ color: c.accentLight, borderColor: `${c.accent}30` }}
          >
            {faq.label}
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-white leading-tight">
            {faq.title}
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-2">
          {faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="rounded-xl border border-white/[0.06] overflow-hidden transition-colors duration-300"
                style={{ background: isOpen ? c.bgCardHover : c.bgCard }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer"
                >
                  <span className="text-[14px] font-medium text-white pr-4">
                    {item.q}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    style={{ color: c.textMuted }}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-4">
                        <p className="text-sm leading-relaxed" style={{ color: c.textSecondary }}>
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p className="text-sm mb-3" style={{ color: c.textMuted }}>Still have questions?</p>
          <a
            href={links.contact}
            className="inline-flex items-center px-6 py-2.5 rounded-lg text-sm font-medium text-white border border-white/[0.08] bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
