import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "The Growth Blueprint | Our Engineering Process — raushang4",
  description: "Learn how raushang4 E-Commerce engineers scalable digital systems. From technical diagnosis to statistical optimization, here is our systematic path to performance.",
};

export default function ProcessPage() {
  const steps = [
    {
      id: "01",
      name: "Technical Diagnosis",
      desc: "We don't guess; we audit. We perform a deep-dive into your GA4, ad platforms, and behavioral heatmaps to identify exactly where your system is leaking revenue. Data is the only foundation for strategy.",
      details: ["Unit Economic Review", "Conversion Architecture Audit", "Attribution Reconciliation"]
    },
    {
      id: "02",
      name: "Architectural Rebuild",
      desc: "We never scale a broken foundation. We engineer the structural fixes—optimizing site speed, streamlining checkout flows, and deploying high-authority product pages—to ensure your store can handle profitable traffic.",
      details: ["Bespoke Theme Engineering", "Speed Stress Testing", "Trust Signal Integration"]
    },
    {
      id: "03",
      name: "Acquisition Engineering",
      desc: "Once the foundation is robust, we deploy targeted Meta and Google Search campaigns. Our focus is on high-intent capture and unit-economic profitability, not just superficial click volume.",
      details: ["Intent-Based Search Logic", "Creative Testing Pipeline", "Scalable Account Structure"]
    },
    {
      id: "04",
      name: "Authority & Retention",
      desc: "Scale requires repeat buyers. We build automated retention ecosystems using Klaviyo and WhatsApp, while concurrently building your search authority through advanced SEO and AEO schema.",
      details: ["Retention Workflow Automation", "AI Search Optimization (AEO)", "First-Party Data Ownership"]
    },
    {
      id: "05",
      name: "Empirical Optimization",
      desc: "The digital landscape is dynamic. We run continuous A/B tests and monthly sprints to ensure your performance compounds, keeping your brand ahead of competitors and algorithm shifts.",
      details: ["Statistical A/B Testing", "Knowledge Graph Expansion", "Predictive Profit Modeling"]
    }
  ];

  return (
    <div className="process-page-container">
      <section className="hero-wrap" style={{ minHeight: 'auto', paddingBottom: '80px' }}>
        <div className="hero" style={{ maxWidth: '1000px' }}>
          <div className="hero-eyebrow">The Engineering Blueprint</div>
          <h1> How we engineer<em> high-velocity growth</em></h1>
          <p className="hero-sub">Most agencies deliver deliverables. We engineer outcomes. Here is the systematic protocol we use to build sustainable digital scale for our partners.</p>
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
                    {steps[idx].details.map((detail, dIdx) => (
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
          <p> Request a 30-minute technical audit where we analyze your current data and identify your most significant growth bottlenecks.</p>
          <Link href="/contact" className="btn-cta-footer">Request Your Audit Roadmap</Link>
        </div>
      </section>
    </div>
  );
}
