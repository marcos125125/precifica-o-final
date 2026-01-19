import React from 'react';
import { motion, Variants } from 'framer-motion';

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

export const RevealText: React.FC<RevealTextProps> = ({ text, className = "", delay = 0, stagger = 0.03 }) => {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: stagger, delayChildren: delay * i },
    }),
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.h1
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "inherit" }} // Ensure alignment inherits
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {text.split(" ").map((word, index) => (
        <span key={index} style={{ display: "inline-block", marginRight: "0.25em", whiteSpace: "nowrap" }}>
          {Array.from(word).map((letter, i) => (
            <motion.span key={i} variants={child} style={{ display: "inline-block" }}>
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h1>
  );
};