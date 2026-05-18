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
  {
    "name": "name",
    "label": "Your Name",
    "type": "text",
    "placeholder": "First and last name",
    "required": true
  },
  {
    "name": "email",
    "label": "Email",
    "type": "email",
    "placeholder": "you@yourbrand.com",
    "required": true
  },
  {
    "name": "phone",
    "label": "Phone Number",
    "type": "tel",
    "placeholder": "9304995677",
    "required": true
  },
  {
    "name": "store_url",
    "label": "Your store URL",
    "type": "url",
    "placeholder": "https://yourbrand.com"
  },
  {
    "name": "platform",
    "label": "Platform",
    "type": "select",
    "placeholder": "Shopify or WooCommerce?",
    "options": [
      "Shopify",
      "WooCommerce",
      "Other",
      "Not launched"
    ]
  },
  {
    "name": "monthly_revenue",
    "label": "Monthly Revenue",
    "type": "select",
    "placeholder": "Approx range",
    "options": [
      "Under ₹5L",
      "₹5L - ₹25L",
      "₹25L - ₹1Cr",
      "Above ₹1Cr"
    ]
  },
  {
    "name": "message",
    "label": "Biggest challenge",
    "type": "textarea",
    "placeholder": "Tell us where it hurts..."
  }
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
      <div className="hero-wrap"> <div className="hero"> <div className="hero-eyebrow"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 01-8 0"></path></svg>
