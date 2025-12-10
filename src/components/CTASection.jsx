import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './CTASection.css';

const CTASection = () => {
    const navigate = useNavigate();

    const handleContactClick = () => {
        navigate('/contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleCallClick = () => {
        window.location.href = 'tel:+919789565515';
    };

    const handleEmailClick = () => {
        window.location.href = 'mailto:official@brandingpioneers.com';
    };

    return (
        <section className="cta-section-minimalist">
            <div className="cta-minimalist-container">
                {/* Subtitle */}
                <motion.p
                    className="cta-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Let's see if we're a good fit with a 15 min call
                </motion.p>

                {/* Main Scrolling Text */}
                <div className="cta-marquee-wrapper">
                    <motion.div
                        className="cta-marquee"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="cta-marquee-content">
                            <span className="cta-marquee-text">Book a Call</span>
                            <span className="cta-bullet">•</span>
                            <span className="cta-marquee-text">Book a Call</span>
                            <span className="cta-bullet">•</span>
                            <span className="cta-marquee-text">Book a Call</span>
                            <span className="cta-bullet">•</span>
                        </div>
                        <div className="cta-marquee-content" aria-hidden="true">
                            <span className="cta-marquee-text">Book a Call</span>
                            <span className="cta-bullet">•</span>
                            <span className="cta-marquee-text">Book a Call</span>
                            <span className="cta-bullet">•</span>
                            <span className="cta-marquee-text">Book a Call</span>
                            <span className="cta-bullet">•</span>
                        </div>
                    </motion.div>
                </div>

                {/* Action Buttons */}
                <motion.div
                    className="cta-actions"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <motion.button
                        onClick={handleCallClick}
                        className="cta-action-btn"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        [Call]
                    </motion.button>
                    <motion.button
                        onClick={handleEmailClick}
                        className="cta-action-btn"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        [EMAIL]
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
