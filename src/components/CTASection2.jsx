import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './CTASection2.css';

const CTASection2 = () => {
    const navigate = useNavigate();

    const handleCallClick = () => {
        window.location.href = 'tel:+919789565515';
    };

    const handleContactClick = () => {
        navigate('/contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section className="cta-section-2">
            <div className="grid-background-2"></div>
            <div className="glow-orb-2"></div>

            <div className="content-wrapper-2">
                <motion.div
                    className="availability-badge-2"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="availability-dot-2"></span>
                    <span>20 Spots Remaining!</span>
                </motion.div>

                <motion.h2
                    className="cta-heading-2"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Got a Brilliant Idea?<br />
                    Let's Bring it to <span className="highlight-2">the Digital Canvas!</span>
                </motion.h2>

                <motion.div
                    className="button-group-2"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <motion.button
                        onClick={handleCallClick}
                        className="btn-2 btn-primary-2"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Book a Call
                    </motion.button>
                    <motion.button
                        onClick={handleContactClick}
                        className="btn-2 btn-secondary-2"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Email Us
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection2;
