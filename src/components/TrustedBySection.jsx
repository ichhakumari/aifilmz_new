import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const TrustedBySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const companies = ["TechCorp", "InnovateLabs", "GlobalCo", "FutureTech", "SmartBiz"];

  const stats = [
    { number: "10K+", label: "Businesses Trust AI Filmz" },
    { number: "40+", label: "Languages Supported" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "AI Support" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      ref={ref}
      className="py-10 px-4 sm:px-6"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3
            className="font-semibold"
            style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--text-secondary)',
              letterSpacing: '0.05em'
            }}
          >
            Trusted by Industry Leaders
          </h3>
        </motion.div>

        {/* Company Logos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center items-center gap-x-8 sm:gap-x-12 gap-y-4 mb-16"
        >
          {companies.map((company, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-lg sm:text-xl font-medium"
              style={{ color: 'var(--text-muted)' }}
            >
              {company}
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card text-center p-6 sm:p-8"
            >
              <h4
                className="font-bold mb-2"
                style={{
                  fontSize: 'var(--text-4xl)',
                  color: 'var(--text-primary)'
                }}
              >
                {stat.number}
              </h4>
              <p
                style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--text-secondary)'
                }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBySection;