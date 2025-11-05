import React from 'react';

interface VideoBackgroundSectionProps {
  src: string;
  children?: React.ReactNode;
  className?: string;
}

export const VideoBackgroundSection: React.FC<VideoBackgroundSectionProps> = ({ 
  src, 
  children,
  className = '' 
}) => {
  return (
    <div className={`relative min-h-screen w-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            minWidth: '100%',
            minHeight: '100%',
          }}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {children && (
        <div className="relative z-10">
          {children}
        </div>
      )}
    </div>
  );
};

