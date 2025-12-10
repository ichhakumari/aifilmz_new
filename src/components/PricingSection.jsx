import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCheck } = FiIcons;

const PricingSection = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const handleContactClick = () => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pricingPlans = [
    {
      title: "AI Avatar Productions",
      description: "On-screen virtual presenters with hyper-realistic delivery.",
      price: "$50",
      priceDetails: "FIRST 30 SECONDS",
      features: [
        "+$250 per 60 seconds additional",
        "Brand-tailored content",
        "Full creative support",
        "Multiple spokesperson options"
      ],
      highlight: false
    },
    {
      title: "AI Cinematic Productions",
      description: "Hollywood-level scenes with advanced AI & expert storytelling.",
      price: "$1,500+",
      priceDetails: "CUSTOM QUOTED",
      features: [
        "Scalable pricing by complexity",
        "Brand-tailored content",
        "Full creative support",
        "Custom scene creation"
      ],
      highlight: true
    }
  ];

  return (
    <section ref={ref} id="pricing" className="py-10 px-4 sm:px-6" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16"
        >
          <span
            className="font-semibold mb-2 inline-block text-sm tracking-widest uppercase"
            style={{ color: 'var(--accent-color)' }}
          >
            Transparent Pricing
          </span>
          <h2
            className="font-bold text-3xl sm:text-4xl md:text-5xl"
            style={{ color: 'var(--text-primary)' }}
          >
            Simple & <span style={{ color: 'var(--accent-color)' }}>Scalable</span>
          </h2>
          <p
            className="mt-4 text-base sm:text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            Choose the perfect plan for your content needs
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative rounded-xl p-6 sm:p-8 flex flex-col transition-all duration-300 border group overflow-hidden`}
              style={{
                backgroundColor: plan.highlight ? 'var(--bg-tertiary)' : 'var(--card-bg)',
                borderColor: plan.highlight ? 'var(--accent-color)' : 'var(--border-color)',
                borderWidth: '1px',
                boxShadow: plan.highlight
                  ? '0 10px 40px rgba(254, 74, 35, 0.2), 0 4px 12px rgba(0, 0, 0, 0.3)'
                  : '0 4px 20px rgba(0, 0, 0, 0.2)',
              }}
              whileHover={{
                y: -8,
                boxShadow: plan.highlight
                  ? '0 20px 60px rgba(254, 74, 35, 0.3), 0 8px 20px rgba(0, 0, 0, 0.4)'
                  : '0 12px 40px rgba(0, 0, 0, 0.3)',
              }}
            >
              {/* Highlight Badge */}
              {plan.highlight && (
                <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: 'var(--accent-color)' }}></div>
              )}

              {plan.highlight && (
                <div
                  className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold w-fit"
                  style={{
                    backgroundColor: 'var(--accent-color)',
                    color: 'white'
                  }}
                >
                  RECOMMENDED
                </div>
              )}

              {/* Title & Description */}
              <h3
                className="font-bold text-lg sm:text-xl mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                {plan.title}
              </h3>
              <p
                className="text-sm mb-6"
                style={{ color: 'var(--text-secondary)' }}
              >
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span
                    className="font-bold text-3xl sm:text-4xl"
                    style={{ color: 'var(--accent-color)' }}
                  >
                    {plan.price}
                  </span>
                  <span
                    className="text-xs font-semibold tracking-wide uppercase"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {plan.priceDetails}
                  </span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: 'var(--accent-color)', opacity: 0.2 }}
                    >
                      <SafeIcon
                        icon={FiCheck}
                        className="w-3 h-3"
                        style={{ color: 'var(--accent-color)' }}
                      />
                    </div>
                    <span
                      className="text-sm"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={handleContactClick}
                className="w-full py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:scale-105"
                style={{
                  backgroundColor: plan.highlight ? 'var(--accent-color)' : 'var(--bg-tertiary)',
                  color: plan.highlight ? 'white' : 'var(--text-primary)',
                  border: plan.highlight ? 'none' : '1px solid var(--border-color)',
                }}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 text-sm"
          style={{ color: 'var(--text-muted)' }}
        >
          Need a custom solution? <button onClick={handleContactClick} className="font-semibold transition-colors hover:opacity-80" style={{ color: 'var(--accent-color)', fontWeight: '600', background: 'none', border: 'none', cursor: 'pointer' }}>Contact us</button> for enterprise pricing
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;