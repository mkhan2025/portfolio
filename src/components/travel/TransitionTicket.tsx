import React from 'react';
import { motion } from 'framer-motion';
import { FaPlane } from 'react-icons/fa';

interface TransitionTicketProps {
  nextStop: string;
}

export const TransitionTicket: React.FC<TransitionTicketProps> = ({ nextStop }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className="relative z-20 px-4 py-4"
    >
      <div className="max-w-5xl mx-auto">
        <div className="relative bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl border-2 border-primary-dark p-4 md:p-5 overflow-hidden">
          {/* Perforated edges */}
          <div className="absolute left-0 top-0 bottom-0 w-1 border-r-2 border-dashed border-primary-dark/30"></div>
          <div className="absolute right-0 top-0 bottom-0 w-1 border-l-2 border-dashed border-primary-dark/30"></div>
          
          {/* Ticket header - horizontal layout */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FaPlane className="text-primary-dark text-lg md:text-xl" />
              <span className="text-xs font-semibold text-primary-dark uppercase tracking-wider">
                Next Stop
              </span>
            </div>
            
            {/* Destination - centered */}
            <div className="flex-1 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-text">
                {nextStop}
              </h3>
            </div>

            {/* Ticket indicator */}
            <div className="text-xs text-text-light">Ticket</div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-2 right-3 w-6 h-6 border-2 border-primary-dark rounded-full opacity-20"></div>
          <div className="absolute bottom-2 left-3 w-4 h-4 border-2 border-primary-dark rounded-full opacity-20"></div>
        </div>
      </div>
    </motion.div>
  );
};
<｜tool▁call▁begin｜>
read_lints

