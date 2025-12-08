import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';

const { FiTrendingUp, FiHome, FiShoppingCart, FiUsers, FiCoffee, FiCpu } = FiIcons;

const IndustriesWeServe = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.2 });

    const industries = [
        {
            icon: FiTrendingUp,
            name: "Startups",
            description: "Launch your brand with compelling video content that captures investor attention and builds customer trust.",
            color: "#FE4A23"
        },
        {
            icon: FiHome,
            name: "Real Estate",
            description: "Showcase properties with stunning virtual tours, drone footage, and AI-powered presentations.",
            color: "#FE4A23"
        },
        {
            icon: FiShoppingCart,
            name: "E-commerce",
            description: "Drive sales with product demos, unboxing videos, and engaging social media content.",
            color: "#FE4A23"
        },
        {
            icon: FiUsers,
            name: "Agencies",
            description: "Scale your client deliverables with our white-label video production and AI avatar solutions.",
            color: "#FE4A23"
        },
        {
            icon: FiCoffee,
            name: "Hospitality",
            description: "Attract guests with immersive hotel tours, restaurant showcases, and experience highlights.",
            color: "#FE4A23"
        },
        {
            icon: FiCpu,
            name: "Tech & SaaS",
            description: "Explain complex products with animated explainers, tutorials, and customer success stories.",
            color: "#FE4A23"
        }
    ];

    return (
        <section
            ref={ref}
            id="industries"
            className="py-16 sm:py-20 px-4 sm:px-6"
            style={{ backgroundColor: 'var(--bg-secondary)' }}
        >
            <div className="container mx-auto max-w-7xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <span
                        className="font-semibold mb-2 inline-block text-sm tracking-widest uppercase"
                        style={{ color: 'var(--accent-color)' }}
                    >
                        Our Expertise
                    </span>
                    <h2
                        className="font-bold mb-4"
                        style={{ fontSize: 'var(--text-4xl)', color: 'var(--text-primary)' }}
                    >
                        Industries We <span style={{ color: 'var(--accent-color)' }}>Serve</span>
                    </h2>
                    <p
                        className="max-w-3xl mx-auto leading-relaxed"
                        style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)' }}
                    >
                        From startups to established enterprises, we deliver tailored video solutions that drive results across diverse industries.
                    </p>
                </motion.div>

                {/* Industries Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl"
                            style={{
                                backgroundColor: 'var(--card-bg)',
                                border: '1px solid var(--border-color)',
                                minHeight: '280px'
                            }}
                            whileHover={{ y: -8 }}
                        >
                            {/* Background Image with Gradient Overlay */}
                            <div
                                className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                                style={{
                                    backgroundImage: `url('https://images.unsplash.com/photo-${index === 0 ? '1559136555-9303baea8ebd?w=800' : // Startups - workspace
                                            index === 1 ? '1560518883-ce4f8e8e8e8e?w=800' : // Real Estate - building
                                                index === 2 ? '1556742049-0cfed4f6a45d?w=800' : // E-commerce - shopping
                                                    index === 3 ? '1552664730-d307ca884978?w=800' : // Agencies - team
                                                        index === 4 ? '1566073771259-6a8506099945?w=800' : // Hospitality - hotel
                                                            '1518770660439-4636190af475?w=800' // Tech & SaaS - technology
                                        }')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            />

                            {/* Gradient Overlay for Text Readability */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)'
                                }}
                            />

                            {/* Orange Gradient on Hover */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                                style={{
                                    background: `linear-gradient(135deg, ${industry.color} 0%, transparent 100%)`
                                }}
                            />

                            {/* Content */}
                            <div className="relative z-10">
                                {/* Icon */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={isInView ? { scale: 1 } : {}}
                                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1, type: "spring" }}
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                                    style={{
                                        backgroundColor: 'var(--accent-color)',
                                        boxShadow: '0 4px 12px rgba(254, 74, 35, 0.3)'
                                    }}
                                >
                                    <industry.icon
                                        className="w-8 h-8 text-white"
                                    />
                                </motion.div>

                                {/* Industry Name */}
                                <h3
                                    className="font-bold mb-3 transition-colors duration-300"
                                    style={{
                                        fontSize: 'var(--text-xl)',
                                        color: '#FFFFFF',
                                        textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                                    }}
                                >
                                    {industry.name}
                                </h3>

                                {/* Description */}
                                <p
                                    className="leading-relaxed"
                                    style={{
                                        fontSize: 'var(--text-sm)',
                                        color: '#E5E5E5',
                                        lineHeight: 1.7,
                                        textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                                    }}
                                >
                                    {industry.description}
                                </p>

                                {/* Bottom Accent Line */}
                                <motion.div
                                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r"
                                    style={{
                                        backgroundColor: industry.color,
                                        width: '0%'
                                    }}
                                    whileHover={{ width: '100%' }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustriesWeServe;
