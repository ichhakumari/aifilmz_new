import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiChevronDown, FiChevronUp } = FiIcons;

const GlimpseAtFilms = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [isExpanded, setIsExpanded] = useState(true);

  const films = [
    {
      id: 8,
      title: 'Medical Technology',

      videoUrl: "public/videos/avatar/Indira Final1.mp4"
    },
    {
      id: 9,
      title: 'Cadbury Dairy Milk',

      videoUrl: '/videos/Cadbury Dairy Milk.mp4'
    },
    {
      id: 1,
      title: 'Attractive Fitness Gym',

      videoUrl: "/videos/Gym =.mp4"
    },
    {
      id: 2,
      title: 'Amul Janmashtami Special',

      videoUrl: "/videos/Amul Janmashtami Special.mp4"
    },

    {
      id: 5,
      title: 'Architectural Design',

      videoUrl: "public/videos/Architectural Design.mp4"
    },
    {
      id: 6,
      title: 'Cyber Security',

      videoUrl: "/videos/Cyber Security.mp4"
    },
    {
      id: 7,
      title: 'Eco-Friendly Launch',

      videoUrl: "/videos/Eco-Friendly Launch.mp4"
    },
    {
      id: 3,
      title: "Republic Day",

      videoUrl: "/videos/republic.mp4"
    },
    {
      id: 4,
      title: 'Animated Video',

      videoUrl: "/videos/Video-445.mp4"
    },

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section id="transforming-brands" ref={ref} className="container mx-auto py-10 px-4 sm:px-6" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className=" max-w-7xl mx-auto">
        {/* Section Header with Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-3">
            <h2
              className="font-bold text-3xl sm:text-4xl md:text-5xl"
              style={{ color: 'var(--text-primary)' }}
            >
              Our Latest <span style={{ color: 'var(--accent-color)' }}>
                <TypeAnimation
                  sequence={[
                    'Works',
                    2000,
                    'Projects',
                    2000,
                    'Creations',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  deletionSpeed={80}
                  repeat={Infinity}
                />
              </span>
            </h2>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 rounded-full transition-all duration-300 hover:bg-orange-500/10"
              style={{ color: 'var(--text-primary)' }}
              aria-label={isExpanded ? "Collapse section" : "Expand section"}
            >
              <SafeIcon
                icon={isExpanded ? FiChevronUp : FiChevronDown}
                className="w-6 h-6"
              />
            </button>
          </div>
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            Explore our latest video projects showcasing diverse industries and creative excellence
          </p>
        </motion.div>

        {/* Collapsible Video Grid */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {films.map((film) => (
                  <motion.div
                    key={film.id}
                    variants={itemVariants}
                    className="group relative rounded-lg overflow-hidden border transition-all duration-300 hover:border-orange-500/50"
                    style={{
                      borderColor: 'var(--border-color)',
                      backgroundColor: 'var(--card-bg)' // Fix for white corners
                    }}
                  >
                    {/* Video Container */}
                    <div className="relative w-full bg-black" style={{ aspectRatio: '16/9' }}>
                      <video
                        src={film.videoUrl}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        controls
                        muted
                        loop
                      />

                      {/* Subtle Overlay on Hover - doesn't block controls */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-5" style={{ backgroundColor: 'var(--card-bg)' }}>
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex-1">
                          <h3
                            className="font-semibold text-sm sm:text-base line-clamp-2"
                            style={{ color: 'var(--text-primary)' }}
                          >
                            {film.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section >
  );
};

export default GlimpseAtFilms;