import React, { useState } from 'react';
import { Zap, Wrench, Cable, Lightbulb, Shield, ToggleLeft, ChevronRight } from 'lucide-react';
import './Products.css';

const categories = [
  { id: 'all', label: 'All Products' },
  { id: 'wiring', label: 'Wiring' },
  { id: 'switches', label: 'Switches' },
  { id: 'pipes', label: 'Pipes & Fittings' },
  { id: 'lighting', label: 'Lighting' },
  { id: 'safety', label: 'Safety' },
];

const products = [
  { id: 1, category: 'wiring', icon: Cable, name: 'PVC Cables & Wires', desc: 'High quality copper wires for all electrical applications', brand: 'Polycab', tag: 'Bestseller' },
  { id: 2, category: 'switches', icon: ToggleLeft, name: 'Modular Switches', desc: 'Premium modular switches and sockets with elegant designs', brand: 'Legrand', tag: 'Premium' },
  { id: 3, category: 'pipes', icon: Wrench, name: 'PVC Conduit Pipes', desc: 'ISI marked conduit pipes for safe wiring enclosures', brand: 'Plato', tag: 'Popular' },
  { id: 4, category: 'lighting', icon: Lightbulb, name: 'LED Panels & Lights', desc: 'Energy-efficient LED lighting solutions for homes & offices', brand: 'Crompton', tag: 'New' },
  { id: 5, category: 'safety', icon: Shield, name: 'MCBs & Circuit Breakers', desc: 'Reliable protection devices for all electrical circuits', brand: 'Legrand', tag: 'Essential' },
  { id: 6, category: 'wiring', icon: Zap, name: 'Flexible Wires', desc: 'Multi-strand flexible wires for appliances and connections', brand: 'Polycab', tag: 'Popular' },
  { id: 7, category: 'pipes', icon: Wrench, name: 'CPVC & uPVC Pipes', desc: 'Hot & cold water pipes for plumbing installations', brand: 'Aquatek', tag: 'Quality' },
  { id: 8, category: 'switches', icon: ToggleLeft, name: 'Fan Regulators', desc: 'Electronic fan speed regulators – smooth and energy saving', brand: 'Crompton', tag: 'Popular' },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="products">
      <div className="container">
        <div className="products__header">
          <div className="badge">Our Products</div>
          <h2 className="section-title">
            What We <span className="products__title-accent">Offer</span>
          </h2>
          <div className="divider" style={{ margin: '12px auto' }} />
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Comprehensive range of electrical and hardware products from India's
            most trusted brands – all under one roof.
          </p>
        </div>

        <div className="products__filters">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`products__filter-btn ${activeCategory === cat.id ? 'products__filter-btn--active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="products__grid">
          {filtered.map(product => {
            const Icon = product.icon;
            return (
              <div key={product.id} className="product-card glass-card">
                <div className="product-card__top">
                  <div className="product-card__icon">
                    <Icon size={26} />
                  </div>
                  <span className="product-card__tag">{product.tag}</span>
                </div>
                <h3 className="product-card__name">{product.name}</h3>
                <p className="product-card__desc">{product.desc}</p>
                <div className="product-card__footer">
                  <span className="product-card__brand">{product.brand}</span>
                  <a href="#contact" className="product-card__enquire">
                    Enquire <ChevronRight size={14} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
