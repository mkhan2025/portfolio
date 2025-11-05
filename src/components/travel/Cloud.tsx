import React from 'react';
import { motion } from 'framer-motion';

interface CloudProps {
  size?: 'sm' | 'md' | 'lg';
  delay?: number;
  className?: string;
}

export const Cloud: React.FC<CloudProps> = ({
  size = 'md',
  delay = 0,
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-16 h-8',
    md: 'w-24 h-12',
    lg: 'w-32 h-16',
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} ${className}`}
      initial={{ opacity: 0.3, x: -100 }}
      animate={{
        x: ['0%', '100%', '0%'],
        y: ['0%', '-10%', '0%'],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    >
      <svg
        viewBox="0 0 100 50"
        className="w-full h-full text-primary/30"
        fill="currentColor"
      >
        <path d="M20,30 Q10,25 10,20 Q10,10 20,10 Q25,5 30,10 Q35,5 40,10 Q50,5 55,15 Q60,10 70,15 Q75,10 85,15 Q90,10 95,20 Q90,25 85,30 Q75,35 70,30 Q60,35 50,30 Q40,35 30,30 Q25,35 20,30 Z" />
      </svg>
    </motion.div>
  );
};

