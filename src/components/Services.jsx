import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import { useTheme } from '../context/ThemeContext';
import * as FiIcons from 'react-icons/fi';

const { FiChevronLeft, FiChevronRight, FiVolume2, FiVolumeX } = FiIcons;

const Services = () => {
  const [currentService, setCurrentService] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const { isDark } = useTheme();
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  const services = [
    { title: "AI Avatar Cloning", description: "Hyper-realistic virtual presenters for personalized content", video: "/videos/avatar/Indira Final1.mp4" },
    { title: "Reel Videos", description: "Engaging short-form content for social media", video: "videos/Video-648.mp4" },
    { title: "Animated Graphics", description: "Stunning motion graphics with AI-enhanced tools", video: "videos/Video-412.mp4" },
    { title: "Product Videos", description: "Professional product showcases with 3D rendering", video: "videos/product.mp4" },
    { title: "Ad Films", description: "High-impact advertising with maximum engagement", video: "videos/zomato.mp4" },
    { title: "Animated Videos", description: "Fully animated content for brands and stories", video: "videos/Cadbury Dairy Milk.mp4" },
    { title: "Music Videos", description: "Creative visuals synchronized to audio", video: "videos/music video.mp4" }
  ];

  const handlePrevious = () => {
    setCurrentService((prev) => (prev - 1 + services.length) % services.length);
  };

  const handleNext = () => {
    setCurrentService((prev) => (prev + 1) % services.length);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  const currentServiceData = services[currentService];

  return (
    <section
      id="services"
      ref={containerRef}
      className="py-10 px-4 sm:px-6"
      style={{ backgroundColor: 'var(--bg-tertiary)' }}
    >
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2
            className="font-bold mb-1.5 gradient-text"
            style={{ fontSize: 'var(--text-4xl)' }}
          >
            Our <span style={{ color: 'var(--accent-color)' }}>Services</span>
          </h2>
          <p
            className="max-w-2xl mx-auto text-xs"
            style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}
          >
            Explore our comprehensive range of AI-powered video production services
          </p>
        </motion.div>

        {/* Main Content - Service Tabs Above Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-4 lg:gap-5"
        >
          {/* Service Tabs - Above Video */}
          <div className="flex flex-col gap-1.5">
            {/* <h3
              className="font-semibold mb-2 uppercase tracking-wide"
              style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}
            >
              Services
            </h3> */}

            {/* Mobile Slider */}
            <div className="md:hidden overflow-x-auto pb-0.5">
              <div className="flex gap-0.5 min-w-min px-0.5">
                {services.map((service, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentService(index)}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.06 }}
                    className="relative px-1 py-1.5 rounded-md font-medium transition-all duration-300 text-center overflow-hidden group whitespace-nowrap"
                    style={{
                      backgroundColor: index === currentService ? 'var(--highlight-color)' : 'var(--bg-secondary)',
                      borderLeft: index === currentService ? '3px solid var(--accent-color)' : '3px solid transparent'
                    }}
                  >
                    {/* Animated background */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ backgroundColor: 'var(--accent-color)' }}
                      initial={false}
                      animate={{ opacity: index === currentService ? 0.1 : 0 }}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      <p
                        className="font-semibold line-clamp-1 text-xs sm:text-sm"
                        style={{
                          color: index === currentService ? 'var(--accent-color)' : 'var(--text-primary)'
                        }}
                      >
                        {service.title.split(' ').slice(0, 2).join(' ')}
                      </p>
                    </div>

                    {/* Indicator Dot */}
                    {index === currentService && (
                      <motion.div
                        layoutId="activeServiceIndicator"
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: 'var(--accent-color)' }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-3 lg:grid-cols-7 gap-1.5">
              {services.map((service, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentService(index)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06 }}
                  className="relative px-2.5 py-1.5 rounded-lg font-medium transition-all duration-300 text-center overflow-hidden group"
                  style={{
                    backgroundColor: index === currentService ? 'var(--highlight-color)' : 'var(--bg-secondary)',
                    borderLeft: index === currentService ? '3px solid var(--accent-color)' : '3px solid transparent'
                  }}
                >
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: 'var(--accent-color)' }}
                    initial={false}
                    animate={{ opacity: index === currentService ? 0.1 : 0 }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    <p
                      className="font-semibold line-clamp-1 text-xs sm:text-sm"
                      style={{
                        color: index === currentService ? 'var(--accent-color)' : 'var(--text-primary)'
                      }}
                    >
                      {service.title.split(' ').slice(0, 2).join(' ')}
                    </p>
                  </div>

                  {/* Indicator Dot */}
                  {index === currentService && (
                    <motion.div
                      layoutId="activeServiceIndicator2"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: 'var(--accent-color)' }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Video Container - Below Tabs */}
          <div>
            <motion.div
              key={currentService}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden rounded-2xl border mx-auto group"
              style={{ aspectRatio: '16/9', borderColor: 'var(--border-color)', backgroundColor: 'black', maxWidth: '100%' }}
            >
              <video
                ref={videoRef}
                src={currentServiceData.video}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted={isMuted}
                playsInline
              >
                Your browser does not support the video tag.
              </video>

              {/* Navigation Buttons - On Video */}
              <button
                onClick={handlePrevious}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-black/80 text-white transition-all z-10"
              >
                <SafeIcon icon={FiChevronLeft} className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-black/80 text-white transition-all z-10"
              >
                <SafeIcon icon={FiChevronRight} className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Sound Toggle Button */}
              <button
                onClick={toggleMute}
                className="absolute top-4 right-4 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-black/80 text-white transition-all z-10"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                <SafeIcon icon={isMuted ? FiVolumeX : FiVolume2} className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Video Overlay Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-6">
                <motion.h3
                  key={`title-${currentService}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="font-bold text-white"
                  style={{ fontSize: 'var(--text-lg)' }}
                >
                  {currentServiceData.title}
                </motion.h3>
                <motion.p
                  key={`desc-${currentService}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  className="text-sm mt-1"
                  style={{ color: 'rgba(255,255,255,0.8)' }}
                >
                  {currentServiceData.description}
                </motion.p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;