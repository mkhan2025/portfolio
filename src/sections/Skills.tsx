import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlane, FaMapMarkerAlt } from 'react-icons/fa';

interface Skill {
  name: string;
  category: string;
}

const skillCategories = [
  {
    category: 'Languages',
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'C++'],
    color: '#A8DADC', // primary
  },
  {
    category: 'Frontend',
    skills: ['React', 'Android Studio'],
    color: '#95D5B2', // accent mint
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'REST APIs'],
    color: '#C9ADA7', // accent lavender
  },
  {
    category: 'Cloud & Infrastructure',
    skills: ['AWS', 'Google Cloud', 'Docker'],
    color: '#E07A5F', // secondary
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase'],
    color: '#F2CC8F', // secondary light
  },
  {
    category: 'AI/ML & Tools',
    skills: ['Claude API', 'Git', 'Figma'],
    color: '#457B9D', // primary dark
  },
];

export const Skills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-accent-cream to-background relative min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-text mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}>
            My Learning Journey
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full mb-4"></div>
        </motion.div>

        {/* Journey Map - Skills as Luggage Tags */}
        <div className="relative">
          {/* Curved Route Path (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10" style={{ zIndex: 0 }}>
            <path
              d="M 100 200 Q 400 100, 700 200 T 1200 200"
              fill="none"
              stroke="#FCD34D"
              strokeWidth="2"
              strokeDasharray="10,5"
            />
          </svg>

          {/* Category Sections */}
          <div className="space-y-12 md:space-y-16 relative z-10">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="relative"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  {/* Destination Marker */}
                  <div className="relative flex-shrink-0">
                    <div 
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white shadow-lg flex items-center justify-center"
                      style={{ backgroundColor: category.color }}
                    >
                      <FaMapMarkerAlt className="text-white text-sm md:text-base" />
                    </div>
                    {/* Subtle Pulsing Animation */}
                    <motion.div
                      className="absolute inset-0 rounded-full opacity-20"
                      style={{ backgroundColor: category.color }}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0, 0.2],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </div>

                  {/* Category Name */}
                  <div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-text"
                        style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {category.category}
                    </h3>
                    <div className="flex items-center gap-2 text-text/60 mt-1">
                      <FaPlane className="text-xs md:text-sm" />
                      <span className="text-xs md:text-sm"
                            style={{ fontFamily: "'Courier New', monospace" }}>
                        {category.skills.length} skills
                      </span>
                    </div>
                  </div>
                </div>

                {/* Skills Grid - Luggage Tags */}
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 ml-12 md:ml-14">
                  {category.skills.map((skill, skillIndex) => {
                    const isHovered = hoveredSkill === `${category.category}-${skill}`;

                    return (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: skillIndex * 0.03 }}
                        onHoverStart={() => setHoveredSkill(`${category.category}-${skill}`)}
                        onHoverEnd={() => setHoveredSkill(null)}
                        className="relative"
                      >
                        {/* Luggage Tag */}
                        <motion.div
                          whileHover={{ scale: 1.08, y: -3, rotate: Math.random() * 4 - 2 }}
                          className="relative cursor-pointer"
                          style={{
                            transform: `rotate(${Math.random() * 6 - 3}deg)`,
                          }}
                        >
                          {/* Tag String */}
                          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-gray-400/40"></div>
                          
                          {/* Tag Hole */}
                          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full border border-gray-400/40 bg-white"></div>
                          
                          {/* Tag Body */}
                          <div 
                            className="rounded-lg px-2.5 py-2.5 md:px-3 md:py-3 shadow-md border border-gray-300/40 relative overflow-hidden bg-white/95 backdrop-blur-sm"
                          >
                            {/* Tag Content */}
                            <div className="relative z-10 text-center">
                              <h4 className="text-xs md:text-sm font-bold text-text mb-0.5"
                                  style={{ fontFamily: "'Courier New', monospace", letterSpacing: '0.05em' }}>
                                {skill}
                              </h4>
                              <div className="h-px bg-gray-300 my-1"></div>
                              <div 
                                className="text-[8px] md:text-[10px] text-text/70 uppercase tracking-wider"
                                style={{ fontFamily: "'Courier New', monospace", color: category.color, fontWeight: '600' }}
                              >
                                {category.category.split(' ')[0]}
                              </div>
                            </div>
                            
                            {/* Colored Accent Border */}
                            <div 
                              className="absolute top-0 left-0 right-0 h-1 rounded-t-lg"
                              style={{ backgroundColor: category.color }}
                            />

                            {/* Hover Effect Overlay */}
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: isHovered ? 0.15 : 0 }}
                              className="absolute inset-0 bg-white"
                            />
                          </div>

                          {/* Tag Shadow */}
                          <div className="absolute inset-0 rounded-lg bg-black/10 blur-sm -z-10 mt-1"></div>
                        </motion.div>

                        {/* Connecting Line to Category */}
                        <div className="absolute -left-3 md:-left-4 top-1/2 w-3 md:w-4 h-0.5 bg-yellow-400/20"></div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Journey End Marker */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: skillCategories.length * 0.1 }}
            className="relative z-10 mt-12 flex items-center gap-4 justify-center"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 border-2 border-white shadow-lg flex items-center justify-center">
              <FaPlane className="text-white text-lg md:text-xl rotate-45" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg md:text-xl font-bold text-text"
                    style={{ fontFamily: "'DM Serif Text', serif" }}>
                Journey continues...
              </span>
              <FaPlane className="text-yellow-400 text-base md:text-lg animate-pulse" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
