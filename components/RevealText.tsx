"use client";

import { motion, useReducedMotion } from "framer-motion";

type RevealTextProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  delay?: number;
  once?: boolean;
};

/**
 * Editorial headline reveal.
 * Uses a safe viewport amount (~0.2) to prevent tall headings from getting stuck on mobile,
 * and respects user preference for reduced motion.
 */
export default function RevealText({
  text,
  as = "h2",
  className = "",
  delay = 0,
  once = true,
}: RevealTextProps) {
  const shouldReduceMotion = useReducedMotion();
  const Tag = motion[as];

  if (shouldReduceMotion) {
    const Component = as;
    return <Component className={className}>{text}</Component>;
  }

  const words = text.split(" ");

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-top mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once, amount: 0.15 }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
              delay: delay + i * 0.03,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
