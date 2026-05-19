import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TickerSection from '../../components/TickerSection';
import Testimonials from '../../components/Testimonials';
import UnifiedContactForm from '../../components/UnifiedContactForm';
import SchemaMarkup from '../../components/SchemaMarkup';

export const metadata = {
  title: "D2C Growth Playbook & Ecommerce Engineering | raushang4",
  description: "Stop renting growth. Start owning your authority. We engineer high-conversion Shopify and WooCommerce ecosystems for Indian D2C brands, focusing on unit economics and sustainable scale.",
};

export default function D2cEcommercePage() {
  const formFields = [
    { name: "name", label: "Your Name", type: "text", placeholder: "First and last name", required: true },
    { name: "email", label: "Email", type: "email", placeholder: "you@yourbrand.com", required: true },
    { name: "phone", label: "Phone Number", type: "tel", placeholder: "9304995677", required: true },
    { name: "store_url", label: "Your store URL", type: "url", placeholder: "https://yourbrand.com" },
    { name: "platform", label: "Platform", type: "select", placeholder: "Shopify or WooCommerce?", options: ["Shopify", "WooCommerce", "Other", "Not launched"] },
    { name: "monthly_revenue", label: "Monthly Revenue", type: "select", placeholder: "Approx range", options: ["Under ₹5L", "₹5L - ₹25L", "₹25L - ₹1Cr", "Above ₹1Cr"] },
    { name: "message", label: "Biggest challenge", type: "textarea", placeholder: "Tell us where it hurts..." }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Should we build on Shopify or WooCommerce?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The choice depends on your business model. Shopify offers faster deployment and lower maintenance for standard D2C brands. WooCommerce provides ultimate code sovereignty and is often superior for B2B models or brands requiring deep, custom PHP integrations."
        }
      },
      {
        "@type": "Question",
        "name": "How long until we see a conversion lift?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Structural 'quick wins' (e.g., checkout streamlining, CTA hierarchy) often yield measurable impact within 14-30 days. Full-funnel performance engineering typically requires a 90-day cycle to reach maximum statistical significance."
        }
      }
    ]
  };

  return (
    <>
      <SchemaMarkup schema={faqSchema} />
      <div className="hero-wrap"> 
        <div className="hero"> 
          <div className="hero-eyebrow"> 
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 01-8 0"></path></svg>
            D2C Growth Engineering
          </div> 
          <h1>Traffic is getting more expensive.<br /><em>Is your store converting high enough to scale?</em></h1> 
          <p className="hero-sub">We build and optimize the digital infrastructure that Indian D2C brands use to dominate their niche. We bridge the gap between ad creative and technical architecture to ensure every rupee spent works at peak efficiency.</p> 
          <div className="hero-btns"> 
            <a href="/d2c-ecommerce#contact" className="btn-primary">Request a D2C Performance Audit</a> 
            <a href="/d2c-ecommerce#cases" className="btn-secondary">View D2C Proof</a> 
          </div> 
        </div>  
      </div>

      <div className="badge-strip"> 
        <div className="badge-strip-inner"> 
          <span className="badge-label">Works on</span> 
          <div className="platform-badge badge-shopify">Shopify Partner</div> 
          <div className="platform-badge badge-woo">WooCommerce Engineering</div> 
        </div> 
      </div>

      <TickerSection />

      <section className="checklist-section"> 
        <div className="section-inner"> 
          <div className="split-feature-grid"> 
            <div className="checklist-intro"> 
              <p className="section-eyebrow">Signs you're hitting a wall</p> 
              <h2 className="section-h2">The common D2C growth constraints</h2> 
            </div> 
            <div className="checklist-grid"> 
              <div className="checklist-item"><p>Waning ROAS despite increasing ad creative volume</p></div> 
              <div className="checklist-item"><p>Mobile conversion rate stalling below 1.5%</p></div> 
            </div> 
          </div> 
        </div> 
      </section>

      <section id="cases" className="work-section"> 
        <div className="section-inner"> 
          <h2 className="section-h2">D2C systems that drive scale</h2> 
          <div className="cases-grid"> 
            {/* Case study logic here */}
          </div> 
        </div> 
      </section>

      <Testimonials />

      <section id="contact" className="cta-bottom"> 
        <div className="section-inner"> 
          <h2>Stop wrestling with your tech stack.<br /><em>Start scaling your margins.</em></h2> 
          <div className="contact-form-card" style={{maxWidth: "600px", margin: "0 auto"}}> 
            <UnifiedContactForm formName="D2C Playbook Contact Form" pageSource="d2c-ecommerce" buttonText="Request Your D2C Audit" fields={formFields} /> 
          </div> 
        </div> 
      </section>
    </>
  );
}
