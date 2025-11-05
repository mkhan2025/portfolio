import React from 'react';

interface VideoBackgroundProps {
  src: string;
  className?: string;
}

export const VideoBackground: React.FC<VideoBackgroundProps> = ({ 
  src, 
  className = '' 
}) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover min-w-full min-h-full"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

