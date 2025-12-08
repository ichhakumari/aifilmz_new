import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import WelcomeSection from '../components/WelcomeSection';
import TrustedBy from '../components/TrustedBy';
import Services from '../components/Services';
import WhyChooseAIAgencySection from '../components/WhyChooseAIAgencySection';
import GlimpseAtFilms from '../components/GlimpseAtFilms';
import HowItWorksSection from '../components/HowItWorksSection';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';
import OurWork from '../components/OurWork';
import IndustriesWeServe from '../components/IndustriesWeServe';

function Home() {
    return (
        <div className="app">
            <Header />
            <main>
                <HeroSection />
                <WelcomeSection />
                <TrustedBy />
                <OurWork />
                <Services />
                <WhyChooseAIAgencySection />
                <IndustriesWeServe />
                <GlimpseAtFilms />
                <HowItWorksSection />
                <PricingSection />
                <Footer />
            </main>
        </div>
    );
}

export default Home;
