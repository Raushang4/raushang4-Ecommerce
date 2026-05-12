import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Tech Stack | The Tools Behind the Growth — raushang4 E-Commerce",
  description: "Explore the modern e-commerce tech stack we use to build high-performance stores and scalable digital growth systems.",
};

export default function StackPage() {
  const categories = [
    {
      title: "E-Commerce Platforms",
      tools: [
        { name: "Shopify Plus", logo: "/_astro/65fb307dac695a4f3eab208f936da296ceb11bda-928x257_ZoNh9p.svg", desc: "The gold standard for scaling D2C brands." },
        { name: "WooCommerce", logo: "/_astro/7014d85bf61d7d7652c834f66f87286121cc1641-98x72_ZlM0vL.svg", desc: "Highly customizable for B2B and complex catalogs." },
        { name: "Next.js", logo: "/next.svg", desc: "For headless e-commerce and ultimate speed." }
      ]
    },
    {
      title: "Marketing & Retention",
      tools: [
        { name: "Meta Ads", logo: "", desc: "Driving high-intent discovery and scaled acquisition." },
        { name: "Google Ads", logo: "", desc: "Capturing search intent and shopping demand." },
        { name: "Klaviyo", logo: "", desc: "The engine for email and SMS retention." },
        { name: "WhatsApp Business", logo: "", desc: "Real-time conversational commerce in the Delhi NCR region." }
      ]
    },
    {
      title: "Analytics & CRO",
      tools: [
        { name: "GA4", logo: "", desc: "Deep event tracking and attribution modeling." },
        { name: "Microsoft Clarity", logo: "", desc: "Heatmaps and session recording to find friction." },
        { name: "VWO", logo: "", desc: "Advanced A/B testing and split URL deployments." }
      ]
    }
  ];

  return (
    <div className="stack-page-container">
      <section className="hero-wrap" style={{ minHeight: 'auto', paddingBottom: '80px' }}>
        <div className="hero" style={{ maxWidth: '1000px' }}>
          <div className="hero-eyebrow">The Tech Stack</div>
          <h1> Modern tools for<em> High-Performance Brands</em></h1>
          <p className="hero-sub">We don't use 'off-the-shelf' templates. We build bespoke systems using the best technology available in 2026.</p>
        </div>
      </section>

      <section className="stack-section" style={{ background: 'var(--bg)', padding: '100px 24px' }}>
        <div className="section-inner">
          {categories.map((cat, idx) => (
            <div key={idx} className="stack-category" style={{ marginBottom: '80px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '32px', borderBottom: '1px solid var(--border)', paddingBottom: '16px' }}>{cat.title}</h2>
              <div className="stack-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
                {cat.tools.map((tool, tIdx) => (
                  <div key={tIdx} className="tool-card" style={{ background: 'var(--white)', padding: '32px', borderRadius: '20px', border: '1px solid var(--border)' }}>
                    {tool.logo && (
                      <div style={{ height: '40px', marginBottom: '20px', position: 'relative' }}>
                        <Image src={tool.logo} alt={tool.name} fill style={{ objectFit: 'contain', objectPosition: 'left' }} />
                      </div>
                    )}
                    <h3 style={{ fontSize: '19px', fontWeight: 700, marginBottom: '8px' }}>{tool.name}</h3>
                    <p style={{ fontSize: '14px', color: 'var(--mid)', lineHeight: 1.6 }}>{tool.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="journey-section" style={{ background: 'var(--white)' }}>
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <p className="section-eyebrow">The Heads-up</p>
          <h2 className="section-h2">The tool is only as good<br /><em> as the person holding it.</em></h2>
          <p className="section-sub" style={{ maxWidth: '700px', margin: '0 auto' }}>We don't just 'install' these tools. We integrate them into a unified system where your ads talk to your inventory, and your CRM talks to your analytics.</p>
        </div>
      </section>

      <section className="footer-cta-section">
        <div className="footer-cta-inner">
          <h2> Ready to upgrade your system?<em> Stop using yesterday's tech.</em></h2>
          <p> Let's audit your current stack and show you where your technology is holding back your growth.</p>
          <Link href="/contact" className="btn-cta-footer">Audit My Tech Stack</Link>
        </div>
      </section>
    </div>
  );
}
