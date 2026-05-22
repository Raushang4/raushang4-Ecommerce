import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="global-footer">
      <div id="footer-inner" className="footer-inner">
        <div id="footer-top" className="footer-top">
          <div id="footer-brand" className="footer-brand">
            <Link id="footer-logo-link" href="/">
              <Image id="footer-logo" src="/mainlogo.svg" alt="raushang4 E-Commerce" width={271} height={28} className="footer-logo-img-dark" />
            </Link>
            <p id="footer-tagline" className="footer-tagline">Digital systems for growing businesses. One partner. Full accountability.</p>
            <div id="footer-social-links" className="footer-social">
              <a id="social-linkedin" href="https://www.linkedin.com/company/raushang4/" aria-label="LinkedIn" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
          <div id="footer-col-solutions" className="footer-col">
            <div id="label-solutions" className="footer-col-label" style={{ color: '#E0E0E0' }}>Solutions</div>
            <ul id="links-solutions" className="footer-col-links">
              <li><Link id="link-sol-1" href="/ecommerce-design-build" style={{ color: '#A0A0A0' }}>Ecommerce Design & Build</Link></li>
              <li><Link id="link-sol-2" href="/web-design" style={{ color: '#A0A0A0' }}>Web Design & Development</Link></li>
              <li><Link id="link-sol-3" href="/performance-marketing" style={{ color: '#A0A0A0' }}>Performance Marketing</Link></li>
            </ul>
          </div>
          <div id="footer-col-industries" className="footer-col">
            <div id="label-industries" className="footer-col-label" style={{ color: '#E0E0E0' }}>Industries</div>
            <ul id="links-industries" className="footer-col-links">
              <li><Link id="link-ind-1" href="/d2c-ecommerce" style={{ color: '#A0A0A0' }}>D2C & Ecommerce</Link></li>
              <li><Link id="link-ind-2" href="/manufacturers" style={{ color: '#A0A0A0' }}>Manufacturers</Link></li>
            </ul>
          </div>
          <div id="footer-col-company" className="footer-col">
            <div id="label-company" className="footer-col-label" style={{ color: '#E0E0E0' }}>Company</div>
            <ul id="links-company" className="footer-col-links">
              <li><Link id="link-cmp-1" href="/about" style={{ color: '#A0A0A0' }}>About</Link></li>
              <li><Link id="link-cmp-3" href="/stack" style={{ color: '#A0A0A0' }}>Tech Stack</Link></li>
              <li><Link id="link-cmp-2" href="/contact" style={{ color: '#A0A0A0' }}>Contact</Link></li>
            </ul>
          </div>
        </div>
        <div id="footer-bottom" className="footer-bottom">
          <p id="footer-copy" className="footer-copy" style={{ color: '#A0A0A0' }}>© 2026 raushang4 E-Commerce. All rights reserved. | Powered by raushang4 Technology</p>
          <div id="footer-policy" className="footer-policy">
            <Link id="policy-privacy" href="/legal/terms-of-use" style={{ color: '#A0A0A0' }}>Privacy Policy</Link>
            <Link id="policy-terms" href="/legal/terms-of-use" style={{ color: '#A0A0A0' }}>Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
