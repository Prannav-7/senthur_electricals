import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ShoppingBag } from 'lucide-react';
import './Brands.css';

const brands = [
  { name: 'Polycab',  initial: 'PC', category: 'Wires & Cables',          color: '#e63946', productCount: 5,
    products: ['Copper Flexible Wires', 'Armoured Cables', 'FRLS Wires', 'Earth Wires'] },
  { name: 'Legrand',  initial: 'LG', category: 'Switches & MCBs',         color: '#1d7dd8', productCount: 12,
    products: ['Modular Switches', 'MCBs', 'RCCBs', 'Distribution Boards'] },
  { name: 'Crompton', initial: 'CR', category: 'Fans & Lighting',         color: '#f4a261', productCount: 10,
    products: ['LED Bulbs', 'Tube Lights', 'Panel Lights', 'Fan Regulators'] },
  { name: 'Aquatek',  initial: 'AQ', category: 'PVC Pipes',               color: '#2a9d8f', productCount: 4,
    products: ['CPVC Pipes', 'uPVC Pipes', 'Fittings', 'Valves'] },
  { name: 'Plato',    initial: 'PL', category: 'Conduit Pipes',           color: '#8338ec', productCount: 6,
    products: ['PVC Conduit Pipes', 'Junction Boxes', 'Elbows', 'Flexible Conduits'] },
  { name: 'Ventac',   initial: 'VT', category: 'Electrical Accessories',  color: '#06d6a0', productCount: 8,
    products: ['Cable Ducts', 'Trunking', 'Wire Channels', 'Accessories'] },
  { name: 'Lisha',    initial: 'LI', category: 'Wiring Solutions',        color: '#f72585', productCount: 3,
    products: ['Multi-core Cables', 'Armoured Cables', 'Control Cables', 'Flexible Wires'] },
  { name: 'Vasavi',   initial: 'VA', category: 'Cables & Fittings',       color: '#fb8500', productCount: 3,
    products: ['TV Cables', 'Telephone Cables', 'Speaker Wires', 'Data Cables'] },
];

export default function Brands() {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();

  const handleBrandClick = () => {
    navigate('/products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="brands" className="brands">
      <div className="container">
        <div className="brands__header">
          <div className="badge">Trusted Partners</div>
          <h2 className="section-title">
            Brands We <span className="brands__title-accent">Carry</span>
          </h2>
          <div className="divider" style={{ margin: '12px auto' }} />
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            We stock only genuine, certified products from India's top manufacturers.
            Click any brand to explore their products.
          </p>
        </div>

        <div className="brands__grid">
          {brands.map(brand => (
            <div
              key={brand.name}
              className={`brand-card-v2 ${hovered === brand.name ? 'brand-card-v2--hovered' : ''}`}
              style={{ '--brand-color': brand.color }}
              onMouseEnter={() => setHovered(brand.name)}
              onMouseLeave={() => setHovered(null)}
              onClick={handleBrandClick}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && handleBrandClick()}
              aria-label={`View ${brand.name} products`}
            >
              <div className="brand-card-v2__glow" />

              <div className="brand-card-v2__header">
                <div className="brand-card-v2__logo">
                  <span>{brand.initial}</span>
                </div>
                <div className="brand-card-v2__meta">
                  <h3 className="brand-card-v2__name">{brand.name}</h3>
                  <span className="brand-card-v2__category">{brand.category}</span>
                </div>
                <div className="brand-card-v2__count">
                  <ShoppingBag size={11} />
                  {brand.productCount}+
                </div>
              </div>

              <ul className="brand-card-v2__list">
                {brand.products.map(p => (
                  <li key={p} className="brand-card-v2__list-item">
                    <span className="brand-card-v2__dot" />
                    {p}
                  </li>
                ))}
              </ul>

              <div className="brand-card-v2__cta">
                <span>View Products</span>
                <ChevronRight size={14} />
              </div>
            </div>
          ))}
        </div>

        {/* Marquee */}
        <div className="brands__marquee-wrap">
          <div className="brands__marquee">
            {[...brands, ...brands].map((b, i) => (
              <button
                key={i}
                className="brands__marquee-item"
                onClick={handleBrandClick}
                aria-label={`Go to ${b.name} products`}
              >
                <span className="brands__marquee-dot" style={{ background: b.color }} />
                {b.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
