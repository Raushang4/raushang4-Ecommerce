import React from 'react';
import Image from 'next/image';
import UnifiedContactForm from '../../components/UnifiedContactForm';

export const metadata = {
  title: "Analytics & Attribution Engineering | raushang4 E-Commerce",
  description: "Stop relying on platform-biased data. We engineer server-side tracking, GA4 architectures, and custom profit dashboards that reveal the true ROI of your marketing spend.",
};

export default function AnalyticsAttributionPage() {
  const formFields = [
  {
    "name": "first_name",
    "label": "First name",
    "type": "text",
    "placeholder": "Rahul",
    "required": true
  },
  {
    "name": "last_name",
    "label": "Last name",
    "type": "text",
    "placeholder": "Sharma",
    "required": true
  },
  {
    "name": "email",
    "label": "Business email",
    "type": "email",
    "placeholder": "rahul@yourbrand.com",
    "required": true,
    "autoComplete": "email"
  },
  {
    "name": "phone",
    "label": "Phone number",
    "type": "tel",
    "placeholder": "+91 98765 43210",
    "required": true,
    "autoComplete": "tel",
    "inputMode": "tel"
  },
  {
    "name": "store_url",
    "label": "Store URL",
    "type": "url",
    "placeholder": "https://yourbrand.com",
    "required": false
  },
  {
    "name": "monthly_ad_spend",
    "label": "Monthly ad spend (approx)",
    "type": "select",
    "placeholder": "Select range",
    "required": true,
    "options": [
      "Under ₹50,000",
      "₹50,000 – ₹2,00,000",
      "₹2,00,000 – ₹10,00,000",
      "₹10,00,000+"
    ]
  },
  {
    "name": "message",
    "label": "What's your tracking situation?",
    "type": "textarea",
    "placeholder": "e.g. our GA4 shows 120 conversions/month but Meta claims 280, we have no idea which is right...",
    "required": false
  }
];

  return (
    <>
      <div className="hero-wrap"> <div className="hero-grid">  <div> <div className="eyebrow-pill"> <svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
Data Infrastructure
</div> <h1 className="hero-h1">Stop scaling your business<br /><em>on biased platform data.</em></h1> <p className="hero-sub">Most attribution is broken. Platforms like Meta and Google often overclaim their impact, leading to wasted ad spend. raushang4 E-Commerce engineers a 'single source of truth' through server-side tracking and precise attribution modeling, so you scale based on profit reality.</p> <div className="hero-btns"> <a href="/analytics-attribution#contact" className="btn-primary">
Request a Data Audit
<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg> </a> <a href="/analytics-attribution#diagnosis" className="btn-ghost">The Audit Process</a> </div> </div>  <div className="ab-card"> <div className="ab-card-meta"> <div className="ab-card-title">Technical Audit · Indian D2C Brand</div> <div className="ab-card-badge">Data Reconciliation</div> </div> <div className="ab-variants"> <div className="ab-v control"> <div className="ab-v-label">Baseline Tracking</div> <div className="ab-v-desc">Client-side only, 34% data loss, inflated ROAS reporting</div> <div className="ab-v-rate">34%</div> <div className="ab-v-rate-label">Data Inaccuracy</div> </div> <div className="ab-v winner"> <div className="ab-v-label">
Engineered Tracking
<span className="ab-win-badge">Winner</span> </div> <div className="ab-v-desc">Server-side API, full-funnel GA4, unified profit dash</div> <div className="ab-v-rate">0%</div> <div className="ab-v-rate-label">Data Inaccuracy</div> </div> </div> <div className="ab-result"> <div className="ab-result-lift">₹40K+</div> <div className="ab-result-detail"> <strong>Monthly Waste Identified</strong> <span>By re-aligning budget to true performers</span> </div> </div> </div> </div>  <div className="hero-stats"> <div className="hero-stat"> <div className="hero-stat-num">Verified</div> <div className="hero-stat-label">Server-side tracking deployment</div> </div> <div className="hero-stat"> <div className="hero-stat-num">34<sup>%</sup></div> <div className="hero-stat-label">Average data loss found in standard setups</div> </div> <div className="hero-stat"> <div className="hero-stat-num">14</div> <div className="hero-stat-label">Day sprint to clean data architecture</div> </div> <div className="hero-stat"> <div className="hero-stat-num">100<sup>%</sup></div> <div className="hero-stat-label">Ownership of your tracking foundation</div> </div> </div> </div>  <section className="diagnosis-section" id="diagnosis"> <div className="section-inner"> <div className="diagnosis-intro"> <div> <div className="eyebrow-pill"> <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path></svg>
Identifying Data Leaks
</div> <h2 className="section-h2">The hidden tax of<br /><em>unreliable attribution</em></h2> </div> <div className="diagnosis-intro-right"> <p className="section-sub">A digital system is only as effective as the data feeding it. If your tracking is flawed, every marketing decision you make is incrementally inefficient. Here is what we typically find.</p> </div> </div> <div className="diag-grid"> <div className="diag-item"> <div className="diag-num">01</div> <div className="diag-heading">The 'Self-Attribution' Mirage</div> <div className="diag-body">Ad platforms are designed to take credit for every touchpoint. Without a neutralized GA4 setup, you'll see a massive discrepancy between your dashboard ROAS and your bank account's profit.</div> <div className="diag-stat">Platforms often overclaim conversions by 30-50%</div> </div> <div className="diag-item"> <div className="diag-num">02</div> <div className="diag-heading">Broken Checkout Integrity</div> <div className="diag-body">The 'Purchase' event is the most critical and often the most broken. We frequently see duplicate events, missing currency parameters, or failed triggers that render your LTV data useless.</div> <div className="diag-stat">Inaccurate revenue data leads to failed scaling strategies</div> </div> <div className="diag-item"> <div className="diag-num">03</div> <div className="diag-heading">Micro-Behavior Blindness</div> <div className="diag-body">If you aren't tracking scroll depth, video interactions, or add-to-cart intent at a granular level, you can't identify where your funnel is bleeding qualified leads.</div> <div className="diag-stat">Micro-signals are the best predictor of future conversion</div> </div> <div className="diag-item"> <div className="diag-num">04</div> <div className="diag-heading">UTM Chaos & Source Dilution</div> <div className="diag-body">Inconsistent campaign tagging makes it impossible to know which creative or audience actually drove the sale. We implement strict UTM discipline to ensure data hygiene.</div> <div className="diag-stat">Disorganized data is worse than no data at all</div> </div> <div className="diag-item"> <div className="diag-num">05</div> <div className="diag-heading">Cookie Decay & Browser Blocking</div> <div className="diag-body">Standard client-side tracking is being slowly killed by privacy updates. If you haven't moved to server-side tracking, your ad algorithms are becoming 'blind' to your best customers.</div> <div className="diag-stat">Server-side tracking restores up to 20% of lost signals</div> </div> </div> </div> </section> <section className="services-section"> <div className="section-inner"> <div className="services-header"> <div> <div className="eyebrow-pill">
Our Data Engagement
</div> <h2 className="section-h2">Building your brand's<br /><em>proprietary data layer</em></h2> </div> <p className="section-sub">We don't just 'install' Google Analytics. We engineer a bespoke data infrastructure that your business actually owns and understands.</p> </div> <div className="svc-cards">  <div className="svc-card" style={{"background":"#FFEDD5"}}> <div className="svc-card-top"> <div className="svc-card-icon" style={{"background":"rgba(194,65,12,0.12)","color":"#C2410C"}}> <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path></svg> </div> <span className="svc-card-num">01</span> </div> <div className="svc-card-name">GA4 Architectural Audit</div> <div className="svc-card-desc">A comprehensive teardown of your current setup. We reconfigure data streams, fix session-stitching issues, and ensure your cross-domain tracking is bulletproof.</div> <div className="svc-card-tags"> <span className="svc-card-tag">Foundation</span> <span className="svc-card-tag">Full-Funnel</span> </div> </div>  <div className="svc-card" style={{"background":"#E3F2FD"}}> <div className="svc-card-top"> <div className="svc-card-icon" style={{"background":"rgba(2,119,189,0.12)","color":"#0277BD"}}> <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg> </div> <span className="svc-card-num">02</span> </div> <div className="svc-card-name">Server-Side GTM Implementation</div> <div className="svc-card-desc">The future of tracking. We move your tags to a server-side container to bypass ad-blockers, reduce page load, and significantly improve data accuracy for your ad pixels.</div> <div className="svc-card-tags"> <span className="svc-card-tag">Advanced</span> <span className="svc-card-tag">Privacy-First</span> </div> </div>  <div className="svc-card" style={{"background":"#FFF9E6"}}> <div className="svc-card-top"> <div className="svc-card-icon" style={{"background":"rgba(230,81,0,0.1)","color":"#E65100"}}> <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg> </div> <span className="svc-card-num">03</span> </div> <div className="svc-card-name">Custom Profit Dashboards</div> <div className="svc-card-desc">We build automated dashboards in Looker Studio that focus on unit economics—CAC, LTV, and Contribution Margin—instead of just vanity ROAS metrics.</div> <div className="svc-card-tags"> <span className="svc-card-tag">Reporting</span> <span className="svc-card-tag">Decision-Ready</span> </div> </div> </div> </div> </section> <section id="contact" className="contact-section"> <div className="section-inner"> <div className="eyebrow-pill">
Clean Your Data
</div> <h2 className="section-h2">Request a Tracking Audit.<br /><em>Reality in 48 Hours.</em></h2> <p className="section-sub">Share your current setup, and we'll return a prioritized list of data leaks and attribution errors—completely free of obligation.</p> <div className="contact-grid"> <div className="contact-form-card"> <UnifiedContactForm 
  formName="Tracking Audit Request"
  pageSource="analytics-attribution"
  buttonText="Get a Tracking Audit"
  fields={formFields}
/> </div> <div className="discovery-panel"> <h3>Our Audit Methodology</h3> <p>We don't provide surface-level reports. We dive into your tracking tags and data streams.</p> <div className="discovery-steps"> <div className="discovery-step"> <div className="discovery-step-dot">1</div> <div className="discovery-step-text">Data Stream & GA4 Integrity Check</div> </div> <div className="discovery-step"> <div className="discovery-step-dot">2</div> <div className="discovery-step-text">Cross-Reference Ad Platform Attribution</div> </div> <div className="discovery-step"> <div className="discovery-step-dot">3</div> <div className="discovery-step-text">High-Level Roadmap for Data Sovereignty</div> </div> </div> </div> </div> </div> </section>  <section className="faq-section"> <div className="faq-inner"> <div className="eyebrow-pill">FAQ</div> <h2 className="section-h2">Analytics & Attribution FAQs</h2> <div className="faq-list"> <div className="faq-item"> <div className="faq-q" data-faq-toggle>
Why is server-side tracking necessary?
<div className="faq-toggle"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></div> </div> <div className="faq-a">Browser-based tracking is increasingly limited by privacy updates (like iOS 14+) and ad-blockers. Server-side tracking moves the data collection to your own server, restoring signal accuracy, improving site speed, and giving you 100% control over the data you share with third-party platforms.</div> </div> <div className="faq-item"> <div className="faq-q" data-faq-toggle>
How long does a full data overhaul take?
<div className="faq-toggle"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></div> </div> <div className="faq-a">A standard implementation—including GA4 reconfiguration, GTM server-side setup, and core conversion tracking—typically takes 14 days from initial audit to final validation. Complex multi-storefront setups may require 3-4 weeks.</div> </div> <div className="faq-item"> <div className="faq-q" data-faq-toggle>
Do we have to give you access to our ad accounts?
<div className="faq-toggle"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></div> </div> <div className="faq-a">Ideally, yes. To reconcile your data and identify platform bias, we need to cross-reference your ad dashboard results with your analytics backend. We follow strict security protocols and only require analyst-level permissions for the audit phase.</div> </div> <div className="faq-item"> <div className="faq-q" data-faq-toggle>
Will we be able to manage the dashboards ourselves?
<div className="faq-toggle"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></div> </div> <div className="faq-a">Yes. We build our dashboards in Looker Studio and provide a full handover walkthrough. Our goal is to create a 'source of truth' that is easy for non-technical founders to read and use for daily decision-making without needing an analyst on standby.</div> </div> </div> </div> </section>  <section className="footer-cta-section"> <div className="footer-cta-inner"> <h2>Data integrity is your competitive edge.<br /><em>Is yours bulletproof?</em></h2> <p>Start with a technical audit. Discover exactly where your attribution is failing.</p> <a href="/analytics-attribution#contact" className="btn-footer-cta">
Engineer Your Data Roadmap
<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg> </a> </div> </section> 
    </>
  );
}
