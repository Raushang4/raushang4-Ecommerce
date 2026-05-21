"use client";
import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CustomModal({ id = "custom-modal", isOpen, type, message, onClose }) {
  const isError = type === 'error';
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);

      // Focus the close button when the modal opens
      setTimeout(() => {
        if (closeButtonRef.current) {
          closeButtonRef.current.focus();
        }
      }, 100); // small delay to ensure animation/mounting has completed
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);
  const bgColor = isError ? 'bg-red-50' : 'bg-teal-50';
  const textColor = isError ? 'text-red-900' : 'text-teal-900';
  const iconColor = isError ? '#ef4444' : '#00A896';
  const buttonBg = isError ? '#ef4444' : '#00A896';

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
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${id}-title`}
            aria-describedby={`${id}-message`}
            className={`p-8 rounded-3xl max-w-sm w-full text-center ${textColor} ${bgColor} shadow-2xl`}
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <h3 id={`${id}-title`} className="text-2xl font-bold mb-3" style={{ color: iconColor }}>
              {isError ? 'Error' : 'Success'}
            </h3>
            <p id={`${id}-message`} className="mb-8 opacity-90">{message}</p>
            <button 
              ref={closeButtonRef}
              id={`${id}-close-btn`}
              onClick={onClose} 
              className="w-full py-3 rounded-full font-bold transition-all text-white hover:opacity-90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
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
