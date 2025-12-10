import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTheme } from '../context/ThemeContext';

const AboutUs = () => {
    const { isDark } = useTheme();

    return (
        <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4 sm:px-6">
                <div className="container mx-auto max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                            About <span style={{ color: '#FE4A23' }}>AI Filmz</span>
                        </h1>
                        <p className="text-xl sm:text-2xl max-w-3xl mx-auto mb-4 font-medium" style={{ color: 'var(--text-primary)' }}>
                            Where Artificial Intelligence meets Human Creativity
                        </p>
                        <p className="text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            At AI Filmz, we're redefining how videos are created. By blending cutting-edge AI capabilities with the artistry, intuition, and storytelling of real human creators, we deliver videos that feel authentic, emotional, and impactful.
                        </p>
                        <p className="text-lg sm:text-xl max-w-3xl mx-auto mt-4 italic" style={{ color: 'var(--text-secondary)' }}>
                            Because great content isn't just generated — it's crafted.
                        </p>
                    </motion.div>

                    {/* Mission & Vision Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="grid md:grid-cols-2 gap-12 mb-20"
                    >
                        <div>
                            <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                                Our Mission
                            </h2>
                            <p className="text-lg leading-relaxed mb-4 font-medium" style={{ color: 'var(--text-primary)' }}>
                                Our mission is to democratize high-quality video production through the perfect synergy of AI precision and human imagination.
                            </p>
                            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                We believe professional video creation shouldn't be limited by budget, experience, or access to equipment. With our hybrid AI-human approach, anyone — from businesses to creators — can bring cinematic-level ideas to life effortlessly and affordably.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                                Our Vision
                            </h2>
                            <p className="text-lg leading-relaxed mb-4 font-medium" style={{ color: 'var(--text-primary)' }}>
                                We envision a world where creativity flows freely, supported by intelligent tools and guided by human insight.
                            </p>
                            <p className="text-lg leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                                A future where:
                            </p>
                            <ul className="space-y-2 mb-4">
                                <li className="text-lg flex items-start" style={{ color: 'var(--text-secondary)' }}>
                                    <span style={{ color: '#FE4A23' }} className="mr-2">•</span>
                                    AI accelerates the process,
                                </li>
                                <li className="text-lg flex items-start" style={{ color: 'var(--text-secondary)' }}>
                                    <span style={{ color: '#FE4A23' }} className="mr-2">•</span>
                                    humans enhance the emotion,
                                </li>
                                <li className="text-lg flex items-start" style={{ color: 'var(--text-secondary)' }}>
                                    <span style={{ color: '#FE4A23' }} className="mr-2">•</span>
                                    and storytelling becomes accessible to all.
                                </li>
                            </ul>
                            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                From AI avatar cloning to stunning animations, we're building technology that empowers creators while keeping the soul of human creativity at the center.
                            </p>
                        </div>
                    </motion.div>

                    {/* What We Do Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mb-20"
                    >
                        <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: 'var(--text-primary)' }}>
                            What We Do
                        </h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: 'AI Avatar Cloning',
                                    description: 'Highly realistic digital avatars fine-tuned by our team to capture personality and expression.'
                                },
                                {
                                    title: 'Cloned Reel Videos',
                                    description: 'AI-generated short-form videos elevated with human-led creative direction.'
                                },
                                {
                                    title: 'Animated Graphics',
                                    description: 'Smart motion graphics crafted through AI automation and refined by skilled designers.'
                                },
                                {
                                    title: 'Product Videos',
                                    description: 'Conversion-focused product visuals enhanced with human storytelling.'
                                },
                                {
                                    title: 'Ad Films',
                                    description: 'Emotion-driven advertisements where AI speeds up production and humans shape the narrative.'
                                },
                                {
                                    title: 'Music Videos',
                                    description: 'A fusion of AI-generated visuals and human editing to create standout music experiences.'
                                }
                            ].map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                                    className="p-6 rounded-xl border transition-all duration-300 hover:border-orange-500/50"
                                    style={{
                                        backgroundColor: 'var(--card-bg)',
                                        borderColor: 'var(--border-color)'
                                    }}
                                >
                                    <h3 className="text-xl font-semibold mb-3" style={{ color: '#FE4A23' }}>
                                        {service.title}
                                    </h3>
                                    <p style={{ color: 'var(--text-secondary)' }}>
                                        {service.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Why Choose Us Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mb-20"
                    >
                        <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: 'var(--text-primary)' }}>
                            Why Choose AI Filmz?
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    title: 'AI + Human Touch',
                                    description: 'The power of automation combined with the emotion, precision, and creativity only humans can provide.'
                                },
                                {
                                    title: 'Fast Turnaround',
                                    description: 'AI accelerates production so you get studio-quality results in record time.'
                                },
                                {
                                    title: 'Cost-Effective',
                                    description: 'Premium visuals without traditional production costs.'
                                },
                                {
                                    title: 'Seamless Experience',
                                    description: 'No technical skills needed — just share your idea and we bring it to life.'
                                }
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                                    className="text-center p-6 rounded-xl border transition-all duration-300 hover:border-orange-500/50"
                                    style={{
                                        backgroundColor: 'var(--card-bg)',
                                        borderColor: 'var(--border-color)'
                                    }}
                                >
                                    <h3 className="text-xl font-semibold mb-3" style={{ color: '#FE4A23' }}>
                                        {feature.title}
                                    </h3>
                                    <p style={{ color: 'var(--text-secondary)' }}>
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="text-center py-16 px-6 rounded-2xl"
                        style={{
                            backgroundColor: 'var(--card-bg)',
                            border: '1px solid var(--border-color)'
                        }}
                    >
                        <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                            Ready to Create Something Extraordinary?
                        </h2>
                        <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                            Let's blend intelligence and imagination to craft videos your audience will remember. Talk to our team and start your project today.
                        </p>
                        <motion.a
                            href="https://wa.me/919789565515"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block px-8 py-4 rounded-full font-semibold text-lg"
                            style={{
                                backgroundColor: '#FE4A23',
                                color: '#FFFFFF'
                            }}
                        >
                            Get Started Today
                        </motion.a>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutUs;
