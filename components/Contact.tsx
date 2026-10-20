"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { socialLinks } from "@/lib/data";
import { SocialIcon } from "./SocialIcons";
import RevealText from "./RevealText";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText("radwaneldaly14@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const anim = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.15 },
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
      };

  return (
    <section id="contact" className="py-16 xs:py-20 sm:py-24 md:py-32 lg:py-36 px-4 sm:px-8 md:px-12 border-t border-line/20">
      <motion.div {...anim} className="max-w-[1280px] mx-auto">
        <span className="font-mono text-xs uppercase tracking-wider text-muted block mb-2 xs:mb-3">
          Direct Inquiries
        </span>

        <RevealText
          text="Let's build together"
          as="h2"
          className="font-display text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tightest text-ink max-w-3xl leading-tight"
        />

        <div className="mt-6 xs:mt-8 md:mt-10 flex flex-wrap items-center gap-3 xs:gap-4 max-w-full">
          <a
            href="mailto:radwaneldaly14@gmail.com"
            className="btn-diagonal min-h-[48px] sm:min-h-[52px] px-4 xs:px-6 sm:px-8 py-3 sm:py-3.5 font-display text-xs xs:text-base sm:text-lg md:text-xl font-medium rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-ink max-w-full inline-flex items-center justify-between gap-2.5 xs:gap-3"
          >
            <span className="truncate">radwaneldaly14@gmail.com</span>
            <span className="ml-1 sm:ml-2 font-mono text-base sm:text-lg shrink-0">→</span>
          </a>

          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center justify-center min-h-[48px] sm:min-h-[52px] px-4 sm:px-5 py-3 font-mono text-xs uppercase tracking-wider border border-line/40 hover:border-ink bg-mat/70 hover:bg-paper text-ink rounded-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-ink shrink-0"
            aria-label="Copy email address"
          >
            {copied ? "Copied! ✓" : "Copy email"}
          </button>
        </div>

        {/* Social channels with dedicated icons */}
        <div className="flex flex-wrap items-center gap-2 xs:gap-3 mt-6 sm:mt-8">
          {socialLinks.map(({ label, url, icon }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 xs:px-4 py-2 xs:py-2.5 rounded-lg bg-mat/70 border border-line/40 hover:border-ink hover:bg-paper transition-all duration-200 text-ink shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-ink min-h-[40px]"
              aria-label={label}
            >
              <SocialIcon icon={icon} className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
              <span className="font-mono text-xs">{label}</span>
            </a>
          ))}
        </div>

        <p className="text-muted text-sm xs:text-base md:text-lg mt-5 xs:mt-6 max-w-lg leading-relaxed">
          Open to early-career web developer opportunities, collaborations, and contract projects.
          Based in Cairo, Egypt.
        </p>
      </motion.div>
    </section>
  );
}
