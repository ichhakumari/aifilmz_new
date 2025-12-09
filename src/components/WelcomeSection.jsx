import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiChevronDown, FiChevronUp } = FiIcons;

const WelcomeSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.2 });
    const [isExpanded, setIsExpanded] = useState(true);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 mt-8">
            <section
                ref={ref}
                className="rounded-2xl py-10 px-4 sm:px-6 relative overflow-hidden"
                style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1696272440000-0808a203c852?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: '#1a1a1a' // Solid dark background for corners
                }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/70 z-0 rounded-2xl"></div>

                {/* Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="max-w-4xl mx-auto relative z-10"
                >
                    {/* Header with Toggle Button */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="mx-auto px-4 py-2 bg-gradient-to-br from-red-700 to-pink-800 text-white w-fit rounded-full text-xs !text-white">
                            About Us
                        </div>
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="p-2 rounded-full transition-all duration-300 hover:bg-white/10"
                            aria-label={isExpanded ? "Collapse section" : "Expand section"}
                        >
                            <SafeIcon
                                icon={isExpanded ? FiChevronUp : FiChevronDown}
                                className="w-5 h-5 text-white"
                            />
                        </button>
                    </div>

                    {/* Collapsible Content */}
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Heading */}
                                <motion.h2
                                    variants={itemVariants}
                                    className="text-xl sm:text-2xl md:text-3xl font-medium text-center mb-6 sm:mb-8 tracking-wide text-white"
                                >
                                    Welcome to <span className='italic' style={{ color: '#FE4A23' }}>AIFILMZ</span>
                                </motion.h2>

                                {/* Main Description */}
                                <motion.div
                                    variants={itemVariants}
                                    className="text-center max-w-3xl mx-auto"
                                >
                                    <p className="text-sm sm:text-base leading-relaxed mb-2 text-white/80">
                                        High-quality commercial ads, product promos, social media content, AI-generated videos, and animated videos for any occasion. Our team focuses on delivering polished, creative, and engaging visuals that truly stand out.
                                        If you want professional content made with advanced AI and expert editing, connect with us. We'll bring your idea to life with quality you can trust.
                                    </p>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </section>
        </div>
    );
};

export default WelcomeSection;
