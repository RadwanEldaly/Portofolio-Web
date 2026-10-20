"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import RevealText from "./RevealText";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "15+", label: "Projects Completed" },
];

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  const anim = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 32 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.15 },
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
      };

  return (
    <section id="about" className="py-24 md:py-36 px-4 sm:px-8 md:px-12 border-t border-line/20">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait presentation */}
          <motion.div {...anim} className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative max-w-[280px] sm:max-w-[340px] mx-auto lg:mx-0">
              <div className="relative aspect-[1/1] rounded-2xl overflow-hidden border border-line/40 bg-mat shadow-md">
                <Image
                  src="/images/radwan-portrait.jpg"
                  alt="Radwan Eldaly"
                  width={824}
                  height={1024}
                  quality={95}
                  sizes="(max-width: 768px) 280px, 340px"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Stats highlights */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-3.5 rounded-xl bg-mat border border-line/30 flex flex-col items-center justify-center text-center shadow-sm"
                  >
                    <span className="font-display text-2xl sm:text-3xl font-bold text-ink">
                      {stat.value}
                    </span>
                    <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-muted mt-0.5">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Biography content */}
          <motion.div {...anim} className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <span className="font-mono text-xs uppercase tracking-wider text-muted block">
              Background &amp; Track Record
            </span>
            <RevealText
              text="About Radwan"
              as="h2"
              className="font-display text-3xl md:text-5xl font-semibold tracking-tightest text-ink leading-tight"
            />
            <p className="font-body text-base md:text-lg text-ink leading-relaxed max-w-xl font-normal pt-2">
              I&apos;m an early-career web developer based in Cairo with 2+ years of hands-on
              experience building responsive, production-ready interfaces. Having delivered 15+
              real projects, I focus on clean UI engineering, modular architectures, and code that is
              reliable and straightforward to maintain.
            </p>
            <p className="font-body text-base md:text-lg text-muted leading-relaxed max-w-xl">
              My day-to-day stack centers on React, Next.js, TypeScript, and modern CSS with Tailwind.
              I take pride in creating performant web experiences that feel fluid, look refined, and
              accommodate all devices effortlessly.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
