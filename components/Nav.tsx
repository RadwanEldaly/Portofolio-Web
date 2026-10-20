"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { socialLinks } from "@/lib/data";
import { SocialIcon } from "./SocialIcons";

const navLinks = [
  { href: "#work", label: "Work", index: "01" },
  { href: "#skills", label: "Skills", index: "02" },
  { href: "#about", label: "About", index: "03" },
  { href: "#contact", label: "Contact", index: "04" },
];

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isMobileMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ease-out ${
          isScrolled
            ? "h-12 sm:h-14 bg-[#F5F3EE]/90 backdrop-blur-xl border-b border-[#171717]/15 shadow-sm shadow-ink/[0.04]"
            : "h-16 sm:h-20 md:h-24 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-12 h-full flex items-center justify-between">
          {/* Brand */}
          <a
            href="#hero"
            onClick={closeMenu}
            className="font-display font-bold text-base sm:text-lg md:text-xl text-ink hover:opacity-80 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink rounded-sm shrink-0"
          >
            <span>Radwan Eldaly</span>
          </a>

          {/* Desktop / Tablet Navigation (>= sm) */}
          <nav aria-label="Primary" className="hidden sm:flex items-center gap-6 md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs uppercase tracking-wider text-muted hover:text-ink transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ink rounded-sm px-2.5 py-1.5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Hamburger Toggle Button (< sm) */}
          <div className="flex sm:hidden items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative w-10 h-10 flex items-center justify-center rounded-lg border border-line/30 bg-mat/60 text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-ink"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              <div className="w-4 h-3 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-ink rounded-full transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-[5px]" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-ink rounded-full transition-opacity duration-200 ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-ink rounded-full transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-[5px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 sm:hidden bg-black/60 backdrop-blur-sm flex flex-col justify-start"
            onClick={closeMenu}
          >
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="w-full bg-[#111111] border-b border-white/10 shadow-2xl px-6 pt-6 pb-8 flex flex-col gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drawer Top Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="font-display font-bold text-lg text-white">
                  Radwan Eldaly
                </span>
                <button
                  type="button"
                  onClick={closeMenu}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white text-sm"
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              {/* Navigation Links */}
              <nav aria-label="Mobile Navigation" className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-white/10 active:bg-white/15 border border-white/10 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <span className="font-display text-lg font-medium">{link.label}</span>
                    <span className="font-mono text-xs text-white/50">{link.index} →</span>
                  </a>
                ))}
              </nav>

              {/* Phone Number */}
              <div className="flex items-center gap-3 px-3.5 py-3 rounded-xl bg-white/5 border border-white/10">
                <svg className="w-5 h-5 text-white/70 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <a
                  href="tel:01123170163"
                  className="font-mono text-sm text-white hover:text-white/80 transition-colors"
                >
                  01123170163
                </a>
              </div>

              {/* Drawer Bottom Actions & Socials */}
              <div className="pt-2 flex flex-col gap-4">
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="btn-diagonal w-full min-h-[46px] py-3 text-center font-mono text-xs uppercase tracking-wider rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Get in touch <span className="ml-2 font-mono">→</span>
                </a>

                <div className="flex items-center justify-center gap-3 pt-2">
                  {socialLinks.map(({ label, url, icon }) => (
                    <a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg border border-white/15 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                      aria-label={label}
                    >
                      <SocialIcon icon={icon} className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
