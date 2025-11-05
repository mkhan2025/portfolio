import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaMapMarkerAlt } from 'react-icons/fa';

interface CampusRec {
  name: string;
  location: string;
  reason: string;
  highlight?: string;
}

const campusRecommendations: CampusRec[] = [
  {
    name: 'University of Chicago',
    location: 'Chicago, IL',
    reason: 'The stunning Gothic architecture and beautiful quads make it feel like stepping into a different era. The campus has incredible energy and the libraries are absolutely breathtaking.',
    highlight: 'Must-see: The Regenstein Library',
  },
  {
    name: 'Stanford University',
    location: 'Palo Alto, CA',
    reason: 'The sprawling campus with its palm trees and Spanish architecture is absolutely gorgeous. The Cantor Arts Center and the Rodin Sculpture Garden are perfect spots to explore.',
    highlight: 'Don\'t miss: The Main Quad',
  },
  {
    name: 'MIT',
    location: 'Cambridge, MA',
    reason: 'The mix of modern and historic architecture is fascinating. The campus is so walkable and the energy around innovation is palpable everywhere you go.',
    highlight: 'Check out: The Stata Center',
  },
  {
    name: 'Harvard University',
    location: 'Cambridge, MA',
    reason: 'Walking through Harvard Yard feels like you\'re in a movie. The historic buildings and the atmosphere are incredible. Plus, Cambridge itself is such a charming city.',
    highlight: 'Wander through: Harvard Yard',
  },
];

export const CampusRecommendations: React.FC = () => {
  return (
    <section id="campus-rec" className="py-20 px-4 bg-gradient-to-b from-background to-accent-cream relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-4 flex items-center justify-center gap-3">
            <FaUniversity className="text-secondary" />
            College Campus Recommendations
          </h2>
          <p className="text-text-light text-lg max-w-2xl mx-auto">
            One of my favorite things to do when traveling is explore college campuses. 
            Here are some of my top recommendations:
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {campusRecommendations.map((campus, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-lg shadow-lg border-2 border-primary-dark/20 p-6 relative overflow-hidden"
            >
              {/* Travel Guide Style Header */}
              <div className="absolute top-0 right-0 bg-secondary text-white px-4 py-1 rounded-bl-lg text-xs font-semibold">
                RECOMMENDED
              </div>

              <div className="mt-6">
                <h3 className="text-2xl font-bold text-text mb-2 flex items-center gap-2">
                  <FaUniversity className="text-primary-dark" />
                  {campus.name}
                </h3>
                <div className="flex items-center gap-2 text-text-light mb-4">
                  <FaMapMarkerAlt className="text-secondary" />
                  <span className="text-sm">{campus.location}</span>
                </div>
                
                <p className="text-text leading-relaxed mb-4">
                  {campus.reason}
                </p>

                {campus.highlight && (
                  <div className="bg-accent-cream rounded-lg p-3 border-l-4 border-secondary">
                    <p className="text-sm font-semibold text-text">
                      ✨ {campus.highlight}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

