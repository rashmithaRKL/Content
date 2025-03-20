
import React, { useEffect, useRef, ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  duration?: number;
  animation?: 'fade' | 'slide' | 'scale' | 'none';
  once?: boolean;
  distance?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ 
  children, 
  className = '', 
  threshold = 0.1,
  delay = 0,
  duration = 0.8,
  animation = 'fade',
  once = true,
  distance = 30,
  direction = 'up'
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    amount: threshold,
    once 
  });
  
  // Define animation variants based on props
  const getAnimationVariants = () => {
    if (animation === 'none') return {};
    
    const variants: any = {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: {
          duration,
          delay: delay / 1000, // Convert ms to seconds for framer-motion
          ease: 'easeOut'
        }
      }
    };
    
    // Add transform properties based on animation type
    if (animation === 'slide' || animation === 'fade') {
      switch (direction) {
        case 'up':
          variants.hidden.y = distance;
          variants.visible.y = 0;
          break;
        case 'down':
          variants.hidden.y = -distance;
          variants.visible.y = 0;
          break;
        case 'left':
          variants.hidden.x = distance;
          variants.visible.x = 0;
          break;
        case 'right':
          variants.hidden.x = -distance;
          variants.visible.x = 0;
          break;
      }
    }
    
    if (animation === 'scale') {
      variants.hidden.scale = 0.95;
      variants.visible.scale = 1;
    }
    
    return variants;
  };
  
  const variants = getAnimationVariants();
  
  // If using the old class-based animation for backward compatibility
  useEffect(() => {
    const currentRef = ref.current;
    
    if (animation === 'none' && currentRef) {
      setTimeout(() => {
        currentRef.classList.add('visible');
      }, delay);
    }
  }, [animation, delay]);
  
  // If using framer-motion animations
  if (animation !== 'none') {
    return (
      <motion.div
        ref={ref}
        className={className}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
      >
        {children}
      </motion.div>
    );
  }
  
  // Fallback to class-based animation for backward compatibility
  return (
    <div ref={ref} className={`animate-on-scroll ${className}`}>
      {children}
    </div>
  );
};

export default ScrollAnimation;
