
import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  gradient?: boolean;
  rainbow?: boolean;
  glitch?: boolean;
  typed?: boolean;
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({ 
  text, 
  className = '', 
  as = 'h2',
  gradient = false,
  rainbow = false,
  glitch = false,
  typed = false
}) => {
  // Split text into words and characters for different animation types
  const words = text.split(' ');
  const characters = text.split('');

  // Animation variants for the container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  // Animation variants for each word
  const wordAnimation = {
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

  // Animation variants for each character (for typed effect)
  const characterAnimation = {
    hidden: { opacity: 0, y: 10 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        delay: i * 0.05,
      },
    }),
  };

  // Choose the appropriate heading element
  const HeadingTag = as;

  // Determine which class to apply based on props
  const animationClass = () => {
    if (gradient) return 'text-gradient animate-text-gradient bg-clip-text text-transparent';
    if (rainbow) return 'animate-rainbow-text bg-clip-text text-transparent';
    if (glitch) return 'animate-glitch';
    return '';
  };

  // Render typed animation
  if (typed) {
    return (
      <HeadingTag className={`${animationClass()} ${className}`}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="inline-block"
        >
          {characters.map((char, index) => (
            <motion.span
              key={index}
              variants={characterAnimation}
              custom={index}
              className="inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.div>
      </HeadingTag>
    );
  }

  // Render word-by-word animation (default)
  return (
    <HeadingTag className={`${animationClass()} ${className}`}>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-wrap"
      >
        {words.map((word, index) => (
          <motion.span
            variants={wordAnimation}
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
