import React from 'react';
import Image from 'next/image';
import UnifiedContactForm from '../../components/UnifiedContactForm';

export const metadata = {
  title: "Premium Web Engineering Agency Delhi NCR | Noida & Gurgaon — raushang4",
  description: "Noida-based web engineering practice serving Delhi, Gurgaon, and Noida. We build high-performance Next.js and React storefronts for brands that demand Lighthouse 90+ speed and authority-driven design.",
};

export default function WebDesignCompanyDelhiNcrPage() {
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
    "name": "website_url",
    "label": "Website URL",
    "type": "url",
    "placeholder": "https://yourbrand.com",
    "required": false
  },
  {
    "name": "site_type",
    "label": "Type of project",
    "type": "select",
    "placeholder": "Select type",
    "required": true,
    "options": [
      "New business website",
      "Website redesign or rebuild",
      "Platform migration (Wix, Squarespace, legacy WP)",
      "Ecommerce build (separate service)",
      "Not sure yet — need a recommendation"
    ]
  },
  {
    "name": "location",
    "label": "Your location in NCR",
    "type": "select",
    "placeholder": "Select location",
    "required": true,
    "options": [
      "Delhi",
      "Noida / Greater Noida",
      "Gurgaon",
      "Ghaziabad",
      "Faridabad",
      "Outside NCR"
    ]
  },
  {
    "name": "message",
    "label": "Biggest challenge (optional)",
    "type": "textarea",
    "placeholder": "e.g. website doesn't generate enquiries, outdated design, slow on mobile, can't update content ourselves...",
    "required": false
  }
];

  return (
    <>
      <div className="hero-wrap"> <div className="hero-grid">  <div> <div className="eyebrow-pill"> <svg viewBox="0 0 24 24"><path d="M12 22s8-5.16 8-12a8 8 0 10-16 0c0 6.84 8 12 8 12z"></path><circle cx="12" cy="10" r="3"></circle></svg>
Web Engineering · Delhi NCR
</div> <h1 className="hero-h1">A high-velocity web agency for the Delhi NCR market.<br /><em>Engineering authority. Scaling impact.</em></h1> <p className="hero-sub">We build custom digital assets for brands across Delhi, Gurgaon, and Noida. We replace the 'brochure website' model with technical architectures designed for high-intent lead generation and technical SEO dominance.</p> <div className="hero-btns"> <a href="/web-design-company-delhi-ncr#contact" className="btn-primary">
Request a Technical Site Review
<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg> </a> <a href="/web-design" className="btn-ghost">View Core Engineering Stack</a> </div> </div>  <div className="rebuild-card"> <div className="rebuild-meta"> <span className="rebuild-badge">Local Rebuild Case Study</span> <span className="rebuild-client">Delhi-Based Industrial Brand</span> </div> <div className="rebuild-compare"> <div className="rebuild-row before"> <div className="rebuild-row-label">Legacy Status</div> <div className="rebuild-stats"> <div className="rebuild-stat"><span className="rebuild-stat-val">5.1s</span><span className="rebuild-stat-name">Load time</span></div> <div className="rebuild-stat"><span className="rebuild-stat-val">0.8%</span><span className="rebuild-stat-name">Inquiry Rate</span></div> <div className="rebuild-stat"><span className="rebuild-stat-val">Fail</span><span className="rebuild-stat-name">CWV</span></div> </div> </div> <div className="rebuild-row after"> <div className="rebuild-row-label">Engineered</div> <div className="rebuild-stats"> <div className="rebuild-stat"><span className="rebuild-stat-val">1.3s</span><span className="rebuild-stat-name">Load time</span></div> <div className="rebuild-stat"><span className="rebuild-stat-val">3.2%</span><span className="rebuild-stat-name">Inquiry Rate</span></div> <div className="rebuild-stat"><span className="rebuild-stat-val">Pass</span><span className="rebuild-stat-name">Lighthouse</span></div> </div> </div> </div> <div className="rebuild-result"> <div className="rebuild-result-lift">300%</div> <div className="rebuild-result-detail"> <strong>Direct Lead Scaling</strong> <span>Achieved by migrating legacy technical debt to high-performance Next.js.</span> </div> </div> </div> </div>  <div className="hero-stats"> <div className="hero-stat"> <div className="hero-stat-num">Noida</div> <div className="hero-stat-label">Headquarters & Engineering Hub</div> </div> <div className="hero-stat"> <div className="hero-stat-num">90<sup>+</sup></div> <div className="hero-stat-label">Minimum Performance Standard</div> </div> <div className="hero-stat"> <div className="hero-stat-num">Elite</div> <div className="hero-stat-label">In-person NCR Technical Discovery</div> </div> <div className="hero-stat"> <div className="hero-stat-num">Owner</div> <div className="hero-stat-label">100% Code & Data Sovereignty</div> </div> </div> </div>  <section className="diagnosis-section"> <div className="section-inner"> <div className="diagnosis-intro"> <div> <div className="eyebrow-pill"> <svg viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
Identifying Regional Friction
</div> <h2 className="section-h2">Why NCR business websites<br /><em>underperform their spend</em></h2> </div> <div className="diagnosis-intro-right"> <p className="section-sub">We manually audit dozens of websites across Delhi, Gurgaon, and Noida each month. The failure points are consistent: a reliance on aesthetics over technical performance and conversion psychology.</p> </div> </div> <div className="diag-grid"> <div className="diag-item"> <div className="diag-num">01</div> <div className="diag-heading">The 'Commodity Brochure' Trap</div> <div className="diag-body">Many local businesses buy sites based on page count rather than business outcome. This results in generic brochures that fail to differentiate your brand from Gurgaon or Delhi competitors.</div> </div> <div className="diag-item"> <div className="diag-num">02</div> <div className="diag-heading">Mobile Network Latency</div> <div className="diag-body">On standard mobile networks in NCR, most local sites take 5+ seconds to load. We engineer lightweight architectures that ensure your site is fast for every user, on every device.</div> </div> <div className="diag-item"> <div className="diag-num">03</div> <div className="diag-heading">Incoherent Conversion Paths</div> <div className="diag-body">A missing sticky CTA or a hidden contact form acts as a tax on your traffic. We engineer frictionless inquiry flows that ensure high-intent visitors become actual leads.</div> </div> <div className="diag-item"> <div className="diag-num">04</div> <div className="diag-heading">Lack of Structural Search Authority</div> <div className="diag-body">If your site lacks proper semantic HTML and Local Schema, you won't rank for high-intent searches in your city. We build search authority into the code layer.</div> </div> <div className="diag-item"> <div className="diag-num">05</div> <div className="diag-heading">Page-Builder Vendor Lock-In</div> <div className="diag-body">Relying on tools like Elementor or WPBakery creates technical debt that makes future redesigns or migrations expensive. We build bespoke themes you actually own.</div> </div> </div> </div> </section> <section className="services-section"> <div className="section-inner"> <div className="services-header"> <div> <div className="eyebrow-pill">
Our Regional Protocol
</div> <h2 className="section-h2">Web Engineering for<br /><em>the NCR Economy</em></h2> </div> <p className="section-sub">We provide a senior-level team of designers and engineers who understand the unique dynamics of the Delhi NCR business landscape.</p> </div> <div className="svc-cards">  <div className="svc-card" style={{"background":"#FCE4EC"}}> <div className="svc-card-top"> <div className="svc-card-icon" style={{"background":"rgba(173,20,87,0.1)","color":"#AD1457"}}> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.5 1.5"></path><path d="M7.11 7.11l5.47 5.47"></path><path d="M11 15.5l.5.5"></path></svg> </div> <span className="svc-card-num">01</span> </div> <div className="svc-card-name">Technical UI/UX Discovery</div> <div className="svc-card-desc">We conduct in-person technical discovery sessions at your offices in Delhi, Noida, or Gurgaon to align your site's architecture with your physical business goals.</div> <div className="svc-card-tags"> <span className="svc-card-tag">In-Person</span> <span className="svc-card-tag">Figma First</span> </div> </div>  <div className="svc-card" style={{"background":"#E8F5E9"}}> <div className="svc-card-top"> <div className="svc-card-icon" style={{"background":"rgba(46,125,50,0.1)","color":"#2E7D32"}}> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg> </div> <span className="svc-card-num">02</span> </div> <div className="svc-card-name">Next.js & React Storefronts</div> <div className="svc-card-desc">We leverage modern frameworks to deliver server-side rendered, blazingly fast websites that provide a premium responsive experience across all NCR networks.</div> <div className="svc-card-tags"> <span className="svc-card-tag">Next.js</span> <span className="svc-card-tag">React</span> <span className="svc-card-tag">API-First</span> </div> </div>  <div className="svc-card" style={{"background":"#FFF3E0"}}> <div className="svc-card-top"> <div className="svc-card-icon" style={{"background":"rgba(230,81,0,0.1)","color":"#E65100"}}> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg> </div> <span className="svc-card-num">03</span> </div> <div className="svc-card-name">Advanced Local Authority</div> <div className="svc-card-desc">We implement nested Local Business schema and technical SEO hierarchies to ensure your brand dominates the local search results for your category.</div> <div className="svc-card-tags"> <span className="svc-card-tag">Local Schema</span> <span className="svc-card-tag">Authority</span> </div> </div> </div> </div> </section> <section className="performance-section"> <div className="section-inner"> <div className="performance-header"> <div> <div className="eyebrow-pill">
Performance Targets
</div> <h2 className="section-h2">Engineering for the<br /><em>99th Percentile</em></h2> </div> <p className="section-sub">We don't consider a site 'launched' until it meets our rigorous internal standards for mobile speed and technical integrity.</p> </div> <div className="perf-grid"> <div className="perf-card"> <div className="perf-score">90<span className="perf-score-unit">+</span></div> <div className="perf-label">Mobile Lighthouse Baseline</div> <div className="perf-desc">Verified post-launch on real devices. We ensure your storefront is faster than 90% of your competitors.</div> </div> <div className="perf-card"> <div className="perf-score">&lt;2.5<span className="perf-score-unit">s</span></div> <div className="perf-label">Largest Contentful Paint</div> <div className="perf-desc">Optimized for immediate visual feedback on mobile networks. We eliminate render-blocking technical debt.</div> </div> <div className="perf-card"> <div className="perf-score">AA</div> <div className="perf-label">Accessibility Standard</div> <div className="perf-desc">Inclusive design that ensures your brand is accessible to all users across the NCR region.</div> </div> </div> <div className="perf-checks"> <div className="perf-check"> <div className="perf-check-icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg></div> <span className="perf-check-text">Optimized CDN Asset Delivery</span> </div> <div className="perf-check"> <div className="perf-check-icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg></div> <span className="perf-check-text">Clean, Semantic HTML Architecture</span> </div> <div className="perf-check"> <div className="perf-check-icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg></div> <span className="perf-check-text">Zero Cumulative Layout Shift (CLS)</span> </div> <div className="perf-check"> <div className="perf-check-icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg></div> <span className="perf-check-text">Server-Side Search Ready</span> </div> </div> </div> </section> <section className="results-section"> <div className="section-inner"> <div className="results-header"> <div> <div className="eyebrow-pill">
Verified Local Impact
</div> <h2 className="section-h2">Compounded growth<br /><em>in the local market</em></h2> </div> <p className="section-sub">Actual results from NCR-based partners who moved beyond generic brochures to engineered web systems.</p> </div> <div className="results-grid"> <div className="result-card"> <div className="result-number"><span className="accent">+300</span>%</div> <div className="result-rule"></div> <div className="result-title">Increase in qualified inquiries post-launch through conversion-led messaging and technical SEO.</div> <div className="result-client">B2B Service Brand · Noida</div> </div> <div className="result-card"> <div className="result-number"><span className="accent">1.3</span>s</div> <div className="result-rule"></div> <div className="result-title">Average mobile load time achieved for a Gurgaon-based manufacturing group post-migration.</div> <div className="result-client">Industrial Rebuild Case Study</div> </div> <div className="result-card"> <div className="result-number"><span className="accent">92</span></div> <div className="result-rule"></div> <div className="result-title">Average Lighthouse Performance score across our entire portfolio of active local builds.</div> <div className="result-client">raushang4 Regional Standard</div> </div> </div> </div> </section>  <section className="fit-section"> <div className="section-inner"> <div className="fit-header"> <div className="eyebrow-pill" style={{"marginBottom":"20px"}}>Is raushang4 the Right Local Partner?</div> <h2 className="section-h2">We specialize in technical authority.</h2> <p className="section-sub">We are a senior-level practice, not a low-cost template factory. Here is how to tell if we align with your goals.</p> </div> <div className="fit-grid"> <div className="fit-col"> <div className="fit-col-head"> <div className="fit-col-icon" style={{"background":"#E8F5E9","color":"#2E7D32","fontSize":"18px"}}>&#10003;</div> <div className="fit-col-title">We are a good fit if...</div> </div> <div className="fit-items"> <div className="fit-item">You need a website that functions as a high-authority inquiry engine.</div> <div className="fit-item">You're frustrated by slow page speeds and technical debt on your current site.</div> <div className="fit-item">You value in-person technical discovery and regional accountability.</div> <div className="fit-item">You want a partner who handles both high-end design and code.</div> </div> </div> <div className="fit-col"> <div className="fit-col-head"> <div className="fit-col-icon" style={{"background":"#FFEBEE","color":"#C62828","fontSize":"18px"}}>&#10007;</div> <div className="fit-col-title">We are not a good fit if...</div> </div> <div className="fit-items"> <div className="fit-item">You are looking for a generic ₹10,000 brochure website.</div> <div className="fit-item">You are happy with a template that looks like your competitors.</div> <div className="fit-item">You don't prioritize user experience or mobile performance.</div> <div className="fit-item">You need a site launched in 48 hours without a strategy phase.</div> </div> </div> </div> </div> </section> <section id="contact" className="contact-section"> <div className="section-inner"> <div className="eyebrow-pill">
Secure Your Regional Authority
</div> <h2 className="section-h2">Technical Site Audit.<br /><em>Zero Obligation.</em></h2> <p className="section-sub">Share your current URL and business goals. We'll provide a high-level assessment and a roadmap for engineering your local dominance. Happy to meet in person.</p> <div className="contact-grid"> <div className="contact-form-card"> <UnifiedContactForm 
  formName="NCR Website Review Request"
  pageSource="web-design-company-delhi-ncr"
  buttonText="Book a Free Website Review"
  fields={formFields}
/> </div> <div className="discovery-panel"> <h3>Our Regional Audit Process</h3> <p>We manually review your site's local search signals and architectural integrity.</p> <div className="discovery-steps"> <div className="discovery-step"> <div className="discovery-step-dot">1</div> <div className="discovery-step-text">Local Search Signal & Schema Audit</div> </div> <div className="discovery-step"> <div className="discovery-step-dot">2</div> <div className="discovery-step-text">Conversion Architecture & Regional UX Test</div> </div> <div className="discovery-step"> <div className="discovery-step-dot">3</div> <div className="discovery-step-text">Prioritized Fix Roadmap for NCR Dominance</div> </div> </div> </div> </div> </div> </section>  <section className="faq-section"> <div className="faq-inner"> <div className="eyebrow-pill">FAQ</div> <h2 className="section-h2">Regional Engineering FAQs</h2> <div className="faq-list"> <div className="faq-item"> <div className="faq-q">Where are you based?</div> <div className="faq-a">Our engineering and design studio is headquartered in Noida. We serve clients across the entire Delhi NCR region, including Gurgaon, Delhi, Ghaziabad, and Faridabad.</div> </div> <div className="faq-item"> <div className="faq-q">Can we meet in person?</div> <div className="faq-a">Absolutely. For NCR-based businesses, we encourage in-person technical discovery and design reviews at your office. We find that direct, local collaboration often leads to better business outcomes.</div> </div> </div> </div> </section>  <section className="footer-cta-section"> <div className="footer-cta-inner"> <h2>Your local digital presence is your physical authority.<br /><em>Is yours built to engineer trust?</em></h2> <p>Get a technical assessment of your regional website. No obligation.</p> <a href="/web-design-company-delhi-ncr#contact" className="btn-footer-cta">
Engineer Your Regional Roadmap
<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg> </a> </div> </section> 
    </>
  );
}
