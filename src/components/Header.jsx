import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSun, FiMoon, FiMenu, FiX } = FiIcons;

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Services', path: '/#services' },
    // { name: 'Pricing', path: '/#pricing' },
    { name: 'How we work', path: '/#how-it-works' },
    { name: 'About us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleNavClick = (path) => {
    setIsMobileMenuOpen(false);

    // Handle anchor links
    if (path.startsWith('/#')) {
      const sectionId = path.substring(2);
      if (location.pathname !== '/') {
        // Navigate to home first, then scroll
        window.location.href = path;
      } else {
        // Already on home, just scroll
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-8 pt-1"
    >
      <div className={`max-w-7xl mx-auto rounded-full transition-all duration-500 ${isDark ? 'bg-gray-900/95 shadow-2xl' : 'bg-white/95 shadow-xl'
        } ${isScrolled ? 'backdrop-blur-xl' : 'backdrop-blur-md'}`}>
        <div className="flex items-center justify-between h-14 lg:h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo Section */}
          <Link to="/">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center">
              <div className={`flex items-center space-x-2 ${isDark ? 'text-white' : 'text-black'}`}>
                <img src="/imges/logo.png" alt="AiFilmz Logo" className="h-10 w-auto" />
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex justify-end space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.path.startsWith('/#') ? (
                  <a
                    href={item.path}
                    onClick={(e) => {
                      if (location.pathname === '/') {
                        e.preventDefault();
                        handleNavClick(item.path);
                      }
                    }}
                    className={`px-4 py-2 text-base font-medium rounded-lg transition-all duration-300 ${isDark
                      ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                      : 'text-gray-700 hover:text-black hover:bg-gray-100'
                      }`}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-4 py-2 text-base font-medium rounded-lg transition-all duration-300 ${isDark
                      ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                      : 'text-gray-700 hover:text-black hover:bg-gray-100'
                      } ${location.pathname === item.path ? (isDark ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black') : ''}`}
                  >
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Right Section - Search, Theme Toggle & Connect Button */}
          <div className="flex items-center space-x-3">
            {/* Search Icon */}
            <motion.button
              className={`hidden lg:block p-2.5 rounded-lg transition-all duration-300 ${isDark
                ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                : 'text-gray-700 hover:text-black hover:bg-gray-100'
                }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </motion.button>

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className={`p-2.5 rounded-lg transition-all duration-300 ${isDark
                ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                : 'text-gray-700 hover:text-black hover:bg-gray-100'
                }`}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
            >
              <SafeIcon icon={isDark ? FiSun : FiMoon} className="w-5 h-5" />
            </motion.button>

            {/* Connect Button */}
            <motion.a
              href="tel:919789565515"
              className="hidden lg:flex items-center space-x-2 px-6 py-2.5 font-medium rounded-full transition-all duration-300"
              style={{ background: 'var(--accent-color)', color: 'var(--text-inverse)' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Connect</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2.5 rounded-lg transition-all duration-300 ${isDark
                ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                : 'text-gray-700 hover:text-black hover:bg-gray-100'
                }`}
            >
              <SafeIcon icon={isMobileMenuOpen ? FiX : FiMenu} className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>

      {/* Mobile Menu Dropdown - Positioned Below Header */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className={`absolute top-full left-4 right-4 mt-2 rounded-lg shadow-2xl ${isDark ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-xl`}
        >
          <nav className="py-4 px-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.path.startsWith('/#') ? (
                  <a
                    href={item.path}
                    onClick={(e) => {
                      if (location.pathname === '/') {
                        e.preventDefault();
                      }
                      handleNavClick(item.path);
                    }}
                    className={`block py-3 px-4 rounded-none transition-all duration-300 ${isDark
                      ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                      : 'text-gray-700 hover:text-black hover:bg-gray-100'
                      }`}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className={`block py-3 px-4 rounded-none transition-all duration-300 ${isDark
                      ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                      : 'text-gray-700 hover:text-black hover:bg-gray-100'
                      } ${location.pathname === item.path ? (isDark ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black') : ''}`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile Connect Button */}
            <motion.a
              href="tel:919789565515"
              className="w-full mt-4 flex items-center justify-center space-x-2 px-6 py-3 rounded-md font-medium"
              style={{ background: 'var(--accent-color)', color: 'var(--text-inverse)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Connect</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;