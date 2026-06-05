"use client";
import React, { useState, useActionState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomModal from './CustomModal';
import { submitContactForm } from '../app/actions/contact';

export default function UnifiedContactForm({ 
  formName = "General Contact Form", 
  pageSource = "unknown", 
  buttonText = "Send Message",
  fields = [],
  className = ""
}) {
  const [modalState, setModalState] = useState({ isOpen: false, type: '', message: '' });
  const [errors, setErrors] = useState({});

  const [state, formAction, isPending] = useActionState(submitContactForm, null);

  useEffect(() => {
    if (state) {
      if (state.success) {
        setModalState({ isOpen: true, type: 'success', message: state.message });
        setErrors({});
        // Reset form if success
        const form = document.querySelector(`form[data-form-name="${formName}"]`);
        if (form) form.reset();
      } else if (state.error) {
        setModalState({ isOpen: true, type: 'error', message: state.error });
      }
    }
  }, [state, formName]);

  const handleSubmit = (e) => {
    // Client-side validation before server action
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const newErrors = {};
    
    fields.forEach(field => {
      if (field.required && (!data[field.name] || !data[field.name].trim())) {
        newErrors[field.name] = `${field.label} is required.`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      e.preventDefault(); // Stop the server action if validation fails
      return;
    }
    
    setErrors({});
    // Server action will be triggered automatically by the form action
  };

  const errorVariants = {
    hidden: { opacity: 0, y: -5, height: 0 },
    visible: { opacity: 1, y: 0, height: 'auto', transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -5, height: 0, transition: { duration: 0.2 } }
  };

  return (
    <div className={`unified-contact-form-wrap ${className}`}>
      <form 
        className="contact-form" 
        action={formAction} 
        onSubmit={handleSubmit}
        data-form-name={formName}
        noValidate
      >
        {/* Honeypot for spam protection */}
        <input type="text" name="_honeypot" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
        <input type="hidden" name="form_name" value={formName} />
        <input type="hidden" name="page_source" value={pageSource} />
        
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
                  disabled={isPending}
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
                  disabled={isPending}
                />
              ) : (
                <input 
                  id={field.name} 
                  name={field.name} 
                  type={field.type}
                  className={`form-input ${errors[field.name] ? 'input-error' : ''}`}
                  placeholder={field.placeholder}
                  required={field.required}
                  disabled={isPending}
                  autoComplete={field.autoComplete}
                  inputMode={field.inputMode}
                />
              )}

              <AnimatePresence>
                {errors[field.name] && (
                  <motion.span 
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
            disabled={isPending}
            aria-busy={isPending}
            style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
          >
            {isPending ? (
              <>
                <svg className="animate-spin" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" strokeOpacity="0.25"></circle>
                  <path d="M12 2a10 10 0 0 1 10 10" strokeOpacity="0.75"></path>
                </svg>
                Sending...
              </>
            ) : (
              <>
                {buttonText}
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </>
            )}
          </motion.button>
          
          <div className="form-trust" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#888', marginTop: '12px', justifyContent: 'center' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#EA580C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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

