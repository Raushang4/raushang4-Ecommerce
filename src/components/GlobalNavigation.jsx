"use client";
import React, { useState } from 'react';
import SidebarDrawer from './SidebarDrawer';

export default function GlobalNavigation() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div id="global-nav-wrap" className={`nav-wrap ${isMobileOpen ? 'is-mobile-open' : ''}`}>
      <nav id="global-nav-container">
        <a id="nav-logo-link" href="/" className="nav-logo-link">
          <img id="nav-logo-img" src="/mainlogo.svg" alt="raushang4 E-Commerce" width="140" height="26" className="nav-logo-img" />
        </a>
        <button 
          id="mobile-nav-toggle-btn" 
          className="mobile-nav-toggle" 
          type="button" 
          aria-expanded={isMobileOpen} 
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          <span id="nav-toggle-bar-1"></span>
          <span id="nav-toggle-bar-2"></span>
          <span id="nav-toggle-bar-3"></span>
        </button>
        <div id="desktop-nav-links" className="nav-links">
          <div id="nav-item-solutions" className="nav-item">
            <a id="nav-link-solutions" href="#services">
              Solutions
              <svg id="nav-chevron-solutions" className="nav-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </a>
          </div>
          <div id="nav-item-industries" className="nav-item">
            <a id="nav-link-industries" href="#who-we-work-with">
              Industries Served
              <svg id="nav-chevron-industries" className="nav-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </a>
          </div>
          <a id="nav-link-about" href="/about" className="nav-item">About</a>
          <a id="nav-link-work" href="/our-work" className="nav-item">Our Work</a>
          <a id="nav-link-contact-cta" href="#contact" className="nav-cta">Talk to Us →</a>
        </div>
      </nav>
      <SidebarDrawer id="main-sidebar-drawer" isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </div>
  );
}
