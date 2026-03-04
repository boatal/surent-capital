"use client";

import { Children, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  stagger?: boolean;
};

export function Reveal({
  children,
  delay = 0,
  className = "",
  stagger = false,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const parent = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
        delay,
        staggerChildren: 0.08,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <motion.div
      className={className}
      variants={stagger ? parent : child}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={
        stagger
          ? undefined
          : { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const, delay }
      }
    >
      {stagger
        ? Children.map(children, (node, index) => (
            <motion.div key={index} variants={child}>
              {node}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}
