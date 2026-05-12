import React from 'react';
import HeroSection from '../components/HeroSection';
import WhoWeWorkWith from '../components/WhoWeWorkWith';
import ServicesGrid from '../components/ServicesGrid';
import ClientWork from '../components/ClientWork';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';



export default function Home() {
  return (
    <>
      <HeroSection />
      <WhoWeWorkWith />
      <ServicesGrid />
      <ClientWork />
      <Testimonials />
      <ContactSection />
    </>
  );
}
