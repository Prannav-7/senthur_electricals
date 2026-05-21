import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Phone, MapPin, ArrowUp, Clock } from 'lucide-react';
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
              {[
                { label: 'Home',     to: '/' },
                { label: 'About',    to: '/about' },
                { label: 'Products', to: '/products' },
                { label: 'Brands',   to: '/brands' },
                { label: 'Why Us',   to: '/whyus' },
                { label: 'Contact',  to: '/contact' },
              ].map(l => (
                <li key={l.label}>
                  <Link to={l.to} className="footer__link">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="footer__col">
            <h4 className="footer__col-title">Products</h4>
            <ul className="footer__links">
              {[
                { label: 'PVC Cables & Wires', cat: 'wiring'   },
                { label: 'Modular Switches',   cat: 'switches' },
                { label: 'Conduit Pipes',       cat: 'pipes'    },
                { label: 'LED Lighting',        cat: 'lighting' },
                { label: 'MCBs & Breakers',     cat: 'safety'   },
                { label: 'Fan Regulators',      cat: 'switches' },
              ].map(p => (
                <li key={p.label}>
                  <Link
                    to={`/products?cat=${p.cat}`}
                    className="footer__link"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    {p.label}
                  </Link>
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
              <div className="footer__contact-item footer__timing-item">
                <Clock size={14} />
                <div className="footer__timing-info">
                  <span>Mon – Sat: 9:00 AM – 8:00 PM</span>
                  <span>Sunday: 10:00 AM – 9:00 PM</span>
                </div>
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
