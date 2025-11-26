import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCheck } = FiIcons;

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const pricingPlans = [
    {
      title: "AI Avatar Productions",
      description: "Hyper-realistic, on-screen virtual presenters to deliver any message.",
      price: "$500",
      priceDetails: "/FIRST 30 SECONDS",
      features: [
        "+$250 each additional 60 seconds, pro-rated",
        "All videos tailored to your brand",
        "Human creativity included—from concept to script to completion",
        "Choose from a diverse range of spokespersons or go \"faceless\" with VO only"
      ],
      highlight: false
    },
    {
      title: "AI Cinematic Productions",
      description: "Hollywood-esque scenes and montages crafted with cutting-edge tools & expert storytelling.",
      price: "$3,000+",
      priceDetails: "(CUSTOM QUOTED)",
      features: [
        "Pricing depends on length, complexity & amount of custom scenes",
        "All videos tailored to your brand",
        "Human creativity included—from concept to script to completion"
      ],
      highlight: true
    }
  ];

  return (
    <section ref={ref} className="py-12 sm:py-16 px-4 sm:px-6" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span
            className="font-semibold mb-3 inline-block"
            style={{ color: 'var(--accent-color)', fontSize: 'var(--text-base)' }}
          >
            Affordable & Scaleable
          </span>
          <h2 className="font-bold" style={{ fontSize: 'var(--text-4xl)', color: 'var(--text-primary)' }}>
            AI Video Pricing
          </h2>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-8 sm:p-10 rounded-2xl flex flex-col transition-all duration-300 border-2"
              style={{
                backgroundColor: 'var(--card-bg)',
                borderColor: 'var(--accent-color)',
                boxShadow: plan.highlight
                  ? '0 0 40px rgba(0, 206, 209, 0.2)'
                  : '0 0 20px rgba(0, 206, 209, 0.1)'
              }}
            >
              <h3 className="font-bold mb-3" style={{ fontSize: 'var(--text-xl)', color: 'var(--text-primary)' }}>
                {plan.title}
              </h3>
              <p className="mb-8" style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)' }}>
                {plan.description}
              </p>
              <div className="my-4">
                <span className="font-bold" style={{ fontSize: 'var(--text-4xl)', color: 'var(--text-primary)' }}>
                  {plan.price}
                </span>
                <span className="ml-2" style={{ color: 'var(--text-muted)' }}>
                  {plan.priceDetails}
                </span>
              </div>
              <ul className="space-y-4 my-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <SafeIcon
                      icon={FiCheck}
                      className="w-5 h-5 mr-3 mt-1 flex-shrink-0"
                      style={{ color: 'var(--accent-color)' }}
                    />
                    <span style={{ color: 'var(--text-secondary)' }}>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className="btn-primary mt-auto"
                style={{ backgroundColor: 'var(--accent-color)', color: 'var(--text-inverse)' }}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;