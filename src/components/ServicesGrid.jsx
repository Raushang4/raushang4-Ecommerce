"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const MotionLink = motion(Link);

export default function ServicesGrid() {
  const services = [
    {
      id: "svc-ecommerce",
      name: "High-Performance Ecommerce Builds",
      desc: "We engineer Shopify and WooCommerce stores that prioritize speed, conversion, and architectural integrity. Every store is built to handle scale without compromising on performance or user experience.",
      bullets: ["Shopify & WooCommerce Engineering", "Conversion-Centric UI/UX", "Mobile-First Performance"],
      url: "/ecommerce-design-build",
      className: "s1",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line></svg>
    },
    {
      id: "svc-web-design",
      name: "Strategic Web Design & Engineering",
      desc: "Websites that function as high-intent lead generation machines. We leverage Next.js, Framer, and React to build accessible, lightning-fast digital presences that rank and convert.",
      bullets: ["Next.js & React Web Apps", "Performance-Led Design", "Framer & Webflow Expertise"],
      url: "/web-design",
      className: "s6",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
    },
    {
      id: "svc-perf-marketing",
      name: "Data-Driven Performance Marketing",
      desc: "Campaigns built on unit economics and incremental growth. We move beyond vanity ROAS to focus on the actual profit each customer brings to your business.",
      bullets: ["Profitability-Centric Scaling", "Algorithmic Ad Management", "Creative Strategy & Audits"],
      url: "/performance-marketing",
      className: "s2",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
    },
    {
      id: "svc-cro",
      name: "Iterative Conversion Engineering",
      desc: "Systematic optimization of your entire buyer journey. We identify high-friction points using behavior analytics and eliminate them through data-validated experiments.",
      bullets: ["Behavioral Data Audits", "Full-Funnel Experimentation", "UX & Trust Signal Optimization"],
      url: "/cro-optimisation",
      className: "s3",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
    },
    {
      id: "svc-analytics",
      name: "Advanced Analytics & Attribution",
      desc: "Establish a 'source of truth' for your business data. We implement robust GA4 and server-side tracking to ensure every marketing rupee is accurately accounted for.",
      bullets: ["Server-Side Tracking Setup", "Attribution Modeling", "Custom Profit Dashboards"],
      url: "/analytics-attribution",
      className: "s4",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
    },
    {
      id: "svc-seo",
      name: "AI-First Search Visibility (SEO/AEO)",
      desc: "Don't just rank on page one; be the answer AI engines provide. We optimize for Google's algorithm and the retrieval systems behind ChatGPT and Perplexity.",
      bullets: ["Entity-Based SEO Strategy", "AI Search Visibility (AEO)", "Technical Foundation & Schema"],
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
    <section id="services" className="services-section" style={{ background: '#fff', padding: '120px 0' }}>
      <div id="services-inner" className="section-inner">
        <motion.div 
          id="services-header" 
          className="section-center" 
          style={{ marginBottom: '64px' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.p id="services-eyebrow" className="section-eyebrow" variants={itemVariants}>Expertise</motion.p>
          <motion.h2 id="services-title" className="section-h2" variants={itemVariants}>Services engineered for <br/><em id="services-em" style={{ color: 'var(--accent)', fontStyle: 'normal' }}>Digital Dominance</em></motion.h2>
          <motion.p id="services-subtitle" className="section-sub" variants={itemVariants} style={{ maxWidth: '720px', margin: '0 auto' }}>We don't offer generic packages. We provide a cohesive growth stack where every element is engineered to amplify the others—from backend architecture to the frontend conversion experience.</motion.p>
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
            <MotionLink 
              key={idx} 
              id={svc.id} 
              href={svc.url} 
              className={`svc-card ${svc.className}`}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.4, ease: "easeOut" } }}
              style={{ display: 'flex', flexDirection: 'column', gap: '20px', textDecoration: 'none', color: 'inherit' }}
            >
              <div id={`${svc.id}-icon`} className="svc-icon-wrap" style={{ width: '48px', height: '48px', background: 'var(--accent-light)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyCenter: 'center', color: 'var(--accent)' }}>
                <div style={{ width: '24px', height: '24px', margin: 'auto' }}>{svc.icon}</div>
              </div>
              <div id={`${svc.id}-name`} className="svc-name" style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--dark)' }}>{svc.name}</div>
              <p id={`${svc.id}-desc`} className="svc-desc" style={{ fontSize: '0.95rem', color: 'var(--mid)', lineHeight: '1.6' }}>{svc.desc}</p>
              <ul id={`${svc.id}-bullets`} className="svc-bullets" style={{ marginTop: 'auto', listStyle: 'none', padding: 0 }}>
                {svc.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} id={`${svc.id}-bullet-${bIdx}`} style={{ fontSize: '0.85rem', color: 'var(--soft)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <span style={{ width: '4px', height: '4px', background: 'var(--accent)', borderRadius: '50%' }}></span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </MotionLink>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
