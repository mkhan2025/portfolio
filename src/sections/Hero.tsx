import React from 'react';
import { VideoBackground } from '../components/travel/VideoBackground';
import { TypewriterText } from '../components/TypewriterText';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <VideoBackground src="/videos/hero-background.mp4" />
      
      {/* Typewriter text - centered on all screens */}
      <div className="absolute top-28 md:top-72 left-1/2 -translate-x-1/2 z-40 w-full flex flex-col justify-center items-center text-center">
        <TypewriterText
          texts={['Minahil Khan']}
          typingSpeed={100}
          deletingSpeed={50}
          pauseTime={3000}
          loop={false}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white whitespace-nowrap"
          style={{ 
            fontFamily: "'DM Serif Text', serif",
            textShadow: '1px 1px 3px rgba(0,0,0,0.6)',
            letterSpacing: '0.02em',
            fontWeight: '400'
          }}
        />
        <TypewriterText
          texts={['Shipping code & catching flights']}
          typingSpeed={80}
          deletingSpeed={50}
          pauseTime={3000}
          loop={false}
          className="text-yellow-400 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-3 md:mt-5 font-semibold whitespace-nowrap"
          style={{ 
            fontFamily: "'Poppins', sans-serif",
            textShadow: '2px 2px 6px rgba(0,0,0,0.8), 0 0 12px rgba(0,0,0,0.6), 0 0 20px rgba(255,255,0,0.3)',
            color: '#FCD34D'
          }}
        />
      </div>
    </section>
  );
};

