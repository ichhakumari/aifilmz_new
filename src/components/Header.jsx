import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSun, FiMoon, FiMenu, FiX, FiChevronDown } = FiIcons;

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    {
      name: 'Services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'AI Video Production', href: '#services' },
        { name: '3D Rendering', href: '#3d-rendering' },
        { name: 'Motion Graphics', href: '#motion-graphics' },
        { name: 'Virtual Production', href: '#virtual-production' },
        { name: 'Post Production', href: '#post-production' }
      ]
    },
    {
      name: 'Work',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Case Studies', href: '#case-studies' },
        { name: 'Client Success', href: '#client-success' },
        { name: 'Awards', href: '#awards' }
      ]
    },
    {
      name: 'Resources',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Blog', href: '#blog' },
        { name: 'Tutorials', href: '#tutorials' },
        { name: 'Documentation', href: '#docs' },
        { name: 'API', href: '#api' }
      ]
    },
    {
      name: 'This is us',
      hasDropdown: true,
      dropdownItems: [
        { name: 'About Us', href: '#about' },
        { name: 'Our Team', href: '#team' },
        { name: 'Careers', href: '#careers' },
        { name: 'Contact', href: '#contact' }
      ]
    }
  ];

  const handleDropdownToggle = (itemName) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
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
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center">
            <div className={`flex items-center space-x-2 ${isDark ? 'text-white' : 'text-black'}`}>
              <img src="/imges/logo.png" alt="AiFilmz Logo" className="h-10 w-auto" />
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav ref={dropdownRef} className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  className={`flex items-center space-x-1 px-4 py-2 text-base font-medium rounded-lg transition-all duration-300 ${isDark
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                    : 'text-gray-700 hover:text-black hover:bg-gray-100'
                    } ${activeDropdown === item.name ? (isDark ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black') : ''}`}
                  onClick={() => handleDropdownToggle(item.name)}
                >
                  <span>{item.name}</span>
                  <motion.div
                    animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className={`absolute top-full left-0 mt-2 min-w-64 shadow-2xl border ${isDark
                        ? 'bg-gray-900 border-gray-700'
                        : 'bg-white border-gray-200'
                        }`}>
                      <div className="py-2">
                        {item.dropdownItems.map((dropdownItem, idx) => (
                          <motion.a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            variants={itemVariants}
                            className={`block px-6 py-3 text-sm font-medium transition-all duration-200 ${isDark
                              ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                              : 'text-gray-700 hover:text-black hover:bg-gray-50'
                              }`}
                            onClick={() => setActiveDropdown(null)}
                          >
                            {dropdownItem.name}
                          </motion.a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

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
              href="tel:918035315291"
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

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="py-4 px-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
                {navItems.map((item) => (
                  <div key={item.name} className="border-b border-gray-100 dark:border-gray-800 last:border-0">
                    <button
                      className={`w-full text-left flex items-center justify-between py-3 px-4 rounded-lg transition-all duration-300 ${isDark
                        ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                        : 'text-gray-700 hover:text-black hover:bg-gray-100'
                        }`}
                      onClick={() => {
                        // For mobile, we could expand/collapse or just navigate
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      <span>{item.name}</span>
                      <FiChevronDown className="w-4 h-4" />
                    </button>

                    {/* Mobile Dropdown Items */}
                    <div className="pl-4 space-y-1 pb-2">
                      {item.dropdownItems.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className={`block py-2 px-4 text-sm rounded-lg transition-all duration-200 ${isDark
                            ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                            : 'text-gray-600 hover:text-black hover:bg-gray-50'
                            }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Mobile Connect Button */}
                <motion.a
                  href="tel:918035315291"
                  className="w-full mt-4 flex items-center justify-center space-x-2 px-6 py-3 rounded-full font-medium"
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
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;