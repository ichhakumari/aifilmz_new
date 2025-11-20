import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import { useTheme } from '../context/ThemeContext';
import * as FiIcons from 'react-icons/fi';

const { FiChevronDown } = FiIcons;

const Services = () => {
  const [currentService, setCurrentService] = useState(0);
  const { isDark } = useTheme();
  const containerRef = useRef(null);
  const isScrolling = useRef(false);

  const services = [
    { title: "Commercial Production", video: "/public/videos/zomato.mp4" },
    { title: "Corporate Videos", video: "/public/videos/lion.mp4" },
    { title: "Documentary Films", video: "/public/videos/republic2.mp4" },
    { title: "Automated Editing", video: "/public/videos/republic.mp4" }
  ];

  useEffect(() => {
    const handleWheel = (e) => {
      if (!containerRef.current || isScrolling.current) return;
      e.preventDefault();
      isScrolling.current = true;

      if (e.deltaY > 0) {
        // Scroll down
        setCurrentService((prev) => Math.min(prev + 1, services.length - 1));
      } else {
        // Scroll up
        setCurrentService((prev) => Math.max(prev - 1, 0));
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, 1000);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, [services.length]);

  return (
    <section id="services" className="relative h-screen w-full overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div
        ref={containerRef}
        className={`relative h-full w-full transition-colors duration-500`}
      >
        {/* Services */}
        {services.map((service, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentService
              ? 'opacity-100 translate-y-0'
              : index < currentService
                ? 'opacity-0 -translate-y-full'
                : 'opacity-0 translate-y-full'
              }`}
          >
            {/* Video Background */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              key={service.video}
            >
              <source src={service.video} type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-12 left-8 md:left-16 z-10">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{
                  opacity: index === currentService ? 1 : 0,
                  x: index === currentService ? 0 : -50
                }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="space-y-3"
              >
                <div>
                  <span
                    className="text-sm font-semibold tracking-widest uppercase"
                    style={{ color: 'var(--electric-teal)' }}
                  >
                    Service {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tight">
                  {service.title}
                </h2>
                <div
                  className="w-24 h-1 rounded-full"
                  style={{ background: 'linear-gradient(to right, var(--electric-teal), var(--deep-teal))' }}
                />
              </motion.div>
            </div>
          </div>
        ))}

        {/* Progress Indicators */}
        <div className="absolute right-8 md:right-12 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentService(index)}
              className="group relative"
            >
              <div
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentService ? 'scale-125' : ''
                  }`}
                style={{
                  backgroundColor: index === currentService
                    ? 'var(--electric-teal)'
                    : (isDark ? '#fd0d0d' : '#f70909')
                }}
              />
              <span
                className="absolute right-6 top-1/2 -translate-y-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium"
                style={{ color: isDark ? 'white' : 'black' }}
              >
                {services[index].title}
              </span>
            </button>
          ))}
        </div>

        {/* Scroll Indicator */}
        {currentService < services.length - 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          >
            <div className="flex flex-col items-center gap-2 animate-bounce">
              <span className="text-white text-sm font-medium">Scroll Down</span>
              <SafeIcon icon={FiChevronDown} className="w-6 h-6" style={{ color: 'var(--electric-teal)' }} />
            </div>
          </motion.div>
        )}

        {/* Navigation Instructions */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute top-6 right-0 -translate-x-1/2 z-20 px-6 py-3 rounded-full backdrop-blur-md transition-all duration-300"
          style={{
            backgroundColor: isDark ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.9)',
            border: `1px solid var(--accent-color)`,
            color: 'var(--text-primary)'
          }}
        >
          <p className="text-sm font-medium">Use mouse wheel to navigate services</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;