D2C Growth Engineering
</div> <h1>Traffic is getting more expensive.<br /><em>Is your store converting high enough to scale?</em></h1> <p className="hero-sub">We build and optimize the digital infrastructure that Indian D2C brands use to dominate their niche. We bridge the gap between ad creative and technical architecture to ensure every rupee spent works at peak efficiency.</p> <div className="hero-btns"> <a href="/d2c-ecommerce#contact" className="btn-primary">
Request a D2C Performance Audit
<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg> </a> <a href="/d2c-ecommerce#cases" className="btn-secondary">View D2C Proof</a> </div> </div>  <div className="badge-strip"> <div className="badge-strip-inner"> <span className="badge-label">Works on</span> <div className="platform-badge badge-shopify"> <div className="badge-icon" aria-hidden="true"><i className="fa-brands fa-shopify"></i></div>
Shopify Partner
<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg> </div> <div className="platform-badge badge-woo"> <div className="badge-icon" aria-hidden="true"> <svg viewBox="0 0 94.68 24.54"> <path d="M12.08,24.54c2.76,0,4.98-1.37,6.66-4.51l3.72-6.96v5.9c0,3.48,2.25,5.56,5.73,5.56,2.73,0,4.74-1.19,6.69-4.51l8.57-14.47c1.88-3.17.55-5.56-3.58-5.56-2.22,0-3.65.72-4.95,3.14l-5.9,11.09V4.37c0-2.94-1.4-4.37-3.99-4.37-2.05,0-3.69.89-4.95,3.34l-5.56,10.89V4.47c0-3.14-1.3-4.47-4.44-4.47H3.65C1.23,0,0,1.13,0,3.21s1.3,3.28,3.65,3.28h2.63v12.46c0,3.52,2.36,5.6,5.8,5.6Z"></path> <path fillRule="evenodd" d="M55.98,0c-7,0-12.36,5.22-12.36,12.29s5.39,12.25,12.36,12.25,12.29-5.22,12.32-12.25c0-7.07-5.36-12.29-12.32-12.29ZM55.98,17c-2.63,0-4.44-1.98-4.44-4.71s1.81-4.74,4.44-4.74,4.44,2.01,4.44,4.74-1.77,4.71-4.44,4.71Z"></path> <path fillRule="evenodd" d="M70.04,12.29c0-7.07,5.36-12.29,12.32-12.29s12.32,5.26,12.32,12.29-5.36,12.25-12.32,12.25-12.32-5.19-12.32-12.25ZM77.96,12.29c0,2.73,1.74,4.71,4.4,4.71s4.44-1.98,4.44-4.71-1.81-4.74-4.44-4.74-4.4,2.01-4.4,4.74Z"></path> </svg> </div>
WooCommerce Engineering
<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg> </div> <div className="badge-sep"></div> <div className="platform-badge badge-google"> <div className="badge-icon" aria-hidden="true"><i className="fa-brands fa-google"></i></div>
Google Search
</div> <div className="platform-badge badge-meta"> <div className="badge-icon" aria-hidden="true"><i className="fa-brands fa-meta"></i></div>
Meta Performance
</div> </div> </div>  <TickerSection />  <section className="checklist-section"> <div className="section-inner"> <div className="split-feature-grid split-feature-grid--start"> <div className="checklist-intro"> <p className="section-eyebrow">Signs you're hitting a wall</p> <h2 className="section-h2">The common D2C growth constraints</h2> <p className="section-sub" style={{"marginBottom":"0","textAlign":"left"}}>Most brands we partner with have scaled their initial ads but hit a plateau. We identify the structural bottlenecks that prevent you from reaching the next tier of revenue.</p> </div> <div> <div className="checklist-grid"> <div className="checklist-item"> <div className="check-box"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg></div> <p>Waning ROAS despite increasing ad creative volume</p> </div> <div className="checklist-item"> <div className="check-box"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg></div> <p>Cart and checkout abandonment rates exceeding 70%</p> </div> <div className="checklist-item"> <div className="check-box"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg></div> <p>Unit economics (CM2) that don't support aggressive scaling</p> </div> <div className="checklist-item"> <div className="check-box"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg></div> <p>Mobile conversion rate stalling below 1.5%</p> </div> <div className="checklist-item"> <div className="check-box"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg></div> <p>Unreliable attribution making budget allocation a guess</p> </div> <div className="checklist-item"> <div className="check-box"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg></div> <p>Customer lifetime value (LTV) not offsetting acquisition cost</p> </div> <div className="checklist-item"> <div className="check-box"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg></div> <p>Technical debt slowing down site speed and team agility</p> </div> </div> </div> </div> </div> </section> <section className="platforms-section"> <div className="section-inner"> <div className="section-center"> <p className="section-eyebrow">The Stack</p> <h2 className="section-h2">Choosing the right foundation<br /><em>for your brand entity</em></h2> <p className="section-sub">We don't force a platform on you. We analyze your long-term goals and engineer the backend that gives you the most leverage.</p> </div> <div className="tech-grid"> <div className="tech-card"> <div className="tech-header"> <div className="tech-logo shopify" aria-hidden="true"><i className="fa-brands fa-shopify"></i></div> <div className="tech-badge"> <span className="plat-status-pill">
Shopify Partner
</span> </div> </div> </div> <p className="tech-desc">The industry standard for rapid consumer scale. We engineer custom Liquid themes that provide a unique brand identity while leveraging Shopify's robust checkout and global infrastructure.</p> <div className="tech-features"> <div className="tech-feature"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Bespoke Liquid theme architecture</span></div> <div className="tech-feature"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Native Shopify 2.0 section engineering</span></div> <div className="tech-feature"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Custom app & middleware development</span></div> <div className="tech-feature"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Shopify Plus & checkout extensibility</span></div> <div className="tech-feature"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Seamless architectural migrations</span></div> <Link href="/shopify-development" style={{"fontSize":"13px","fontWeight":"600","color":"var(--accent)","textDecoration":"none","marginTop":"16px","display":"inline-block"}}>View Shopify methodology →</Link> </div> </div> <div className="tech-card"> <div className="tech-header"> <div className="tech-logo woo" aria-hidden="true"> <svg viewBox="0 0 94.68 24.54"> <path d="M12.08,24.54c2.76,0,4.98-1.37,6.66-4.51l3.72-6.96v5.9c0,3.48,2.25,5.56,5.73,5.56,2.73,0,4.74-1.19,6.69-4.51l8.57-14.47c1.88-3.17.55-5.56-3.58-5.56-2.22,0-3.65.72-4.95,3.14l-5.9,11.09V4.37c0-2.94-1.4-4.37-3.99-4.37-2.05,0-3.69.89-4.95,3.34l-5.56,10.89V4.47c0-3.14-1.3-4.47-4.44-4.47H3.65C1.23,0,0,1.13,0,3.21s1.3,3.28,3.65,3.28h2.63v12.46c0,3.52,2.36,5.6,5.8,5.6Z"></path> <path fillRule="evenodd" d="M55.98,0c-7,0-12.36,5.22-12.36,12.29s5.39,12.25,12.36,12.25,12.29-5.22,12.32-12.25c0-7.07-5.36-12.29-12.32-12.29ZM55.98,17c-2.63,0-4.44-1.98-4.44-4.71s1.81-4.74,4.44-4.74,4.44,2.01,4.44,4.74-1.77,4.71-4.44,4.71Z"></path> <path fillRule="evenodd" d="M70.04,12.29c0-7.07,5.36-12.29,12.32-12.29s12.32,5.26,12.32,12.29-5.36,12.25-12.32,12.25-12.32-5.19-12.32-12.25ZM77.96,12.29c0,2.73,1.74,4.71,4.4,4.71s4.44-1.98,4.44-4.71-1.81-4.74-4.44-4.74-4.4,2.01-4.4,4.74Z"></path> </svg> </div> <div className="tech-badge"> <span className="plat-status-pill">
Woo Expert
</span> </div> </div> </div> <p className="tech-desc">The optimal path for brands demanding total code sovereignty and complex B2B or tiered functionality. We build custom PHP-based WooCommerce stores that are fast, secure, and lean.</p> <div className="tech-features"> <div className="tech-feature"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Custom PHP block theme engineering</span></div> <div className="tech-feature"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Performance-optimized PHP stack</span></div> <div className="tech-feature"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg><span>B2B, Wholesale & Tiered pricing systems</span></div> <div className="tech-feature"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Native Indian payment gateway wiring</span></div> <div className="tech-feature"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Secure managed infrastructure</span></div> <Link href="/woocommerce-development" style={{"fontSize":"13px","fontWeight":"600","color":"var(--accent)","textDecoration":"none","marginTop":"16px","display":"inline-block"}}>View WooCommerce methodology →</Link> </div> </div> </div> <div className="tech-tools"> <div className="tech-tools-label">Other tools in our stack</div> <div className="tools-row"> <span className="tool-pill">Next.js</span> <span className="tool-pill">Klaviyo</span> <span className="tool-pill">Meta Ads</span> <span className="tool-pill">Google Ads</span> <span className="tool-pill">GA4 Server-Side</span> <span className="tool-pill">GTM</span> <span className="tool-pill">Hotjar</span> <span className="tool-pill">Microsoft Clarity</span> <span className="tool-pill">Ahrefs</span> <span className="tool-pill">Semrush</span> <span className="tool-pill">Razorpay</span> <span className="tool-pill">Cashfree</span> <span className="tool-pill">Shiprocket</span> </div> </div> </div> </section> <section id="cases" className="work-section" style={{"background":"var(--white)"}}> <div className="section-inner"> <div className="section-center" style={{"marginBottom":"52px"}}> <p className="section-eyebrow">D2C Case Studies</p> <h2 className="section-h2">D2C systems that drive scale</h2> <p className="section-sub">Actual revenue results engineered for our D2C partners.</p> </div> <div className="cases-grid"> <a href="/case-study/red-sirocco" className="case-card"> <div className="case-img case-img--photo"> <Image src="https://cdn.sanity.io/images/zcj1brqz/production/da53e10d416868c2d046d3b4833a6ee2856042bc-2752x1536.png?w=900&auto=format&fit=max&q=75" alt="Red Sirocco" width={900} height={600} /> <span className="case-img-label">WooCommerce Development</span> </div> <div className="case-body"> <div className="case-meta"> <span className="case-tag">D2C · Coffee</span> <span className="case-metric-chip">Performance Lift - +214%</span> </div> <h3 className="case-title">Red Sirocco — High-Performance D2C Re-Architecture</h3> <p className="case-desc">We migrated a bloated legacy store to a custom PHP theme, resulting in an immediate improvement in organic visibility and mobile conversion rate.</p> <div className="case-outcomes"> <span className="case-outcome"> <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg> 100% Custom Build </span><span className="case-outcome"> <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg> Lighthouse 90+ Mobile </span> </div> </div> </a><a href="/case-study/mopadz" className="case-card"> <div className="case-img case-img--photo"> <Image src="https://cdn.sanity.io/images/zcj1brqz/production/bff1bb5dcfc542312ec5651b1ef0580b83704df9-2752x1536.png?w=900&auto=format&fit=max&q=75" alt="Mopadz" width={900} height={600}   /> <span className="case-img-label">Shopify Development</span> </div> <div className="case-body"> <div className="case-meta"> <span className="case-tag">D2C · Premium Desk Mats</span> <span className="case-metric-chip">Architecture Integrity - 100%</span> </div> <h3 className="case-title">Mopadz — A Premium D2C Store Engineered From Zero</h3> <p className="case-desc">A custom Shopify storefront engineered for acquisition efficiency, with structured buyer journeys and high-authority product detail pages.</p> <div className="case-outcomes"> <span className="case-outcome"> <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg> Liquid Theme Architecture </span><span className="case-outcome"> <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg> Scalable PDP Engineering </span> </div> </div> </a> </div> </div> </section> <Testimonials />    <section> <div className="section-inner"> <div className="section-center" style={{"marginBottom":"52px"}}> <p className="section-eyebrow">The raushang4 Difference</p> <h2 className="section-h2">D2C engineering vs.<br /><em>standard agency support</em></h2> <p className="section-sub">We align our technical output with your unit economics.</p> </div> <div className="compare-inner-grid"> <div className="compare-col other"> <div className="compare-header">Transactional Agency</div> <div className="compare-item"><span className="ci-icon">&#10005;</span> Priority on platform ROAS metrics</div> <div className="compare-item"><span className="ci-icon">&#10005;</span> Scale spend without fixing the funnel</div> <div className="compare-item"><span className="ci-icon">&#10005;</span> Buy templates to save time</div> <div className="compare-item"><span className="ci-icon">&#10005;</span> Project ends at 'Go-Live'</div> <div className="compare-item"><span className="ci-icon">&#10005;</span> fragmented data and reporting</div> <div className="compare-item"><span className="ci-icon">&#10005;</span> Avoid challenging the brief</div> </div> <div className="compare-col us"> <div className="compare-header">raushang4 Partnership</div> <div className="compare-item"><span className="ci-icon">&#10003;</span> Priority on bottom-line profit (CM2)</div> <div className="compare-item"><span className="ci-icon">&#10003;</span> Engineering fixes before scaling fuel</div> <div className="compare-item"><span className="ci-icon">&#10003;</span> Build bespoke for technical durability</div> <div className="compare-item"><span className="ci-icon">&#10003;</span> Embedded optimization post-launch</div> <div className="compare-item"><span className="ci-icon">&#10003;</span> Proprietary server-side data layer</div> <div className="compare-item"><span className="ci-icon">&#10003;</span> High-authority technical advocacy</div> </div> </div> </div> </section> <section className="discovery-section"> <div className="section-inner"> <div className="discovery-box"> <div className="discovery-header">
D2C Performance Audit — What we deliver in 48 hours
</div> <div className="discovery-3col"> <div className="disc-item"><strong>Technical Diagnosis</strong><span>A prioritized list of conversion leaks and performance bottlenecks in your current checkout and PDP architecture.</span></div> <div className="disc-item"><strong>Attribution Review</strong><span>A direct read on whether your data is lying to you—reconciling ad platform claims with GA4 reality.</span></div> <div className="disc-item"><strong>Scalability Roadmap</strong><span>The specific technical and structural changes needed to lower your CAC and improve your margins.</span></div> </div> </div> </div> </section>  <section className="faq-section"> <div className="faq-inner"> <h2 className="faq-h2">D2C Engineering FAQs</h2> <p className="faq-group-label">Strategic Growth</p> <div className="faq-item"> <p className="faq-q">Do you work with early-stage D2C brands?</p> <p className="faq-a">Yes. We specialize in two stages: pre-launch engineering (getting the system right from Day One) and scale-phase optimization (fixing the technical debt that prevents growth). What matters is your commitment to technical excellence and empirical data.</p> </div> <div className="faq-item"> <p className="faq-q">Can we hire you for just the conversion optimization (CRO) part?</p> <p className="faq-a">Absolutely. Many brands have established ad teams but a broken store. We can embed into your existing ecosystem to engineer the conversion lift required to make those ads more profitable.</p> </div> <div className="faq-item"> <p className="faq-q">What does a typical engagement look like?</p> <p className="faq-a">It begins with a D2C Performance Audit. We identify the high-leverage areas of your store and data. If we see a path to a significant ROI, we propose a 90-day engineering sprint to implement and validate the fixes.</p> </div> </div> </div> </section> <section id="contact" className="cta-bottom"> <div className="section-inner"> <h2>Stop wrestling with your tech stack.<br /><em>Start scaling your margins.</em></h2> <p className="hero-sub" style={{"fontSize":"18px","marginBottom":"32px"}}>Get an engineer's perspective on your store's performance. No pitch deck, just a prioritized roadmap.</p> <div className="contact-form-card" style={{"maxWidth":"600px","margin":"0 auto","textAlign":"left"}}> <UnifiedContactForm formName="D2C Playbook Contact Form" pageSource="d2c growth page" buttonText="Request Your D2C Audit" fields={formFields} /> </div> <div className="form-trust" style={{"justifyContent":"center","marginTop":"24px"}}> <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
Expert Review · Direct Response · No Automated Fluff
</div> </div> </section>
    </>
  );
}
