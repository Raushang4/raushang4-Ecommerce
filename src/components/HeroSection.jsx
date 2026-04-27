"use client";
import React from 'react';
import { motion } from 'framer-motion';
import TickerSection from './TickerSection';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div id="hero-wrap" className="hero-wrap overflow-hidden">
      <motion.div 
        id="hero-container" 
        className="hero"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div id="hero-eyebrow" className="hero-eyebrow" variants={itemVariants}>
          <svg id="hero-eyebrow-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
            <path d="M2 17l10 5 10-5"></path>
            <path d="M2 12l10 5 10-5"></path>
          </svg>
          Digital Growth Partner
        </motion.div>
        
        <motion.h1 id="hero-title" variants={itemVariants}>
          Your website is live.<br/>
          <em id="hero-title-em">Your revenue isn't.</em>
        </motion.h1>
        
        <motion.p id="hero-subtitle" className="hero-sub" variants={itemVariants}>
          raushang4 E-Commerce builds the digital systems behind growing businesses — stores that convert, campaigns that pay, and the analytics to tell you what's actually working.
        </motion.p>
        
        <motion.div id="hero-buttons" className="hero-btns" variants={itemVariants}>
          <motion.a 
            id="hero-btn-primary" 
            href="#contact" 
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Let's Get to Work
            <svg id="hero-btn-primary-icon" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </motion.a>
          <motion.a 
            id="hero-btn-secondary" 
            href="#work-section" 
            className="btn-secondary"
            whileHover={{ scale: 1.05, backdropFilter: "blur(20px)" }}
            transition={{ duration: 0.3 }}
          >
            See What We've Built
          </motion.a>
        </motion.div>
      </motion.div>
      <TickerSection />
    </div>
  );
}
