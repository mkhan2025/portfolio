import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlane, FaMapMarkerAlt } from 'react-icons/fa';
import { VideoBackgroundSection } from '../components/travel/VideoBackgroundSection';

export const About: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [planePosition, setPlanePosition] = useState({ left: '50%', top: '55%' }); // Start below "prepare for takeoff" text
  const [isFlying, setIsFlying] = useState(false);
  const [activeLocation, setActiveLocation] = useState<number | null>(null);
  const [trail, setTrail] = useState<Array<{ x: number; y: number }>>([]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close expanded section when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // Don't close if clicking on a marker or card
      if (!target.closest('.location-marker') && !target.closest('.section-card') && expandedSection !== null) {
        setExpandedSection(null);
        setActiveLocation(null);
      }
    };

    if (expandedSection !== null) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [expandedSection]);

  const sections = [
    {
      id: 0,
      icon: FaPlane,
      title: "My Journey",
      subtitle: "The Path So Far",
      content: "My journey began when I boarded my first solo flight from Lahore, Pakistan to Indianapolis, Indiana. With three suitcases and a heart full of ambition, I embarked on a path that would take me through countless airports, unfamiliar cities, and moments of self-discovery. Each destination has been a lesson, each challenge a stepping stone toward who I am today.",
      location: { left: '15%', top: '25%' }, // First stop
      locationMobile: { left: '20%', top: '20%' },
    },
    {
      id: 1,
      icon: FaMapMarkerAlt,
      title: "My Passion",
      subtitle: "What Drives Me",
      content: "I'm passionate about building technology that bridges gaps—whether it's connecting people across languages, helping students learn more intuitively, or creating tools that make exploration easier. This passion stems from my own experiences navigating unfamiliar places and finding ways to make sense of new environments. I believe technology should feel natural, accessible, and empowering.",
      location: { left: '45%', top: '45%' }, // Second stop
      locationMobile: { left: '80%', top: '35%' },
    },
    {
      id: 2,
      icon: FaMapMarkerAlt,
      title: "Values",
      subtitle: "What I Stand For",
      content: "I value curiosity, resilience, and empathy above all. Travel has taught me that the best solutions come from truly understanding people's needs and experiences. I approach every project with an open mind, ready to learn and adapt. These values guide how I collaborate, how I solve problems, and how I build products that make a real difference.",
      location: { left: '85%', top: '45%' }, // Third stop
      locationMobile: { left: '20%', top: '55%' },
    },
    {
      id: 3,
      icon: FaMapMarkerAlt,
      title: "Goals",
      subtitle: "Where I'm Heading",
      content: "I'm looking forward to roles that combine creativity, problem-solving, and purpose—especially in education technology, language learning, and tools that expand global access. I want to continue building products that help people learn, connect, and explore the world around them. Whether it's through software engineering or product management, I'm excited to make technology more accessible and meaningful.",
      location: { left: '45%', top: '75%' }, // Fourth stop
      locationMobile: { left: '80%', top: '70%' },
    },
    {
      id: 4,
      icon: FaMapMarkerAlt,
      title: "Future Adventures",
      subtitle: "What's Next",
      content: "As I continue to explore new places and build new tools, I'm excited about the adventures that lie ahead. Each new destination brings new perspectives, and each new project brings new challenges. I'm looking forward to combining my passion for travel with my love for technology, creating experiences that connect people and cultures in meaningful ways.",
      location: { left: '15%', top: '55%' }, // Fifth stop
      locationMobile: { left: '50%', top: '80%' },
    },
  ];

  const handleLocationClick = (sectionId: number, location: { left: string; top: string }) => {
    if (isFlying) return;
    
    setIsFlying(true);
    setActiveLocation(sectionId);
    
    // Animate plane and build curved trail
    const startPos = { 
      left: parseFloat(planePosition.left), 
      top: parseFloat(planePosition.top) 
    };
    const endPos = { 
      left: parseFloat(location.left), 
      top: parseFloat(location.top) 
    };
    
    // Calculate control point for curved path (creates a gentle arc)
    const controlPoint = {
      x: (startPos.left + endPos.left) / 2 + (Math.random() - 0.5) * 15, // Slight curve variation
      y: Math.min(startPos.top, endPos.top) - 20, // Curve upward
    };
    
    // Build curved trail points using quadratic bezier curve
    const steps = 40;
    const newTrail: Array<{ x: number; y: number }> = [];
    const pathPoints: Array<{ left: string; top: string }> = [];
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      // Quadratic Bezier curve formula: (1-t)²P₀ + 2(1-t)tP₁ + t²P₂
      const x = Math.pow(1 - t, 2) * startPos.left + 
                2 * (1 - t) * t * controlPoint.x + 
                Math.pow(t, 2) * endPos.left;
      const y = Math.pow(1 - t, 2) * startPos.top + 
                2 * (1 - t) * t * controlPoint.y + 
                Math.pow(t, 2) * endPos.top;
      newTrail.push({ x, y });
      pathPoints.push({ left: `${x}%`, top: `${y}%` });
    }
    setTrail(prev => [...prev, ...newTrail]);
    
    // Animate plane along curved path step by step (slower speed)
    let pathIndex = 0;
    const animatePath = () => {
      if (pathIndex < pathPoints.length) {
        setPlanePosition(pathPoints[pathIndex]);
        pathIndex++;
        setTimeout(animatePath, 3000 / pathPoints.length); // Slower: changed from 1500 to 3000
      } else {
        setPlanePosition(location);
        setIsFlying(false);
        setExpandedSection(sectionId);
      }
    };
    animatePath();
  };


  return (
    <section id="about" className="relative min-h-screen w-full overflow-hidden">
      {/* Pakistan Video Background */}
      <VideoBackgroundSection src="/videos/pakistan.mp4">

        {/* "Prepare for Takeoff" Text */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-20 md:mb-24"
            style={{ 
              fontFamily: "'Poppins', sans-serif",
              textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 12px rgba(0,0,0,0.6), 0 0 20px rgba(255,255,0,0.3)',
              color: '#FCD34D'
            }}
          >
            Prepare for Takeoff
          </motion.h1>
        </div>

        <div className="relative z-20 min-h-screen w-full p-4 md:p-8">
        {/* Dotted Trail SVG */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" style={{ zIndex: 20 }}>
          {trail.map((point, index) => (
            <circle
              key={index}
              cx={`${point.x}%`}
              cy={`${point.y}%`}
              r="3"
              fill="rgba(252, 211, 77, 0.6)"
              stroke="rgba(252, 211, 77, 0.8)"
              strokeWidth="1"
            />
          ))}
        </svg>

        {/* Animated Airplane */}
        <div
          className="absolute z-30 pointer-events-none"
          style={{
            left: planePosition.left,
            top: planePosition.top,
            transform: 'translate(-50%, -50%)',
            transition: 'left 0.04s linear, top 0.04s linear',
          }}
        >
          <motion.div
            animate={{
              rotate: isFlying ? [0, 10, -10, 0] : 0,
            }}
            transition={{
              duration: 0.5,
              repeat: isFlying ? Infinity : 0,
            }}
          >
            <FaPlane className="text-yellow-400 text-2xl md:text-3xl drop-shadow-lg" />
          </motion.div>
        </div>

        {/* Location Icons */}
        {sections.map((section, index) => {
          const location = isMobile ? section.locationMobile : section.location;
          const isActive = activeLocation === section.id;
          const isExpanded = expandedSection === section.id;

          return (
            <div key={section.id}>
              {/* Location Marker */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="absolute z-20 cursor-pointer location-marker"
                style={{
                  ...location,
                  transform: 'translate(-50%, -50%)',
                }}
                onClick={() => handleLocationClick(section.id, location)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  animate={{
                    scale: isActive ? [1, 1.3, 1] : 1,
                  }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <FaMapMarkerAlt className="text-yellow-400 text-3xl md:text-4xl drop-shadow-lg" />
                  {isActive && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: [1, 1.5], opacity: [1, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="absolute inset-0 rounded-full bg-yellow-400/30"
                      style={{ transform: 'translate(-50%, -50%)', top: '50%', left: '50%' }}
                    />
                  )}
                </motion.div>
              </motion.div>

              {/* Section Card - Appears in center after plane reaches location */}
              <AnimatePresence>
                {isActive && !isFlying && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
                    onClick={() => {
                      setExpandedSection(null);
                      setActiveLocation(null);
                    }}
                  >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
                    
                    {/* Boarding Pass Card */}
                    <motion.div
                      className="relative bg-gradient-to-br from-yellow-50 to-white rounded-lg shadow-2xl w-full max-w-lg md:max-w-2xl section-card flex flex-col border-2 border-yellow-400/60"
                      style={{ 
                        maxHeight: isMobile ? '80vh' : '85vh',
                        overflow: 'hidden',
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* Perforated edges */}
                      <div className="absolute left-0 top-0 bottom-0 w-2 border-r-2 border-dashed border-black/40"></div>
                      <div className="absolute right-0 top-0 bottom-0 w-2 border-l-2 border-dashed border-black/40"></div>
                      
                      {/* Boarding Pass Header */}
                      <div className="p-4 md:p-5 pb-3 flex-shrink-0 border-b-2 border-dashed border-black/30 bg-yellow-400/20">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <FaPlane className="text-black text-lg" />
                            <span className="text-xs font-bold text-black uppercase tracking-widest"
                                  style={{ fontFamily: "'Courier New', monospace", letterSpacing: '0.2em' }}>
                              BOARDING PASS
                            </span>
                          </div>
                          <button
                            onClick={() => {
                              setExpandedSection(null);
                              setActiveLocation(null);
                            }}
                            className="w-7 h-7 rounded-full hover:bg-black/10 flex items-center justify-center text-black hover:text-black/70 transition-colors"
                          >
                            <span className="text-lg">×</span>
                          </button>
                        </div>
                        
                        {/* Flight Details */}
                        <div className="grid grid-cols-2 gap-2 text-xs mb-2 pt-2 border-t border-dashed border-black/20"
                             style={{ fontFamily: "'Courier New', monospace" }}>
                          <div>
                            <span className="text-black/60 uppercase">FLIGHT</span>
                            <div className="text-black font-bold">MK-{String(section.id + 1).padStart(3, '0')}</div>
                          </div>
                          <div>
                            <span className="text-black/60 uppercase">SEAT</span>
                            <div className="text-black font-bold">{String.fromCharCode(65 + section.id)}-{section.id + 1}{section.id}</div>
                          </div>
                          <div>
                            <span className="text-black/60 uppercase">GATE</span>
                            <div className="text-black font-bold">GATE {section.id + 1}</div>
                          </div>
                          <div>
                            <span className="text-black/60 uppercase">CLASS</span>
                            <div className="text-black font-bold">ECONOMY</div>
                          </div>
                        </div>
                        
                        <div className="border-t-2 border-dashed border-black/30 pt-3">
                          <h3 className="text-xl md:text-2xl font-bold text-black mb-1"
                              style={{ fontFamily: "'Poppins', sans-serif" }}>
                            {section.title}
                          </h3>
                          <p className="text-xs md:text-sm text-black/70 uppercase tracking-wider"
                             style={{ fontFamily: "'Courier New', monospace", letterSpacing: '0.1em' }}>
                            {section.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Scrollable Content */}
                      <div className="flex-1 overflow-y-auto px-4 md:px-5 py-4">
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="space-y-4"
                            >
                              <div className="border-t-2 border-dashed border-black/30 pt-4">
                                <p className="text-sm md:text-base text-black leading-relaxed"
                                   style={{ fontFamily: "'Inter', sans-serif" }}>
                                  {section.content}
                                </p>
                              </div>
                              
                              {/* Barcode Section */}
                              <div className="pt-4 border-t-2 border-dashed border-black/30">
                                <div className="flex items-center gap-2 mb-2">
                                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-black/30 to-transparent"></div>
                                  <FaPlane className="text-black text-xs" />
                                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-black/30 to-transparent"></div>
                                </div>
                                
                                {/* Barcode representation */}
                                <div className="flex gap-1 justify-center py-2">
                                  {Array.from({ length: 20 }).map((_, i) => (
                                    <div
                                      key={i}
                                      className="bg-black"
                                      style={{
                                        width: `${Math.random() * 3 + 1}px`,
                                        height: '30px',
                                      }}
                                    />
                                  ))}
                                </div>
                                
                                <div className="text-center text-xs text-black/60 pt-1"
                                     style={{ fontFamily: "'Courier New', monospace" }}>
                                  {String(section.id).padStart(6, '0')}-{String(section.id + 1000).padStart(6, '0')}-{String(section.id + 2000).padStart(4, '0')}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
        </div>
      </VideoBackgroundSection>
    </section>
  );
};

