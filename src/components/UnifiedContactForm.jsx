"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomModal from './CustomModal';

export default function UnifiedContactForm({ 
  formName = "General Contact Form", 
  pageSource = "unknown", 
  buttonText = "Send Message",
  fields = [],
  className = ""
}) {
  const [modalState, setModalState] = useState({ isOpen: false, type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState('');

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // Client-side validation
    const newErrors = {};
    
    // Validate required fields
    fields.forEach(field => {
      if (field.required && (!data[field.name] || !data[field.name].trim())) {
        newErrors[field.name] = `${field.label} is required.`;
      } else if (field.type === 'email' && data[field.name] && !validateEmail(data[field.name].trim())) {
        newErrors[field.name] = 'Please enter a valid email address.';
      }
    });

    // Special case for honey pot
    if (data._honeypot) {
        console.log("Spam detected");
        return;
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setStatusMessage('Please fix the errors in the form.');
      return;
    }

    setIsSubmitting(true);
    setStatusMessage('Submitting your message...');
    
    try {
      const payload = {
        ...data,
        form_name: formName,
        page_source: pageSource,
        timestamp: new Date().toISOString()
      };

      const response = await fetch('/api/contact', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setModalState({ isOpen: true, type: 'success', message: 'Your message has been received! We will be in touch within 24 hours.' });
        form.reset();
        setStatusMessage('Message sent successfully.');
        setErrors({});
      } else {
        const errData = await response.json();
        setModalState({ isOpen: true, type: 'error', message: errData.error || 'Oops! There was a problem saving your form.' });
        setStatusMessage('Error sending message.');
      }
    } catch (error) {
      setModalState({ isOpen: true, type: 'error', message: 'Network error. Please check your connection and try again.' });
      setStatusMessage('Network error occurred.');
    }

    setIsSubmitting(false);
  };

  const errorVariants = {
    hidden: { opacity: 0, y: -5, height: 0 },
    visible: { opacity: 1, y: 0, height: 'auto', transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -5, height: 0, transition: { duration: 0.2 } }
  };

  return (
    <div className={`unified-contact-form-wrap ${className}`}>
      <div 
        aria-live="polite" 
        className="sr-only" 
        style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: 0 }}
      >
        {statusMessage}
      </div>
      
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        {/* Honeypot for spam protection */}
        <input type="text" name="_honeypot" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
        
        <div className="form-fields-grid" style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {fields.map((field, idx) => (
            <div key={idx} className={`form-group ${field.fullWidth ? 'full-width' : ''}`}>
              <label className="form-label" htmlFor={field.name}>{field.label}</label>
              
              {field.type === 'select' ? (
                <select 
                  id={field.name} 
                  name={field.name} 
                  className={`form-select ${errors[field.name] ? 'input-error' : ''}`}
                  defaultValue={field.defaultValue || ""}
                  required={field.required}
                  disabled={isSubmitting}
                  aria-invalid={!!errors[field.name] ? 'true' : 'false'}
                  aria-describedby={errors[field.name] ? `error-${field.name}` : undefined}
                >
                  <option value="" disabled>{field.placeholder || "Select an option"}</option>
                  {field.options.map((opt, oIdx) => (
                    <option key={oIdx} value={typeof opt === 'string' ? opt : opt.value}>
                      {typeof opt === 'string' ? opt : opt.label}
                    </option>
                  ))}
                </select>
              ) : field.type === 'textarea' ? (
                <textarea 
                  id={field.name} 
                  name={field.name} 
                  className={`form-textarea ${errors[field.name] ? 'input-error' : ''}`}
                  placeholder={field.placeholder}
                  required={field.required}
                  disabled={isSubmitting}
                  aria-invalid={!!errors[field.name] ? 'true' : 'false'}
                  aria-describedby={errors[field.name] ? `error-${field.name}` : undefined}
                />
              ) : (
                <input 
                  id={field.name} 
                  name={field.name} 
                  type={field.type}
                  className={`form-input ${errors[field.name] ? 'input-error' : ''}`}
                  placeholder={field.placeholder}
                  required={field.required}
                  disabled={isSubmitting}
                  autoComplete={field.autoComplete}
                  inputMode={field.inputMode}
                  aria-invalid={!!errors[field.name] ? 'true' : 'false'}
                  aria-describedby={errors[field.name] ? `error-${field.name}` : undefined}
                />
              )}

              <AnimatePresence>
                {errors[field.name] && (
                  <motion.span 
                    id={`error-${field.name}`}
                    className="form-error" 
                    variants={errorVariants} 
                    initial="hidden" 
                    animate="visible" 
                    exit="exit" 
                    style={{ color: '#d32f2f', fontSize: '13px', marginTop: '4px', display: 'block' }}
                  >
                    {errors[field.name]}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="form-footer" style={{ marginTop: '24px' }}>
          <motion.button 
            type="submit" 
            className="form-submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
            style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
          >
            {isSubmitting ? 'Sending...' : buttonText}
            {!isSubmitting && (
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            )}
          </motion.button>
          
          <div className="form-trust" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#888', marginTop: '12px', justifyContent: 'center' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#00a896" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg> No spam · No obligation · Reply within 24 hrs
          </div>
        </div>
      </form>

      <CustomModal 
        id={`modal-${formName.replace(/\s+/g, '-').toLowerCase()}`}
        isOpen={modalState.isOpen} 
        type={modalState.type} 
        message={modalState.message} 
        onClose={() => setModalState({ ...modalState, isOpen: false })} 
      />
    </div>
  );
}
