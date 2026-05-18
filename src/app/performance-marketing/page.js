import React from 'react';
import Image from 'next/image';
import UnifiedContactForm from '../../components/UnifiedContactForm';

export const metadata = {
  title: "Data-Driven Performance Marketing & Paid Acquisition | raushang4",
  description: "We engineer profitable scale for Indian D2C brands. Meta and Google Ads managed around unit economics, contribution margin, and verifiable attribution modeling.",
};

export default function PerformanceMarketingPage() {
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
    "label": "Biggest challenge (optional)",
    "type": "textarea",
    "placeholder": "e.g. high CPA, ads not scaling, tracking is broken, want to move away from an agency...",
    "required": false
  }
];

  return (
    <>
      <div className="hero-wrap"> <div className="hero-grid">  <div> <div className="eyebrow-pill"> <svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
Performance Engineering
</div> <h1 className="hero-h1">Stop renting clicks.<br /><em>Start engineering profit.</em></h1> <p className="hero-sub">Ad spend without architectural precision is a liability. raushang4 E-Commerce manages paid acquisition through the lens of unit economics, ensuring every marketing rupee is an investment into sustainable, compounding revenue.</p> <div className="hero-btns"> <a href="/performance-marketing#contact" className="btn-primary">
Request a Profitability Audit
<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg> </a> <a href="/performance-marketing#process" className="btn-ghost">View Scaling Methodology</a> </div> </div>  <div className="ab-card"> <div className="ab-card-meta"> <span className="ab-badge">Meta Ads Engineering</span> <span className="ab-client">D2C Supplements Brand</span> </div> <div className="ab-variants"> <div className="ab-v control"> <div className="ab-v-label">Legacy Status</div> <div className="ab-v-name">Unstructured campaigns, unstable ROAS</div> <div className="ab-v-stat">1.8× ROAS · ₹38/click</div> </div> <div className="ab-v winner"> <div className="ab-v-label">Engineered Status</div> <div className="ab-v-name">Systematic scale, unit-economics-led</div> <div className="ab-v-stat">4.2× ROAS · ₹14/click</div> </div> </div> <div className="ab-result"> <div className="ab-result-lift">+133%</div> <div className="ab-result-detail"> <strong>Scalable Profit Lift</strong> <span>Identified through neutralizing platform bias</span> </div> </div> </div> </div>  <div className="hero-stats"> <div className="hero-stat"> <div className="hero-stat-num">4.2<sup>×</sup></div> <div className="hero-stat-label">Average ROAS post-restructure</div> </div> <div className="hero-stat"> <div className="hero-stat-num">₹2Cr<sup>+</sup></div> <div className="hero-stat-label">Monthly ad spend engineered</div> </div> <div className="hero-stat"> <div className="hero-stat-num">63<sup>%</sup></div> <div className="hero-stat-label">Average reduction in CPA</div> </div> <div className="hero-stat"> <div className="hero-stat-num">90</div> <div className="hero-stat-label">Day sprints to statistical authority</div> </div> </div> </div>  <section className="diagnosis-section"> <div className="section-inner"> <div className="diagnosis-intro"> <div> <div className="eyebrow-pill"> <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path></svg>
Identifying Inefficiency
</div> <h2 className="section-h2">Why standard paid campaigns<br /><em>refuse to scale</em></h2> </div> <div className="diagnosis-intro-right"> <p className="section-sub">A high ROAS in your dashboard doesn't always mean a high profit in your bank account. We diagnose the structural disconnects that prevent your acquisition from becoming a compounding asset.</p> </div> </div> <div className="diag-grid"> <div className="diag-item"> <div className="diag-num">01</div> <div className="diag-heading">Dashboard Vanity vs. Profit Reality</div> <div className="diag-body">Platform reporting is designed to encourage spend. Without server-side reconciliation, you are likely overestimating the impact of specific ads and missing the true cost of acquisition.</div> </div> <div className="diag-item"> <div className="diag-num">02</div> <div className="diag-heading">Scaling Induced Efficiency Decay</div> <div className="diag-body">Most accounts break when budgets increase because they lack the audience depth or creative velocity to support higher spend. We build the testing pipeline to prevent this collapse.</div> </div> <div className="diag-item"> <div className="diag-num">03</div> <div className="diag-heading">Attribution Blindness</div> <div className="diag-body">You're making spend decisions based on fragmented data. We implement neutralized attribution models that show the actual journey from first touch to final purchase.</div> </div> <div className="diag-item"> <div className="diag-num">04</div> <div className="diag-heading">Creative Velocity Deficit</div> <div className="diag-body">Relying on a single 'winning' creative is a risk, not a strategy. We engineer a repeatable process for testing and deploying high-authority creative assets at scale.</div> </div> <div className="diag-item"> <div className="diag-num">05</div> <div className="diag-heading">Single-Channel Fragility</div> <div className="diag-body">Over-dependence on Meta or Google creates existential risk. We build diversified acquisition systems that spread risk across multiple high-intent touchpoints.</div> </div> <div className="diag-item"> <div className="diag-num">06</div> <div className="diag-heading">Incoherent Funnel Continuity</div> <div className="diag-body">If your ad creative promises one thing and your landing page delivers another, your conversion rate will suffer. We ensure psychological alignment across the entire journey.</div> </div> </div> </div> </section> <section className="services-section" id="process"> <div className="section-inner"> <div className="services-header"> <div> <div className="eyebrow-pill">
Our Scaling Protocol
</div> <h2 className="section-h2">Everything in a<br /><em>performance engagement</em></h2> </div> <p className="section-sub">We don't just 'run ads'. We engineer the acquisition layer of your business, ensuring every touchpoint is measured and optimized for margin.</p> </div> <div className="svc-cards">  <div className="svc-card" style={{"background":"#E8F5E9"}}> <div className="svc-card-top"> <div className="svc-card-icon" style={{"background":"rgba(46,125,50,0.1)","color":"#2E7D32"}}> <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M3 9h18M9 21V9"></path></svg> </div> <span className="svc-card-num">01</span> </div> <div className="svc-card-name">Account Architecture Rebuild</div> <div className="svc-card-desc">We restructure your Meta and Google accounts to align with modern algorithmic requirements, prioritizing broad targeting and high-velocity testing.</div> <div className="svc-card-tags"> <span className="svc-card-tag">Meta Ads</span> <span className="svc-card-tag">Google Search</span> </div> </div>  <div className="svc-card" style={{"background":"#E3F2FD"}}> <div className="svc-card-top"> <div className="svc-card-icon" style={{"background":"rgba(2,119,189,0.12)","color":"#0277BD"}}> <svg viewBox="0 0 24 24"><path d="M18 20V10"></path><path d="M12 20V4"></path><path d="M6 20v-6"></path></svg> </div> <span className="svc-card-num">02</span> </div> <div className="svc-card-name">Creative Engineering Pipeline</div> <div className="svc-card-desc">We build a repeatable system for producing, testing, and iterating ad creatives based on behavioral data and conversion psychology.</div> <div className="svc-card-tags"> <span className="svc-card-tag">Iterative</span> <span className="svc-card-tag">Data-Led</span> </div> </div>  <div className="svc-card" style={{"background":"#FFF3E0"}}> <div className="svc-card-top"> <div className="svc-card-icon" style={{"background":"rgba(191,54,12,0.1)","color":"#BF360C"}}> <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> </div> <span className="svc-card-num">03</span> </div> <div className="svc-card-name">Margin-Based Reporting</div> <div className="svc-card-desc">We provide unified dashboards that ignore vanity metrics and focus on what matters: Contribution Margin, LTV/CAC ratios, and net profit.</div> <div className="svc-card-tags"> <span className="svc-card-tag">Looker Studio</span> <span className="svc-card-tag">Decision-Ready</span> </div> </div> </div> </div> </section> <section className="results-section"> <div className="section-inner"> <div className="results-header"> <div> <div className="eyebrow-pill">
Empirical Proof
</div> <h2 className="section-h2">What performance engineering<br /><em>actually delivers</em></h2> </div> <p className="section-sub">Actual revenue impact from partners who moved beyond standard agency management to a systemized acquisition model.</p> </div> <div className="results-grid"> <div className="result-card"> <div className="result-number"><span className="accent">4.2</span>×</div> <div className="result-rule"></div> <div className="result-title">Stable ROAS achieved in 90 days</div> <div className="result-client">By re-architecting the campaign structure and implementing a strict creative testing protocol for an Indian D2C brand.</div> </div> <div className="result-card"> <div className="result-number"><span className="accent">63</span>%</div> <div className="result-rule"></div> <div className="result-title">Net reduction in cost per acquisition (CPA)</div> <div className="result-client">Achieved by diversifying channels and optimizing for post-click conversion rather than platform clicks.</div> </div> <div className="result-card"> <div className="result-number">₹<span className="accent">2Cr</span></div> <div className="result-rule"></div> <div className="result-title">Monthly ad spend managed profitably</div> <div className="result-client">Proving that high-volume spend is manageable and efficient when supported by a robust data foundation.</div> </div> </div> </div> </section>  <section className="fit-section"> <div className="section-inner"> <div className="fit-header"> <div className="eyebrow-pill" style={{"marginBottom":"20px"}}>Is This Engagement Right for You?</div> <h2 className="section-h2">We specialize in profitable scale.</h2> <p className="section-sub">Performance marketing is for brands with a proven offer and a scalable margin. Here is how to tell if you're ready for our system.</p> </div> <div className="fit-grid"> <div className="fit-col"> <div className="fit-col-head"> <div className="fit-col-icon" style={{"background":"#E8F5E9","color":"#2E7D32","fontSize":"18px"}}>&#10003;</div> <div className="fit-col-title">We are a good fit if...</div> </div> <div className="fit-items"> <div className="fit-item">You have a proven product-market fit and a healthy gross margin.</div> <div className="fit-item">You're frustrated by inconsistent ad performance and 'agency guesswork'.</div> <div className="fit-item">You prioritize data integrity and understand the importance of attribution.</div> <div className="fit-item">You are willing to invest in creative testing and funnel optimization.</div> </div> </div> <div className="fit-col"> <div className="fit-col-head"> <div className="fit-col-icon" style={{"background":"#FFEBEE","color":"#C62828","fontSize":"18px"}}>&#10007;</div> <div className="fit-col-title">We are not a good fit if...</div> </div> <div className="fit-items"> <div className="fit-item">You are looking for an 'overnight viral' fix for a broken product.</div> <div className="fit-item">You aren't interested in fixing your store's conversion rate (CRO).</div> <div className="fit-item">You don't have a reliable tracking foundation (GA4/GTM) in place.</div> <div className="fit-item">You are purely chasing the lowest management fee, not ROI.</div> </div> </div> </div> </div> </section> <section id="contact" className="contact-section"> <div className="section-inner"> <div className="eyebrow-pill">
Start the Audit
</div> <h2 className="section-h2">Free Ad Account Audit.<br /><em>Reality in 48 Hours.</em></h2> <p className="section-sub">Connect your accounts and we'll provide a high-level assessment of your technical debt, attribution errors, and scaling opportunities.</p> <div className="contact-grid"> <div className="contact-form-card"> <UnifiedContactForm 
  formName="Marketing Audit Request"
  pageSource="performance-marketing"
  buttonText="Get a Marketing Audit"
  fields={formFields}
/> </div> <div className="discovery-panel"> <h3>Our Performance Audit Includes:</h3> <p>We don't use automated scanners. We manually review your account's architecture to find the real leaks.</p> <div className="discovery-steps"> <div className="discovery-step"> <div className="discovery-step-dot">1</div> <div className="discovery-step-text">Account Architecture & Audience Structure Check</div> </div> <div className="discovery-step"> <div className="discovery-step-dot">2</div> <div className="discovery-step-text">Creative Fatigue & Testing Velocity Audit</div> </div> <div className="discovery-step"> <div className="discovery-step-dot">3</div> <div className="discovery-step-text">Attribution Integrity & Tracking Validation</div> </div> <div className="discovery-step"> <div className="discovery-step-dot">4</div> <div className="discovery-step-text">Prioritized Fix Roadmap for Profitable Scale</div> </div> </div> </div> </div> </div> </section>  <section className="faq-section"> <div className="faq-inner"> <div className="eyebrow-pill">FAQ</div> <h2 className="section-h2">Performance Marketing FAQs</h2> <div className="faq-list"> <div className="faq-item"> <div className="faq-q"> Do you guarantee a specific ROAS? <div className="faq-toggle"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></div> </div> <div className="faq-a">No. Anyone who guarantees a specific ROAS before analyzing your account and creative is being dishonest. We guarantee a rigorous, engineering-led scaling process and transparent reporting based on actual business profit, not just platform dashboard claims.</div> </div><div className="faq-item"> <div className="faq-q"> How long until we see a meaningful CPA reduction? <div className="faq-toggle"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></div> </div> <div className="faq-a">Initial account restructuring often yields efficiency gains within the first 14-30 days. Meaningful, sustainable CPA reduction typically requires 90 days of creative testing and audience refinement to reach statistical significance.</div> </div> </div> </div> </section>  <section className="footer-cta-section"> <div className="footer-cta-inner"> <h2>Scale is a structural problem.<br /><em>Start engineering your solution.</em></h2> <p>Request a performance audit and discover where your ad budget is leaking profit.</p> <a href="/performance-marketing#contact" className="btn-footer-cta">
Engineer Your Scaling Roadmap
<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg> </a> </div> </section> 
    </>
  );
}
