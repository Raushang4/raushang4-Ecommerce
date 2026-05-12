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
    <section id="contact-section" className="contact-section">
      <motion.div 
        id="contact-container" 
        className="section-inner"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="contact-grid">
          <div id="contact-left" className="contact-left">
            <motion.p id="contact-eyebrow" className="section-eyebrow" variants={itemVariants}>Let's Talk</motion.p>
            <motion.h2 id="contact-title" className="contact-h2" variants={itemVariants}>Tell us what's not working.<br />We'll tell you if we can fix it.</motion.h2>
            <motion.p id="contact-subtitle" className="contact-sub" variants={itemVariants}>No pitch decks. No hard sell. Just an honest conversation about your business and where we can genuinely help.</motion.p>
          </div>
          
          <motion.div id="contact-right" className="contact-right" variants={itemVariants}>
            <div id="contact-form-card" className="contact-form-card" style={{ backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.05)' }}>
              <UnifiedContactForm 
                formName="Homepage Contact Form"
                pageSource="homepage"
                buttonText="Start the Conversation"
                fields={mainFormFields}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
