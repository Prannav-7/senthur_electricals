import React from 'react';
import { Phone, MapPin, ChevronDown, Zap, Star } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg-image" />
      <div className="hero__overlay" />
      <div className="hero__glow" />

      <div className="container hero__content">
        <div className="hero__left">
          <div className="badge hero__badge">
            <Zap size={12} />
            Established in Vellakovil
          </div>

          <h1 className="hero__title">
            Your Trusted
            <span className="hero__title-highlight"> Electrical &</span>
            <br />
            Hardware Store
          </h1>

          <p className="hero__desc">
            Premium quality electrical components, wiring accessories, and
            hardware products at the best prices. Serving Vellakovil and
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
            <a href="#products" className="btn-outline" id="hero-products-btn">
              View Products
            </a>
          </div>

          <div className="hero__address">
            <MapPin size={14} className="hero__address-icon" />
            <span>315, 316, DR Nagar, KNT Complex, Muthur Road, Vellakovil – 638 111</span>
          </div>
        </div>

        <div className="hero__right">
          <div className="hero__img-wrapper animate-float">
            <img src="/hero_banner.png" alt="Senthur Electricals & Hardwares products" className="hero__img" />
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

      <a href="#about" className="hero__scroll-cue" aria-label="Scroll down">
        <ChevronDown size={20} />
      </a>
    </section>
  );
}
