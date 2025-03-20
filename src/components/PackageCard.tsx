
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PackageCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const PackageCard: React.FC<PackageCardProps> = ({ 
  title, 
  price, 
  description, 
  features,
  popular = false
}) => {
  return (
    <motion.div 
      className={`glass-card hover-lift relative h-full flex flex-col ${
        popular 
          ? 'border-primary/30 shadow-lg shadow-primary/10' 
          : 'border-white/20'
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-primary text-white text-sm font-medium rounded-full">
          Popular
        </div>
      )}
      
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="flex items-baseline mb-4">
        <span className="text-3xl font-bold">{price}</span>
        {price !== 'Custom' && <span className="text-muted-foreground ml-1">/package</span>}
      </div>
      
      <p className="text-muted-foreground mb-6">{description}</p>
      
      <ul className="space-y-3 mb-6 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check size={18} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        className={popular ? "btn-primary w-full mt-auto" : "btn-secondary w-full mt-auto"}
        size="full"
      >
        Get Started
      </Button>
    </motion.div>
  );
};

export default PackageCard;
