"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function WhoWeWorkWith() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section id="who-we-work-with-section" className="wwww-section" style={{ background: 'var(--bg)', padding: '120px 0' }}>
      <div id="wwww-container" className="section-inner">
        <motion.div 
          id="wwww-header" 
          className="section-center" 
          style={{ marginBottom: '64px' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.p id="wwww-eyebrow" className="section-eyebrow" variants={itemVariants}>Ideal Partners</motion.p>
          <motion.h2 id="wwww-title" className="section-h2" variants={itemVariants}>
            Built for founders who demand<br /><em id="wwww-title-em" style={{ color: 'var(--accent)', fontStyle: 'normal' }}>Measurable Performance</em>
          </motion.h2>
          <motion.p id="wwww-subtitle" className="section-sub" variants={itemVariants} style={{ maxWidth: '720px', margin: '0 auto' }}>
            We partner with businesses that prioritize results over vanity metrics. We focus on the high-leverage areas where our engineering makes the biggest impact.
          </motion.p>
        </motion.div>
        
        <motion.div 
          id="wwww-cards-grid" 
          className="wwww-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {['d2c', 'mfg', 'svc'].map((type, idx) => (
            <motion.div 
              key={type} 
              id={`wwww-card-${type}`} 
              className="wwww-card" 
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.4 } }}
              style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
            >
              <div id={`wwww-visual-${type}`} className={`wwww-visual ${type}`} style={{ background: 'var(--dark)', height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="120" height="120">
                  <circle cx="150" cy="150" r="40" fill="rgba(255,255,255,0.04)"></circle>
                  <rect x={type === 'd2c' ? "50" : "40"} y={type === 'd2c' ? "80" : "70"} width={type === 'mfg' ? "120" : "100"} height={type === 'mfg' ? "60" : "70"} rx="10" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.85)" strokeWidth="2.5"></rect>
                </svg>
              </div>
              <div id={`wwww-body-${type}`} className="wwww-body" style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p id={`wwww-title-${type}`} className="wwww-title" style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '12px', color: 'var(--dark)' }}>
                  {type === 'd2c' ? 'D2C & Ecommerce Brands' : type === 'mfg' ? 'Manufacturers' : 'Service Businesses'}
                </p>
                <p id={`wwww-copy-${type}`} className="wwww-copy" style={{ fontSize: '0.95rem', color: 'var(--mid)', lineHeight: '1.6', marginBottom: '24px' }}>
                  {type === 'd2c' ? "You've scaled your traffic, but your margins are being squeezed by a low conversion rate. We fix the leaks in your funnel and optimize your store for maximum customer lifetime value." : 
                   type === 'mfg' ? "You're ready to bypass middle-men and build a direct relationship with your customers. We create the robust digital infrastructure needed to launch and scale your D2C arm." : 
                   "You provide a premium service, but your website looks like an afterthought. We build the authority-driven digital systems that attract and convert your ideal high-ticket clients."}
                </p>
                <Link id={`wwww-link-${type}`} href={`/${type === 'd2c' ? 'd2c-ecommerce' : type === 'mfg' ? 'manufacturers' : 'service-businesses'}`} className="wwww-link" style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent)', fontWeight: '700', textDecoration: 'none' }}>
                  See how we help 
                  <svg viewBox="0 0 24 24" style={{ width: '18px', height: '18px', stroke: 'currentColor', strokeWidth: '2', fill: 'none' }}><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
