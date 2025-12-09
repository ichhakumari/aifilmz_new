import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import * as FiIcons from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const { FiPhone, FiMail, FiMapPin, FiUser, FiSend } = FiIcons;

const Contact = () => {
    const { isDark } = useTheme();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for contacting us! We will get back to you soon.');
        // Reset form
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            company: '',
            message: ''
        });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

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
                            Get in <span style={{ color: '#FE4A23' }}>Touch</span>
                        </h1>
                        <p className="text-lg sm:text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                            Have a project in mind? We'd love to hear from you. Let's create something amazing together.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>
                                Contact Information
                            </h2>

                            {/* Contact Cards */}
                            <div className="space-y-6 mb-8">
                                {/* Address */}
                                <div className="flex gap-4 p-6 rounded-xl border" style={{
                                    backgroundColor: 'var(--card-bg)',
                                    borderColor: 'var(--border-color)'
                                }}>
                                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(254, 74, 35, 0.2)' }}>
                                        <FiMapPin className="w-6 h-6" style={{ color: '#FE4A23' }} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                                            Office Address
                                        </h3>
                                        <p style={{ color: 'var(--text-secondary)' }}>
                                            Ground, 1st Floor, SupremeWork Co-working Space,<br />
                                            Plot No. 84, Institutional Area, Prem Puri,<br />
                                            Sector 32, Gurugram, Haryana 122001
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex gap-4 p-6 rounded-xl border" style={{
                                    backgroundColor: 'var(--card-bg)',
                                    borderColor: 'var(--border-color)'
                                }}>
                                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(254, 74, 35, 0.2)' }}>
                                        <FiPhone className="w-6 h-6" style={{ color: '#FE4A23' }} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                                            Phone Number
                                        </h3>
                                        <a href="tel:+918035315291" className="text-lg" style={{ color: 'var(--text-secondary)' }}>
                                            +91 8035315291
                                        </a>
                                        <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
                                            Mon-Fri: 9AM-6PM IST
                                        </p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex gap-4 p-6 rounded-xl border" style={{
                                    backgroundColor: 'var(--card-bg)',
                                    borderColor: 'var(--border-color)'
                                }}>
                                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(254, 74, 35, 0.2)' }}>
                                        <FiMail className="w-6 h-6" style={{ color: '#FE4A23' }} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                                            Email Address
                                        </h3>
                                        <a href="mailto:contact@aifilmz.com" className="text-lg" style={{ color: 'var(--text-secondary)' }}>
                                            contact@aifilmz.com
                                        </a>
                                        <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
                                            We'll respond within 24 hours
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="p-8 rounded-2xl border"
                            style={{
                                backgroundColor: 'var(--card-bg)',
                                borderColor: 'var(--border-color)'
                            }}
                        >
                            <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                                Send us a Message
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Full Name */}
                                <div>
                                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                                        Full Name <span style={{ color: '#FE4A23' }}>*</span>
                                    </label>
                                    <div className="relative">
                                        <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2" style={{ color: 'var(--text-muted)' }} />
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            required
                                            className="w-full py-3 pl-12 pr-4 rounded-lg border focus:outline-none transition-colors"
                                            style={{
                                                backgroundColor: 'var(--bg-secondary)',
                                                borderColor: 'var(--border-color)',
                                                color: 'var(--text-primary)'
                                            }}
                                            onFocus={(e) => e.target.style.borderColor = '#FE4A23'}
                                            onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                                        Email Address <span style={{ color: '#FE4A23' }}>*</span>
                                    </label>
                                    <div className="relative">
                                        <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2" style={{ color: 'var(--text-muted)' }} />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            required
                                            className="w-full py-3 pl-12 pr-4 rounded-lg border focus:outline-none transition-colors"
                                            style={{
                                                backgroundColor: 'var(--bg-secondary)',
                                                borderColor: 'var(--border-color)',
                                                color: 'var(--text-primary)'
                                            }}
                                            onFocus={(e) => e.target.style.borderColor = '#FE4A23'}
                                            onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                                        />
                                    </div>
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                                        Phone Number
                                    </label>
                                    <div className="relative">
                                        <FiPhone className="absolute left-4 top-1/2 transform -translate-y-1/2" style={{ color: 'var(--text-muted)' }} />
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+91 1234567890"
                                            className="w-full py-3 pl-12 pr-4 rounded-lg border focus:outline-none transition-colors"
                                            style={{
                                                backgroundColor: 'var(--bg-secondary)',
                                                borderColor: 'var(--border-color)',
                                                color: 'var(--text-primary)'
                                            }}
                                            onFocus={(e) => e.target.style.borderColor = '#FE4A23'}
                                            onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                                        />
                                    </div>
                                </div>

                                {/* Company */}
                                <div>
                                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                                        Company (Optional)
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Your Company Name"
                                        className="w-full py-3 px-4 rounded-lg border focus:outline-none transition-colors"
                                        style={{
                                            backgroundColor: 'var(--bg-secondary)',
                                            borderColor: 'var(--border-color)',
                                            color: 'var(--text-primary)'
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = '#FE4A23'}
                                        onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                                        Message <span style={{ color: '#FE4A23' }}>*</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your project..."
                                        required
                                        rows="5"
                                        className="w-full py-3 px-4 rounded-lg border focus:outline-none transition-colors resize-none"
                                        style={{
                                            backgroundColor: 'var(--bg-secondary)',
                                            borderColor: 'var(--border-color)',
                                            color: 'var(--text-primary)'
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = '#FE4A23'}
                                        onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                                    style={{
                                        backgroundColor: '#FE4A23',
                                        color: '#FFFFFF'
                                    }}
                                >
                                    <span>Send Message</span>
                                    <FiSend className="w-5 h-5" />
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Contact;
