import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TrustedBy from './components/TrustedBy';
import OurWork from './components/OurWork';
import Services from './components/Services';
import WhyChooseAIAgencySection from './components/WhyChooseAIAgencySection';
import GlimpseAtFilms from './components/GlimpseAtFilms';
import HowItWorksSection from './components/HowItWorksSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="loading-content"
        >
          <h1 className="loading-logo">AI FILMZ</h1>
          <div className="loading-spinner"></div>
        </motion.div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <main>
          <HeroSection />
          <TrustedBy />
          <OurWork />
          <Services />
          <WhyChooseAIAgencySection />
          <GlimpseAtFilms />
          <HowItWorksSection />
          <PricingSection />
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;