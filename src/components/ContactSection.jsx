"use client";
import React from 'react';
import { motion } from 'framer-motion';
import UnifiedContactForm from './UnifiedContactForm';

export default function ContactSection() {
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

  const mainFormFields = [
    { name: 'name', label: 'Your Name', type: 'text', placeholder: 'Rahul Mehta', required: true },
    { name: 'email', label: 'Email Address', type: 'email', placeholder: 'you@company.com', required: true, autoComplete: 'email' },
    { name: 'message', label: 'Message', type: 'textarea', placeholder: 'Tell us about your project...', required: true }
  ];

  return (
    <section id="contact-section" className="contact-section" style={{ background: '#fff', padding: '120px 0' }}>
      <motion.div 
        id="contact-container" 
        className="section-inner"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div id="contact-left" className="contact-left">
            <motion.p id="contact-eyebrow" className="section-eyebrow" variants={itemVariants} style={{ textAlign: 'left' }}>Next Steps</motion.p>
            <motion.h2 id="contact-title" className="contact-h2" variants={itemVariants} style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: '800', letterSpacing: '-0.04em', lineHeight: '1.05', marginBottom: '24px', color: 'var(--dark)' }}>
              Stop guessing. <br/><em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>Start growing.</em>
            </motion.h2>
            <motion.p id="contact-subtitle" className="contact-sub" variants={itemVariants} style={{ fontSize: '1.1rem', color: 'var(--mid)', lineHeight: '1.6', maxWidth: '500px', textAlign: 'left', margin: 0 }}>
              Skip the generic discovery call. Share your challenges, and we'll provide a high-level roadmap of how we'd engineer a solution for your brand.
            </motion.p>
            
            <motion.div variants={itemVariants} style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', background: 'var(--accent-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <span style={{ fontWeight: '600', color: 'var(--dark)' }}>Audit of your current store performance</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', background: 'var(--accent-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <span style={{ fontWeight: '600', color: 'var(--dark)' }}>Custom engineering roadmap</span>
              </div>
            </motion.div>
          </div>
          
          <motion.div id="contact-right" className="contact-right" variants={itemVariants}>
            <div id="contact-form-card" className="contact-form-card" style={{ padding: '48px', borderRadius: '32px', background: 'var(--white)', border: '1px solid var(--border)', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.08)' }}>
              <UnifiedContactForm 
                formName="Homepage Contact Form"
                pageSource="homepage"
                buttonText="Request Your Roadmap"
                fields={mainFormFields}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
