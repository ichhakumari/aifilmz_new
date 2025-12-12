import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPlay, FiPause, FiZap, FiShield, FiTrendingUp, FiUsers } = FiIcons;

const WhyChooseAIAgencySection = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const videoRef = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [isPlaying, setIsPlaying] = useState(true);

  const handleContactClick = () => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const features = [
    {
      icon: FiZap,
      emoji: "⚡",
      title: "Lightning Fast Production",
      description: "Our AI-enhanced workflow transforms video production into seamless, efficient processes that deliver results in record time.",
      stats: ["60% Faster", "AI-Powered"],
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      shadow: "rgba(102, 126, 234, 0.4)"
    },
    {
      icon: FiTrendingUp,
      emoji: "🎯",
      title: "Proven ROI Impact",
      description: "Drive measurable results with our data-driven approach that consistently delivers exceptional engagement and cost efficiency.",
      stats: ["3x Engagement", "45% Cost Cut"],
      gradient: "linear-gradient(135deg, #10b981 0%, #34d399 100%)",
      shadow: "rgba(16, 185, 129, 0.4)"
    },
    {
      icon: FiUsers,
      emoji: "🎨",
      title: "Expert Creative Team",
      description: "Industry veterans specializing in AI video technology bring years of experience to every project, ensuring top-tier quality.",
      stats: ["10+ Years", "Award-Winning"],
      gradient: "linear-gradient(135deg, #ec4899 0%, #f472b6 100%)",
      shadow: "rgba(236, 72, 153, 0.4)"
    },
    {
      icon: FiShield,
      emoji: "🔒",
      title: "Bank-Level Security",
      description: "Enterprise-grade encryption and secure cloud infrastructure protect your valuable content and sensitive data at all times.",
      stats: ["256-bit SSL", "ISO Certified"],
      gradient: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)",
      shadow: "rgba(59, 130, 246, 0.4)"
    }
  ];

  return (
    <section ref={ref} className="py-10  px-4 sm:px-6" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16"
        >
          <h2
            className="font-bold text-xl sm:text-2xl md:text-3xl mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Why Choose <span style={{ color: 'var(--accent-color)' }}>AIFILMZ</span>
          </h2>
          <p
            className="max-w-2xl mx-auto text-base  leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            Cutting-edge AI combined with creative expertise for exceptional results
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left Section - Video */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col"
          >
            <div className="mb-6 sm:mb-8">
              <h3
                className="font-bold text-xl sm:text-2xl mb-3"
                style={{ color: 'var(--text-primary)' }}
              >
                AI-Powered Process
              </h3>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                Watch how our intelligent workflow transforms video production into seamless, efficient processes.
              </p>
            </div>

            {/* Video */}
            <div className="relative rounded-xl overflow-hidden group flex-grow bg-black/20" style={{ minHeight: '280px' }}>
              <video
                ref={videoRef}
                className="w-full h-full"
                style={{ objectFit: 'cover' }}
                autoPlay
                muted
                loop
                playsInline
                loading="lazy"
                preload="metadata"
              >
                <source src="https://res.cloudinary.com/dqgknssu8/video/upload/v1765371480/Edu_hgfl3w.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <motion.button
                  className="p-3 sm:p-4 rounded-full shadow-lg"
                  style={{ backgroundColor: 'var(--accent-color)' }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    if (videoRef.current) {
                      if (isPlaying) {
                        videoRef.current.pause();
                        setIsPlaying(false);
                      } else {
                        videoRef.current.play();
                        setIsPlaying(true);
                      }
                    }
                  }}
                >
                  <SafeIcon icon={isPlaying ? FiPause : FiPlay} className="w-6 h-6 text-white" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Right Section - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-col"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 flex-grow">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.35 + index * 0.1 }}
                  className="relative rounded-2xl overflow-hidden group cursor-pointer"
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                  }}
                  whileHover={{
                    y: -12,
                    scale: 1.02,
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    boxShadow: `0 30px 60px rgba(0,0,0,0.4), 0 0 80px rgba(254, 74, 35, 0.4)`,
                  }}
                >
                  {/* Gradient overlay on hover */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: feature.gradient,
                      opacity: 0,
                    }}
                    whileHover={{ opacity: 0.08 }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                    }}
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.7 }}
                  />

                  {/* Content */}
                  <div className="relative z-10 p-5">
                    {/* Icon */}
                    <motion.div
                      className="mb-3 w-fit"
                      whileHover={{ rotate: 360, scale: 1.15 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center"
                        style={{
                          background: 'rgba(254, 74, 35, 0.9)',
                          boxShadow: `0 10px 40px rgba(254, 74, 35, 0.4)`,
                        }}
                      >
                        <SafeIcon icon={feature.icon} className="w-7 h-7 text-white" />
                      </div>
                    </motion.div>

                    {/* Title */}
                    <h4
                      className="font-bold text-base mb-2"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {feature.title}
                    </h4>

                    {/* Description */}
                    <p
                      className="text-xs leading-relaxed mb-3"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {feature.description}
                    </p>

                    {/* Stat Badges */}
                    <div className="flex gap-2 flex-wrap">
                      {feature.stats.map((stat, statIndex) => (
                        <motion.span
                          key={statIndex}
                          className="px-2.5 py-1 rounded-lg text-xs font-semibold"
                          style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            color: '#fe4a23',
                            backdropFilter: 'blur(10px)',
                          }}
                          whileHover={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            borderColor: 'rgba(255, 255, 255, 0.2)',
                            y: -2,
                          }}
                        >
                          {stat}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="w-full"
            >
              <button
                onClick={handleContactClick}
                className="w-full py-3 px-6 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:shadow-lg hover:scale-105"
                style={{
                  backgroundColor: 'var(--accent-color)',
                  color: 'white'
                }}
              >
                Schedule a Demo
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseAIAgencySection;