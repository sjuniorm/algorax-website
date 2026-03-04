"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const { footer, colors: c, name, links } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden" style={{ background: c.bgSecondary }}>
      {/* CTA section */}
      <div className="relative border-t border-white/[0.06]">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full opacity-[0.06] blur-[80px]"
          style={{ background: c.gradientVia }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 py-20 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            Ready to trade with{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(135deg, ${c.gradientFrom}, ${c.gradientTo})` }}
            >
              clarity
            </span>
            ?
          </h2>
          <p className="text-sm sm:text-base mb-8 max-w-md mx-auto" style={{ color: c.textSecondary }}>
            Join thousands of traders who already elevated their edge with {name}.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={links.getAccess}
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold text-sm transition-all duration-300 hover:brightness-110"
              style={{
                background: `linear-gradient(135deg, ${c.gradientFrom}, ${c.gradientTo})`,
                boxShadow: `0 0 40px ${c.gradientFrom}18`,
              }}
            >
              Get Started Now
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href={links.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold text-sm transition-all duration-300 hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #5865F2, #7983f5)",
                boxShadow: "0 0 40px #5865F230",
              }}
            >
              <MessageCircle size={16} className="group-hover:scale-110 transition-transform" />
              Join Free Discord
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div
                className="w-6 h-6 rounded-md flex items-center justify-center font-bold text-white text-[10px]"
                style={{ background: `linear-gradient(135deg, ${c.gradientFrom}, ${c.gradientTo})` }}
              >
                A
              </div>
              <span className="text-xs font-semibold text-white">{name}</span>
            </div>

            <div className="flex items-center gap-5">
              {footer.links.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="text-[11px] transition-colors"
                  style={{ color: c.textMuted }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <p className="text-[11px]" style={{ color: c.textMuted }}>
              &copy; {year} {name}
            </p>
          </div>

          {/* Disclaimer */}
          <p
            className="mt-6 text-[10px] leading-relaxed text-center max-w-3xl mx-auto"
            style={{ color: `${c.textMuted}80` }}
          >
            {footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
