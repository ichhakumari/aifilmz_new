import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import { useTheme } from '../context/ThemeContext';
import * as FiIcons from 'react-icons/fi';

const { FiChevronLeft, FiChevronRight } = FiIcons;

const Services = () => {
  const [currentService, setCurrentService] = useState(0);
  const { isDark } = useTheme();
  const containerRef = useRef(null);

  const services = [
    { title: "AI Avatar Cloning", description: "Hyper-realistic virtual presenters for personalized content", video: "/videos/video1.mp4" },
    { title: "AI Cloned Reel Videos", description: "Engaging short-form content for social media", video: "/videos/video2.mp4" },
    { title: "AI Animated Graphics", description: "Stunning motion graphics with AI-enhanced tools", video: "/videos/annimated.mp4" },
    { title: "AI Product Videos", description: "Professional product showcases with 3D rendering", video: "/videos/graphics.mp4" },
    { title: "AI Ad Films", description: "High-impact advertising with maximum engagement", video: "/videos/zomato.mp4" },
    { title: "AI Animated Videos", description: "Fully animated content for brands and stories", video: "/videos/Cadbury Dairy Milk.mp4" },
    { title: "AI Music Videos", description: "Creative visuals synchronized to audio", video: "/videos/Amul Janmashtami Special.mp4" }
  ];

  const handlePrevious = () => {
    setCurrentService((prev) => (prev - 1 + services.length) % services.length);
  };

  const handleNext = () => {
    setCurrentService((prev) => (prev + 1) % services.length);
  };

  const currentServiceData = services[currentService];

  return (
    <section 
      id="services" 
      ref={containerRef}
      className="py-16 sm:py-10 px-4 sm:px-6"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16"
        >
          <h2 
            className="font-bold text-xl sm:text-2xl md:text-3xl mb-4" 
            style={{ color: 'var(--text-primary)' }}
          >
            Our <span style={{ color: 'var(--accent-color)' }}>Services</span>
          </h2>
          <p 
            className="text-base max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            Explore our comprehensive range of AI-powered video production services
          </p>
        </motion.div>

        {/* Slider Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Main Slider Content */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Video Section */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-lg overflow-hidden border" style={{ borderColor: 'var(--border-color)' }}>
                <motion.div
                  key={currentService}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full bg-black"
                  style={{ aspectRatio: '16/9' }}
                >
                  <video
                    src={currentServiceData.video}
                    className="w-full h-full object-cover"
                    controls
                    muted
                    loop
                  >
                    Your browser does not support the video tag.
                  </video>
                </motion.div>
              </div>
            </div>

            {/* Content Section */}
            <div className="order-1 lg:order-2 flex flex-col justify-center">
              {/* Service Index */}
              <motion.div
                key={currentService}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <span 
                  className="text-sm font-semibold tracking-widest uppercase"
                  style={{ color: 'var(--accent-color)' }}
                >
                  Service {String(currentService + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
                </span>
              </motion.div>

              {/* Service Title */}
              <motion.h3
                key={`title-${currentService}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-bold text-2xl sm:text-3xl md:text-4xl mb-4 leading-tight"
                style={{ color: 'var(--text-primary)' }}
              >
                {currentServiceData.title}
              </motion.h3>

              {/* Service Description */}
              <motion.p
                key={`desc-${currentService}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base sm:text-lg mb-8"
                style={{ color: 'var(--text-secondary)' }}
              >
                {currentServiceData.description}
              </motion.p>

              {/* Accent Line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '60px' }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-1 rounded-full mb-8"
                style={{ backgroundColor: 'var(--accent-color)' }}
              />

              {/* Navigation Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center gap-4"
              >
                <button
                  onClick={handlePrevious}
                  className="p-3 rounded-full border transition-all duration-300 hover:bg-orange-500/10"
                  style={{ borderColor: 'var(--accent-color)', color: 'var(--accent-color)' }}
                >
                  <SafeIcon icon={FiChevronLeft} className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-3 rounded-full transition-all duration-300 hover:shadow-lg"
                  style={{ backgroundColor: 'var(--accent-color)', color: 'white' }}
                >
                  <SafeIcon icon={FiChevronRight} className="w-6 h-6" />
                </button>
              </motion.div>
            </div>
          </div>

          {/* Slider Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center gap-2 mt-12"
          >
            {services.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentService(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                className="transition-all duration-300"
              >
                <motion.div
                  layout
                  className="h-2 rounded-full"
                  animate={{
                    width: index === currentService ? '32px' : '8px'
                  }}
                  style={{
                    backgroundColor: index === currentService
                      ? 'var(--accent-color)'
                      : 'var(--border-color)'
                  }}
                />
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;