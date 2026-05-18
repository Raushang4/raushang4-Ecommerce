import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Modern Tech Stack | Engineering the Future of Growth — raushang4",
  description: "Explore the proprietary engineering stack we use to build high-velocity stores and scalable digital growth systems. From Next.js to Server-Side GTM.",
};

export default function StackPage() {
  const categories = [
    {
      title: "Core Infrastructure",
      tools: [
        { name: "Next.js & React", logo: "/next.svg", desc: "Our choice for headless e-commerce and high-intent marketing applications, providing unparalleled speed and SEO leverage." },
        { name: "Shopify Plus", logo: "/_astro/65fb307dac695a4f3eab208f936da296ceb11bda-928x257_ZoNh9p.svg", desc: "The definitive standard for rapid consumer scale, supporting complex global storefronts." },
        { name: "WooCommerce PHP", logo: "/_astro/7014d85bf61d7d7652c834f66f87286121cc1641-98x72_ZlM0vL.svg", desc: "Custom-built PHP architectures for brands demanding total code sovereignty and complex B2B logic." }
      ]
    },
    {
      title: "Acquisition & Retention",
      tools: [
        { name: "High-Intent Meta Ads", logo: "", desc: "Engineering targeted discovery and scaled acquisition based on behavioral intent modeling." },
        { name: "Google Search (LSA)", logo: "", desc: "Capturing high-authority demand through precise keyword engineering and bidding logic." },
        { name: "Klaviyo Automation", logo: "", desc: "The behavioral engine for email and SMS retention, turning one-time buyers into lifetime advocates." },
        { name: "WhatsApp Business API", logo: "", desc: "Real-time conversational commerce architecture, essential for the modern Indian D2C landscape." }
      ]
    },
    {
      title: "Analytics & Empirical Data",
      tools: [
        { name: "GA4 Server-Side", logo: "", desc: "Neutralizing platform bias with server-side GTM containers for maximum attribution accuracy." },
        { name: "Microsoft Clarity", logo: "", desc: "Utilizing heatmaps and session intelligence to identify and eliminate conversion friction." },
        { name: "Looker Studio", logo: "", desc: "Custom profit dashboards that focus on Contribution Margin (CM2) and true unit economics." }
      ]
    }
  ];

  return (
    <div className="stack-page-container">
      <section className="hero-wrap" style={{ minHeight: 'auto', paddingBottom: '80px' }}>
        <div className="hero" style={{ maxWidth: '1000px' }}>
          <div className="hero-eyebrow">The Engineering Stack</div>
          <h1> Senior-level tools for<em> high-performance entities</em></h1>
          <p className="hero-sub">We don't rely on 'off-the-shelf' templates or fragile plugins. We engineer bespoke systems utilizing the most advanced technology available in 2026.</p>
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
          <p className="section-eyebrow">Technical Stewardship</p>
          <h2 className="section-h2">The platform is the foundation,<br /><em> not the ceiling.</em></h2>
          <p className="section-sub" style={{ maxWidth: '700px', margin: '0 auto' }}>We don't just 'install' tools. We engineer a cohesive digital ecosystem where your acquisition data informs your inventory, and your CRM drives your search authority.</p>
        </div>
      </section>

      <section className="footer-cta-section">
        <div className="footer-cta-inner">
          <h2> Ready to upgrade your digital engine?<em> Stop using yesterday's templates.</em></h2>
          <p> Let's audit your current stack and show you exactly where your technology is restricting your growth.</p>
          <Link href="/contact" className="btn-cta-footer">Request a Technical Stack Audit</Link>
        </div>
      </section>
    </div>
  );
}
