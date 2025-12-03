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
      title: "Lightning Fast Production",
      description: "Create AI avatars, animated graphics, product videos, and music videos in record time with our AI-enhanced workflow that cuts production time by 60%."
    },
    {
      icon: FiShield,
      title: "Enterprise-Grade Security",
      description: "Your data and creative assets are protected with bank-level encryption and secure cloud infrastructure."
    },
    {
      icon: FiTrendingUp,
      title: "Proven ROI Results",
      description: "Our AI-powered services including cloned reel videos, ad films, and animated content deliver 3x engagement increase and 45% cost reduction."
    },
    {
      icon: FiUsers,
      title: "Expert Creative Team",
      description: "Work with industry veterans who specialize in AI avatar cloning, animated videos, and cutting-edge AI video production technology."
    }
  ];

  return (
    <section ref={ref} className="py-12 sm:py-16 px-4 sm:px-6" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-bold mb-4" style={{ fontSize: 'var(--text-4xl)', color: 'var(--text-primary)' }}>
            Why Choose Our AI Video Agency
          </h2>
          <p
            className="max-w-3xl mx-auto leading-relaxed"
            style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)' }}
          >
            We combine cutting-edge artificial intelligence with creative expertise to deliver exceptional video content that drives results.
          </p>
        </motion.div>

        {/* Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-bold mb-4" style={{ fontSize: 'var(--text-xl)', color: 'var(--text-primary)' }}>
                See Our AI-Powered Process in Action
              </h3>
              <p
                className="leading-relaxed mb-6"
                style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 1.7 }}
              >
                Watch how our intelligent workflow transforms complex video production challenges into seamless, efficient processes. From concept to final delivery, experience the future of content creation.
              </p>
            </div>

            {/* Video */}
            <div className="relative rounded-2xl overflow-hidden glass-card group" style={{ minHeight: '300px' }}>
              <video
                ref={videoRef}
                className="w-full rounded-2xl"
                style={{ height: '360px', objectFit: 'cover' }}
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/videos/eagle.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <motion.button
                  className="p-4 rounded-full"
                  style={{ backgroundColor: 'var(--accent-color)' }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
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
                  <SafeIcon icon={isPlaying ? FiPause : FiPlay} className="w-8 h-8 text-white" />
                </motion.button>
              </div>
            </div>


          </motion.div>

          {/* Right Section - Features */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 120 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.6 + index * 0.25, ease: "easeOut" }}
                className="flex items-start space-x-4 p-4 rounded-xl glass-card hover:bg-teal-500/5 transition-all duration-300"
              >
                <div
                  className="p-3 rounded-lg flex-shrink-0"
                  style={{ backgroundColor: 'var(--accent-color)' }}
                >
                  <SafeIcon icon={feature.icon} className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold mb-2" style={{ fontSize: 'var(--text-base)', color: 'var(--text-primary)' }}>
                    {feature.title}
                  </h4>
                  <p
                    className="leading-relaxed"
                    style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', lineHeight: 1.6 }}
                  >
                    {feature.description}
                  </p>
                </div>
              </motion.div>

            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="pt-4"
            >
              <button className="btn-primary w-full sm:w-auto">
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