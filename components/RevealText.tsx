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
 * Orchestrates child word motion from the visible parent container,
 * ensuring robust intersection triggers across all screen sizes and mobile viewports.
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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: delay,
        staggerChildren: 0.04,
      },
    },
  };

  const childVariants = {
    hidden: { y: "115%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <Tag
      className={`${className} break-words`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.1 }}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-top mr-[0.25em] pb-[0.08em]"
        >
          <motion.span
            className="inline-block"
            variants={childVariants}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
