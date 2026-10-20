"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const anim = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
        };

  return (
    <section
      id="hero"
      className="pt-12 pb-20 md:pt-20 md:pb-32 px-4 sm:px-8 md:px-12 max-w-[1280px] mx-auto min-h-[calc(100vh-5rem)] flex items-center"
    >
      <div className="w-full grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left column: Copy & CTAs */}
        <motion.div {...anim(0)} className="lg:col-span-7 space-y-6">
          <p className="font-mono text-xs md:text-sm uppercase tracking-wider text-muted">
            Web Developer · Cairo, Egypt
          </p>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tightest text-ink leading-[0.95]">
            Radwan Eldaly
          </h1>

          <p className="font-body text-lg sm:text-xl text-muted leading-relaxed max-w-xl font-normal pt-1">
            I build responsive, carefully crafted websites and web applications with
            React, Next.js, and TypeScript.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#work"
              className="btn-diagonal min-h-[48px] px-7 py-3 font-mono text-xs uppercase tracking-wider rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-ink"
            >
              View work <span className="ml-2 font-mono">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 font-mono text-xs uppercase tracking-wider border border-line/40 hover:border-ink bg-transparent text-ink rounded-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ink"
            >
              Get in touch
            </a>
          </div>
        </motion.div>

        {/* Right column: Original Studio Portrait with Full Background */}
        <motion.div
          {...anim(0.15)}
          className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center"
        >
          <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[380px]">
            {/* Editorial framed portrait */}
            <div className="relative aspect-[4/5] rounded-2xl bg-mat border border-line/40 overflow-hidden shadow-md">
              <Image
                src="/images/radwan-portrait.jpg"
                alt="Radwan Eldaly — Web Developer"
                width={824}
                height={1024}
                priority
                quality={95}
                sizes="(max-width: 768px) 280px, (max-width: 1200px) 340px, 380px"
                className="w-full h-full object-cover object-top select-none"
              />
            </div>

            <div className="mt-3 flex items-center justify-between font-mono text-[11px] text-muted px-1">
              <span>Radwan Eldaly</span>
              <span>Cairo, EG</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
