import React from 'react';
import { Cloud } from './Cloud';

export const AnimatedClouds: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <Cloud size="sm" delay={0} className="absolute top-20 left-10" />
      <Cloud size="md" delay={2} className="absolute top-40 right-20" />
      <Cloud size="lg" delay={4} className="absolute top-60 left-1/4" />
      <Cloud size="sm" delay={6} className="absolute top-80 right-1/3" />
      <Cloud size="md" delay={8} className="absolute top-32 left-1/2" />
      <Cloud size="sm" delay={10} className="absolute top-72 right-1/4" />
      <Cloud size="lg" delay={12} className="absolute top-96 left-3/4" />
      <Cloud size="md" delay={14} className="absolute top-48 right-10" />
    </div>
  );
};

