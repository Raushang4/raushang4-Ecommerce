"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CustomModal from './CustomModal';

export default function ContactSection() {
  const [modalState, setModalState] = useState({ isOpen: false, type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.target);
      // Google Apps Script Web App URL (stored in .env.local)
      const scriptURL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
      
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formData,
        // mode: 'no-cors' // Uncomment if you face CORS issues (note: response.ok will be false with no-cors)
      });

      if (response.ok) {
        setModalState({ isOpen: true, type: 'success', message: 'Your message has been saved to the sheet successfully. We will be in touch shortly!' });
        e.target.reset();
      } else {
        setModalState({ isOpen: true, type: 'error', message: 'Oops! There was a problem saving your form to the sheet.' });
      }
    } catch (error) {
      setModalState({ isOpen: true, type: 'error', message: 'Network error. Please check your connection and try again.' });
    }

    setIsSubmitting(false);
  };

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
    <section id="contact-section" className="contact-section">
      <motion.div 
        id="contact-container" 
        className="contact-2col"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div id="contact-left" className="contact-left">
          <motion.p id="contact-eyebrow" className="section-eyebrow" variants={itemVariants}>Let's Talk</motion.p>
          <motion.h2 id="contact-title" className="contact-h2" variants={itemVariants}>Tell us what's not working.<br />We'll tell you if we can fix it.</motion.h2>
          <motion.p id="contact-subtitle" className="contact-sub" variants={itemVariants}>No pitch decks. No hard sell. Just an honest conversation about your business and where we can genuinely help.</motion.p>
        </div>
        
        <motion.div id="contact-right" className="contact-right" variants={itemVariants}>
          <div id="contact-form-card" className="contact-form-card" style={{ backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.05)' }}>
            <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
              <div id="form-group-name" className="form-group">
                <label id="label-name" className="form-label" htmlFor="name">Your Name</label>
                <input id="input-name" className="form-input" type="text" name="name" required disabled={isSubmitting} />
              </div>
              <div id="form-group-email" className="form-group">
                <label id="label-email" className="form-label" htmlFor="email">Email Address</label>
                <input id="input-email" className="form-input" type="email" name="email" required disabled={isSubmitting} />
              </div>
              <div id="form-group-message" className="form-group">
                <label id="label-message" className="form-label" htmlFor="message">Message</label>
                <textarea id="input-message" className="form-textarea" name="message" required disabled={isSubmitting}></textarea>
              </div>
              <motion.button 
                id="form-submit-btn" 
                type="submit" 
                className="form-submit"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 215, 0, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Start the Conversation'}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </motion.div>
      <CustomModal 
        id="global-interaction-modal"
        isOpen={modalState.isOpen} 
        type={modalState.type} 
        message={modalState.message} 
        onClose={() => setModalState({ ...modalState, isOpen: false })} 
      />
    </section>
  );
}
