import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPlay, FiPause, FiZap, FiShield, FiTrendingUp, FiUsers } = FiIcons;

const WhyChooseAIAgencySection = () => {
  const ref = useRef(null);
  const videoRef = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [isPlaying, setIsPlaying] = useState(true);

  const features = [
    {
      icon: FiZap,
      title: "Lightning Fast",
      description: "60% faster production with AI-enhanced workflow"
    },
    {
      icon: FiShield,
      title: "Bank-Level Security",
      description: "Enterprise-grade encryption & secure cloud infrastructure"
    },
    {
      icon: FiTrendingUp,
      title: "Proven ROI",
      description: "3x engagement increase & 45% cost reduction"
    },
    {
      icon: FiUsers,
      title: "Expert Creative Team",
      description: "Industry veterans specializing in AI video technology"
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
              >
                <source src="videos/edu.mp4" type="video/mp4" />
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 flex-grow">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.35 + index * 0.1 }}
                  className="p-5 rounded-lg border transition-all duration-300 hover:border-orange-500/50 hover:bg-orange-500/5"
                  style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)' }}
                >
                  <div
                    className="p-2 rounded-lg w-fit mb-3 flex items-center justify-center"
                    style={{ backgroundColor: 'var(--accent-color)', width: '36px', height: '36px' }}
                  >
                    <SafeIcon icon={feature.icon} className="w-5 h-5 text-white" />
                  </div>
                  <h4
                    className="font-semibold text-sm sm:text-base mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {feature.title}
                  </h4>
                  <p
                    className="text-xs sm:text-sm leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {feature.description}
                  </p>
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