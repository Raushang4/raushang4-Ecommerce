import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TickerSection from '../../components/TickerSection';
import Testimonials from '../../components/Testimonials';
import UnifiedContactForm from '../../components/UnifiedContactForm';

export const metadata = {
  title: "Digital Pipeline Engineering for Manufacturers | raushang4",
  description: "Stop relying on third-party marketplaces. We engineer direct-to-buyer digital acquisition systems for Indian manufacturers, ensuring predictable leads and brand sovereignty.",
};

export default function ManufacturersPage() {
  const formFields = [
    { name: "name", label: "Name", type: "text", placeholder: "Your name", required: true },
    { name: "email", label: "Email", type: "email", placeholder: "you@company.com", required: true },
    { name: "phone", label: "Phone", type: "tel", placeholder: "9304995677", required: true },
    { name: "product_category", label: "Product Category", type: "text", placeholder: "What do you manufacture?" },
    { name: "lead_source", label: "Primary Lead Source", type: "select", placeholder: "Current primary source", options: ["IndiaMart/TradeIndia", "Referrals/Network", "Organic Website", "Paid Search"] },
    { name: "message", label: "What is your growth roadblock?", type: "textarea", placeholder: "e.g., Lead quality is low, or we're too dependent on IndiaMart.", required: true }
  ];

  return (
    <>
      <div className="hero-wrap"> 
        <div className="hero"> 
          <div className="eyebrow">Manufacturers & Exporters</div> 
          <h1>Stop renting your visibility.<br /><em>Start owning your pipeline.</em></h1> 
          <div className="hero-btns"> 
            <a href="/manufacturers#contact" className="btn-primary">Engineer My Pipeline</a> 
            <a href="/manufacturers#checklist" className="btn-secondary">View Manufacturing Proof</a> 
          </div> 
        </div> 
      </div> 
      
      <TickerSection />

      <section id="checklist" className="checklist-section"> 
        <div className="section-inner"> 
          <h2 className="section-h2">Is your growth fragile?</h2> 
          <div className="checklist-grid"> 
            <div className="checklist-item"><p>Enquiries are inconsistent and dependent on third-party marketplaces</p></div> 
          </div> 
        </div> 
      </section>

      <Testimonials />

      <section id="contact" className="cta-bottom"> 
        <div className="section-inner"> 
          <h2>Stop renting your business future.<br /><em>Start engineering your sovereignty.</em></h2> 
          <div className="contact-form-card" style={{maxWidth: "600px", margin: "0 auto"}}> 
            <UnifiedContactForm formName="Manufacturing Playbook Contact Form" pageSource="manufacturers" buttonText="Request My Pipeline Audit" fields={formFields} /> 
          </div> 
        </div> 
      </section>
    </>
  );
}
