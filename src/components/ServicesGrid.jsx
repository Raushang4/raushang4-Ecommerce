"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function ServicesGrid() {
  const services = [
    {
      id: "svc-ecommerce",
      name: "Ecommerce Design & Build",
      desc: "Shopify and WooCommerce stores designed and built to convert — not just look good. CRO-first, mobile-first, fast-loading, and accountable post-launch for results.",
      bullets: ["Shopify & WooCommerce development", "CRO-first design & product pages", "Speed, performance & checkout optimisation"],
      url: "/ecommerce-design-build",
      className: "s1",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line></svg>
    },
    {
      id: "svc-web-design",
      name: "Web Design & Development",
      desc: "Websites and web applications that generate leads, load fast, and give you control over your content. WordPress, Framer, Webflow, and React — designed in Figma, built to Lighthouse 90+.",
      bullets: ["WordPress, Framer, Webflow, React", "UI/UX design & Figma prototyping", "Performance, accessibility & lead generation"],
      url: "/web-design",
      className: "s6",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
    },
    {
      id: "svc-perf-marketing",
      name: "Performance Marketing",
      desc: "Meta and Google campaigns built around contribution margin — not vanity ROAS. We structure your account so you can see what's actually profitable.",
      bullets: ["Campaign strategy and setup", "Creative briefing and direction", "Profitability-first reporting"],
      url: "/performance-marketing",
      className: "s2",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
    },
    {
      id: "svc-cro",
      name: "Conversion Rate Optimisation",
      desc: "Every friction point costs you money. We find them using your own data — and fix them in the right order so every change compounds on the last.",
      bullets: ["Site and checkout audits", "A/B test design and execution", "Trust signals and UX improvements"],
      url: "/cro-optimisation",
      className: "s3",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
    },
    {
      id: "svc-analytics",
      name: "Analytics & Attribution",
      desc: "The tracking foundation everything else relies on. Built once, correctly — so every decision you make from that point forward is based on accurate data.",
      bullets: ["GA4 and server-side tracking", "Multi-touch attribution", "Revenue and unit economics dashboards"],
      url: "/analytics-attribution",
      className: "s4",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
    },
    {
      id: "svc-seo",
      name: "SEO, AEO & GEO",
      desc: "Rank on Google, appear in AI Overviews, and get cited by ChatGPT and Perplexity. We build the technical and content foundation so your brand shows up everywhere buyers are searching.",
      bullets: ["Technical SEO and topical authority", "Answer-first content for AI visibility", "Schema markup and AI citation building"],
      url: "/seo-organic",
      className: "s5",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section id="services" className="services-section">
      <div id="services-inner" className="section-inner">
        <motion.div 
          id="services-header" 
          className="section-center" 
          style={{ marginBottom: '52px' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.p id="services-eyebrow" className="section-eyebrow" variants={itemVariants}>What we do</motion.p>
          <motion.h2 id="services-title" className="section-h2" variants={itemVariants}>Services built around <em id="services-em">your growth</em></motion.h2>
          <motion.p id="services-subtitle" className="section-sub" variants={itemVariants}>We scope tight because that's what works. Every service is built to connect to the next — so the store, the traffic, the tracking, and the optimisation reinforce each other.</motion.p>
        </motion.div>
        
        <motion.div 
          id="services-grid-container" 
          className="services-grid-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {services.map((svc, idx) => (
            <motion.a 
              key={idx} 
              id={svc.id} 
              href={svc.url} 
              className={`svc-card ${svc.className}`}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.3 } }}
            >
              <div id={`${svc.id}-icon`} className="svc-icon-wrap">
                {svc.icon}
              </div>
              <div id={`${svc.id}-name`} className="svc-name">{svc.name}</div>
              <p id={`${svc.id}-desc`} className="svc-desc">{svc.desc}</p>
              <ul id={`${svc.id}-bullets`} className="svc-bullets">
                {svc.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} id={`${svc.id}-bullet-${bIdx}`}>{bullet}</li>
                ))}
              </ul>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
