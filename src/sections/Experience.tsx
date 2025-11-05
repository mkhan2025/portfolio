import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlane, FaMapMarkerAlt, FaStar, FaCode, FaUsers, FaDollarSign } from 'react-icons/fa';

const experiences = [
  {
    id: 0,
    company: 'YABLA',
    role: 'Software Engineer',
    destination: 'Union City, NJ',
    departure: '2024',
    arrival: 'Present',
    image: '/images/union-city.jpg', // User will provide
    stamps: [
      { icon: FaCode, label: '70%', description: 'API call reduction' },
      { icon: FaDollarSign, label: '$1,400+', description: 'Monthly savings' },
      { icon: FaUsers, label: '15,000+', description: 'Monthly analyses' },
    ],
    details: [
      'Built an AI-powered universal morphological dictionary using Claude Sonnet 4 API that breaks down words/phrases in any language into their component parts—think of it like a linguistic passport!',
      'Created a MySQL caching system with async polling that cut API calls by 70% and slashed response times from 3-5 seconds down to under 200ms for cached lookups',
      'Saved the company an estimated $1,400+ monthly in API costs through smart caching—sometimes the best solutions are the ones that save money while improving performance',
      'Launched the feature on Yabla\'s free dictionary page, supporting 6+ languages and processing 15,000+ analyses monthly with automatic language detection',
    ],
    tech: ['Claude API', 'MySQL', 'Node.js', 'JavaScript', 'REST APIs'],
  },
  {
    id: 1,
    company: 'iD Tech',
    role: 'Lead Roblox Instructor',
    destination: 'San Mateo, CA',
    departure: '2023',
    arrival: '2024',
    image: '/images/san-mateo.jpg', // User will provide
    stamps: [
      { icon: FaUsers, label: '300+', description: 'Games published' },
      { icon: FaStar, label: '1,000+', description: 'Instructors nationwide' },
      { icon: FaUsers, label: '5', description: 'Team members' },
    ],
    details: [
      'Got selected from 1000+ instructors nationwide to lead a Roblox game development camp right at Roblox Headquarters—talk about a dream gig!',
      'Led a team of 5 instructors teaching Lua scripting, event-driven systems, multiplayer logic, and game monetization, helping students publish 300+ public Roblox games',
      'Became the go-to person connecting Roblox HQ and iD Tech, handling everything from logistics to parent communication to student showcases—basically running a mini startup',
    ],
    tech: ['Lua', 'Roblox Studio', 'Event-driven Systems', 'Game Development'],
  },
  {
    id: 2,
    company: 'Tenzer Technology Center',
    role: 'Developer',
    destination: 'Greencastle, IN',
    departure: '2023',
    arrival: '2024',
    image: '/images/depauw.jpeg',
    stamps: [
      { icon: FaCode, label: '60%', description: 'Grading time reduced' },
      { icon: FaUsers, label: '30+', description: 'User interviews' },
      { icon: FaStar, label: '65%', description: 'Playtime increase' },
    ],
    details: [
      'Built an interactive molecular identification game for a chemistry course that cut instructors\' grading time by 60%—because who doesn\'t love making teachers\' lives easier?',
      'Talked to 30+ students and faculty to figure out what wasn\'t working, then built features they actually wanted: 8 difficulty levels, interactive tutorials, and pause/resume functionality',
      'Saw playtime jump 65% as students could finally learn at their own pace—turns out when you listen to users, they actually use your product!',
      'Designed a game state management system using localStorage and state machines that reduced bugs by 90%—because nothing kills fun faster than losing your progress',
    ],
    tech: ['JavaScript', 'REST APIs', 'localStorage', 'State Machines'],
  },
  {
    id: 3,
    company: 'DePauw CS Department',
    role: 'Teaching Assistant',
    destination: 'Greencastle, IN',
    departure: '2023',
    arrival: '2024',
    image: '/images/greencastle.jpg',
    stamps: [
      { icon: FaUsers, label: '39', description: 'Students helped' },
      { icon: FaCode, label: '90%', description: 'Bug reduction' },
      { icon: FaStar, label: 'Biweekly', description: 'Leetcode nights' },
    ],
    details: [
      'Helped 39 students navigate the wild world of data structures—linked lists, trees, graphs, and hash maps—through lab assistance and weekly office hours',
      'Created visual study guides, recursion walkthroughs, and time-complexity cheat sheets that made abstract concepts actually click for students',
      'Started biweekly Leetcode nights where students could practice interview-style problems and debug together—because coding is always better with friends',
    ],
    tech: ['Data Structures', 'Algorithms', 'Teaching', 'Mentoring'],
  },
];

