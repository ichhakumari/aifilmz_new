import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ThankYou = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleBackHome = () => {
        navigate('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <Header />
            <div
                className="flex items-center justify-center relative overflow-hidden pt-24 pb-12"
                style={{ backgroundColor: 'var(--bg-primary)' }}
            >
                {/* Main Content */}
                <div className="max-w-2xl mx-auto px-2 text-center relative z-5 mt-20">
                    {/* Animated Checkmark */}
                    <motion.div
                        className="mb-8 flex justify-center"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                            duration: 0.6,
                            type: "spring",
                            stiffness: 200,
                            damping: 15
                        }}
                    >
                        <motion.div
                            className="relative"
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <FiCheckCircle
                                size={80}
                                style={{ color: '#4ade80' }}
                                strokeWidth={2}
                            />
                        </motion.div>
                    </motion.div>

                    {/* Thank You Message */}
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                        style={{ color: 'var(--text-primary)' }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Thank you for
                    </motion.h1>

                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                        style={{ color: 'var(--text-primary)' }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        taking the first step!
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p
                        className="text-lg md:text-xl mb-10"
                        style={{ color: 'var(--text-secondary)' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        Your message has been received —<br />
                        we'll be in touch soon.
                    </motion.p>

                    {/* Back to Homepage Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <motion.button
                            onClick={handleBackHome}
                            className="px-8 py-3 rounded-lg font-medium text-base"
                            style={{
                                backgroundColor: '#FE4A23',
                                color: '#ffffff',
                                border: '2px solid #FE4A23',
                            }}
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: '#E03A16',
                                borderColor: '#E03A16',
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            Back to homepage
                        </motion.button>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ThankYou;
