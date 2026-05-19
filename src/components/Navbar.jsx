import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Zap, ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import './Navbar.css';

const navLinks = [
  { label: 'Home',     to: '/' },
  { label: 'About',    to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Brands',   to: '/brands' },
  { label: 'Why Us',   to: '/whyus' },
  { label: 'Contact',  to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const { pathname }              = useLocation();

  const { count: cartCount, setIsOpen: openCart }         = useCart();
  const { count: wishCount, setIsOpen: openWishlist }     = useWishlist();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        {/* Brand */}
        <Link to="/" className="navbar__brand">
          <div className="navbar__logo-icon"><Zap size={20} /></div>
          <div>
            <span className="navbar__logo-name">SENTHUR</span>
            <span className="navbar__logo-sub">Electricals & Hardwares</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="navbar__links">
          {navLinks.map(link => (
            <li key={link.label}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Actions */}
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

        {/* Hamburger */}
        <button className="navbar__hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="navbar__mobile-menu">
          {navLinks.map(link => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`
              }
            >
              {link.label}
            </NavLink>
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
