import React from 'react';
import { motion } from 'framer-motion';

interface LuggageTagProps {
  label: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  variant?: 'default' | 'accent' | 'primary';
}

export const LuggageTag: React.FC<LuggageTagProps> = ({
  label,
  size = 'md',
  className = '',
  variant = 'default',
}) => {
  const sizeClasses = {
    sm: 'text-xs px-3 py-1',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-5 py-2.5',
  };

  const variantClasses = {
    default: 'bg-accent-lavender text-text border-accent-lavender',
    accent: 'bg-accent-mint text-text border-accent-mint',
    primary: 'bg-primary text-text border-primary-dark',
  };

  return (
    <motion.div
      className={`
        inline-block rounded-full border-2 font-medium
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
      whileHover={{ 
        scale: 1.05,
        rotate: [0, -2, 2, 0],
        transition: { duration: 0.3 }
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      {label}
    </motion.div>
  );
};

