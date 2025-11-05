import React from 'react';
import { motion } from 'framer-motion';

interface BoardingPassProps {
  flight: string;
  destination: string;
  departure: string;
  arrival: string;
  details: string[];
  className?: string;
}

export const BoardingPass: React.FC<BoardingPassProps> = ({
  flight,
  destination,
  departure,
  arrival,
  details,
  className = '',
}) => {
  return (
    <motion.div
      className={`relative bg-white rounded-lg shadow-lg border-2 border-primary-dark/20 p-6 max-w-2xl ${className}`}
      whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Boarding Pass Header */}
      <div className="border-b-2 border-dashed border-primary-dark/30 pb-3 mb-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-primary-dark uppercase tracking-wider">
              Flight
            </span>
            <span className="text-lg font-bold text-text">{flight}</span>
          </div>
          <div className="text-right">
            <div className="text-xs text-text-light">Departure</div>
            <div className="text-sm font-semibold text-primary-dark">{departure}</div>
          </div>
        </div>
      </div>

      {/* Destination */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-semibold text-primary-dark uppercase tracking-wider">
            Destination
          </span>
        </div>
        <div className="text-xl font-bold text-secondary">{destination}</div>
        <div className="text-sm text-text-light mt-1">Arrival: {arrival}</div>
      </div>

      {/* Flight Details */}
      <div className="border-t-2 border-dashed border-primary-dark/30 pt-4">
        <div className="text-xs font-semibold text-primary-dark uppercase tracking-wider mb-2">
          Flight Details
        </div>
        <ul className="space-y-2">
          {details.map((detail, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-text">
              <span className="text-primary-dark mt-1">•</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Perforated Edge */}
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-transparent border-l-2 border-dashed border-primary-dark/30 rounded-r-lg" />
    </motion.div>
  );
};

