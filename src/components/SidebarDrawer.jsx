"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SidebarDrawer({ id, isOpen, onClose }) {
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
        >
          <div id={`${id}-inner`} className="mobile-nav-inner">
            <div id={`${id}-scroll`} className="mobile-nav-scroll">
              <a id={`${id}-link-home`} href="/" className="mobile-nav-link" onClick={onClose}>Home</a>
              <div id={`${id}-group-solutions`} className="mobile-nav-group">
                <button id={`${id}-btn-solutions`} className="mobile-nav-section-toggle" type="button" aria-expanded="false">
                  <span id={`${id}-span-solutions`}>Solutions</span>
                  <svg id={`${id}-svg-solutions`} viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </button>
              </div>
              <div id={`${id}-group-industries`} className="mobile-nav-group">
                <button id={`${id}-btn-industries`} className="mobile-nav-section-toggle" type="button" aria-expanded="false">
                  <span id={`${id}-span-industries`}>Industries Served</span>
                  <svg id={`${id}-svg-industries`} viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </button>
              </div>
              <a id={`${id}-link-about`} href="/about" className="mobile-nav-link" onClick={onClose}>About</a>
              <a id={`${id}-link-work`} href="/our-work" className="mobile-nav-link" onClick={onClose}>Our Work</a>
              <a id={`${id}-link-contact`} href="#contact" className="mobile-nav-link mobile-nav-link-cta" onClick={onClose}>Talk to Us</a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
