import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import * as FiIcons from 'react-icons/fi';

const { FiPhone, FiMail, FiMapPin, FiUser, FiSend } = FiIcons;

const Footer = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    projectDetails: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    alert('Message sent successfully!');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <footer style={{ backgroundColor: '#000000' }} className="py-12 sm:py-16 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Top Section */}
        <div className="text-center mb-10">
          <h2
            className="text-2xl sm:text-3xl font-bold mb-3"
            style={{ color: '#FFFFFF' }}
          >
            Let's Create{' '}
            <span style={{ color: 'var(--electric-teal)' }}>Together</span>
          </h2>
          <p
            className="max-w-2xl mx-auto leading-relaxed text-sm"
            style={{ color: '#CCCCCC' }}
          >
            Ready to transform your ideas into extraordinary visual experiences? Get in touch and let's discuss your next project.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Section - Company Info */}
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--accent-color)' }}>
                  <FiPhone className="w-5 h-5 text-white" />
                </div>
                <h3
                  className="text-xl font-bold"
                  style={{ color: '#FFFFFF' }}
                >
                  AI Filmz
                </h3>
              </div>
              <p
                className="mb-6 leading-relaxed text-sm"
                style={{ color: '#CCCCCC' }}
              >
                AI-powered video production platform for businesses. Automate your content creation with intelligent AI solutions that boost productivity and reduce costs.
              </p>
            </div>

            {/* Address */}
            <div className="flex gap-3 mb-4 text-sm">
              <FiMapPin className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: '#FFFFFF' }} />
              <div style={{ color: '#CCCCCC' }}>
                <p>Ground, 1st Floor, SupremeWork Co-working Space,</p>
                <p>Plot No. 84, Institutional Area, Prem Puri,</p>
                <p>Sector 32, Gurugram, Haryana 122001</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-4">
                <FiPhone className="w-4 h-4" style={{ color: '#FFFFFF' }} />
                <a
                  href="tel:+918035315291"
                  className="hover:text-teal-600 transition-colors"
                  style={{ color: '#FFFFFF' }}
                >
                  +918035315291
                </a>
              </div>
              <div className="flex items-center gap-4">
                <FiMail className="w-4 h-4" style={{ color: '#FFFFFF' }} />
                <a
                  href="mailto:contact@aifilmz.com"
                  className="hover:text-teal-600 transition-colors"
                  style={{ color: '#FFFFFF' }}
                >
                  contact@aifilmz.com
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-6">
              <h4
                className="text-base font-semibold mb-3"
                style={{ color: '#FFFFFF' }}
              >
                Quick Links
              </h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <a
                  href="#features"
                  className="hover:text-teal-600 transition-colors"
                  style={{ color: '#CCCCCC' }}
                >
                  Features
                </a>
                <a
                  href="#demo"
                  className="hover:text-teal-600 transition-colors"
                  style={{ color: '#CCCCCC' }}
                >
                  Demo
                </a>
                <a
                  href="#pricing"
                  className="hover:text-teal-600 transition-colors"
                  style={{ color: '#CCCCCC' }}
                >
                  Pricing
                </a>
                <a
                  href="#how-it-works"
                  className="hover:text-teal-600 transition-colors"
                  style={{ color: '#CCCCCC' }}
                >
                  How It Works
                </a>
                <a
                  href="#industries"
                  className="hover:text-teal-600 transition-colors"
                  style={{ color: '#CCCCCC' }}
                >
                  Industries
                </a>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              <div
                className="p-4 rounded-lg border"
                style={{
                  backgroundColor: '#F3F4F6',
                  borderColor: 'var(--border-color)'
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(0,206,209,0.2)' }}
                  >
                    <FiMail className="w-4 h-4" style={{ color: 'var(--electric-teal)' }} />
                  </div>
                  <div>
                    <h4
                      className="font-semibold"
                      style={{ color: '#000000' }}
                    >
                      Email Us
                    </h4>
                  </div>
                </div>
                <p
                  className="text-sm"
                  style={{ color: '#374151' }}
                >
                  contact@aifilmz.com
                </p>
                <p
                  className="text-xs mt-1"
                  style={{ color: '#6B7280' }}
                >
                  We'll respond within 24 hours
                </p>
              </div>

              <div
                className="p-4 rounded-lg border"
                style={{
                  backgroundColor: '#F3F4F6',
                  borderColor: 'var(--border-color)'
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(0,206,209,0.2)' }}
                  >
                    <FiPhone className="w-4 h-4" style={{ color: 'var(--electric-teal)' }} />
                  </div>
                  <div>
                    <h4
                      className="font-semibold"
                      style={{ color: '#000000' }}
                    >
                      Call Us
                    </h4>
                  </div>
                </div>
                <p
                  className="text-sm"
                  style={{ color: '#374151' }}
                >
                  +91 8035315291
                </p>
                <p
                  className="text-xs mt-1"
                  style={{ color: '#6B7280' }}
                >
                  Mon-Fri 9AM-6PM IST
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div
            className="p-5 sm:p-6 rounded-2xl border"
            style={{
              backgroundColor: '#FFFFFF',
              borderColor: 'var(--border-color)'
            }}
          >
            <h3
              className="text-xl font-bold mb-4"
              style={{ color: '#000000' }}
            >
              Get in Touch
            </h3>
            <p
              className="mb-5 leading-relaxed text-sm"
              style={{ color: '#374151' }}
            >
              Whether you have a specific project in mind or just want to explore the possibilities of AI-powered video production, we're here to help bring your vision to life.
            </p>

            <div className="space-y-3">
              {/* Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-sm mb-2"
                    style={{ color: '#000000' }}
                  >
                    Full Name <span style={{ color: 'var(--electric-teal)' }}>*</span>
                  </label>
                  <div className="relative">
                    <FiUser
                      className="absolute left-3 top-1/2 transform -translate-y-1/2"
                      style={{ color: '#6B7280' }}
                    />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full py-2.5 pl-10 pr-4 rounded-lg border focus:outline-none focus:border-teal-500 transition-colors text-sm"
                      style={{
                        backgroundColor: 'var(--bg-primary)',
                        borderColor: 'var(--border-color)',
                        color: '#000000'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-sm mb-2"
                    style={{ color: '#000000' }}
                  >
                    Email Address <span style={{ color: 'var(--electric-teal)' }}>*</span>
                  </label>
                  <div className="relative">
                    <FiMail
                      className="absolute left-3 top-1/2 transform -translate-y-1/2"
                      style={{ color: '#6B7280' }}
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full py-2.5 pl-10 pr-4 rounded-lg border focus:outline-none focus:border-teal-500 transition-colors text-sm"
                      style={{
                        backgroundColor: 'var(--bg-primary)',
                        borderColor: 'var(--border-color)',
                        color: '#000000'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Company */}
              <div>
                <label
                  className="block text-sm mb-2"
                  style={{ color: '#000000' }}
                >
                  Company (Optional)
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company Name"
                  className="w-full py-2.5 px-4 rounded-lg border focus:outline-none focus:border-teal-500 transition-colors text-sm"
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    borderColor: 'var(--border-color)',
                    color: '#000000'
                  }}
                />
              </div>

              {/* Project Details */}
              <div>
                <label
                  className="block text-sm mb-2"
                  style={{ color: '#000000' }}
                >
                  Project Details <span style={{ color: 'var(--electric-teal)' }}>*</span>
                </label>
                <textarea
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleChange}
                  placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                  required
                  rows="4"
                  className="w-full py-2.5 px-4 rounded-lg border focus:outline-none focus:border-teal-500 transition-colors resize-none text-sm"
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    borderColor: 'var(--border-color)',
                    color: '#000000'
                  }}
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button
                onClick={handleSubmit}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full font-semibold py-2.5 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
                style={{
                  backgroundColor: 'var(--accent-color)',
                  color: 'var(--text-inverse)'
                }}
              >
                <span>Send Message</span>
                <FiSend className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div
          className="pt-6 border-t"
          style={{ borderColor: 'var(--border-color)' }}
        >
          <p
            className="text-center text-xs"
            style={{ color: '#999999' }}
          >
            © 2025 AI Filmz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;