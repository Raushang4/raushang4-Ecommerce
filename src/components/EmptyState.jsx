"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function EmptyState({ 
  title = "No Content Found", 
  description = "It looks like there isn't anything here right now. Please check back later or explore other sections of our site.",
  ctaText = "Back to Home",
  ctaLink = "/",
  icon
}) {
  const defaultIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-gray-400">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="8" x2="12" y2="12"></line>
      <line x1="12" y1="16" x2="12.01" y2="16"></line>
    </svg>
  );

  return (
    <motion.div 
      className="flex flex-col items-center justify-center py-20 px-6 text-center bg-gray-50 border border-gray-100 rounded-3xl my-8 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)' }}
    >
      <div className="bg-white p-4 rounded-full shadow-sm mb-6" style={{ color: 'var(--soft)' }}>
        {icon || defaultIcon}
      </div>
      <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--dark)' }}>{title}</h3>
      <p className="text-base max-w-md mx-auto mb-8" style={{ color: 'var(--mid)' }}>
        {description}
      </p>
      
      {ctaLink && ctaText && (
        <Link href={ctaLink} className="btn-primary">
          {ctaText}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-2">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Link>
      )}
    </motion.div>
  );
}
