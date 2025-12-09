import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';

const { FiPhone, FiMail, FiMapPin } = FiIcons;
const { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } = FaIcons;

const Footer = () => {
  const { isDark } = useTheme();

  return (
    <footer style={{ backgroundColor: '#000000' }} className="py-10 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            {/* Logo */}
            <div className="mb-4">
              <img src="/imges/logo.png" alt="AI Filmz Logo" className="h-12 w-auto" />
            </div>
            <p
              className="mb-6 leading-relaxed text-sm"
              style={{ color: '#CCCCCC' }}
            >
              AI-powered video production platform specializing in AI avatar cloning, cloned reel videos, animated graphics, product videos, ad films, animated videos, and music videos.
            </p>
            {/* Social Media Links */}
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ backgroundColor: 'rgba(254, 74, 35, 0.2)' }}
              >
                <FaFacebookF className="w-5 h-5" style={{ color: '#FE4A23' }} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ backgroundColor: 'rgba(254, 74, 35, 0.2)' }}
              >
                <FaTwitter className="w-5 h-5" style={{ color: '#FE4A23' }} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ backgroundColor: 'rgba(254, 74, 35, 0.2)' }}
              >
                <FaInstagram className="w-5 h-5" style={{ color: '#FE4A23' }} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ backgroundColor: 'rgba(254, 74, 35, 0.2)' }}
              >
                <FaLinkedinIn className="w-5 h-5" style={{ color: '#FE4A23' }} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ backgroundColor: 'rgba(254, 74, 35, 0.2)' }}
              >
                <FaYoutube className="w-5 h-5" style={{ color: '#FE4A23' }} />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h4
              className="text-base font-semibold mb-4"
              style={{ color: '#FFFFFF' }}
            >
              Our Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/#services"
                  className="transition-colors"
                  style={{ color: '#CCCCCC' }}
                  onMouseEnter={(e) => e.target.style.color = '#FE4A23'}
                  onMouseLeave={(e) => e.target.style.color = '#CCCCCC'}
                >
                  AI Avatar Cloning
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="transition-colors"
                  style={{ color: '#CCCCCC' }}
                  onMouseEnter={(e) => e.target.style.color = '#FE4A23'}
                  onMouseLeave={(e) => e.target.style.color = '#CCCCCC'}
                >
                  Cloned Reel Videos
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="transition-colors"
                  style={{ color: '#CCCCCC' }}
                  onMouseEnter={(e) => e.target.style.color = '#FE4A23'}
                  onMouseLeave={(e) => e.target.style.color = '#CCCCCC'}
                >
                  Animated Graphics
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="transition-colors"
                  style={{ color: '#CCCCCC' }}
                  onMouseEnter={(e) => e.target.style.color = '#FE4A23'}
                  onMouseLeave={(e) => e.target.style.color = '#CCCCCC'}
                >
                  Product Videos
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="transition-colors"
                  style={{ color: '#CCCCCC' }}
                  onMouseEnter={(e) => e.target.style.color = '#FE4A23'}
                  onMouseLeave={(e) => e.target.style.color = '#CCCCCC'}
                >
                  Ad Films
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="transition-colors"
                  style={{ color: '#CCCCCC' }}
                  onMouseEnter={(e) => e.target.style.color = '#FE4A23'}
                  onMouseLeave={(e) => e.target.style.color = '#CCCCCC'}
                >
                  Music Videos
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4
              className="text-base font-semibold mb-4"
              style={{ color: '#FFFFFF' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/#services"
                  className="transition-colors"
                  style={{ color: '#CCCCCC' }}
                  onMouseEnter={(e) => e.target.style.color = '#FE4A23'}
                  onMouseLeave={(e) => e.target.style.color = '#CCCCCC'}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/#pricing"
                  className="transition-colors"
                  style={{ color: '#CCCCCC' }}
                  onMouseEnter={(e) => e.target.style.color = '#FE4A23'}
                  onMouseLeave={(e) => e.target.style.color = '#CCCCCC'}
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="/#how-it-works"
                  className="transition-colors"
                  style={{ color: '#CCCCCC' }}
                  onMouseEnter={(e) => e.target.style.color = '#FE4A23'}
                  onMouseLeave={(e) => e.target.style.color = '#CCCCCC'}
                >
                  How We Work
                </a>
              </li>


              <li>
                <Link
                  to="/about"
                  className="transition-colors"
                  style={{ color: '#CCCCCC' }}
                  onMouseEnter={(e) => e.target.style.color = '#FE4A23'}
                  onMouseLeave={(e) => e.target.style.color = '#CCCCCC'}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="transition-colors"
                  style={{ color: '#CCCCCC' }}
                  onMouseEnter={(e) => e.target.style.color = '#FE4A23'}
                  onMouseLeave={(e) => e.target.style.color = '#CCCCCC'}
                >
                  Contact us
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4
              className="text-base font-semibold mb-4"
              style={{ color: '#FFFFFF' }}
            >
              Contact Us
            </h4>
            <div className="space-y-4 text-sm">
              {/* Address */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(254, 74, 35, 0.2)' }}>
                  <FiMapPin className="w-5 h-5" style={{ color: '#FE4A23' }} />
                </div>
                <div style={{ color: '#CCCCCC' }}>
                  <p>Ground, 1st Floor,</p>
                  <p>SupremeWork Co-working Space,</p>
                  <p>Plot No. 84, Institutional Area,</p>
                  <p>Prem Puri, Sector 32,</p>
                  <p>Gurugram, Haryana 122001</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(254, 74, 35, 0.2)' }}>
                  <FiPhone className="w-5 h-5" style={{ color: '#FE4A23' }} />
                </div>
                <a
                  href="tel:+918035315291"
                  className="transition-colors"
                  style={{ color: '#CCCCCC' }}
                  onMouseEnter={(e) => e.target.style.color = '#FE4A23'}
                  onMouseLeave={(e) => e.target.style.color = '#CCCCCC'}
                >
                  +91 8035315291
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(254, 74, 35, 0.2)' }}>
                  <FiMail className="w-5 h-5" style={{ color: '#FE4A23' }} />
                </div>
                <a
                  href="mailto:contact@aifilmz.com"
                  className="transition-colors"
                  style={{ color: '#CCCCCC' }}
                  onMouseEnter={(e) => e.target.style.color = '#FE4A23'}
                  onMouseLeave={(e) => e.target.style.color = '#CCCCCC'}
                >
                  contact@aifilmz.com
                </a>
              </div>

              {/* Business Hours */}
              <div className="mt-4">
                <p className="font-semibold mb-1" style={{ color: '#FFFFFF' }}>
                  Business Hours
                </p>
                <p style={{ color: '#CCCCCC' }}>
                  Mon-Fri: 9AM-6PM IST
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderColor: '#333333' }}
        >
          <p
            className="text-xs text-center md:text-left"
            style={{ color: '#999999' }}
          >
            © 2025 AI Filmz. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs">
            <a
              href="#privacy"
              className="transition-colors"
              style={{ color: '#999999' }}
              onMouseEnter={(e) => e.target.style.color = '#FE4A23'}
              onMouseLeave={(e) => e.target.style.color = '#999999'}
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="transition-colors"
              style={{ color: '#999999' }}
              onMouseEnter={(e) => e.target.style.color = '#FE4A23'}
              onMouseLeave={(e) => e.target.style.color = '#999999'}
            >
              Terms of Service
            </a>
            <a
              href="#cookies"
              className="transition-colors"
              style={{ color: '#999999' }}
              onMouseEnter={(e) => e.target.style.color = '#FE4A23'}
              onMouseLeave={(e) => e.target.style.color = '#999999'}
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;