"use client";

import { motion, useReducedMotion } from "framer-motion";
import { socialLinks } from "@/lib/data";
import { SocialIcon } from "./SocialIcons";
import RevealText from "./RevealText";

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();

  const anim = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.15 },
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
      };

  return (
    <section id="contact" className="py-24 md:py-36 px-4 sm:px-8 md:px-12 border-t border-line/20">
      <motion.div {...anim} className="max-w-[1280px] mx-auto">
        <span className="font-mono text-xs uppercase tracking-wider text-muted block mb-3">
          Direct Inquiries
        </span>

        <RevealText
          text="Let's build together"
          as="h2"
          className="font-display text-3xl md:text-6xl font-semibold tracking-tightest text-ink max-w-3xl leading-tight"
        />

        <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-4">
          <a
            href="mailto:radwaneldaly14@gmail.com"
            className="btn-diagonal min-h-[52px] px-8 py-3.5 font-display text-lg sm:text-xl font-medium rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-ink"
          >
            <span>radwaneldaly14@gmail.com</span>
            <span className="ml-3 font-mono text-lg">→</span>
          </a>
        </div>

        {/* Social channels with dedicated icons */}
        <div className="flex flex-wrap items-center gap-3 mt-8">
          {socialLinks.map(({ label, url, icon }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-mat/70 border border-line/40 hover:border-ink hover:bg-paper transition-all duration-200 text-ink shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-ink"
              aria-label={label}
            >
              <SocialIcon icon={icon} className="w-4 h-4" />
              <span className="font-mono text-xs">{label}</span>
            </a>
          ))}
        </div>

        <p className="text-muted text-base md:text-lg mt-6 max-w-lg leading-relaxed">
          Open to early-career web developer opportunities, collaborations, and contract projects.
          Based in Cairo, Egypt.
        </p>
      </motion.div>
    </section>
  );
}
