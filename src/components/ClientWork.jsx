"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const MotionImage = motion(Image);
const MotionLink = motion(Link);

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
          <motion.h2 id="work-title" className="section-h2" variants={itemVariants}>Impact over deliverables</motion.h2>
          <motion.p id="work-subtitle" className="section-sub" variants={itemVariants}>Actual revenue growth and performance improvements engineered for our partners.</motion.p>
        </motion.div>
        
        <motion.div 
          id="work-grid" 
          className="cases-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <MotionLink 
            id="case-card-1" 
            href="/case-study/red-sirocco" 
            className="case-card"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.4, ease: "easeOut" } }}
          >
            <div id="case-img-wrap-1" className="case-img case-img--photo overflow-hidden">
              <MotionImage 
                id="case-img-1" 
                src="https://cdn.sanity.io/images/zcj1brqz/production/da53e10d416868c2d046d3b4833a6ee2856042bc-2752x1536.png?w=900&auto=format&fit=max&q=75" 
                alt="Red Sirocco" 
                width={900} height={600} 
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
              <h3 id="case-title-1" className="case-title">Red Sirocco — Conversion-Centric WooCommerce Architecture</h3>
              <p id="case-desc-1" className="case-desc">We transformed a standard WooCommerce site into a high-converting storefront. Focused on mobile-first navigation and a streamlined checkout journey, resulting in a significant uplift in usable mobile traffic.</p>
            </div>
          </MotionLink>

          <MotionLink 
            id="case-card-2" 
            href="/case-study/dream-spark-events" 
            className="case-card"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.4, ease: "easeOut" } }}
          >
            <div id="case-img-wrap-2" className="case-img case-img--photo overflow-hidden">
              <MotionImage 
                id="case-img-2" 
                src="https://cdn.sanity.io/images/zcj1brqz/production/42e3c04f2308665e065473b28a7a9ea708a8dc3b-2752x1536.png?w=900&auto=format&fit=max&q=75" 
                alt="Dream Spark Events" 
                width={900} height={600} 
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
              <h3 id="case-title-2" className="case-title">Dream Spark Events — Custom Multi-Vendor Ecosystem</h3>
              <p id="case-desc-2" className="case-desc">Engineered a complex, scalable marketplace for event bookings. Implemented custom vendor onboarding and real-time scheduling logic to automate a previously manual reservation process.</p>
            </div>
          </MotionLink>
        </motion.div>
      </div>
    </section>
  );
}
