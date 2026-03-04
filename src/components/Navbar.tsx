"use client";

import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Results", href: "#reviews" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const c = siteConfig.colors;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-2xl border-b border-white/[0.06]"
          : "border-b border-transparent"
      }`}
      style={{ background: scrolled ? `${c.bgPrimary}e6` : "transparent" }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-white text-sm"
              style={{
                background: `linear-gradient(135deg, ${c.gradientFrom}, ${c.gradientTo})`,
              }}
            >
              A
            </div>
            <span className="text-base font-bold text-white tracking-tight">
              {siteConfig.name}
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[13px] font-medium text-white/50 hover:text-white transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href={siteConfig.links.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-white px-4 py-2 rounded-lg transition-all duration-200 hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #5865F2, #7983f5)",
              }}
            >
              <MessageCircle size={14} />
              Discord
            </a>
            <a
              href={siteConfig.links.getAccess}
              className="inline-flex text-[14px] font-semibold text-white px-6 py-2.5 rounded-lg transition-all duration-200 hover:brightness-110"
              style={{
                background: `linear-gradient(135deg, ${c.gradientFrom}, ${c.gradientTo})`,
              }}
            >
              Get Access
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white/70 p-1.5"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ background: `${c.bgPrimary}f5` }}
      >
        <div className="px-5 py-5 space-y-1 border-t border-white/[0.06]">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-white/60 hover:text-white py-2.5 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-2.5">
            <a
              href={siteConfig.links.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-sm text-white/60 hover:text-white py-2.5 rounded-lg border border-white/10"
            >
              Join Discord
            </a>
            <a
              href={siteConfig.links.getAccess}
              onClick={() => setOpen(false)}
              className="text-center text-sm font-semibold text-white py-2.5 rounded-lg"
              style={{
                background: `linear-gradient(135deg, ${c.gradientFrom}, ${c.gradientTo})`,
              }}
            >
              Get Access
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
