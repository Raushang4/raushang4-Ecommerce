"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section id="testimonials-section" className="tsc-section">
      <div id="tsc-container" className="section-inner">
        <motion.div 
          id="tsc-header" 
          className="tsc-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.p id="tsc-eyebrow" className="section-eyebrow" variants={itemVariants}>Partnering for the long term</motion.p>
          <motion.h2 id="tsc-title" className="section-h2" variants={itemVariants}>Honest feedback from founders <em id="tsc-em">we've helped scale</em></motion.h2>
        </motion.div>
        
        <motion.div 
          id="tsc-viewport" 
          className="tsc-viewport"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.button 
            id="tsc-btn-prev" 
            className="tsc-arrow tsc-arrow--prev" 
            type="button" 
            aria-label="Previous testimonial"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"></path></svg>
          </motion.button>
          
          <div id="tsc-track" className="tsc-track" tabIndex="0" aria-label="Testimonials slider">
            <motion.article 
              id="tsc-card-1" 
              className="tsc-card" 
              variants={itemVariants}
            >
              <div id="tsc-top-1" className="tsc-card-top">
                <div id="tsc-logo-1" className="tsc-logo-placeholder" aria-hidden="true">Malens Pharmaceuticals</div>
                <div id="tsc-stars-1" className="tsc-stars" role="img" aria-label="5 out of 5 stars">
                  {[1,2,3,4,5].map(i => <svg key={i} viewBox="0 0 24 24" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>)}
                </div>
              </div>
              <svg id="tsc-qmark-1" className="tsc-qmark" viewBox="0 0 32 32" aria-hidden="true"><path d="M10.5 6C6.9 6 4 8.9 4 12.5S6.9 19 10.5 19c.2 0 .4 0 .6-.1-.5 3-2.9 5.4-6 5.8v2c5.2-.4 9-4.8 9-10.2V12.5C14 8.9 11.1 6 10.5 6zm14 0C20.9 6 18 8.9 18 12.5S20.9 19 24.5 19c.2 0 .4 0 .6-.1-.5 3-2.9 5.4-6 5.8v2c5.2-.4 9-4.8 9-10.2V12.5C28 8.9 25.1 6 24.5 6z"></path></svg>
              <p id="tsc-quote-1" className="tsc-quote">It has been a relief to work with them. I can rest assured that my website is in good hands. I was very satisfied with the final results. Highly Recommended.</p>
              <div id="tsc-author-1" className="tsc-author">
                <div id="tsc-avatar-1" className="tsc-avatar" aria-hidden="true">S</div>
                <div id="tsc-author-text-1" className="tsc-author-text">
                  <div id="tsc-name-1" className="tsc-name">Sorabh</div>
                  <div id="tsc-role-1" className="tsc-role">CEO, Malens Pharmaceuticals</div>
                </div>
              </div>
            </motion.article>
          </div>
          
          <motion.button 
            id="tsc-btn-next" 
            className="tsc-arrow tsc-arrow--next" 
            type="button" 
            aria-label="Next testimonial"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"></path></svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
