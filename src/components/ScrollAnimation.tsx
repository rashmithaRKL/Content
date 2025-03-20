
import React, { useEffect, useRef, ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ 
  children, 
  className = '', 
  threshold = 0.1,
  delay = 0 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const currentRef = ref.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, delay]);
  
  return (
    <div ref={ref} className={`animate-on-scroll ${className}`}>
      {children}
    </div>
  );
};

export default ScrollAnimation;
