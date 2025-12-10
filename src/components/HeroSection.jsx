import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPlay, FiArrowDown } = FiIcons;

const HeroSection = () => {
  const navigate = useNavigate();

  const handleQuoteClick = () => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShowreelClick = () => {
    // Scroll to transforming brands section
    const transformingBrandsSection = document.getElementById('transforming-brands');
    if (transformingBrandsSection) {
      transformingBrandsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        >
          <source
            src="/videos/Herosection1.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-5">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 md:w-2 md:h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Hero Content - Left Aligned */}
      <div className="relative z-10 h-full flex items-end pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            {/* Headline with Animated Scribble */}
            <div>
              <div className="inline-block">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 3.2 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
                >
                  <span style={{ color: '#FE4A23' }}>High-Impact</span> Videos That Help Brands Stand Out.
                </motion.h1>

                {/* Animated Scribble Underline */}
                <motion.svg
                  width="280"
                  height="25"
                  viewBox="0 0 280 25"
                  preserveAspectRatio="none"
                  className="block h-auto -mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 5.8 }}
                >
                  <defs>
                    <linearGradient id="scribbleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#FE4A23" stopOpacity="1" />
                      <stop offset="100%" stopColor="#E03A16" stopOpacity="1" />
                    </linearGradient>
                  </defs>

                  <motion.path
                    d="M 5,12 Q 70,5 140,12 T 275,12"
                    stroke="url(#scribbleGradient)"
                    strokeWidth="2.2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 5.9, ease: "easeInOut" }}
                  />
                </motion.svg>
              </div>
            </div>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 5.4 }}
              className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 leading-relaxed max-w-xl"
            >
              We create cinematic ads, promo videos, and content tailored to your brand — delivered fast and with agency-level quality.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 5.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {/* Primary CTA - Get a Free Quote */}
              <button
                onClick={handleQuoteClick}
                className="group px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur text-white font-normal text-xs sm:text-sm rounded-full border border-white/10 transition-all duration-300 hover:bg-white/20 hover:border-white/50"

              >
                <span className="flex items-center justify-center gap-2">
                  <svg fill="#ffffff" height={14} width={14} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M29.919 6.163l-4.225 19.925c-0.319 1.406-1.15 1.756-2.331 1.094l-6.438-4.744-3.106 2.988c-0.344 0.344-0.631 0.631-1.294 0.631l0.463-6.556 11.931-10.781c0.519-0.462-0.113-0.719-0.806-0.256l-14.75 9.288-6.35-1.988c-1.381-0.431-1.406-1.381 0.288-2.044l24.837-9.569c1.15-0.431 2.156 0.256 1.781 2.013z"></path> </g></svg> Get a Free Quote
                </span>
              </button>

              {/* Secondary CTA - Watch Our Showreel */}
              <button
                onClick={handleShowreelClick}
                className="group px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur text-white font-normal text-xs sm:text-sm rounded-full border border-white/10 transition-all duration-300 hover:bg-white/20 hover:border-white/50"

              >
                <span className="flex items-center justify-center gap-2">
                  <svg viewBox="0 0 24 24" height={14} width={14} fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="#ffffff" stroke-width="1.5"></path> <path d="M21.5 8H2.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M10.5 2.5L7 8" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M17 2.5L13.5 8" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M15 14.5C15 13.8666 14.338 13.4395 13.014 12.5852C11.6719 11.7193 11.0008 11.2863 10.5004 11.6042C10 11.9221 10 12.7814 10 14.5C10 16.2186 10 17.0779 10.5004 17.3958C11.0008 17.7137 11.6719 17.2807 13.014 16.4148C14.338 15.5605 15 15.1334 15 14.5Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> </g></svg> Watch Our Showreel
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;