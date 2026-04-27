"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function ClientWork() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section id="work-section" className="case-section">
      <div id="work-container" className="section-inner">
        <motion.div 
          id="work-header" 
          className="section-center" 
          style={{ marginBottom: '52px' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.p id="work-eyebrow" className="section-eyebrow" variants={itemVariants}>Client work</motion.p>
          <motion.h2 id="work-title" className="section-h2" variants={itemVariants}>Work that moved the needle</motion.h2>
          <motion.p id="work-subtitle" className="section-sub" variants={itemVariants}>Results from real projects — not hypotheticals.</motion.p>
        </motion.div>
        
        <motion.div 
          id="work-grid" 
          className="cases-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.a 
            id="case-card-1" 
            href="/case-study/red-sirocco" 
            className="case-card"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.4, ease: "easeOut" } }}
          >
            <div id="case-img-wrap-1" className="case-img case-img--photo overflow-hidden">
              <motion.img 
                id="case-img-1" 
                src="https://cdn.sanity.io/images/zcj1brqz/production/da53e10d416868c2d046d3b4833a6ee2856042bc-2752x1536.png?w=900&auto=format&fit=max&q=75" 
                alt="Red Sirocco" 
                width="900" height="600" loading="lazy" decoding="async" 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
              <span id="case-label-1" className="case-img-label">WooCommerce Development</span>
            </div>
            <div id="case-body-1" className="case-body">
              <div id="case-meta-1" className="case-meta">
                <span id="case-tag-1" className="case-tag">D2C · Coffee</span>
                <span id="case-metric-1" className="case-metric-chip">Mobile Usability Score - +65%</span>
              </div>
              <h3 id="case-title-1" className="case-title">Red Sirroco — Conversion-Ready WooCommerce Store Redesign</h3>
              <p id="case-desc-1" className="case-desc">A basic WooCommerce store rebuilt with structured product pages, conversion-focused UI, and a mobile-first layout — taken from redesign to full live deployment.</p>
            </div>
          </motion.a>

          <motion.a 
            id="case-card-2" 
            href="/case-study/dream-spark-events" 
            className="case-card"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.4, ease: "easeOut" } }}
          >
            <div id="case-img-wrap-2" className="case-img case-img--photo overflow-hidden">
              <motion.img 
                id="case-img-2" 
                src="https://cdn.sanity.io/images/zcj1brqz/production/42e3c04f2308665e065473b28a7a9ea708a8dc3b-2752x1536.png?w=900&auto=format&fit=max&q=75" 
                alt="Dream Spark Events" 
                width="900" height="600" loading="lazy" decoding="async" 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
              <span id="case-label-2" className="case-img-label">WooCommerce Development</span>
            </div>
            <div id="case-body-2" className="case-body">
              <div id="case-meta-2" className="case-meta">
                <span id="case-tag-2" className="case-tag">Service Marketplace · Events & Venue Booking</span>
                <span id="case-metric-2" className="case-metric-chip">Custom Built - 100%</span>
              </div>
              <h3 id="case-title-2" className="case-title">Dream Spark Events — Multi-Vendor Event & Venue Booking Platform</h3>
              <p id="case-desc-2" className="case-desc">A complete multi-vendor event marketplace built from scratch — artist registration, venue listings, date-based booking workflows, and a structured service catalog, all within a single WooCommerce platform.</p>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
