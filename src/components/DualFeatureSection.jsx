import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import { useTheme } from '../context/ThemeContext';
import * as FiIcons from 'react-icons/fi';

const { FiArrowRight, FiCode, FiFilm, FiLayers, FiZap, FiTarget } = FiIcons;

const DualFeatureSection = () => {
  const { isDark } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      id: 1,
      icon: FiCode,
      title: "AI-Powered Creation",
      description: "Harness cutting-edge artificial intelligence to automate complex workflows, generate stunning visuals, and accelerate your production timeline without compromising quality.",
      highlights: ["Smart Automation", "Visual Generation", "Time Efficiency"],
      cta: "Explore AI Tools",
      gradientColors: ["#D12300", "#FF6B35"],
      bgPattern: "tech"
    },
    {
      id: 2,
      icon: FiFilm,
      title: "Creative Excellence",
      description: "Combine human artistry with machine precision to deliver compelling narratives that resonate with your audience and drive meaningful engagement.",
      highlights: ["Expert Storytelling", "Visual Mastery", "Audience Connection"],
      cta: "View Portfolio",
      gradientColors: ["#D12300", "#B11E00"],
      bgPattern: "creative"
    }
  ];

  const AnimatedBackground = ({ pattern, isActive }) => {
    if (!isActive) return null;

    return (
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(209, 35, 0, 0.15) 0%, transparent 70%)',
            top: '-20%',
            left: '-10%',
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(209, 35, 0, 0.1) 0%, transparent 70%)',
            bottom: '-10%',
            right: '-10%',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -20, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Animated lines */}
        {pattern === 'tech' && (
          <>
            <motion.svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 400 400"
              style={{ opacity: 0.3 }}
            >
              <motion.line
                x1="0"
                y1="100"
                x2="400"
                y2="100"
                stroke="#D12300"
                strokeWidth="1"
                animate={{
                  x2: [400, 100, 400],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.line
                x1="100"
                y1="0"
                x2="100"
                y2="400"
                stroke="#D12300"
                strokeWidth="1"
                animate={{
                  y2: [400, 200, 400],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
            </motion.svg>
          </>
        )}

        {pattern === 'creative' && (
          <>
            <motion.svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 400 400"
              style={{ opacity: 0.25 }}
            >
              <motion.circle
                cx="200"
                cy="200"
                r="50"
                fill="none"
                stroke="#D12300"
                strokeWidth="1"
                animate={{
                  r: [50, 80, 50],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.circle
                cx="200"
                cy="200"
                r="100"
                fill="none"
                stroke="#D12300"
                strokeWidth="1"
                animate={{
                  r: [100, 130, 100],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
            </motion.svg>
          </>
        )}

        {/* Subtle glow effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: 'radial-gradient(circle at center, transparent 60%, rgba(209, 35, 0, 0.05) 100%)',
          }}
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    );
  };

  return (
    <section 
      ref={ref}
      className="py-20 px-4 sm:px-6 transition-colors duration-500"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 
            className="font-bold mb-4"
            style={{ 
              fontSize: 'var(--text-4xl)',
              color: 'var(--text-primary)'
            }}
          >
            Transform Your Vision Into Reality
          </h2>
          <p 
            className="max-w-3xl mx-auto leading-relaxed"
            style={{ 
              fontSize: 'var(--text-lg)',
              color: 'var(--text-secondary)'
            }}
          >
            Experience the perfect synergy of artificial intelligence and human creativity, delivering results that exceed expectations.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              className="flex-1 relative group"
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Container */}
              <div 
                className="relative p-8 sm:p-10 rounded-2xl transition-all duration-500 overflow-hidden"
                style={{
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
                  border: `1px solid ${isDark ? 'rgba(209, 35, 0, 0.2)' : 'rgba(209, 35, 0, 0.15)'}`,
                  boxShadow: isDark 
                    ? '0 10px 40px rgba(0, 0, 0, 0.3), 0 0 80px rgba(209, 35, 0, 0.1)'
                    : '0 10px 40px rgba(0, 0, 0, 0.1), 0 0 80px rgba(209, 35, 0, 0.05)',
                  transform: hoveredCard === feature.id ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                }}
              >
                {/* Animated Background */}
                <AnimatedBackground 
                  pattern={feature.bgPattern} 
                  isActive={hoveredCard === feature.id || isInView}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                    style={{
                      background: `linear-gradient(135deg, ${feature.gradientColors[0]}, ${feature.gradientColors[1]})`,
                      boxShadow: `0 8px 32px ${feature.gradientColors[0]}30`,
                    }}
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <SafeIcon 
                      icon={feature.icon} 
                      className="w-8 h-8 text-white"
                    />
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    className="font-bold mb-4"
                    style={{
                      fontSize: 'var(--text-2xl)',
                      color: 'var(--text-primary)'
                    }}
                    animate={{
                      color: hoveredCard === feature.id ? '#D12300' : 'var(--text-primary)'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.title}
                  </motion.h3>

                  {/* Description */}
                  <p 
                    className="mb-6 leading-relaxed"
                    style={{
                      fontSize: 'var(--text-base)',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.7
                    }}
                  >
                    {feature.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-8">
                    {feature.highlights.map((highlight, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ 
                          delay: 0.6 + index * 0.2 + i * 0.1,
                          duration: 0.5
                        }}
                      >
                        <motion.div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: '#D12300' }}
                          animate={{
                            scale: [1, 1.5, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3
                          }}
                        />
                        <span 
                          className="text-sm font-medium"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          {highlight}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group"
                    style={{
                      background: `linear-gradient(135deg, ${feature.gradientColors[0]}, ${feature.gradientColors[1]})`,
                      color: 'white',
                      boxShadow: `0 4px 20px ${feature.gradientColors[0]}40`,
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: `0 8px 30px ${feature.gradientColors[0]}60`
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{feature.cta}</span>
                    <motion.div
                      animate={{ x: hoveredCard === feature.id ? 5 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
                    </motion.div>
                  </motion.button>
                </div>

                {/* Hover Glow Effect */}
                {hoveredCard === feature.id && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle at center, rgba(209, 35, 0, 0.1) 0%, transparent 70%)',
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DualFeatureSection;