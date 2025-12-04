import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const WelcomeSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.2 });

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
        <section
            ref={ref}
            className=" mt-8 rounded-2xl container mx-auto py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
            style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1696272440000-0808a203c852?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70 z-0"></div>
            
            {/* Content */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="container mx-auto max-w-4xl relative z-10"
            >
                <div className="mx-auto px-4 py-2 bg-gradient-to-br from-red-700 to-pink-800 text-white w-fit rounded-full text-xs mb-4 !text-white z-10">About Us</div>
                {/* Heading */}
                <motion.h2
                    variants={itemVariants}
                    className="text-xl sm:text-2xl md:text-3xl font-medium text-center mb-6 sm:mb-8  tracking-wide text-white"
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
        </section>
    );
};

export default WelcomeSection;
