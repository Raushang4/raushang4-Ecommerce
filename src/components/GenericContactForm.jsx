"use client";
import React, { useState, useActionState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomModal from './CustomModal';
import { submitContactForm } from '../app/actions/contact';

export default function GenericContactForm({ formName = "Main Contact Form", pageSource = "unknown" }) {
  const [modalState, setModalState] = useState({ isOpen: false, type: '', message: '' });
  
  const [state, formAction, isPending] = useActionState(submitContactForm, null);

  useEffect(() => {
    if (state) {
      if (state.success) {
        setModalState({ isOpen: true, type: 'success', message: state.message });
        const form = document.querySelector(`form[data-form-name="${formName}"]`);
        if (form) form.reset();
      } else if (state.error) {
        setModalState({ isOpen: true, type: 'error', message: state.error });
      }
    }
  }, [state, formName]);

  return (
    <>
      <form className="contact-form" action={formAction} data-form-name={formName}>
        {/* Honeypot for spam protection */}
        <input type="text" name="_honeypot" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
        <input type="hidden" name="form_name" value={formName} />
        <input type="hidden" name="page_source" value={pageSource} />

        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="first_name">First name</label>
            <input type="text" className="form-input" id="first_name" name="first_name" placeholder="Rahul" required disabled={isPending} />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="last_name">Last name</label>
            <input type="text" className="form-input" id="last_name" name="last_name" placeholder="Sharma" required disabled={isPending} />
          </div>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="email">Business email</label>
          <input type="email" className="form-input" id="email" name="email" placeholder="rahul@yourbrand.com" required disabled={isPending} />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="phone">Phone number</label>
          <input type="tel" className="form-input" id="phone" name="phone" placeholder="9304995677" required disabled={isPending} />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="message">How can we help?</label>
          <textarea className="form-textarea" id="message" name="message" placeholder="Tell us about your project..." required disabled={isPending}></textarea>
        </div>
        <motion.button 
          type="submit" 
          className="form-submit" 
          disabled={isPending}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
        >
          {isPending ? 'Sending...' : 'Send Message'}
          {!isPending && (
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          )}
        </motion.button>
        <div className="form-trust" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#888', marginTop: '12px', justifyContent: 'center' }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#EA580C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg> Your data is secure · 24hr response time
        </div>
      </form>
      <CustomModal 
        isOpen={modalState.isOpen} 
        type={modalState.type} 
        message={modalState.message} 
        onClose={() => setModalState({ ...modalState, isOpen: false })} 
      />
    </>
  );
}

