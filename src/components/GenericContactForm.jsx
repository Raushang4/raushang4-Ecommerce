"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomModal from './CustomModal';

export default function GenericContactForm({ formName = "Main Contact Form", pageSource = "unknown" }) {
  const [modalState, setModalState] = useState({ isOpen: false, type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const payload = {
      form_name: formName,
      page_source: pageSource,
      ...Object.fromEntries(formData.entries())
    };

    setIsSubmitting(true);
    setStatusMessage('Submitting...');
    
    try {
      const response = await fetch('/api/contact', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setModalState({ isOpen: true, type: 'success', message: 'Your message has been saved successfully!' });
        form.reset();
      } else {
        setModalState({ isOpen: true, type: 'error', message: 'Oops! There was a problem saving your form.' });
      }
    } catch (error) {
      setModalState({ isOpen: true, type: 'error', message: 'Network error. Please try again.' });
    }

    setIsSubmitting(false);
  };

  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="first_name">First name</label>
            <input type="text" className="form-input" id="first_name" name="first_name" placeholder="Rahul" required />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="last_name">Last name</label>
            <input type="text" className="form-input" id="last_name" name="last_name" placeholder="Sharma" required />
          </div>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="email">Business email</label>
          <input type="email" className="form-input" id="email" name="email" placeholder="rahul@yourbrand.com" required />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="phone">Phone number</label>
          <input type="tel" className="form-input" id="phone" name="phone" placeholder="9304995677" required />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="message">How can we help?</label>
          <textarea className="form-textarea" id="message" name="message" placeholder="Tell us about your project..." required></textarea>
        </div>
        <button type="submit" className="form-submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
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
