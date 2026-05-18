import React from 'react';
import Image from 'next/image';
import UnifiedContactForm from '../../components/UnifiedContactForm';

export const metadata = {
  title: "WordPress Care, Security & Performance Retainers | raushang4",
  description: "Secure, proactive WordPress and WooCommerce maintenance. We handle updates on staging, server-level hardening, Redis caching, and off-site backups so your brand stays online and performant.",
};

export default function WordpressCarePage() {
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
    "placeholder": "rahul@yoursite.com",
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
    "name": "site_url",
    "label": "WordPress site URL",
    "type": "url",
    "placeholder": "https://yoursite.com",
    "required": false
  },
  {
    "name": "site_type",
    "label": "What are you running?",
    "type": "select",
    "placeholder": "Select",
    "required": true,
    "options": [
      "WordPress content or business site",
      "WooCommerce store",
      "WordPress + WooCommerce (content + shop)",
      "WordPress membership or subscription site"
    ]
  },
  {
    "name": "main_concern",
    "label": "What's the main concern?",
    "type": "select",
    "placeholder": "Select",
    "required": true,
    "options": [
      "Updates break things — I need a safe process",
      "Security — site was hacked or I'm worried it will be",
      "Slow performance and bad Core Web Vitals",
      "WooCommerce payment or order issues",
      "Backups and disaster recovery",
      "Server / hosting upgrade needed",
      "All of the above"
    ]
  },
  {
    "name": "message",
    "label": "Anything else? (optional)",
    "type": "textarea",
    "placeholder": "e.g. site was hacked last year, currently on shared hosting, updates have broken WooCommerce twice…",
    "required": false
  }
];

  return (
    <>
      <div className="hero-wrap"> <div className="hero-grid"> <div> <div className="eyebrow-pill"> <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
WordPress Care & Governance
</div> <h1 className="hero-h1">Proactive WordPress stewardship.<br /><em>Not just reactive updates.</em></h1> <p className="hero-sub">Most maintenance is ignored until a site crashes. raushang4 E-Commerce provides rigorous WordPress governance, utilizing staging environments, server-level security, and verified backups to ensure your digital asset remains secure and blazingly fast.</p> <div className="hero-btns"> <a href="/wordpress-care#contact" className="btn-primary">
Request a Technical Site Audit
<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg> </a> <a href="/wordpress-care#whats-included" className="btn-ghost">Our Governance Standard</a> </div> </div> <div className="health-card"> <div className="health-card-meta"> <span className="health-badge danger">Unmanaged Site</span> <span className="health-badge">raushang4 Managed</span> </div> <div className="health-compare"> <div className="health-col before"> <div className="health-col-label">Without Governance</div> <div className="health-rows"> <div className="health-row"> <div className="health-row-label">Core Updates</div> <div className="health-row-val">Stale (4+ mos)</div> </div> <div className="health-row"> <div className="health-row-label">Known Vulnerabilities</div> <div className="health-row-val">3 active</div> </div> <div className="health-row"> <div className="health-row-label">Backup Integrity</div> <div className="health-row-val">Unverified</div> </div> <div className="health-row"> <div className="health-row-label">Uptime Baseline</div> <div className="health-row-val">94.2%</div> </div> </div> </div> <div className="health-col after"> <div className="health-col-label">Engineered Care</div> <div className="health-rows"> <div className="health-row"> <div className="health-row-label">Update Frequency</div> <div className="health-row-val">Weekly (Staging-First)</div> </div> <div className="health-row"> <div className="health-row-label">Security Posture</div> <div className="health-row-val">Hardened</div> </div> <div className="health-row"> <div className="health-row-label">Off-site Backups</div> <div className="health-row-val">Daily (Verified)</div> </div> <div className="health-row"> <div className="health-row-label">Uptime Target</div> <div className="health-row-val">99.9%</div> </div> </div> </div> </div> <div className="health-result"> <div className="health-result-lift">Zero</div> <div className="health-result-detail"> <strong>Emergency Downtime</strong> <span>Proactive monitoring prevents structural failure</span> </div> </div> </div> </div> </div>  <section className="diagnosis-section"> <div className="section-inner"> <div className="diagnosis-intro"> <div> <div className="eyebrow-pill"> <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path></svg>
The Failure of Neglect
</div> <h2 className="section-h2">WordPress without governance<br /><em>is a business liability.</em></h2> </div> <div className="diagnosis-intro-right"> <p className="section-sub">A premium digital presence requires constant technical maintenance. Without a dedicated owner, these are the critical failure points that compound over time.</p> </div> </div> <div className="diag-grid"> <div className="diag-item"> <div className="diag-num">01</div> <div className="diag-heading">Blind 'Production' Updates</div> <div className="diag-body">Updating a plugin directly on your live site is a risk. We test every update on a staging copy, verifying that your checkout and key forms remain functional before pushing to production.</div> </div> <div className="diag-item"> <div className="diag-num">02</div> <div className="diag-heading">Reactive Security Posture</div> <div className="diag-body">Installing a security plugin is not enough. We implement server-level hardening, moving login endpoints and disabling vulnerable APIs to prevent breaches before they happen.</div> </div> <div className="diag-item"> <div className="diag-num">03</div> <div className="diag-heading">Unverified Snapshot Backups</div> <div className="diag-body">A backup is only a backup if it can be restored. we manage daily off-site encrypted backups and perform quarterly restoration tests to ensure your data is actually safe.</div> </div> <div className="diag-item"> <div className="diag-num">04</div> <div className="diag-heading">Shared Hosting Congestion</div> <div className="diag-body">Most maintenance plans ignore the hosting layer. We ensure your site uses object caching (Redis) and high-performance server environments to maintain Lighthouse 90+ speeds.</div> </div> <div className="diag-item"> <div className="diag-num">05</div> <div className="diag-heading">Silent Funnel Failures</div> <div className="diag-body">Tracking pixels and payment webhooks often break during updates. We include specific validation for your Indian payment stack (Razorpay/Cashfree) in our care protocols.</div> </div> </div> </div> </section> <section className="services-section" id="whats-included"> <div className="section-inner"> <div className="services-header"> <div> <div className="eyebrow-pill">
Full-Stack Maintenance
</div> <h2 className="section-h2">Proactive technical stewardship</h2> </div> <p className="section-sub">We don't wait for your site to break. We stay ahead of updates and security alerts, so your team can focus on growth, not maintenance.</p> </div> <div className="svc-cards"> <div className="svc-card" style={{"background":"#E8F5E9"}}> <div className="svc-card-top"> <div className="svc-card-icon" style={{"background":"rgba(46,125,50,0.1)","color":"#2E7D32"}}> <svg viewBox="0 0 24 24"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 102.13-9.36L1 10"></path></svg> </div> <span className="svc-card-num">01</span> </div> <div className="svc-card-name">Staging-First Update Cycle</div> <div className="svc-card-desc">Every update is vetted in a mirrored environment. We verify your checkout flow, forms, and mobile UI before any change is deployed to your live brand.</div> </div> <div className="svc-card" style={{"background":"#E3F2FD"}}> <div className="svc-card-top"> <div className="svc-card-icon" style={{"background":"rgba(2,119,189,0.12)","color":"#0277BD"}}> <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> </div> <span className="svc-card-num">02</span> </div> <div className="svc-card-name">Server-Level Hardening</div> <div className="svc-card-desc">We move beyond plugins to lock down your wp-config, move default login paths, and implement server-side firewalls to block brute-force attacks at the edge.</div> </div> <div className="svc-card" style={{"background":"#FFF3E0"}}> <div className="svc-card-top"> <div className="svc-card-icon" style={{"background":"rgba(230,81,0,0.12)","color":"#E65100"}}> <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> </div> <span className="svc-card-num">03</span> </div> <div className="svc-card-name">Verified Recovery Pipelines</div> <div className="svc-card-desc">We manage off-site, encrypted daily backups with a zero-loss restoration target. We manually verify the integrity of your backup data every quarter.</div> </div> </div> </div> </section> <section id="contact" className="contact-section"> <div className="section-inner"> <div className="eyebrow-pill">
Secure Your Site
</div> <h2 className="section-h2">Request a Site Audit.<br /><em>Reality in 24 Hours.</em></h2> <p className="section-sub">Provide your URL and we will return a high-level assessment of your current technical debt, security posture, and performance bottlenecks.</p> <div className="contact-grid"> <div className="contact-form-card"> <UnifiedContactForm 
  formName="WordPress Care Request"
  pageSource="wordpress-care"
  buttonText="Get a Site Audit"
  fields={formFields}
/> </div> <div className="discovery-panel"> <h3>Our Care Plan Audit</h3> <p>We conduct a deep manual review of your WordPress configuration to find the real vulnerabilities.</p> <div className="discovery-steps"> <div className="discovery-step"> <div className="discovery-step-dot">1</div> <div className="discovery-step-text">Plugin Inventory & Technical Debt Check</div> </div> <div className="discovery-step"> <div className="discovery-step-dot">2</div> <div className="discovery-step-text">Backup & Restore Integrity Validation</div> </div> <div className="discovery-step"> <div className="discovery-step-dot">3</div> <div className="discovery-step-text">Core Web Vitals & Server Performance Baseline</div> </div> </div> </div> </div> </div> </section>  <section className="faq-section"> <div className="faq-inner"> <div className="eyebrow-pill">FAQ</div> <h2 className="section-h2">WordPress Governance FAQs</h2> <div className="faq-list"> <div className="faq-item"> <div className="faq-q">Why do I need a care plan?</div> <div className="faq-a">A premium website is a living asset. Without proactive maintenance, it becomes a liability—accumulating security risks, technical debt, and performance bloat that eventually kills your conversion rate. Our care plans ensure your site remains a high-performance tool for your business.</div> </div> <div className="faq-item"> <div className="faq-q">Do you handle WooCommerce stores?</div> <div className="faq-a">Yes. We specialize in WooCommerce maintenance, adding specific protocols for payment gateway validation, order integrity monitoring, and high-velocity database optimization.</div> </div> </div> </div> </section>  <section className="cta-bottom"> <div className="section-inner"> <h2>Stop managing emergency downtime.<br /><em>Start engineering your site's health.</em></h2> <a href="/wordpress-care#contact" className="btn-primary">
Engineer Your Care Roadmap
<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg> </a> </div> </section> 
    </>
  );
}
