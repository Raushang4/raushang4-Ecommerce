"use client";
import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function SidebarDrawer({ id, isOpen, onClose }) {
  const drawerRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      
      if (e.key === 'Tab' && isOpen && drawerRef.current) {
        const focusableElements = drawerRef.current.querySelectorAll(
          'a[href], button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
        );
        if (focusableElements.length === 0) return;
        
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      
      // Scroll locking
      document.body.style.overflow = 'hidden';
      // Prevent layout shift by adding padding equal to scrollbar width
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      
      setTimeout(() => {
        if (drawerRef.current) {
          const firstElement = drawerRef.current.querySelector('a[href], button:not([disabled])');
          if (firstElement) firstElement.focus();
        }
      }, 100);
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen, onClose]);

  const handleToggle = (e) => {
    const button = e.currentTarget;
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', !isExpanded);
    const group = button.closest('.mobile-nav-group');
    if (group) {
      group.classList.toggle('is-open');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          id={id} 
          className="mobile-nav-panel"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          style={{ display: 'block' }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          ref={drawerRef}
        >
          <div id={`${id}-inner`} className="mobile-nav-inner">
            <div id={`${id}-scroll`} className="mobile-nav-scroll">
              <Link id={`${id}-link-home`} href="/" className="mobile-nav-link" onClick={onClose}>Home</Link>
              <div id={`${id}-group-solutions`} className="mobile-nav-group">
                <button 
                  id={`${id}-btn-solutions`} 
                  className="mobile-nav-section-toggle" 
                  type="button" 
                  aria-expanded="false"
                  onClick={handleToggle}
                >
                  <span id={`${id}-span-solutions`}>Solutions</span>
                  <svg id={`${id}-svg-solutions`} viewBox="0 0 24 24" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </button>
              </div>
              <div id={`${id}-group-industries`} className="mobile-nav-group">
                <button 
                  id={`${id}-btn-industries`} 
                  className="mobile-nav-section-toggle" 
                  type="button" 
                  aria-expanded="false"
                  onClick={handleToggle}
                >
                  <span id={`${id}-span-industries`}>Industries Served</span>
                  <svg id={`${id}-svg-industries`} viewBox="0 0 24 24" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </button>
              </div>
              <Link id={`${id}-link-about`} href="/about" className="mobile-nav-link" onClick={onClose}>About</Link>
              <Link id={`${id}-link-work`} href="/our-work" className="mobile-nav-link" onClick={onClose}>Our Work</Link>
              <Link id={`${id}-link-contact`} href="/contact" className="mobile-nav-link mobile-nav-link-cta" onClick={onClose}>Talk to Us</Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
