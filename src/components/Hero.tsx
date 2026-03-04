"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Hero() {
  const { colors: c, hero, links } = siteConfig;

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Deep background */}
      <div className="absolute inset-0" style={{ background: c.bgPrimary }} />

      {/* Centered gradient orb */}
      <div
        className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[min(900px,150vw)] aspect-square rounded-full opacity-[0.15] blur-[100px]"
        style={{
          background: `conic-gradient(from 180deg, ${c.gradientFrom}, ${c.gradientVia}, ${c.gradientTo}, ${c.gradientFrom})`,
        }}
      />

      {/* Subtle radial light */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_70%)]" />

      {/* Optional background video */}
      {hero.backgroundVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        >
          <source src={hero.backgroundVideo} type="video/mp4" />
        </video>
      )}

      {/* Optional background image */}
      {hero.backgroundImage && !hero.backgroundVideo && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(${hero.backgroundImage})` }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center pt-24 pb-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span
            className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] px-4 py-1.5 rounded-full border bg-white/[0.03]"
            style={{
              color: c.accentLight,
              borderColor: `${c.accent}40`,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: c.accentLight }}
            />
            {hero.badge}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 text-[clamp(2.2rem,6vw,4.5rem)] font-extrabold leading-[1.08] tracking-tight"
        >
          {hero.headline.split("\n").map((line, i) => (
            <span key={i} className="block">
              {i === 0 ? (
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${c.gradientFrom}, ${c.gradientTo})`,
                  }}
                >
                  {line}
                </span>
              ) : (
                <span className="text-white">{line}</span>
              )}
            </span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg leading-relaxed max-w-xl mx-auto"
          style={{ color: c.textSecondary }}
        >
          {hero.subtitle}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={links.getAccess}
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl text-white font-semibold text-[15px] transition-all duration-300 hover:brightness-110"
            style={{
              background: `linear-gradient(135deg, ${c.gradientFrom}, ${c.gradientTo})`,
              boxShadow: `0 0 50px ${c.gradientFrom}25`,
            }}
          >
            Get Instant Access
            <ArrowRight
              size={17}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </a>
          <a
            href={links.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold text-[15px] transition-all duration-300 hover:brightness-110"
            style={{
              background: "linear-gradient(135deg, #5865F2, #7983f5)",
              boxShadow: "0 0 40px #5865F230",
            }}
          >
            <MessageCircle size={17} className="group-hover:scale-110 transition-transform" />
            Join Free Discord
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 inline-flex items-center gap-8 sm:gap-12 px-6 py-4 rounded-2xl border border-white/[0.06] bg-white/[0.02]"
        >
          {hero.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p
                className="text-lg sm:text-xl font-bold bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${c.gradientFrom}, ${c.gradientTo})`,
                }}
              >
                {stat.value}
              </p>
              <p className="text-[11px] sm:text-xs font-medium mt-0.5" style={{ color: c.textMuted }}>
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40"
        style={{
          background: `linear-gradient(to top, ${c.bgPrimary}, transparent)`,
        }}
      />
    </section>
  );
}
