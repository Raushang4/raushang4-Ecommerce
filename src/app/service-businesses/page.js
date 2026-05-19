import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TickerSection from '../../components/TickerSection';
import Testimonials from '../../components/Testimonials';
import UnifiedContactForm from '../../components/UnifiedContactForm';

export const metadata = {
  title: "Lead Generation & Authority Engineering for Service Brands | raushang4",
  description: "Beyond referrals: we build predictable inbound pipelines for premium service businesses. Specializing in authority-driven web systems and high-intent Google Search strategy.",
};

export default function ServiceBusinessesPage() {
  const formFields = [
    { name: "name", label: "Name", type: "text", placeholder: "Your name", required: true },
    { name: "email", label: "Email", type: "email", placeholder: "you@company.com", required: true },
    { name: "phone", label: "Phone", type: "tel", placeholder: "9304995677", required: true },
    { name: "service_type", label: "Service Category", type: "text", placeholder: "e.g., Interior Design, Enterprise Software..." },
    { name: "client_source", label: "Primary Client Source", type: "select", placeholder: "How do clients find you?", options: ["Word of Mouth", "Search", "Social Media"] },
    { name: "message", label: "What is your primary growth goal?", type: "textarea", placeholder: "e.g., We need more high-ticket leads.", required: true }
  ];

  return (
    <>
      <div className="hero-wrap"> 
        <div className="hero"> 
          <div className="eyebrow">Service-Based Brands</div> 
          <h1>Referrals built your reputation.<br /><em>Engineering builds your scale.</em></h1> 
          <div className="hero-btns"> 
            <a href="/service-businesses#contact" className="btn-primary">Engineer My Pipeline</a> 
            <a href="/service-businesses#checklist" className="btn-secondary">View Service Proof</a> 
          </div> 
        </div> 
      </div> 
      
      <TickerSection />

      <section id="checklist" className="checklist-section"> 
        <div className="section-inner"> 
          <h2 className="section-h2">Is your network too small for your goals?</h2> 
          <div className="checklist-grid"> 
            <div className="checklist-item"><p>More than 70% of new business relies on personal network mentions</p></div> 
          </div> 
        </div> 
      </section>

      <Testimonials />

      <section id="contact" className="cta-bottom"> 
        <div className="section-inner"> 
          <h2>Stop depending on the next referral.<br /><em>Start engineering your own demand.</em></h2> 
          <div className="contact-form-card" style={{maxWidth: "600px", margin: "0 auto"}}> 
            <UnifiedContactForm formName="Service Playbook Contact Form" pageSource="service-businesses" buttonText="Request My Pipeline Audit" fields={formFields} /> 
          </div> 
        </div> 
      </section>
    </>
  );
}
