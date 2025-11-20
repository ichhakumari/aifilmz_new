import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPlay, FiExternalLink, FiChevronLeft, FiChevronRight } = FiIcons;

const OurWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const [activeProject, setActiveProject] = useState(0);


  const projects = [
    {
      id: 1,
      title: "AI-Generated Commercial",
      description: "Revolutionary AI-powered commercial for a tech startup that showcases the future of automated content creation",
      videoUrl: "/public/videos/Cadbury Dairy Milk.mp4",
      thumbnail: "/public/videos/Cadbury Dairy Milk.mp4",
      category: "Commercial",
      duration: "2:30",
      details: {
        client: "TechCorp Solutions",
        timeline: "2 weeks",
        technologies: ["AI Generation", "Motion Graphics", "Voice Synthesis"],
        challenge: "Create a compelling commercial in record time while maintaining high production quality",
        solution: "Leveraged AI-powered video generation combined with human creative direction"
      }
    },
    {
      id: 2,
      title: "3D Product Visualization",
      description: "Photorealistic 3D rendering for luxury brand showcasing products in stunning detail",
      videoUrl: "/public/videos/shoes.mp4",
      thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "3D Rendering",
      duration: "1:45",
      details: {
        client: "Luxury Brands Inc.",
        timeline: "3 weeks",
        technologies: ["3D Modeling", "Ray Tracing", "AI Enhancement"],
        challenge: "Create ultra-realistic product visualizations that match physical photography",
        solution: "Advanced 3D rendering with AI-powered texture and lighting optimization"
      }
    },
    {
      id: 3,
      title: "Motion Graphics Explainer",
      description: "Animated explainer video with AI-enhanced visuals for complex technology concepts",
      videoUrl: "/public/videos/bear.mp4",
      thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Animation",
      duration: "3:15",
      details: {
        client: "InnovateTech",
        timeline: "1.5 weeks",
        technologies: ["Motion Graphics", "AI Animation", "Voice Over"],
        challenge: "Explain complex AI technology in an engaging, easy-to-understand format",
        solution: "Dynamic motion graphics with AI-assisted animation and clear storytelling"
      }
    },
    {
      id: 4,
      title: "Virtual Production",
      description: "Cutting-edge virtual production techniques for cinematic storytelling",
      videoUrl: "/public/videos/zomato.mp4",
      thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Virtual Production",
      duration: "4:20",
      details: {
        client: "Film Studios Ltd.",
        timeline: "4 weeks",
        technologies: ["Virtual Sets", "Real-time Rendering", "AI Camera Work"],
        challenge: "Create cinematic content without physical location constraints",
        solution: "Virtual production pipeline with AI-enhanced camera movements and backgrounds"
      }
    },
    {
      id: 5,
      title: "AI Documentary",
      description: "Documentary enhanced with AI-powered editing and archival footage restoration",
      videoUrl: "/public/videos/republic.mp4",
      thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Documentary",
      duration: "5:00",
      details: {
        client: "Documentary Channel",
        timeline: "6 weeks",
        technologies: ["AI Editing", "Footage Restoration", "Color Grading"],
        challenge: "Restore and enhance historical footage for modern documentary",
        solution: "AI-powered restoration combined with traditional documentary filmmaking"
      }
    }
  ];

  const currentProject = projects[activeProject];

  const handlePrevious = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const textVariants = {
    enter: {
      opacity: 0,
      x: -50,
    },
    center: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      x: 50,
      transition: {
        duration: 0.3
      }
    }
  };

  const videoVariants = {
    enter: {
      opacity: 0,
      scale: 0.9,
    },
    center: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 1.1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section ref={ref} className="py-16 sm:py-20 px-4 sm:px-6" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-bold mb-6 gradient-text" style={{ fontSize: 'var(--text-5xl)' }}>
            Our Work
          </h2>
          <p className="max-w-3xl mx-auto leading-relaxed" style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)' }}>
            Explore our portfolio of groundbreaking projects that showcase the perfect fusion of AI technology and creative storytelling.
          </p>
        </motion.div>

        {/* Dynamic Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Dynamic Text Content */}
          <div className="order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-6"
              >
                {/* Category Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block"
                >
                  <span
                    className="px-4 py-2 rounded-full text-sm font-semibold"
                    style={{
                      backgroundColor: 'var(--highlight-color)',
                      color: 'var(--accent-color)'
                    }}
                  >
                    {currentProject.category}
                  </span>
                </motion.div>

                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="font-bold"
                  style={{
                    fontSize: 'var(--text-3xl)',
                    color: 'var(--text-primary)',
                    lineHeight: 1.2
                  }}
                >
                  {currentProject.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="leading-relaxed"
                  style={{
                    fontSize: 'var(--text-lg)',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6
                  }}
                >
                  {currentProject.description}
                </motion.p>

                {/* Project Details */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-4 pt-4"
                >
                  {/* Client Info */}
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent-color)' }}></div>
                    <div>
                      <span className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>Client:</span>
                      <span className="ml-2" style={{ color: 'var(--text-secondary)' }}>{currentProject.details.client}</span>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent-color)' }}></div>
                    <div>
                      <span className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>Timeline:</span>
                      <span className="ml-2" style={{ color: 'var(--text-secondary)' }}>{currentProject.details.timeline}</span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-2">
                    <span className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>Technologies:</span>
                    <div className="flex flex-wrap gap-2">
                      {currentProject.details.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full text-xs font-medium"
                          style={{
                            backgroundColor: 'var(--bg-quaternary)',
                            color: 'var(--text-secondary)',
                            border: '1px solid var(--border-color)'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="pt-4 space-y-3">
                    <div>
                      <span className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>Challenge:</span>
                      <p className="mt-1 text-sm" style={{ color: 'var(--text-secondary)' }}>
                        {currentProject.details.challenge}
                      </p>
                    </div>
                    <div>
                      <span className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>Solution:</span>
                      <p className="mt-1 text-sm" style={{ color: 'var(--text-secondary)' }}>
                        {currentProject.details.solution}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 pt-6"
                >

                  <button
                    className="btn-secondary"
                    onClick={() => window.open(currentProject.videoUrl, '_blank')}
                  >
                    <SafeIcon icon={FiExternalLink} className="w-5 h-5 mr-2" />
                    View Details
                  </button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column - Video Card */}
          <div className="order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject}
                variants={videoVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="relative"
              >
                <div className="glass-card p-4 sm:p-6 group cursor-pointer rounded-2xl overflow-hidden">
                  <div className="relative overflow-hidden rounded-xl mb-4 w-full h-80 sm:h-[400px] lg:h-[500px]">
                    <video
                      src={currentProject.videoUrl}
                      className="w-full h-full object-cover"
                      controls
                      muted
                    >
                      Your browser does not support the video tag.
                    </video>

                    {/* Navigation Buttons */}
                    <button
                      onClick={(e) => { e.stopPropagation(); handlePrevious(); }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-10"
                    >
                      <SafeIcon icon={FiChevronLeft} className="w-6 h-6" />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleNext(); }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-10"
                    >
                      <SafeIcon icon={FiChevronRight} className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Progress Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`transition-all duration-300 ${index === activeProject ? 'scale-125' : 'scale-100'
                    }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeProject ? 'w-8' : 'w-2'
                      }`}
                    style={{
                      backgroundColor: index === activeProject
                        ? 'var(--accent-color)'
                        : 'var(--border-color)'
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;