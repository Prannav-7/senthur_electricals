import React from 'react';
import { Zap, Phone, MapPin, Mail, ArrowUp } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer__top-line" />
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand-col">
            <div className="footer__logo">
              <div className="footer__logo-icon"><Zap size={18} /></div>
              <div>
                <span className="footer__logo-name">SENTHUR</span>
                <span className="footer__logo-sub">Electricals & Hardwares</span>
              </div>
            </div>
            <p className="footer__tagline">
              Your one-stop destination for premium electrical and hardware
              products in Vellakovil.
            </p>
            <div className="footer__motto">
              <span>Best Quality</span>
              <span className="footer__motto-dot">❖</span>
              <span>Best Price</span>
              <span className="footer__motto-dot">❖</span>
              <span>Best Service</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__links">
              {['Home', 'About', 'Products', 'Brands', 'Why Us', 'Contact'].map(l => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().replace(' ', '')}`} className="footer__link">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="footer__col">
            <h4 className="footer__col-title">Products</h4>
            <ul className="footer__links">
              {['PVC Cables & Wires', 'Modular Switches', 'Conduit Pipes', 'LED Lighting', 'MCBs & Breakers', 'Fan Regulators'].map(p => (
                <li key={p}>
                  <span className="footer__link">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__col-title">Contact</h4>
            <div className="footer__contact-items">
              <a href="tel:9677334525" className="footer__contact-item">
                <Phone size={14} />
                <span>96773 34525</span>
              </a>
              <a href="tel:9384976959" className="footer__contact-item">
                <Phone size={14} />
                <span>93849 76959</span>
              </a>
              <div className="footer__contact-item">
                <MapPin size={14} />
                <span>315-316, KNT Complex, Muthur Road, Vellakovil – 638 111</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {new Date().getFullYear()} Senthur Electricals & Hardwares. All rights reserved.
          </p>
          <button className="footer__scroll-top" onClick={scrollTop} aria-label="Back to top">
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
