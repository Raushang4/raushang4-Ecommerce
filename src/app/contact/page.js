import React from 'react';
import UnifiedContactForm from '../../components/UnifiedContactForm';

export const metadata = {
  title: "Contact raushang4 E-Commerce | Book a Discovery Call",
  description: "Talk to raushang4 E-Commerce about Shopify development, performance marketing, CRO, analytics, or SEO for your D2C brand, manufacturing business, or service company in India.",
};

export default function ContactPage() {
  const contactFormFields = [
    { name: 'name', label: 'Your name', type: 'text', placeholder: 'Rahul Mehta', required: true },
    { name: 'email', label: 'Work email', type: 'email', placeholder: 'you@company.com', required: true },
    { name: 'phone', label: 'Phone number', type: 'tel', placeholder: '+91 98765 43210', required: true, autoComplete: 'tel', inputMode: 'tel' },
    { 
      name: 'business_type', 
      label: 'Type of business', 
      type: 'select', 
      required: true,
      options: [
        { label: 'D2C / Ecommerce', value: 'd2c-ecommerce' },
        { label: 'Manufacturer / B2B', value: 'manufacturer' },
        { label: 'Service Business', value: 'service-business' },
        { label: 'Real Estate', value: 'real-estate' },
        { label: 'Other', value: 'other' }
      ]
    },
    { name: 'message', label: 'How can we help?', type: 'textarea', placeholder: 'Tell us about your project...', required: true }
  ];

  return (
    <>
      <div className="hero-wrap">
        <div className="hero"> 
          <div className="hero-eyebrow"> 
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"></path>
            </svg>
            Let's Talk
          </div> 
          <h1>Tell us what's not working.<em>We'll tell you if we can fix it.</em></h1> 
          <p className="hero-sub">No pitch decks. No hard sell. A 30-minute conversation to figure out what's broken and whether we're the right people to solve it.</p> 
        </div> 
      </div>  
      
      <section className="contact-section"> 
        <div className="section-inner"> 
          <div className="contact-grid">  
            <div className="form-col">
              <p className="form-intro-eyebrow">Get in touch</p> 
              <h2 className="form-intro-heading">Send us a message.</h2> 
              <p className="form-intro-sub">We review every message within 24 hours. If it looks like a fit, we'll reach out to book a call. If we're not the right people, we'll tell you that too.</p> 
              
              <div className="contact-form-card" style={{ padding: '32px', background: 'var(--white)', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                <UnifiedContactForm 
                  formName="Contact Page Main Form"
                  pageSource="contact_page"
                  buttonText="Send Message"
                  fields={contactFormFields}
                />
              </div>
            </div>  
            
            <div className="contact-right">
              <div> 
                <p className="process-heading">What happens after you reach out</p> 
                <div className="process-steps"> 
                  <div className="process-step"> 
                    <div className="step-num">1</div> 
                    <div className="step-body"> 
                      <p className="step-title">We review your message</p> 
                      <p className="step-desc">Within 24 hours. We read it properly — not a bot, not a VA. If we have questions before the call, we'll ask them here.</p> 
                    </div> 
                  </div> 
                  <div className="process-step"> 
                    <div className="step-num">2</div> 
                    <div className="step-body"> 
                      <p className="step-title">30-minute discovery call</p> 
                      <p className="step-desc">No deck. No presentation. We ask about your business, your numbers, and what's actually going wrong. You get to decide if we're the right fit too.</p> 
                    </div> 
                  </div> 
                  <div className="process-step"> 
                    <div className="step-num">3</div> 
                    <div className="step-body"> 
                      <p className="step-title">An honest answer</p> 
                      <p className="step-desc">We come back with a clear read on what we think the problem is and whether we're the right people to fix it. If we're not, we'll say so — and usually point you toward who is.</p> 
                    </div> 
                  </div> 
                </div> 
              </div>  
              
              <div className="qualifier-block" style={{ marginTop: '48px' }}> 
                <p className="qualifier-heading">This works best if you're...</p> 
                <div className="qualifier-list"> 
                  <div className="qualifier-item" style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}> 
                    <div className="qualifier-check" style={{ color: 'var(--accent-dark)' }}> 
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg> 
                    </div> 
                    <p><strong>A founder or decision-maker</strong> who wants direct answers, not filtered-down reports from an account manager.</p> 
                  </div> 
                  <div className="qualifier-item" style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}> 
                    <div className="qualifier-check" style={{ color: 'var(--accent-dark)' }}> 
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg> 
                    </div> 
                    <p><strong>Ready to move.</strong> We don't do 3-month onboarding. We usually start work within 10 days of the call.</p> 
                  </div>
                </div> 
              </div> 
            </div> 
          </div> 
        </div> 
      </section>  
      
      <section className="footer-cta-section">
        <div className="footer-cta-inner"> 
          <h2>Not ready to reach out yet?<em>Read about how we work.</em></h2> 
          <p>Seven years and one consistent model: stay accountable for the outcome, not just the deliverable.</p> 
          <a href="/about" className="btn-cta-footer">
            About raushang4 E-Commerce
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg> 
          </a> 
        </div> 
      </section> 
    </>
  );
}
