import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import SolanaSection from '@/components/SolanaSection';
import Pricing from '@/components/Pricing';
import Users from '@/components/Users';
import TechStack from '@/components/TechStack';
import Waitlist from '@/components/Waitlist';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <SolanaSection />
      <Users />
      <TechStack />
      <Pricing />
      <Waitlist />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;