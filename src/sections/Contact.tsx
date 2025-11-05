import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlane, FaLinkedin, FaGithub, FaCheckCircle } from 'react-icons/fa';
import { VideoBackgroundSection } from '../components/travel/VideoBackgroundSection';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <VideoBackgroundSection src="/videos/edinburgh.mp4">
      <section id="contact" className="py-20 px-4 relative min-h-screen">
        <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4"
              style={{ 
                fontFamily: "'Poppins', sans-serif",
                textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
              }}>
            Connect With Me
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full mb-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {/* Visa Application Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <div className="bg-gradient-to-br from-yellow-50/95 via-white/95 to-yellow-50/95 backdrop-blur-sm rounded-lg shadow-2xl border-2 border-yellow-400/60 relative overflow-hidden">
              {/* Perforated edges */}
              <div className="absolute left-0 top-0 bottom-0 w-2 border-r-2 border-dashed border-black/40"></div>
              <div className="absolute right-0 top-0 bottom-0 w-2 border-l-2 border-dashed border-black/40"></div>
              
              {/* Visa Header */}
              <div className="p-4 md:p-5 pb-3 border-b-2 border-dashed border-black/30 bg-yellow-400/20">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <FaPlane className="text-black text-lg" />
                    <span className="text-xs font-bold text-black uppercase tracking-widest"
                          style={{ fontFamily: "'Courier New', monospace", letterSpacing: '0.2em' }}>
                      CONNECTION VISA APPLICATION
                    </span>
                  </div>
                  <div className="text-xs text-black/60"
                       style={{ fontFamily: "'Courier New', monospace" }}>
                    FORM MK-2025
                  </div>
                </div>
                
                <div className="border-t border-dashed border-black/20 pt-3">
                  <p className="text-sm text-black/70"
                     style={{ fontFamily: "'Inter', sans-serif" }}>
                    Please complete all fields to establish a connection. All information will be kept confidential.
                  </p>
                </div>
              </div>

              {/* Form Content */}
              <div className="p-4 md:p-5">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="text-center py-6"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6 }}
                        className="inline-block mb-4"
                      >
                        <FaCheckCircle className="text-green-600 text-5xl md:text-6xl" />
                      </motion.div>
                      <h3 className="text-2xl md:text-3xl font-bold text-text mb-2"
                          style={{ fontFamily: "'Poppins', sans-serif" }}>
                        Visa Approved!
                      </h3>
                      <p className="text-base md:text-lg text-text/70 mb-4"
                         style={{ fontFamily: "'Inter', sans-serif" }}>
                        Your application has been submitted successfully.
                      </p>
                      <div className="flex items-center justify-center gap-2 text-yellow-400 mt-4">
                        <FaPlane className="text-lg" />
                        <span className="text-sm font-semibold"
                              style={{ fontFamily: "'Courier New', monospace" }}>
                          Your message is en route!
                        </span>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      {/* Full Name */}
                      <div className="border-b-2 border-dashed border-black/20 pb-3">
                        <label htmlFor="name" className="block text-xs font-bold text-text uppercase tracking-wider mb-1.5"
                               style={{ fontFamily: "'Courier New', monospace" }}>
                          FULL NAME (AS IT APPEARS)
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 border-2 border-dashed border-black/30 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors bg-white text-sm"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                          placeholder="Enter your full name"
                        />
                      </div>

                      {/* Email Address */}
                      <div className="border-b-2 border-dashed border-black/20 pb-3">
                        <label htmlFor="email" className="block text-xs font-bold text-text uppercase tracking-wider mb-1.5"
                               style={{ fontFamily: "'Courier New', monospace" }}>
                          EMAIL ADDRESS
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 border-2 border-dashed border-black/30 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors bg-white text-sm"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                          placeholder="your.email@example.com"
                        />
                      </div>

                      {/* Purpose of Visit */}
                      <div className="border-b-2 border-dashed border-black/20 pb-3">
                        <label htmlFor="message" className="block text-xs font-bold text-text uppercase tracking-wider mb-1.5"
                               style={{ fontFamily: "'Courier New', monospace" }}>
                          PURPOSE OF VISIT / MESSAGE
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          className="w-full px-3 py-2 border-2 border-dashed border-black/30 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors bg-white resize-none text-sm"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                          placeholder="Tell me about your project, collaboration idea, or just say hello..."
                        />
                      </div>

                      {/* Submit Button */}
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-yellow-400 text-black py-3 rounded-lg font-bold hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg border-2 border-black/20 text-sm"
                        style={{ fontFamily: "'Courier New', monospace" }}
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            >
                              <FaPlane className="text-black" />
                            </motion.div>
                            <span className="uppercase tracking-wider">Processing Application...</span>
                          </>
                        ) : (
                          <>
                            <FaPlane />
                            <span className="uppercase tracking-wider">Submit Application</span>
                          </>
                        )}
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>

                {/* Barcode Section */}
                {!submitted && (
                  <div className="mt-6 pt-4 border-t-2 border-dashed border-black/30">
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
                      MK-{Date.now().toString().slice(-6)}-{Date.now().toString().slice(-4)}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Contact Information Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Social Links */}
            <div className="bg-gradient-to-br from-yellow-50 via-white to-yellow-50 rounded-lg shadow-xl border-2 border-yellow-400/60 p-6">
              <div className="flex items-center gap-2 mb-4">
                <FaPlane className="text-yellow-400" />
                <h3 className="text-xl font-bold text-text"
                    style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Follow My Journey
                </h3>
              </div>
              
              <div className="space-y-3">
                <motion.a
                  href="https://www.linkedin.com/in/mkhan2025/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
                >
                  <FaLinkedin className="text-xl" />
                  <span className="font-semibold"
                        style={{ fontFamily: "'Inter', sans-serif" }}>
                    LinkedIn
                  </span>
                </motion.a>
                
                <motion.a
                  href="https://github.com/mkhan2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-900 transition-colors shadow-md"
                >
                  <FaGithub className="text-xl" />
                  <span className="font-semibold"
                        style={{ fontFamily: "'Inter', sans-serif" }}>
                    GitHub
                  </span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
        </div>
      </section>
    </VideoBackgroundSection>
  );
};
