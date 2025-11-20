import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const rotatingPhrases = [
  'Smarter',
  'Faster',
  'Creative',
  'Dynamic',
  'Efficient',
  'Transformative',
  'Impactful',
];

export default function AISection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % rotatingPhrases.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative py-16 sm:py-20 px-4 sm:px-6 overflow-hidden"
      style={{
        backgroundColor: 'var(--bg-primary)',
        fontFamily: 'Manrope, sans-serif',
      }}
    >
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(135deg, var(--bg-primary) 60%, var(--accent-color) 100%)",
          opacity: 0.09,
          pointerEvents: 'none',
        }}
      />

      {/* Animated Background Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 0.3,
            scale: [1, 1.15, 1],
            x: [0, 50, 0],
            y: [0, 40, 0],
            rotate: [0, 15, -10, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          style={{
            width: 480,
            height: 420,
            background: "radial-gradient(circle at 60% 60%, var(--accent-color-light), transparent 80%)",
            filter: "blur(50px)",
            position: "absolute",
            top: "-120px",
            left: "-120px",
            borderRadius: "50%",
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 0.22,
            scale: [1, 1.1, 1.05, 1],
            x: [0, -60, 0],
            y: [0, 50, 0],
            rotate: [0, -10, 10, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", delay: 2 }}
          style={{
            width: 400,
            height: 440,
            background: "radial-gradient(circle at 30% 30%, var(--bg-secondary), transparent 80%)",
            filter: "blur(60px)",
            position: "absolute",
            bottom: "-110px",
            right: "-180px",
            borderRadius: "50%",
          }}
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 container mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {/* Heading */}
          <div
            style={{
              fontSize: 'var(--text-2xl)',
              fontWeight: 600,
              color: 'var(--text-primary)',
              fontFamily: '"Great Vibes", cursive',
              fontStyle: 'italic',
            }}
          >
            Blending AI Precision with Human Passion
          </div>

          {/* Rotating Text (Orange + Animation) */}
          <motion.span
            key={index}
            style={{
              fontSize: 'var(--text-4xl)',
              fontWeight: 700,
              color: 'var(--accent-color)',
              display: 'inline-block',
            }}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {rotatingPhrases[index]}
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}