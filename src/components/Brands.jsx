import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ShoppingBag } from 'lucide-react';
import './Brands.css';

const brands = [
  { name: 'Polycab',        initial: 'PC', category: 'Wires & Cables',         color: '#e63946', productCount: 7,
    products: ['Copper Flexible Wires', 'Armoured Cables', 'FRLS Wires', 'Earth Wires'] },
  { name: 'Legrand',        initial: 'LG', category: 'Switches & MCBs',        color: '#1d7dd8', productCount: 12,
    products: ['Modular Switches', 'MCBs', 'RCCBs', 'Distribution Boards'] },
  { name: 'Havells',        initial: 'HV', category: 'Switches, Fans & MCBs',  color: '#e63000', productCount: 10,
    products: ['Crabtree Switches', 'BLDC Fans', 'LED Panels', 'MCBs & RCCBs'] },
  { name: 'Crompton',       initial: 'CR', category: 'Fans & Lighting',        color: '#f4a261', productCount: 8,
    products: ['Ceiling Fans', 'Exhaust Fans', 'LED Bulbs', 'LED Tube Lights'] },
  { name: 'Atomberg',       initial: 'AT', category: 'BLDC Smart Fans',        color: '#00b4d8', productCount: 2,
    products: ['Renesa BLDC Fan', 'Efficio+ BLDC Fan', 'Remote Fans', 'Smart Series'] },
  { name: 'Orient Electric',initial: 'OE', category: 'Fans & Lighting',        color: '#f77f00', productCount: 4,
    products: ['Aeroquiet Ceiling Fan', 'Apex-FX Fan', 'Pedestal Fans', 'LED Bulbs'] },
  { name: 'Philips',        initial: 'PH', category: 'LED Lighting',           color: '#0057b8', productCount: 3,
    products: ['LED Bulbs', 'LED Battens', 'Flood Lights', 'Downlights'] },
  { name: 'Wipro',          initial: 'WP', category: 'LED Lighting',           color: '#007e5e', productCount: 3,
    products: ['Garnet LED Bulbs', 'LED Tubes', 'RGB Strip Lights', 'Flood Lights'] },
  { name: 'GM',             initial: 'GM', category: 'Switches & Sockets',     color: '#0077b6', productCount: 3,
    products: ['Modular Switches', '3-Pin Sockets', 'Switch Plates', 'Accessories'] },
  { name: 'Anchor',         initial: 'AN', category: 'Modular Switches',       color: '#2dc653', productCount: 2,
    products: ['Roma Switches', 'Roma Sockets', 'Switch Plates', 'Accessories'] },
  { name: 'Finolex',        initial: 'FX', category: 'Wires & Cables',         color: '#c1121f', productCount: 2,
    products: ['FR Copper Wire', '2.5 sq mm Wire', 'PVC Cables', 'Industrial Cables'] },
  { name: 'Siemens',        initial: 'SI', category: 'MCBs & Breakers',        color: '#009999', productCount: 1,
    products: ['5SL MCB Series', 'RCCB Devices', 'Distribution Boards', 'Contactors'] },
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
