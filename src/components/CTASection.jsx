import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const CTASection = () => {
    const navigate = useNavigate();
    const { isDark } = useTheme();

    const handleContactClick = () => {
        navigate('/contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section
            className="relative py-10 sm:py-12 lg:py-16 px-2 sm:px-4 overflow-hidden"
            style={{ backgroundColor: 'var(--bg-primary)' }}
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Gradient Orbs */}
                <motion.div
                    className="absolute -top-20 -left-20 w-64 h-64 sm:w-96 sm:h-96 rounded-full opacity-20 blur-3xl"
                    style={{ background: 'radial-gradient(circle, var(--primary-orange), transparent)' }}
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 30, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute -bottom-20 -right-20 w-64 h-64 sm:w-96 sm:h-96 rounded-full opacity-20 blur-3xl"
                    style={{ background: 'radial-gradient(circle, var(--secondary-orange), transparent)' }}
                    animate={{
                        scale: [1.2, 1, 1.2],
                        x: [0, -30, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Floating Particles */}
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full"
                        style={{
                            backgroundColor: 'var(--accent-color)',
                            opacity: 0.3,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            x: [0, Math.random() * 20 - 10, 0],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            {/* Main Content */}
            <div className="container mx-auto max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    {/* Main CTA Card */}
                    <motion.div
                        className="relative p-8 sm:p-12 lg:p-16 rounded-3xl overflow-hidden"
                        style={{
                            background: isDark
                                ? 'linear-gradient(135deg, rgba(254, 74, 35, 0.1) 0%, rgba(224, 58, 22, 0.05) 100%)'
                                : 'linear-gradient(135deg, rgba(254, 74, 35, 0.08) 0%, rgba(224, 58, 22, 0.04) 100%)',
                            border: '2px solid var(--border-color)',
                            boxShadow: '0 20px 60px var(--shadow)',
                        }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Animated Border Glow */}
                        <motion.div
                            className="absolute inset-0 rounded-3xl"
                            style={{
                                background: 'linear-gradient(135deg, var(--primary-orange), var(--secondary-orange))',
                                opacity: 0,
                            }}
                            whileHover={{ opacity: 0.1 }}
                            transition={{ duration: 0.3 }}
                        />

                        {/* Sparkle Effect */}
                        <motion.div
                            className="absolute top-8 right-8 text-4xl"
                            animate={{
                                rotate: [0, 360],
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            ✨
                        </motion.div>

                        {/* Content */}
                        <div className="relative z-10">
                            {/* Heading */}
                            <motion.h2
                                className="font-bold mb-4 sm:mb-6"
                                style={{
                                    fontSize: 'var(--text-4xl)',
                                    color: 'var(--text-primary)',
                                    lineHeight: '1.2',
                                }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                            >
                                Got a{' '}
                                <span
                                    className="gradient-text"
                                    style={{
                                        background: 'linear-gradient(135deg, var(--primary-orange), var(--secondary-orange))',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                    }}
                                >
                                    unique idea
                                </span>
                                ?
                            </motion.h2>

                            <motion.h3
                                className="font-semibold mb-3 sm:mb-4"
                                style={{
                                    fontSize: 'var(--text-2xl)',
                                    color: 'var(--text-primary)',
                                }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                            >
                                We'd love to bring it to life.
                            </motion.h3>

                            {/* Description */}
                            <motion.p
                                className="max-w-2xl mx-auto mb-8 sm:mb-10"
                                style={{
                                    fontSize: 'var(--text-lg)',
                                    color: 'var(--text-secondary)',
                                    lineHeight: '1.6',
                                }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                            >
                                Feel free to contact us — we're here to create{' '}
                                <span
                                    className="font-semibold"
                                    style={{ color: 'var(--accent-color)' }}
                                >
                                    magic
                                </span>
                                .
                            </motion.p>

                            {/* CTA Button */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                            >
                                <motion.button
                                    onClick={handleContactClick}
                                    className="group relative px-8 sm:px-12 py-4 sm:py-5 rounded-full font-bold text-white overflow-hidden"
                                    style={{
                                        fontSize: 'var(--text-lg)',
                                        background: 'linear-gradient(135deg, var(--primary-orange), var(--secondary-orange))',
                                        boxShadow: '0 10px 30px rgba(254, 74, 35, 0.4)',
                                    }}
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: '0 15px 40px rgba(254, 74, 35, 0.6)',
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {/* Button Shine Effect */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"
                                        style={{ transform: 'translateX(-100%)' }}
                                        animate={{
                                            transform: ['translateX(-100%)', 'translateX(100%)'],
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            repeatDelay: 1,
                                        }}
                                    />

                                    {/* Button Content */}
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        <span>📞</span>
                                        <span>Get in Touch</span>
                                    </span>

                                    {/* Ripple Effect on Hover */}
                                    <motion.div
                                        className="absolute inset-0 rounded-full"
                                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                                        initial={{ scale: 0, opacity: 1 }}
                                        whileHover={{ scale: 1.5, opacity: 0 }}
                                        transition={{ duration: 0.6 }}
                                    />
                                </motion.button>
                            </motion.div>

                            {/* Additional Info */}
                            <motion.div
                                className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-8"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                            >
                                {[
                                    { icon: '⚡', text: 'Quick Response' },
                                    { icon: '🎨', text: 'Creative Solutions' },
                                    { icon: '🚀', text: 'Fast Delivery' },
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-center gap-2"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <span className="text-2xl">{item.icon}</span>
                                        <span
                                            className="font-medium"
                                            style={{
                                                fontSize: 'var(--text-sm)',
                                                color: 'var(--text-secondary)',
                                            }}
                                        >
                                            {item.text}
                                        </span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
