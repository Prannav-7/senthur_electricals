import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, ChevronDown, Zap, Star, Clock, IndianRupee, TrendingDown } from 'lucide-react';
import homeImg from '../assets/image/home.jpeg';
import './Hero.css';

function useShopStatus() {
  const [status, setStatus] = useState({ isOpen: false, label: '' });
  useEffect(() => {
    const check = () => {
      const now = new Date();
      const day = now.getDay(); // 0=Sun
      const h = now.getHours();
      const m = now.getMinutes();
      const t = h * 60 + m;
      if (day === 0) {
        // Sunday 10am–9pm
        setStatus(t >= 600 && t < 1260
          ? { isOpen: true, label: 'Open · Closes 9:00 PM' }
          : { isOpen: false, label: 'Closed · Opens Mon 9:00 AM' });
      } else if (day >= 1 && day <= 6) {
        // Mon–Sat 9am–8pm
        setStatus(t >= 540 && t < 1200
          ? { isOpen: true, label: day === 6 ? 'Open · Closes 8:00 PM' : 'Open · Closes 8:00 PM' }
          : { isOpen: false, label: day === 6 && t >= 1200
              ? 'Closed · Opens Sun 10:00 AM'
              : 'Closed · Opens 9:00 AM' });
      }
    };
    check();
    const interval = setInterval(check, 60000);
    return () => clearInterval(interval);
  }, []);
  return status;
}

export default function Hero() {
  const shopStatus = useShopStatus();

  return (
    <section id="home" className="hero">
      <div className="hero__bg-image" />
      <div className="hero__overlay" />
      <div className="hero__glow" />

      <div className="container hero__content">
        <div className="hero__left">
          {/* Slogan Banner */}
          <div className="hero__slogan">
            <div className="hero__slogan-icon">
              <TrendingDown size={18} />
            </div>
            <div className="hero__slogan-text">
              <span className="hero__slogan-main">Lowest Prices in Vellakovil & Surrounding Areas!</span>
              <span className="hero__slogan-sub">Guaranteed best rates on all electrical & hardware products</span>
            </div>
          </div>

          <div className="hero__top-badges">
            <div className="badge hero__badge">
              <Zap size={12} />
              Established in Vellakovil
            </div>
            <div className={`hero__shop-status ${shopStatus.isOpen ? 'hero__shop-status--open' : 'hero__shop-status--closed'}`}>
              <span className="hero__status-dot" />
              <Clock size={12} />
              <span>{shopStatus.label}</span>
            </div>
          </div>

          <h1 className="hero__title">
            Your Trusted
            <span className="hero__title-highlight"> Electrical &</span>
            <br />
            Hardware Store
          </h1>

          <p className="hero__desc">
            Premium quality electrical components, wiring accessories, and
            hardware products at <strong className="hero__price-highlight">unbeatable lowest prices</strong>. Serving Vellakovil and
            surrounding areas with excellence.
          </p>

          <div className="hero__tags">
            {['Best Quality', 'Best Price', 'Best Service'].map(t => (
              <span key={t} className="hero__tag">
                <Star size={12} fill="currentColor" /> {t}
              </span>
            ))}
          </div>

          <div className="hero__actions">
            <a href="tel:9677334525" className="btn-primary" id="hero-call-btn">
              <Phone size={16} /> Call Now
            </a>
            <Link to="/products" className="btn-outline" id="hero-products-btn">
              View Products
            </Link>
          </div>

          <div className="hero__address">
            <MapPin size={14} className="hero__address-icon" />
            <span>315, 316, DR Nagar, KNT Complex, Muthur Road, Vellakovil – 638 111</span>
          </div>

          {/* Shop Timings */}
          <div className="hero__timings">
            <Clock size={14} className="hero__timings-icon" />
            <div className="hero__timings-info">
              <span className="hero__timings-row">
                <strong>Mon – Sat:</strong> 9:00 AM – 8:00 PM
              </span>
              <span className="hero__timings-row">
                <strong>Sunday:</strong> 10:00 AM – 9:00 PM
              </span>
            </div>
          </div>
        </div>

        <div className="hero__right">
          <div className="hero__img-wrapper animate-float">
            <img src={homeImg} alt="Senthur Electricals & Hardwares products" className="hero__img" />
            <div className="hero__img-glow" />
          </div>

          <div className="hero__stat-card hero__stat-card--1">
            <span className="hero__stat-num">10+</span>
            <span className="hero__stat-label">Top Brands</span>
          </div>
          <div className="hero__stat-card hero__stat-card--2">
            <span className="hero__stat-num">1000+</span>
            <span className="hero__stat-label">Products</span>
          </div>
        </div>
      </div>

      <Link to="/about" className="hero__scroll-cue" aria-label="Scroll down">
        <ChevronDown size={20} />
      </Link>
    </section>
  );
}
