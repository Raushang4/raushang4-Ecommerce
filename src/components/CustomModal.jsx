"use client";
import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CustomModal({ id, isOpen, type, message, onClose }) {
  const isError = type === 'error';
  const bgColor = isError ? 'bg-red-50' : 'bg-orange-50';
  const textColor = isError ? 'text-red-900' : 'text-orange-900';
  const iconColor = isError ? '#ef4444' : '#EA580C';
  const buttonBg = isError ? '#ef4444' : '#EA580C';
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Auto-focus the close button to manage focus and trap
      setTimeout(() => {
        if (buttonRef.current) {
          buttonRef.current.focus();
        }
      }, 100);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          id={`${id}-overlay`} 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            id={`${id}-content`} 
            className={`p-8 rounded-3xl max-w-sm w-full text-center ${textColor} ${bgColor} shadow-2xl`}
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${id}-title`}
            aria-describedby={`${id}-message`}
          >
            <h3 id={`${id}-title`} className="text-2xl font-bold mb-3" style={{ color: iconColor }}>
              {isError ? 'Error' : 'Success'}
            </h3>
            <p id={`${id}-message`} className="mb-8 opacity-90">{message}</p>
            <button 
              ref={buttonRef}
              id={`${id}-close-btn`}
              onClick={onClose} 
              className="w-full py-3 rounded-full font-bold transition-all text-white hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              style={{ background: buttonBg }}
            >
              {isError ? 'Try Again' : 'Close'}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
