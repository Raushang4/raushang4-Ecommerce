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
    <section id="work-section" className="case-section" style={{ background: '#fff', padding: '120px 0' }}>
      <div id="work-container" className="section-inner">
        <motion.div 
          id="work-header" 
          className="section-center" 
          style={{ marginBottom: '64px' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.p id="work-eyebrow" className="section-eyebrow" variants={itemVariants}>Impact Studies</motion.p>
          <motion.h2 id="work-title" className="section-h2" variants={itemVariants}>Results-led <em id="work-em" style={{ color: 'var(--accent)', fontStyle: 'normal' }}>Engineering</em></motion.h2>
          <motion.p id="work-subtitle" className="section-sub" variants={itemVariants} style={{ maxWidth: '720px', margin: '0 auto' }}>Actual revenue growth and performance improvements engineered for our global partners.</motion.p>
        </motion.div>
        
        <motion.div 
          id="work-grid" 
          className="cases-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px' }}
        >
          <MotionLink 
            id="case-card-1" 
            href="/case-study/red-sirocco" 
            className="case-card"
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.4, ease: "easeOut" } }}
            style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', textDecoration: 'none', color: 'inherit' }}
          >
            <div id="case-img-wrap-1" className="case-img case-img--photo overflow-hidden" style={{ position: 'relative', height: '280px' }}>
              <MotionImage 
                id="case-img-1" 
                src="https://cdn.sanity.io/images/zcj1brqz/production/da53e10d416868c2d046d3b4833a6ee2856042bc-2752x1536.png?w=900&auto=format&fit=max&q=75" 
                alt="Red Sirocco" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
              <span id="case-label-1" className="case-img-label" style={{ position: 'absolute', top: '16px', right: '16px', zIndex: 2 }}>WooCommerce</span>
            </div>
            <div id="case-body-1" className="case-body" style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div id="case-meta-1" className="case-meta" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '16px' }}>
                <span id="case-tag-1" className="case-tag" style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--soft)', letterSpacing: '0.05em' }}>D2C · Coffee</span>
                <span id="case-metric-1" className="case-metric-chip" style={{ fontSize: '0.75rem', fontWeight: '800', background: 'var(--accent-light)', color: 'var(--accent)', padding: '4px 12px', borderRadius: '100px' }}>+65% Mobile Usability</span>
              </div>
              <h3 id="case-title-1" className="case-title" style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '12px', color: 'var(--dark)', lineHeight: '1.3' }}>Red Sirocco — Conversion-Centric Storefront</h3>
              <p id="case-desc-1" className="case-desc" style={{ fontSize: '0.95rem', color: 'var(--mid)', lineHeight: '1.6' }}>We transformed a legacy WooCommerce site into a high-converting storefront, resulting in a significant uplift in mobile traffic and conversion.</p>
            </div>
          </MotionLink>

          <MotionLink 
            id="case-card-2" 
            href="/case-study/dream-spark-events" 
            className="case-card"
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.4, ease: "easeOut" } }}
            style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', textDecoration: 'none', color: 'inherit' }}
          >
            <div id="case-img-wrap-2" className="case-img case-img--photo overflow-hidden" style={{ position: 'relative', height: '280px' }}>
              <MotionImage 
                id="case-img-2" 
                src="https://cdn.sanity.io/images/zcj1brqz/production/42e3c04f2308665e065473b28a7a9ea708a8dc3b-2752x1536.png?w=900&auto=format&fit=max&q=75" 
                alt="Dream Spark Events" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
              <span id="case-label-2" className="case-img-label" style={{ position: 'absolute', top: '16px', right: '16px', zIndex: 2 }}>Platform Build</span>
            </div>
            <div id="case-body-2" className="case-body" style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div id="case-meta-2" className="case-meta" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '16px' }}>
                <span id="case-tag-2" className="case-tag" style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--soft)', letterSpacing: '0.05em' }}>Marketplace · Events</span>
                <span id="case-metric-2" className="case-metric-chip" style={{ fontSize: '0.75rem', fontWeight: '800', background: '#f1f5f9', color: 'var(--dark)', padding: '4px 12px', borderRadius: '100px' }}>100% Custom Built</span>
              </div>
              <h3 id="case-title-2" className="case-title" style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '12px', color: 'var(--dark)', lineHeight: '1.3' }}>Dream Spark Events — Multi-Vendor Ecosystem</h3>
              <p id="case-desc-2" className="case-desc" style={{ fontSize: '0.95rem', color: 'var(--mid)', lineHeight: '1.6' }}>Engineered a scalable marketplace for event bookings, automating previously manual vendor onboarding and real-time scheduling.</p>
            </div>
          </MotionLink>
        </motion.div>
      </div>
    </section>
  );
}
