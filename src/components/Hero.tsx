
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    // Only attempt to play video if component is mounted
    const videoElement = videoRef.current;
    if (videoElement) {
      // Add event listener for loadedmetadata to ensure video is loaded before playing
      const handleLoaded = () => {
        videoElement.play().catch(error => {
          console.error("Video play failed:", error);
        });
      };
      
      videoElement.addEventListener('loadedmetadata', handleLoaded);
      
      // If video is already loaded, play it
      if (videoElement.readyState >= 2) {
        handleLoaded();
      }
      
      return () => {
        videoElement.removeEventListener('loadedmetadata', handleLoaded);
        videoElement.pause();
      };
    }
  }, []);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <video 
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/src/assets/videos/hero-loop.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white font-medium mb-6">
              Premium Content Creation
            </span>
          </motion.div>
          
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Transform your <span className="text-gradient">ideas</span> into<br />
            engaging <span className="text-gradient">content</span>
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Elevate your brand with our professional content creation services.
            We specialize in creating captivating content that resonates with your audience.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link to="/services" className="btn-primary group">
              Explore Services
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-medium rounded-full transition-all duration-300 hover:bg-white/20">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Animated overlay shape */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
    </div>
  );
};

export default Hero;
