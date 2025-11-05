import React from 'react';
import { motion } from 'framer-motion';

interface PassportStampProps {
  location: string;
  country?: string;
  date?: string;
  className?: string;
}

export const PassportStamp: React.FC<PassportStampProps> = ({
  location,
  country,
  date,
  className = '',
}) => {
  return (
    <motion.div
      className={`
        relative inline-block border-2 border-secondary rounded-lg
        bg-accent-cream p-3 text-center
        ${className}
      `}
      initial={{ opacity: 0, scale: 0, rotate: -10 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ 
        type: 'spring',
        stiffness: 200,
        damping: 15
      }}
      whileHover={{ scale: 1.1, rotate: 2 }}
    >
      <div className="text-xs font-semibold text-secondary uppercase tracking-wider">
        {location}
      </div>
      {country && (
        <div className="text-xs text-text-light mt-1">{country}</div>
      )}
      {date && (
        <div className="text-xs text-text-light mt-1">{date}</div>
      )}
      {/* Stamp decoration */}
      <div className="absolute top-0 right-0 w-3 h-3 bg-secondary rounded-full -mt-1 -mr-1 opacity-50" />
      <div className="absolute bottom-0 left-0 w-3 h-3 bg-secondary rounded-full -mb-1 -ml-1 opacity-50" />
    </motion.div>
  );
};

