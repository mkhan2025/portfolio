import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaPlane, FaCode, FaMapMarkerAlt, FaTimes } from 'react-icons/fa';
import { VideoBackgroundSection } from '../components/travel/VideoBackgroundSection';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: 'mobile' | 'web' | 'database' | 'graphics';
  github?: string;
  demo?: string;
  image?: string;
  story?: string;
}

const projects: Project[] = [
  {
    id: 0,
    title: 'Bookmark',
    description: 'Location-based social platform with real-time recommendations.',
    longDescription: 'Location-based social platform featuring a recommendation engine implemented with Firebase Firestore and location-based filtering that analyzes user interactions, follows, and bookmarks to suggest nearby experiences using real-time notifications.',
    tags: ['Java', 'Android', 'Firebase', 'Google Maps API', 'Places API'],
    category: 'mobile',
    github: 'https://github.com/mkhan2025/Bookmark',
    image: '/images/place1.jpg',
    story: 'Built this while exploring how people discover hidden gems in new cities—just like how I find the best spots when traveling!',
  },
  {
    id: 1,
    title: 'Autobot',
    description: 'A custom ChatGPT that generates narrative style stories using a title as a prompt.',
    longDescription: 'A custom ChatGPT application built with Python that generates narrative style stories using a title as a prompt. This AI-powered storytelling tool uses natural language processing to create engaging, creative narratives based on user-provided titles, bringing imagination to life through automated story generation.',
    tags: ['Python', 'AI', 'ChatGPT', 'Natural Language Processing', 'Storytelling'],
    category: 'web',
    github: 'https://github.com/mkhan2025/Autobot',
    image: '/images/place2.jpg',
    story: 'Combining my love for storytelling with AI—creating narratives that transport readers to new worlds, one title at a time.',
  },
  {
    id: 2,
    title: '3D Graphics Rasterization',
    description: 'Custom 3D graphics engine with complete rendering pipeline.',
    longDescription: 'Built a custom 3D graphics engine that parses OBJ files and renders 3D models through a complete pipeline including model transformations, perspective projection, viewport mapping, and z-buffer depth testing, producing high-quality PPM image outputs.',
    tags: ['C++', '3D Graphics', 'Computer Graphics'],
    category: 'graphics',
    github: 'https://github.com/mkhan2025/3d-software-rasterizer',
    image: '/images/place3.jpg',
    story: 'Creating 3D worlds from scratch—like building a virtual travel destination where every pixel matters.',
  },
];

// Generate flight numbers for each project
const getFlightNumber = (project: Project) => {
  const prefix = project.category === 'mobile' ? 'MK' : project.category === 'database' ? 'DS' : 'GR';
  return `${prefix}-${String(project.id + 1).padStart(3, '0')}`;
};