export const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  // Close when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.postcard-card') && !target.closest('.expanded-postcard') && expandedId !== null) {
        setExpandedId(null);
      }
    };

    if (expandedId !== null) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [expandedId]);

  return (
    <section id="experience" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-background to-accent-cream py-20 px-4 md:px-8">
      {/* Static Heading */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-text mb-4"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Postcards from work
        </motion.h2>
        <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
      </div>

      {/* Postcard Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
        {experiences.map((exp, index) => {
          const isExpanded = expandedId === exp.id;

          return (
            <div key={exp.id}>
              {/* Postcard - Small Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -12, 
                  scale: 1.05,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                  borderColor: 'rgba(252, 211, 77, 0.8)',
                }}
                className="postcard-card relative cursor-pointer h-80 md:h-96 rounded-lg shadow-xl overflow-hidden border-2 border-yellow-400/30 transition-all duration-300"
                onClick={() => setExpandedId(exp.id)}
              >
                {/* City Skyline Background */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${exp.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
                </div>

                {/* Postcard Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                  {/* Top Section - Location & Date */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <FaMapMarkerAlt className="text-yellow-400" />
                      <span className="text-sm font-semibold uppercase tracking-wider"
                            style={{ fontFamily: "'Courier New', monospace" }}>
                        {exp.destination}
                      </span>
                    </div>
                    <div className="text-xs text-white/80 mb-1"
                         style={{ fontFamily: "'Courier New', monospace" }}>
                      {exp.departure} - {exp.arrival}
                    </div>
                  </div>

                  {/* Middle Section - Company & Role */}
                  <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2"
                        style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {exp.company}
                    </h3>
                    <p className="text-sm md:text-base text-yellow-400 font-semibold">
                      {exp.role}
                    </p>
                  </div>

                  {/* Bottom Section - Stamps Preview */}
                  <div className="flex gap-2 justify-center flex-wrap">
                    {exp.stamps.slice(0, 2).map((stamp, stampIndex) => (
                      <motion.div
                        key={stampIndex}
                        initial={{ scale: 0, rotate: -10 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + stampIndex * 0.1, type: 'spring', stiffness: 200 }}
                        className="bg-yellow-400/90 backdrop-blur-sm rounded-full px-3 py-1.5 border-2 border-white/50"
                      >
                        <div className="flex items-center gap-1.5">
                          <stamp.icon className="text-xs text-black" />
                          <span className="text-xs font-bold text-black"
                                style={{ fontFamily: "'Courier New', monospace" }}>
                            {stamp.label}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Click Hint */}
                  <div className="absolute bottom-2 right-2 text-xs text-white/60 italic">
                    Click to expand →
                  </div>
                </div>
              </motion.div>

              {/* Expanded Postcard Modal */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
                    onClick={() => setExpandedId(null)}
                  >
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
                    
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="expanded-postcard relative w-full max-w-4xl max-h-[90vh] rounded-lg shadow-2xl overflow-hidden border-2 border-yellow-400/60 bg-white"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* Expanded Header with City Background */}
                      <div 
                        className="relative h-48 md:h-64 bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${exp.image})`,
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40"></div>
                        
                        <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8 text-white">
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <FaMapMarkerAlt className="text-yellow-400" />
                                <span className="text-sm font-semibold uppercase tracking-wider"
                                      style={{ fontFamily: "'Courier New', monospace" }}>
                                  {exp.destination}
                                </span>
                              </div>
                              <div className="text-xs text-white/80"
                                   style={{ fontFamily: "'Courier New', monospace" }}>
                                {exp.departure} - {exp.arrival}
                              </div>
                            </div>
                            <button
                              onClick={() => setExpandedId(null)}
                              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                            >
                              <span className="text-xl">×</span>
                            </button>
                          </div>
                          
                          <div>
                            <h3 className="text-3xl md:text-4xl font-bold mb-2"
                                style={{ fontFamily: "'Poppins', sans-serif" }}>
                              {exp.company}
                            </h3>
                            <p className="text-lg md:text-xl text-yellow-400 font-semibold">
                              {exp.role}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Scrollable Content */}
                      <div className="overflow-y-auto max-h-[calc(90vh-12rem)] p-6 md:p-8 bg-white">
                        {/* Stamps Section */}
                        <div className="mb-6 pb-6 border-b-2 border-dashed border-yellow-400/30">
                          <h4 className="text-sm font-semibold uppercase tracking-wider text-text mb-4"
                              style={{ fontFamily: "'Poppins', sans-serif" }}>
                            Highlights
                          </h4>
                          <div className="flex flex-wrap gap-3">
                            {exp.stamps.map((stamp, stampIndex) => (
                              <motion.div
                                key={stampIndex}
                                initial={{ scale: 0, rotate: -15 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: stampIndex * 0.1, type: 'spring', stiffness: 200 }}
                                className="bg-yellow-400 rounded-lg px-4 py-3 border-2 border-black/20 shadow-lg"
                              >
                                <div className="flex items-center gap-2 mb-1">
                                  <stamp.icon className="text-black text-sm" />
                                  <span className="text-base font-bold text-black"
                                        style={{ fontFamily: "'Courier New', monospace" }}>
                                    {stamp.label}
                                  </span>
                                </div>
                                <p className="text-xs text-black/70"
                                   style={{ fontFamily: "'Courier New', monospace" }}>
                                  {stamp.description}
                                </p>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Achievements */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold uppercase tracking-wider text-text mb-4"
                              style={{ fontFamily: "'Poppins', sans-serif" }}>
                            Achievements
                          </h4>
                          <ul className="space-y-3">
                            {exp.details.map((detail, detailIndex) => (
                              <motion.li
                                key={detailIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: detailIndex * 0.1 }}
                                className="flex items-start gap-3"
                              >
                                <FaPlane className="text-yellow-400 text-sm mt-1 flex-shrink-0 rotate-90" />
                                <p className="text-sm md:text-base text-text leading-relaxed"
                                   style={{ fontFamily: "'Inter', sans-serif" }}>
                                  {detail}
                                </p>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Tech Stack */}
                        <div>
                          <h4 className="text-sm font-semibold uppercase tracking-wider text-text mb-4"
                              style={{ fontFamily: "'Poppins', sans-serif" }}>
                            Tech Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.tech.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="bg-yellow-400/20 text-text border border-yellow-400/40 rounded-full px-3 py-1.5 text-xs font-semibold"
                                style={{ fontFamily: "'Courier New', monospace" }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

