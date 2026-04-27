import React from 'react';
import GlobalNavigation from '../components/GlobalNavigation';
import HeroSection from '../components/HeroSection';
import TickerSection from '../components/TickerSection';
import WhoWeWorkWith from '../components/WhoWeWorkWith';
import ServicesGrid from '../components/ServicesGrid';
import ClientWork from '../components/ClientWork';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';



export default function Home() {
  return (
    <div id="page-wrapper" className="min-h-screen flex flex-col">
      <GlobalNavigation />
      <main id="main-content" className="flex-1">
        <HeroSection />
        <WhoWeWorkWith />
        <ServicesGrid />
        <ClientWork />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
