import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  'AIIMS Geriatrics',
  'Apollo Indraprastha',
  'IVY Hospital',
  'Sharoma Candles',
  'Ecovana',
  'Estique Clinic',
  'Astro Bazzar',
];

// Duplicate logos for a seamless loop
const duplicatedLogos = [...logos, ...logos, ...logos];

const Logo = ({ name }) => {
  const customStyles = {
    Google: { fontFamily: "'Product Sans', sans-serif", fontWeight: '700' },
    MORNINGSTAR: { letterSpacing: '0.05em' }
  };
  return (
    <span
      className="text-2xl font-semibold tracking-wider whitespace-nowrap"
      style={{
        color: 'var(--text-muted)',
        ...customStyles[name]
      }}
    >
      {name}
    </span>
  );
};

const TrustedBy = () => {
  return (
    <div className="py-10 overflow-x-hidden" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3
          className="text-center text-xs font-bold tracking-widest uppercase mb-12"
          style={{ color: 'var(--text-muted)' }}
        >
          Trusted by the world's leading companies
        </h3>
        <div className="relative overflow-hidden">
          <motion.div
            className="flex items-center"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              ease: 'linear',
              duration: 30,
              repeat: Infinity,
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 mx-8 sm:mx-12 flex justify-center items-center min-w-fit">
                <Logo name={logo} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;