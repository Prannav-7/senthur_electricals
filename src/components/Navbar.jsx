import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Brands', href: '#brands' },
  { label: 'Why Us', href: '#whyus' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('Home');

  const { count: cartCount, setIsOpen: openCart } = useCart();
  const { count: wishCount, setIsOpen: openWishlist } = useWishlist();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand">
          <div className="navbar__logo-icon"><Zap size={20} /></div>
          <div>
            <span className="navbar__logo-name">SENTHUR</span>
            <span className="navbar__logo-sub">Electricals & Hardwares</span>
          </div>
        </a>

        <ul className="navbar__links">
          {navLinks.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`navbar__link ${active === link.label ? 'navbar__link--active' : ''}`}
                onClick={() => setActive(link.label)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <button className="navbar__icon-btn" onClick={() => openWishlist(true)} aria-label="Wishlist" id="nav-wishlist-btn">
            <Heart size={18} />
            {wishCount > 0 && <span className="navbar__badge">{wishCount}</span>}
          </button>
          <button className="navbar__icon-btn" onClick={() => openCart(true)} aria-label="Cart" id="nav-cart-btn">
            <ShoppingCart size={18} />
            {cartCount > 0 && <span className="navbar__badge">{cartCount}</span>}
          </button>
          <a href="tel:9677334525" className="btn-primary navbar__cta">Call Us</a>
        </div>

        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="navbar__mobile-menu">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="navbar__mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="navbar__mobile-actions">
            <button className="navbar__icon-btn" onClick={() => { openWishlist(true); setMenuOpen(false); }}>
              <Heart size={18} />
              {wishCount > 0 && <span className="navbar__badge">{wishCount}</span>}
              <span style={{ marginLeft: 6, fontSize: '0.9rem' }}>Wishlist</span>
            </button>
            <button className="navbar__icon-btn" onClick={() => { openCart(true); setMenuOpen(false); }}>
              <ShoppingCart size={18} />
              {cartCount > 0 && <span className="navbar__badge">{cartCount}</span>}
              <span style={{ marginLeft: 6, fontSize: '0.9rem' }}>Cart</span>
            </button>
          </div>
          <a href="tel:9677334525" className="btn-primary" style={{ textAlign: 'center' }}>Call Now</a>
        </div>
      )}
    </nav>
  );
}
