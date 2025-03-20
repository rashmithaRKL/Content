
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  gradient?: boolean;
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({ 
  text, 
  className = '', 
  as = 'h2',
  gradient = false
}) => {
  // Split text into words
  const words = text.split(' ');

  // Animation variants for the container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  // Animation variants for each word
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  // Choose the appropriate heading element
  const HeadingTag = as;

  return (
    <HeadingTag className={`${gradient ? 'text-gradient' : ''} ${className}`}>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-wrap"
      >
        {words.map((word, index) => (
          <motion.span
            variants={child}
            key={index}
            className="mr-2 mb-2 inline-block"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </HeadingTag>
  );
};

export default AnimatedHeading;
