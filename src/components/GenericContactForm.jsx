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
        <button type="submit" className="form-submit" disabled={isPending}>
          {isPending ? 'Sending...' : 'Send Message'}
        </button>
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

