"use client";
import React from 'react';
import { motion } from 'framer-motion';

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
    <section id="who-we-work-with-section" className="wwww-section">
      <div id="wwww-container" className="section-inner">
        <motion.div 
          id="wwww-header" 
          className="section-center" 
          style={{ marginBottom: '52px' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.p id="wwww-eyebrow" className="section-eyebrow" variants={itemVariants}>Who we work with</motion.p>
          <motion.h2 id="wwww-title" className="section-h2" variants={itemVariants}>
            Built for founders serious<br /><em id="wwww-title-em">about growing online</em>
          </motion.h2>
          <motion.p id="wwww-subtitle" className="section-sub" variants={itemVariants}>
            We work best with businesses that want outcomes — not just deliverables. Here&apos;s where we specialise.
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
            <motion.div key={type} id={`wwww-card-${type}`} className="wwww-card" variants={itemVariants}>
              <div id={`wwww-visual-${type}`} className={`wwww-visual ${type}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
                  <circle cx="150" cy="150" r="40" fill="rgba(255,255,255,0.04)"></circle>
                  <rect x={type === 'd2c' ? "50" : "40"} y={type === 'd2c' ? "80" : "70"} width={type === 'mfg' ? "120" : "100"} height={type === 'mfg' ? "60" : "70"} rx="10" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.85)" strokeWidth="2.5"></rect>
                </svg>
              </div>
              <div id={`wwww-body-${type}`} className="wwww-body">
                <p id={`wwww-title-${type}`} className="wwww-title">
                  {type === 'd2c' ? 'D2C & Ecommerce Brands' : type === 'mfg' ? 'Manufacturers' : 'Service Businesses'}
                </p>
                <p id={`wwww-copy-${type}`} className="wwww-copy">
                  {type === 'd2c' ? "You're spending on ads but the store isn't converting. Traffic comes in — revenue doesn't follow. You need someone who understands the full revenue loop, not just one piece of it." : 
                   type === 'mfg' ? "Your leads come from IndiaMart or referrals — no owned presence, no predictability. We build the direct inbound pipeline that gives you control over your own growth." : 
                   "Word of mouth built your business. But it won't scale it. You have a website — it does nothing. We build the digital engine that generates qualified leads predictably."}
                </p>
                <a id={`wwww-link-${type}`} href={`/${type === 'd2c' ? 'd2c-ecommerce' : type === 'mfg' ? 'manufacturers' : 'service-businesses'}`} className="wwww-link">
                  See how we help 
                  <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
