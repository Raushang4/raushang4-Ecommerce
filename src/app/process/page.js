import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Our Process | The Growth Blueprint — raushang4 E-Commerce",
  description: "Learn how raushang4 E-Commerce takes brands from low ROAS to scaled growth using our 'Foundation before Fuel' blueprint.",
};

export default function ProcessPage() {
  const steps = [
    {
      id: "01",
      name: "Discovery & Diagnosis",
      desc: "We don't guess. We audit your GA4, Meta Ads Manager, and heatmaps to identify exactly where the revenue leak is. Before we talk about growth, we talk about data.",
      details: ["Unit Economic Audit", "Conversion Gap Analysis", "Competitor Benchmarking"]
    },
    {
      id: "02",
      name: "The Foundation Fix",
      desc: "We don't scale what's broken. We rebuild your landing pages, optimize site speed, and fix the checkout flow. Our goal is a conversion rate that justifies every rupee of ad spend.",
      details: ["UX/UI Store Rebuild", "Speed Optimization", "Persuasion Architecture"]
    },
    {
      id: "03",
      name: "Fueling the Machine",
      desc: "Once the store converts, we turn on the traffic. High-intent Meta & Google campaigns designed for profitability, not just impressions.",
      details: ["Performance Marketing", "Creative Strategy", "Inventory-Led Scaling"]
    },
    {
      id: "04",
      name: "Retention & LTV",
      desc: "Acquisition is expensive. We build the automation systems (Klaviyo/WhatsApp) that keep customers coming back, turning one-time buyers into brand advocates.",
      details: ["Email/SMS Automation", "Loyalty Systems", "Customer Data Platform"]
    },
    {
      id: "05",
      name: "Continuous Optimization",
      desc: "The market changes. We run weekly A/B tests and monthly strategy refreshes to ensure you stay ahead of the curve and the competition.",
      details: ["A/B Testing", "AEO/GEO Optimization", "Predictive Analytics"]
    }
  ];

  return (
    <div className="process-page-container">
      <section className="hero-wrap" style={{ minHeight: 'auto', paddingBottom: '80px' }}>
        <div className="hero" style={{ maxWidth: '1000px' }}>
          <div className="hero-eyebrow">The Blueprint</div>
          <h1> How we build<em> Digital Growth Systems</em></h1>
          <p className="hero-sub">Most agencies deliver a project and leave. We deliver a result and stay. Here is the exact path we take to scale our clients.</p>
        </div>
      </section>

      <section className="steps-section" style={{ background: 'var(--white)', padding: '100px 24px' }}>
        <div className="section-inner" style={{ maxWidth: '900px' }}>
          <div className="process-timeline">
            {steps.map((step, idx) => (
              <div key={step.id} className="process-step" style={{ display: 'flex', gap: '48px', marginBottom: '80px', position: 'relative' }}>
                <div className="step-number" style={{ 
                  fontSize: '48px', 
                  fontFamily: '"Instrument Serif", serif', 
                  fontStyle: 'italic', 
                  color: 'var(--accent)', 
                  opacity: 0.3,
                  minWidth: '60px'
                }}>
                  {step.id}
                </div>
                <div className="step-content">
                  <h3 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '16px', color: 'var(--dark)' }}>{step.name}</h3>
                  <p style={{ fontSize: '17px', color: 'var(--mid)', lineHeight: 1.7, marginBottom: '24px' }}>{step.desc}</p>
                  <div className="step-pills" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    {step.details.map((detail, dIdx) => (
                      <span key={dIdx} style={{ 
                        background: 'var(--accent-light)', 
                        color: 'var(--accent-dark)', 
                        fontSize: '13px', 
                        fontWeight: 600, 
                        padding: '6px 16px', 
                        borderRadius: '100px' 
                      }}>
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
                {idx < steps.length - 1 && (
                  <div className="step-line" style={{ 
                    position: 'absolute', 
                    left: '28px', 
                    top: '70px', 
                    bottom: '-40px', 
                    width: '1px', 
                    background: 'var(--border)' 
                  }}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="footer-cta-section">
        <div className="footer-cta-inner">
          <h2> Ready to start step one?<em> It's a diagnosis, not a pitch.</em></h2>
          <p> Book a 30-minute growth audit where we look at your current numbers and tell you exactly where the bottleneck is.</p>
          <Link href="/contact" className="btn-cta-footer">Book My Growth Audit</Link>
        </div>
      </section>
    </div>
  );
}
