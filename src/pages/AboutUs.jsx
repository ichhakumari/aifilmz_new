import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUs = () => {
    return (
        <div className="min-h-screen" style={{ backgroundColor: '#000000' }}>
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
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
                            About <span style={{ color: '#FE4A23' }}>AI Filmz</span>
                        </h1>
                        <p className="text-lg sm:text-xl max-w-3xl mx-auto" style={{ color: '#CCCCCC' }}>
                            Revolutionizing video production with cutting-edge AI technology
                        </p>
                    </motion.div>

                    {/* Mission Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="grid md:grid-cols-2 gap-12 mb-20"
                    >
                        <div>
                            <h2 className="text-3xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
                                Our Mission
                            </h2>
                            <p className="text-lg leading-relaxed mb-4" style={{ color: '#CCCCCC' }}>
                                At AI Filmz, we're on a mission to democratize professional video production through the power of artificial intelligence. We believe that everyone should have access to high-quality video content, regardless of budget or technical expertise.
                            </p>
                            <p className="text-lg leading-relaxed" style={{ color: '#CCCCCC' }}>
                                Our AI-powered platform enables creators, businesses, and individuals to produce stunning videos with unprecedented ease and efficiency.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
                                Our Vision
                            </h2>
                            <p className="text-lg leading-relaxed mb-4" style={{ color: '#CCCCCC' }}>
                                We envision a future where creating professional-grade video content is as simple as having an idea. Through continuous innovation in AI technology, we're breaking down barriers and opening up new possibilities for storytelling.
                            </p>
                            <p className="text-lg leading-relaxed" style={{ color: '#CCCCCC' }}>
                                From AI avatar cloning to animated graphics, we're building the tools that will shape the future of digital content creation.
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
                        <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: '#FFFFFF' }}>
                            What We Do
                        </h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: 'AI Avatar Cloning',
                                    description: 'Create realistic digital avatars that look and sound just like you'
                                },
                                {
                                    title: 'Cloned Reel Videos',
                                    description: 'Generate engaging social media content with AI-powered automation'
                                },
                                {
                                    title: 'Animated Graphics',
                                    description: 'Bring your ideas to life with stunning motion graphics and animations'
                                },
                                {
                                    title: 'Product Videos',
                                    description: 'Showcase your products with professional, conversion-optimized videos'
                                },
                                {
                                    title: 'Ad Films',
                                    description: 'Create compelling advertisements that capture attention and drive results'
                                },
                                {
                                    title: 'Music Videos',
                                    description: 'Produce visually stunning music videos with AI-enhanced creativity'
                                }
                            ].map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                                    className="p-6 rounded-xl border"
                                    style={{
                                        backgroundColor: '#1A1A1A',
                                        borderColor: 'rgba(254, 74, 35, 0.2)'
                                    }}
                                >
                                    <h3 className="text-xl font-semibold mb-3" style={{ color: '#FE4A23' }}>
                                        {service.title}
                                    </h3>
                                    <p style={{ color: '#CCCCCC' }}>
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
                        <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: '#FFFFFF' }}>
                            Why Choose AI Filmz?
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    title: 'Cutting-Edge AI',
                                    description: 'Powered by the latest artificial intelligence technology'
                                },
                                {
                                    title: 'Fast Turnaround',
                                    description: 'Get professional videos in a fraction of the traditional time'
                                },
                                {
                                    title: 'Cost-Effective',
                                    description: 'Premium quality without the premium price tag'
                                },
                                {
                                    title: 'Easy to Use',
                                    description: 'No technical expertise required - anyone can create'
                                }
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                                    className="text-center p-6 rounded-xl border"
                                    style={{
                                        backgroundColor: '#1A1A1A',
                                        borderColor: 'rgba(254, 74, 35, 0.2)'
                                    }}
                                >
                                    <h3 className="text-xl font-semibold mb-3" style={{ color: '#FE4A23' }}>
                                        {feature.title}
                                    </h3>
                                    <p style={{ color: '#CCCCCC' }}>
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
                            backgroundColor: '#1A1A1A',
                            border: '1px solid rgba(254, 74, 35, 0.2)'
                        }}
                    >
                        <h2 className="text-3xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
                            Ready to Transform Your Video Production?
                        </h2>
                        <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#CCCCCC' }}>
                            Join thousands of creators and businesses who are already using AI Filmz to create amazing content.
                        </p>
                        <motion.a
                            href="/contact"
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
