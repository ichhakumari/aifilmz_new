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
      description: "Every great video starts with a great idea. Tell us what you want to create — AI avatar cloning, animated graphics, product demos, ad films, music videos, or social media reels. Our AI-powered system analyzes your requirements and proposes the smartest creative direction, ensuring your project begins with clarity and purpose."
    },
    {
      icon: FiCode,
      title: "AI-Powered Creation",
      description: "This is where creativity meets intelligence. Your vision, combined with our creative team and AI tools, transforms into stunning visual content. We generate lifelike AI avatars, craft animations, design reels, and produce high-quality video assets — all refined by our expert editors and storytellers to maintain a human touch and cinematic quality."
    },
    {
      icon: FiPlayCircle,
      title: "Review & Deliver",
      description: "We collaborate with you through a smooth review process. Share your feedback, request changes, and watch your video evolve with each iteration. Once finalized, we deliver optimized content ready for all platforms — social media, websites, ads, or campaign launches."
    }
  ];

  return (
    <section ref={ref} id="how-it-works" className="py-10 px-4 sm:px-6" style={{ backgroundColor: 'var(--bg-quaternary)' }}>
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="font-bold mb-4" style={{ fontSize: 'var(--text-4xl)', color: 'var(--text-primary)' }}>
            How We Work
          </h2>
          <p
            className="max-w-3xl mx-auto leading-relaxed"
            style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)' }}
          >
            Our streamlined process makes creating professional video content simple, fast, and exceptionally effective. With the perfect blend of human creativity and AI innovation, we turn your ideas into powerful visuals.
          </p>
        </motion.div>

        {/* Three Column Layout */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              className="text-center"
            >
              {/* Step Number */}
              <motion.div className="mb-4 mx-auto">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2, type: "spring" }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{ backgroundColor: 'var(--accent-color)' }}
                  >
                    <SafeIcon icon={step.icon} className="w-7 h-7 text-white" />
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
              <div className="glass-card p-5 sm:p-6">
                <h3 className="font-bold mb-3" style={{ fontSize: 'var(--text-lg)', color: 'var(--text-primary)' }}>
                  {step.title}
                </h3>
                <p
                  className="leading-relaxed mb-4"
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
          <p className="mb-6" style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)' }}>
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