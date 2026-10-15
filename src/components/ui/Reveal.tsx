import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li";
}

// Fades content up 14px the first time it scrolls into view. With reduced
// motion it renders in place with no fade.
const Reveal = ({ children, className, delay = 0, as = "div" }: RevealProps) => {
  const reduceMotion = useReducedMotion();
  const Tag = as === "li" ? motion.li : motion.div;

  if (reduceMotion) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.36, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
