"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SidebarDrawer from './SidebarDrawer';

export default function GlobalNavigation() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobileOpen) {
        setIsMobileOpen(false);
      }
    };
    
    if (isMobileOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileOpen]);

  return (
    <div id="global-nav-wrap" className={`nav-wrap ${isMobileOpen ? 'is-mobile-open' : ''}`}>
      <nav id="global-nav-container">
        <Link id="nav-logo-link" href="/" className="nav-logo-link" aria-label="raushang4 Home">
          <Image id="nav-logo-img" src="/mainlogo.svg" alt="raushang4 E-Commerce" width={140} height={26} className="nav-logo-img" priority />
        </Link>
        <button 
          id="mobile-nav-toggle-btn" 
          className="mobile-nav-toggle" 
          type="button" 
          aria-expanded={isMobileOpen} 
          aria-label={isMobileOpen ? "Close mobile menu" : "Open mobile menu"}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          <span id="nav-toggle-bar-1"></span>
          <span id="nav-toggle-bar-2"></span>
          <span id="nav-toggle-bar-3"></span>
        </button>
        <div id="desktop-nav-links" className="nav-links">
          <div id="nav-item-solutions" className="nav-item" data-nav-item="solutions">
            <Link id="nav-link-solutions" href="/#services" aria-haspopup="true" aria-expanded="false">
              Solutions
              <svg id="nav-chevron-solutions" className="nav-chevron" viewBox="0 0 24 24" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </Link>
            <div className="nav-dropdown solutions">
              <div className="nav-dropdown-inner">
                <div className="dropdown-grid">
                  <Link href="/ecommerce-design-build" className="dd-item">
                    <div className="dd-icon" style={{background:'#C8E6C9', color:'#2E7D32'}}><svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 01-8 0"></path></svg></div>
                    <div><div className="dd-name">Ecommerce Design & Build</div><div className="dd-desc">Shopify & WooCommerce stores built to convert</div></div>
                  </Link>
                  <Link href="/web-design" className="dd-item">
                    <div className="dd-icon" style={{background:'#FFF3C4', color:'#E65100'}}><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M3 9h18M9 21V9"></path></svg></div>
                    <div><div className="dd-name">Web Design & Development</div><div className="dd-desc">Websites & web apps across all platforms</div></div>
                  </Link>
                  <Link href="/performance-marketing" className="dd-item">
                    <div className="dd-icon" style={{background:'#BBDEFB', color:'#0277BD'}}><svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg></div>
                    <div><div className="dd-name">Performance Marketing</div><div className="dd-desc">Campaigns built around profitability</div></div>
                  </Link>
                  <Link href="/cro-optimisation" className="dd-item">
                    <div className="dd-icon" style={{background:'#FFE0B2', color:'#E65100'}}><svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg></div>
                    <div><div className="dd-name">CRO & Optimisation</div><div className="dd-desc">Turn more of your existing traffic into revenue</div></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div id="nav-item-industries" className="nav-item" data-nav-item="industries">
            <Link id="nav-link-industries" href="/#who-we-work-with" aria-haspopup="true" aria-expanded="false">
              Industries Served
              <svg id="nav-chevron-industries" className="nav-chevron" viewBox="0 0 24 24" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </Link>
            <div className="nav-dropdown industries">
              <div className="nav-dropdown-inner">
                <div className="dropdown-row">
                  <Link href="/d2c-ecommerce" className="dd-item">
                    <div className="dd-icon" style={{background:'#FFF9E6', color:'#E65100'}}><svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 01-8 0"></path></svg></div>
                    <div><div className="dd-name">D2C & Ecommerce</div><div className="dd-desc">Stores that convert and scale profitably</div></div>
                  </Link>
                  <Link href="/manufacturers" className="dd-item">
                    <div className="dd-icon" style={{background:'#E3F2FD', color:'#0277BD'}}><svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"></rect><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"></path></svg></div>
                    <div><div className="dd-name">Manufacturers</div><div className="dd-desc">Stop renting leads. Own your pipeline.</div></div>
                  </Link>
                  <Link href="/service-businesses" className="dd-item">
                    <div className="dd-icon" style={{background:'#E8F5E9', color:'#2E7D32'}}><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 00-3-3.87"></path><path d="M16 3.13a4 4 0 010 7.75"></path></svg></div>
                    <div><div className="dd-name">Service Businesses</div><div className="dd-desc">Digital systems that turn referrals into pipelines</div></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Link id="nav-link-about" href="/about" className="nav-item">About</Link>
          <Link id="nav-link-work" href="/our-work" className="nav-item">Our Work</Link>
          <Link id="nav-link-contact-cta" href="/contact" className="nav-cta">Talk to Us →</Link>
        </div>
      </nav>
      <SidebarDrawer id="main-sidebar-drawer" isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </div>
  );
}
