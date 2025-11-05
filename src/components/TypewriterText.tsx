import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  className?: string;
  style?: React.CSSProperties;
  loop?: boolean;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000,
  className = '',
  style,
  loop = true,
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // If already complete and not looping, don't do anything
    if (isComplete && !loop) {
      return;
    }

    const current = texts[currentTextIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && currentText === current) {
      // If not looping, mark as complete and stop
      if (!loop) {
        setIsComplete(true);
        return;
      }
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    } else {
      const speed = isDeleting ? deletingSpeed : typingSpeed;
      timeout = setTimeout(() => {
        setCurrentText((prev) => {
          if (isDeleting) {
            return prev.slice(0, -1);
          } else {
            return current.slice(0, prev.length + 1);
          }
        });
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts, typingSpeed, deletingSpeed, pauseTime, loop, isComplete]);

  return (
    <span className={className} style={style}>
      {currentText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </span>
  );
};

