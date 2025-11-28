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
      title: "AI Avatar Cloning",
      description: "Revolutionary AI-powered avatar cloning technology that creates photorealistic digital twins for personalized video content",
      videoUrl: "/videos/lion.mp4",
      thumbnail: "/public/videos/lion.mp4",
      category: "AI Avatar",
      duration: "2:15",
      details: {
        client: "Digital Media Corp",
        timeline: "1.5 weeks",
        technologies: ["AI Avatar Generation", "Deep Learning", "Face Mapping"],
        challenge: "Create lifelike digital avatars that accurately replicate human expressions and movements",
        solution: "Advanced AI avatar cloning with neural face mapping and real-time expression synthesis"
      }
    },
    {
      id: 2,
      title: "AI Cloned Reel Videos",
      description: "Engaging short-form content created using AI cloning technology for social media platforms and viral marketing campaigns",
      videoUrl: "/videos/republic.mp4",
      thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Social Media Reels",
      duration: "0:45",
      details: {
        client: "Social Buzz Agency",
        timeline: "1 week",
        technologies: ["AI Cloning", "Auto-Editing", "Trend Analysis"],
        challenge: "Produce high-volume, engaging reel content that drives social media engagement",
        solution: "AI-powered reel generation with automated editing and trend-optimized content creation"
      }
    },
    {
      id: 3,
      title: "AI Animated Graphics",
      description: "Stunning animated graphics and motion design created with AI-enhanced tools for modern brand storytelling",
      videoUrl: "/videos/bear.mp4",
      thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Animation",
      duration: "1:30",
      details: {
        client: "Creative Studios Inc",
        timeline: "2 weeks",
        technologies: ["AI Animation", "Motion Graphics", "Procedural Generation"],
        challenge: "Create complex animated graphics with dynamic movements and visual appeal",
        solution: "AI-driven animation system with intelligent motion design and automated keyframing"
      }
    },
    {
      id: 4,
      title: "AI Product Videos",
      description: "Professional product showcase videos with AI-generated visuals and photorealistic 3D rendering for e-commerce",
      videoUrl: "/videos/shoes.mp4",
      thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Product Showcase",
      duration: "1:45",
      details: {
        client: "E-Commerce Brands",
        timeline: "1.5 weeks",
        technologies: ["3D Product Rendering", "AI Enhancement", "Virtual Photography"],
        challenge: "Create stunning product videos without expensive photography setups",
        solution: "AI-powered 3D rendering with virtual lighting and automated product visualization"
      }
    },
    {
      id: 5,
      title: "AI Ad Films",
      description: "High-impact advertising films created with AI technology for maximum audience engagement and brand recall",
      videoUrl: "/videos/zomato.mp4",
      thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Advertisement",
      duration: "0:30",
      details: {
        client: "Brand Marketing Ltd",
        timeline: "2 weeks",
        technologies: ["AI Video Generation", "Smart Editing", "Audience Analytics"],
        challenge: "Produce compelling ad content that resonates with target demographics",
        solution: "AI-driven ad creation with data-backed creative decisions and automated optimization"
      }
    },
    {
      id: 6,
      title: "AI Animated Videos",
      description: "Fully animated video content powered by AI for explainers, brand stories, and entertainment",
      videoUrl: "/videos/Cadbury Dairy Milk.mp4",
      thumbnail: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Animated Content",
      duration: "2:30",
      details: {
        client: "Entertainment Studios",
        timeline: "3 weeks",
        technologies: ["AI Animation", "Character Generation", "Scene Synthesis"],
        challenge: "Create engaging animated content with minimal manual animation work",
        solution: "AI-powered animation pipeline with intelligent character rigging and scene generation"
      }
    },
    {
      id: 7,
      title: "AI Music Videos",
      description: "Creative music videos with AI-generated visuals synchronized to audio for artists and music labels",
      videoUrl: "/videos/Amul Janmashtami Special.mp4",
      thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Music Video",
      duration: "3:20",
      details: {
        client: "Music Label Productions",
        timeline: "2.5 weeks",
        technologies: ["AI Visual Generation", "Audio-Visual Sync", "Style Transfer"],
        challenge: "Create visually stunning music videos that sync perfectly with audio tracks",
        solution: "AI-powered music video generation with automated audio-visual synchronization and style adaptation"
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
    <section ref={ref} className="py-8 sm:py-12 px-4 sm:px-6" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="font-bold mb-4 gradient-text" style={{ fontSize: 'var(--text-4xl)' }}>
            Our Work
          </h2>
          <p className="max-w-3xl mx-auto leading-relaxed" style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)' }}>
            Explore our portfolio of groundbreaking projects that showcase the perfect fusion of AI technology and creative storytelling.
          </p>
        </motion.div>

        {/* Project Navigation - Radio Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setActiveProject(index)}
                className={`flex-shrink-0 px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${index === activeProject
                  ? 'shadow-lg scale-105'
                  : 'hover:scale-102'
                  }`}
                style={{
                  backgroundColor: index === activeProject
                    ? 'var(--accent-color)'
                    : 'var(--bg-quaternary)',
                  color: index === activeProject
                    ? 'white'
                    : 'var(--text-secondary)',
                  border: index === activeProject
                    ? 'none'
                    : '1px solid var(--border-color)'
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{
                    backgroundColor: index === activeProject ? 'white' : 'var(--accent-color)'
                  }}></span>
                  <span>{project.title}</span>
                </div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Dynamic Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-6 items-center">
          {/* Left Column - Dynamic Text Content */}
          <div className="order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-4"
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
                    fontSize: 'var(--text-2xl)',
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
                    fontSize: 'var(--text-base)',
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
                  className="space-y-3 pt-3"
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
                <div className="glass-card p-3 sm:p-4 group cursor-pointer rounded-2xl overflow-hidden">
                  <div className="relative overflow-hidden rounded-xl mb-3 w-full h-80 sm:h-[400px] lg:h-[500px]">
                    <video
                      src={currentProject.videoUrl}
                      className="w-full h-full object-cover"
                      controls
                      muted
                    >
                      Your browser does not support the video tag.
                    </video>

                    {/* Navigation Buttons - On Video */}
                    <button
                      onClick={(e) => { e.stopPropagation(); handlePrevious(); }}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-sm transition-all z-10 shadow-lg"
                    >
                      <SafeIcon icon={FiChevronLeft} className="w-5 h-5" />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleNext(); }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-sm transition-all z-10 shadow-lg"
                    >
                      <SafeIcon icon={FiChevronRight} className="w-5 h-5" />
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