
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Fix: Use proper window scrolling and add error handling
    try {
      // Scroll to top when pathname changes
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } catch (error) {
      // Fallback for browsers that don't support smooth scrolling
      window.scrollTo(0, 0);
      console.error('Smooth scrolling not supported:', error);
    }
  }, [pathname]);

  return null;
}
