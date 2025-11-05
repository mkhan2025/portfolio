import React from 'react';
import { motion } from 'framer-motion';

interface ImageBackgroundProps {
  src: string;
  className?: string;
  animated?: boolean;
}

export const ImageBackground: React.FC<ImageBackgroundProps> = ({ 
  src, 
  className = '',
  animated = true
}) => {
  const content = (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <img
        src={src}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        loading="eager"
        onError={(e) => {
          // Hide the image if it fails to load, gradient will still show
          (e.target as HTMLImageElement).style.display = 'none';
        }}
      />
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-cream/50 via-background/30 to-primary/10" />
    </div>
  );

  if (animated) {
    return (
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {content}
      </motion.div>
    );
  }

  return content;
};

