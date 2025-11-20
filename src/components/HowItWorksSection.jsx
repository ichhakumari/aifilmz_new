import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiEdit3, FiCode, FiPlayCircle, FiArrowRight } = FiIcons;

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const steps = [
    {
      icon: FiEdit3,
      title: "Share Your Vision",
      description: "Tell us about your project goals, target audience, and creative preferences. Our AI analyzes your requirements to suggest optimal approaches."
    },
    {
      icon: FiCode,
      title: "AI-Powered Creation",
      description: "Our intelligent systems generate initial concepts, storyboards, and assets while our creative team refines them with human expertise."
    },
    {
      icon: FiPlayCircle,
      title: "Review & Deliver",
      description: "Collaborate with our team through iterative feedback. Finalize your video and receive deliverables optimized for all platforms."
    }
  ];

  return (
    <section ref={ref} className="py-16 sm:py-20 px-4 sm:px-6" style={{ backgroundColor: 'var(--bg-quaternary)' }}>
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-bold mb-4" style={{ fontSize: 'var(--text-5xl)', color: 'var(--text-primary)' }}>
            How We Works
          </h2>
          <p 
            className="max-w-3xl mx-auto leading-relaxed" 
            style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)' }}
          >
            Our streamlined process makes creating professional video content simple, fast, and effective.
          </p>
        </motion.div>

        {/* Three Column Layout */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              className="text-center"
            >
              {/* Step Number */}
              <motion.div className="mb-6 mx-auto">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2, type: "spring" }}
                >
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" 
                    style={{ backgroundColor: 'var(--accent-color)' }}
                  >
                    <SafeIcon icon={step.icon} className="w-8 h-8 text-white" />
                  </div>
                  <div 
                    className="inline-block px-3 py-1 rounded-full text-sm font-semibold" 
                    style={{ backgroundColor: 'var(--highlight-color)', color: 'var(--accent-color)' }}
                  >
                    Step {index + 1}
                  </div>
                </motion.div>
              </motion.div>

              {/* Content */}
              <div className="glass-card p-6 sm:p-8">
                <h3 className="font-bold mb-4" style={{ fontSize: 'var(--text-xl)', color: 'var(--text-primary)' }}>
                  {step.title}
                </h3>
                <p 
                  className="leading-relaxed mb-6" 
                  style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 1.7 }}
                >
                  {step.description}
                </p>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                    <motion.div
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    >
                      <SafeIcon icon={FiArrowRight} className="w-8 h-8" style={{ color: 'var(--accent-color)' }} />
                    </motion.div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="mb-6" style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)' }}>
            Ready to get started?{' '}
            <a 
              href="#contact-us" 
              className="font-semibold ml-2 transition-colors hover:opacity-80" 
              style={{ color: 'var(--accent-color)' }}
            >
              Talk to our team
            </a>
          </p>
          <button className="btn-primary">
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;