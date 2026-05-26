import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, CalendarCheck, Zap, Crown, TrendingUp, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useScrollReveal } from '../hooks/useAnimations';
import { products } from './Products';
import './TopSelling.css';

// Curated top-selling products — 2 per brand for variety
const topSellingIds = [
  1,   // Polycab Copper Wire 1.5mm — Bestseller
  61,  // Havells Leganza Ceiling Fan — Bestseller
  31,  // Crompton LED Bulb 9W — Bestseller
  11,  // Legrand 6A Modular Switch — Premium
  71,  // Philips LED Bulb 9W — Trusted
  64,  // Atomberg Renesa BLDC Fan — Smart
  54,  // Havells Crabtree Switch — Premium
  41,  // Legrand MCB 6A — Essential
  81,  // Finolex 1.5 sq mm Wire — Quality
  69,  // Crompton Aura Prime Fan — Reliable
  76,  // Wipro Garnet LED Bulb — Value
  57,  // Anchor Roma Switch — Affordable
];

const topProducts = topSellingIds.map(id => products.find(p => p.id === id)).filter(Boolean);

// Unique brands from top products
const topBrands = ['All', ...Array.from(new Set(topProducts.map(p => p.brand)))];

const brandAccents = {
  'All': '#f97316',
  'Polycab': '#e63946',
  'Havells': '#e63000',
  'Crompton': '#f4a261',
  'Legrand': '#1d7dd8',
  'Philips': '#0057b8',
  'Atomberg': '#00b4d8',
  'Finolex': '#c1121f',
  'Wipro': '#007e5e',
  'Anchor': '#2dc653',
};

function TopProductCard({ product, index }) {
  const { addToCart } = useCart();
  const [added, setAdded]           = useState(false);
  const [demoBooked, setDemoBooked] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault(); e.stopPropagation();
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const handleDemo = (e) => {
    e.preventDefault(); e.stopPropagation();
    window.location.href = 'tel:9677334525';
    setDemoBooked(true);
    setTimeout(() => setDemoBooked(false), 2000);
  };

  const handleBuy = (e) => {
    e.preventDefault(); e.stopPropagation();
    const msg = `Hi! I want to buy:\n\u2022 ${product.name} (${product.brand})\n\nPlease confirm availability.`;
    window.open(`https://wa.me/919677334525?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div
      className="ts-card"
      style={{ '--brand-accent': brandAccents[product.brand] || '#f97316', animationDelay: `${index * 0.07}s` }}
    >
      {added && (
        <div className="ts-card__toast"><Zap size={12} /> Added to cart!</div>
      )}
      {demoBooked && (
        <div className="ts-card__toast ts-card__toast--demo"><CalendarCheck size={12} /> Demo Requested!</div>
      )}

      <div className="ts-card__rank">
        <Crown size={11} />
        <span>#{index + 1}</span>
      </div>

      {/* Book a Demo button */}
      <button
        className="ts-card__demo-btn"
        onClick={handleDemo}
        aria-label={`Book a demo for ${product.name}`}
      >
        <CalendarCheck size={12} />
        <span>Book Demo</span>
      </button>

      <Link to={`/products/${product.id}`} className="ts-card__img-link">
        <div className="ts-card__img-wrap">
          <img src={product.image} alt={product.name} className="ts-card__img" loading="lazy" />
          <div className="ts-card__img-overlay">View Details →</div>
        </div>
      </Link>

      <div className="ts-card__body">
        <div className="ts-card__brand-row">
          <span className="ts-card__brand-dot" style={{ background: brandAccents[product.brand] }} />
          <span className="ts-card__brand">{product.brand}</span>
          <span className="ts-card__tag">{product.tag}</span>
        </div>

        <Link to={`/products/${product.id}`}>
          <h3 className="ts-card__name">{product.name}</h3>
        </Link>



        <div className="ts-card__actions">
          <button className="ts-card__btn ts-card__btn--cart" onClick={handleAdd}>
            <ShoppingCart size={13} /> Add to Cart
          </button>
          <button className="ts-card__btn ts-card__btn--buy" onClick={handleBuy}>
            <Zap size={13} /> Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default function TopSelling() {
  const [activeBrand, setActiveBrand] = useState('All');
  const scrollRef = useRef(null);

  const header = useScrollReveal();
  const filters = useScrollReveal();
  const track = useScrollReveal({ threshold: 0.05 });
  const cta = useScrollReveal();

  const filtered = activeBrand === 'All'
    ? topProducts
    : topProducts.filter(p => p.brand === activeBrand);

  // Ensure enough items for a seamless marquee loop
  let displayItems = [...filtered];
  if (displayItems.length > 0) {
    while (displayItems.length < 8) {
      displayItems = [...displayItems, ...filtered];
    }
    // Duplicate to create the continuous loop effect
    displayItems = [...displayItems, ...displayItems];
  }

  return (
    <section id="top-selling" className="top-selling">
      <div className="top-selling__bg-glow" />
      <div className="container">
        <div
          ref={header.ref}
          className={`top-selling__header reveal reveal-up ${header.isVisible ? 'revealed' : ''}`}
        >
          <div className="badge">
            <TrendingUp size={12} />
            Most Popular
          </div>
          <h2 className="section-title">
            Top Selling <span className="top-selling__title-accent">Products</span>
          </h2>
          <div className="divider" style={{ margin: '12px auto' }} />
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Our customers' favourites — the best-selling products across top brands at unbeatable prices.
          </p>
        </div>

        {/* Brand Filter Pills */}
        <div
          ref={filters.ref}
          className={`top-selling__filters reveal reveal-up delay-2 ${filters.isVisible ? 'revealed' : ''}`}
        >
          {topBrands.map(brand => (
            <button
              key={brand}
              className={`top-selling__pill ${activeBrand === brand ? 'top-selling__pill--active' : ''}`}
              style={activeBrand === brand ? { background: brandAccents[brand], borderColor: brandAccents[brand] } : {}}
              onClick={() => setActiveBrand(brand)}
            >
              {brand !== 'All' && (
                <span className="top-selling__pill-dot" style={{ background: brandAccents[brand] }} />
              )}
              {brand}
            </button>
          ))}
        </div>

        {/* Product Marquee Track */}
        <div
          ref={track.ref}
          className={`top-selling__track reveal reveal-up ${track.isVisible ? 'revealed' : ''}`}
          style={{ transitionDelay: '0.2s' }}
        >
          <div className="top-selling__marquee" ref={scrollRef}>
            {displayItems.map((product, i) => (
              <TopProductCard key={`${product.id}-${i}`} product={product} index={i % filtered.length} />
            ))}
          </div>
        </div>

        {/* View All CTA */}
        <div className="top-selling__cta">
          <Link to="/products" className="btn-primary" id="top-selling-view-all">
            Explore All Products <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
