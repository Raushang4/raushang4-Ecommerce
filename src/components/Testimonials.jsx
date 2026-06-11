"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Testimonials() {
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
    <section id="testimonials-section" className="tsc-section" style={{ background: 'var(--bg)', padding: '120px 0' }}>
      <div id="tsc-container" className="section-inner">
        <motion.div 
          id="tsc-header" 
          className="tsc-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <motion.p id="tsc-eyebrow" className="section-eyebrow" variants={itemVariants}>Social Proof</motion.p>
          <motion.h2 id="tsc-title" className="section-h2" variants={itemVariants} style={{ maxWidth: '800px', margin: '0 auto' }}>Honest feedback from founders <br/><em id="tsc-em" style={{ color: 'var(--accent)', fontStyle: 'normal' }}>we've helped scale</em></motion.h2>
        </motion.div>
        
        <motion.div 
          id="tsc-viewport" 
          className="tsc-viewport"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}
        >
          <div id="tsc-track" className="tsc-track" role="list">
            <motion.article 
              id="tsc-card-1" 
              className="tsc-card" 
              role="listitem"
              variants={itemVariants}
              style={{ padding: '48px', borderRadius: '32px', background: 'var(--white)', border: '1px solid var(--border)', boxShadow: '0 20px 40px rgba(0,0,0,0.03)' }}
            >
              <div id="tsc-top-1" className="tsc-card-top" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                <div id="tsc-stars-1" className="tsc-stars" aria-label="5 out of 5 stars" style={{ display: 'flex', gap: '4px', color: '#fbbf24' }}>
                  {[1,2,3,4,5].map(i => <svg key={i} viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>)}
                </div>
                <div id="tsc-logo-1" style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--soft)', letterSpacing: '0.05em' }}>MALENS PHARMA</div>
              </div>
              <p id="tsc-quote-1" className="tsc-quote" style={{ fontSize: '1.25rem', fontWeight: '500', color: 'var(--dark)', lineHeight: '1.6', marginBottom: '40px', fontStyle: 'italic' }}>"It has been a relief to work with raushang4. I can rest assured that my website is in good hands. I was very satisfied with the final results. Highly Recommended."</p>
              <div id="tsc-author-1" className="tsc-author" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div id="tsc-avatar-1" className="tsc-avatar" aria-hidden="true" style={{ width: '56px', height: '56px', background: 'var(--accent-light)', color: 'var(--accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: '800' }}>S</div>
                <div id="tsc-author-text-1" className="tsc-author-text">
                  <div id="tsc-name-1" className="tsc-name" style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--dark)' }}>Sorabh</div>
                  <div id="tsc-role-1" className="tsc-role" style={{ fontSize: '0.9rem', color: 'var(--mid)' }}>CEO, Malens Pharmaceuticals</div>
                </div>
              </div>
            </motion.article>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