// Generate random gate numbers
const getGate = (id: number) => `GATE ${String.fromCharCode(65 + (id % 8))}${id + 1}`;

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [backgroundImage, setBackgroundImage] = useState<string | undefined>(undefined);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project.id);
    if (project.image) {
      setBackgroundImage(project.image);
    }
  };

  const closeProject = () => {
    setSelectedProject(null);
    setBackgroundImage(undefined);
  };

  // Close when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.project-card') && !target.closest('.project-details-modal') && selectedProject !== null) {
        closeProject();
      }
    };

    if (selectedProject !== null) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [selectedProject]);

  return (
    <VideoBackgroundSection src="/videos/clouds.mp4">
      <section 
        id="projects" 
        className="py-20 px-4 relative min-h-screen overflow-hidden"
        style={{
          ...(backgroundImage ? {
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          } : {}),
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-yellow-400 mt-2 mb-8 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold"
             style={{ fontFamily: "'Poppins', sans-serif" }}>
            Projects that took flight
          </p>
        </motion.div>

        {/* Airport Departure Board Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-t-lg p-4 border-b-2 border-yellow-400">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FaPlane className="text-yellow-400 text-2xl" />
                <div>
                  <h3 className="text-white text-xl md:text-2xl font-bold uppercase tracking-wider"
                      style={{ fontFamily: "'Poppins', sans-serif" }}>
                    DEPARTURE BOARD
                  </h3>
                  <p className="text-gray-400 text-sm"
                     style={{ fontFamily: "'Courier New', monospace" }}>
                    Click any flight to view details
                  </p>
                </div>
              </div>
              <div className="text-yellow-400 text-sm font-bold"
                   style={{ fontFamily: "'Courier New', monospace" }}>
                {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).toUpperCase()}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Flight Departures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => {
            const flightNumber = getFlightNumber(project);
            const gate = getGate(project.id);
            const isSelected = selectedProject === project.id;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="project-card"
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleProjectClick(project)}
                  className={`bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-xl border-2 cursor-pointer transition-all overflow-hidden ${
                    isSelected ? 'border-yellow-400 ring-4 ring-yellow-400/30' : 'border-gray-200 hover:border-yellow-400/50'
                  }`}
                >
                  {/* Flight Status Header */}
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 text-white">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <FaPlane className="text-yellow-400" />
                        <span className="font-bold text-lg"
                              style={{ fontFamily: "'Courier New', monospace" }}>
                          {flightNumber}
                        </span>
                      </div>
                      <div className="bg-green-500 px-2 py-1 rounded text-xs font-bold"
                           style={{ fontFamily: "'Courier New', monospace" }}>
                        ON TIME
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm opacity-90">
                      <span style={{ fontFamily: "'Courier New', monospace" }}>{gate}</span>
                      <span style={{ fontFamily: "'Courier New', monospace" }}>
                        {String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}:
                        {String(Math.floor(Math.random() * 60)).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  {/* Destination Info */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <FaMapMarkerAlt className="text-yellow-400" />
                      <h3 className="text-2xl font-bold text-text"
                          style={{ fontFamily: "'Poppins', sans-serif" }}>
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-text/70 text-sm mb-4 line-clamp-2"
                       style={{ fontFamily: "'Inter', sans-serif" }}>
                      {project.description}
                    </p>

                    {/* Category Badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-semibold text-text/60 uppercase tracking-wider"
                            style={{ fontFamily: "'Courier New', monospace" }}>
                        Category:
                      </span>
                      <span className="bg-yellow-400 text-black px-3 py-1 rounded text-xs font-bold uppercase"
                            style={{ fontFamily: "'Courier New', monospace" }}>
                        {project.category}
                      </span>
                    </div>

                    {/* Tech Stack Preview */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs font-semibold"
                          style={{ fontFamily: "'Courier New', monospace" }}
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs font-semibold"
                              style={{ fontFamily: "'Courier New', monospace" }}>
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Click to View Footer */}
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-3 text-center">
                    <p className="text-black text-sm font-bold uppercase tracking-wider"
                       style={{ fontFamily: "'Courier New', monospace" }}>
                      ✈ CLICK TO BOARD
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject !== null && (() => {
            const project = projects.find(p => p.id === selectedProject);
            if (!project) return null;

            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
                onClick={closeProject}
              >
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
                
                <motion.div
                  initial={{ scale: 0.9, opacity: 0, y: 50 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 50 }}
                  transition={{ duration: 0.3 }}
                  className="project-details-modal relative w-full max-w-4xl max-h-[90vh] rounded-lg shadow-2xl overflow-hidden bg-white"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Flight Header */}
                  <div 
                    className="relative h-48 md:h-64 bg-cover bg-center"
                    style={{
                      backgroundImage: project.image ? `url(${project.image})` : 'linear-gradient(to bottom right, #FCD34D, #FBBF24)',
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40"></div>
                    
                    <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8 text-white">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <FaPlane className="text-yellow-400" />
                            <span className="text-sm font-semibold uppercase tracking-wider"
                                  style={{ fontFamily: "'Courier New', monospace" }}>
                              {getFlightNumber(project)} • {getGate(project.id)}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={closeProject}
                          className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                        >
                          <FaTimes className="text-xl" />
                        </button>
                      </div>
                      
                      <div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-2"
                            style={{ fontFamily: "'Poppins', sans-serif" }}>
                          {project.title}
                        </h3>
                        <p className="text-sm md:text-base text-white/90">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Scrollable Content */}
                  <div className="overflow-y-auto max-h-[calc(90vh-12rem)] p-6 md:p-8 bg-gradient-to-br from-gray-50 to-white">
                    {/* Travel Story */}
                    {project.story && (
                      <div className="mb-6 pb-6 border-b-2 border-dashed border-yellow-400/30">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-text mb-3 flex items-center gap-2"
                            style={{ fontFamily: "'Poppins', sans-serif" }}>
                          <FaPlane className="text-yellow-400" />
                          The Journey
                        </h4>
                        <p className="text-base text-text leading-relaxed italic"
                           style={{ fontFamily: "'Caveat', cursive", fontSize: '1.2rem' }}>
                          {project.story}
                        </p>
                      </div>
                    )}

                    {/* Description */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-text mb-3"
                          style={{ fontFamily: "'Poppins', sans-serif" }}>
                        Flight Details
                      </h4>
                      <p className="text-sm md:text-base text-text leading-relaxed"
                         style={{ fontFamily: "'Inter', sans-serif" }}>
                        {project.longDescription}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-text mb-4"
                          style={{ fontFamily: "'Poppins', sans-serif" }}>
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {project.tags.map((tag, tagIndex) => (
                          <motion.div
                            key={tagIndex}
                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ delay: tagIndex * 0.1, type: 'spring', stiffness: 200 }}
                            className="bg-yellow-400 rounded-lg px-4 py-2 shadow-lg border-2 border-black/20"
                          >
                            <div className="flex items-center gap-2">
                              <FaCode className="text-black text-xs" />
                              <span className="text-xs md:text-sm font-bold text-black uppercase tracking-wider"
                                    style={{ fontFamily: "'Courier New', monospace" }}>
                                {tag}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    {(project.github || project.demo) && (
                      <div className="pt-6 border-t-2 border-dashed border-yellow-400/30">
                        <div className="flex gap-4">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-black/80 transition-colors text-sm font-semibold shadow-lg"
                            >
                              <FaGithub />
                              GitHub
                            </a>
                          )}
                          {project.demo && (
                            <button
                              onClick={() => {
                                const videoModal = document.getElementById(`video-modal-${project.id}`);
                                if (videoModal) {
                                  (videoModal as HTMLDialogElement).showModal();
                                }
                              }}
                              className="flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors text-sm font-semibold shadow-lg"
                            >
                              <FaExternalLinkAlt />
                              Live Demo
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            );
          })()}
        </AnimatePresence>

        {/* Video Modals for Demos */}
        {projects.map((project) => {
          if (!project.demo || !project.demo.endsWith('.mp4')) return null;
          
          return (
            <dialog
              key={`video-modal-${project.id}`}
              id={`video-modal-${project.id}`}
              className="backdrop:bg-black/80 backdrop:backdrop-blur-sm rounded-lg p-0 max-w-4xl w-full max-h-[90vh] bg-black/90"
              onClose={() => {
                const video = document.getElementById(`video-player-${project.id}`) as HTMLVideoElement;
                if (video) {
                  video.pause();
                  video.currentTime = 0;
                }
              }}
            >
              <div className="relative w-full">
                <button
                  onClick={() => {
                    const videoModal = document.getElementById(`video-modal-${project.id}`);
                    const video = document.getElementById(`video-player-${project.id}`) as HTMLVideoElement;
                    if (video) {
                      video.pause();
                      video.currentTime = 0;
                    }
                    if (videoModal) {
                      (videoModal as HTMLDialogElement).close();
                    }
                  }}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                >
                  <FaTimes className="text-xl" />
                </button>
                <video
                  id={`video-player-${project.id}`}
                  src={project.demo}
                  controls
                  autoPlay
                  className="w-full h-auto rounded-lg"
                  style={{ maxHeight: '90vh' }}
                  onPause={(e) => {
                    // Ensure video is paused when modal closes
                    const video = e.currentTarget;
                    if (video) {
                      video.pause();
                    }
                  }}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </dialog>
          );
        })}
        </div>
      </section>
    </VideoBackgroundSection>
  );
};
