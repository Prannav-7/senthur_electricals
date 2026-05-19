import React from 'react';
import './Brands.css';

const brands = [
  { name: 'Polycab', desc: 'Wires & Cables', initial: 'PC' },
  { name: 'Legrand', desc: 'Switches & MCBs', initial: 'LG' },
  { name: 'Crompton', desc: 'Fans & Lighting', initial: 'CR' },
  { name: 'Aquatek', desc: 'PVC Pipes', initial: 'AQ' },
  { name: 'Plato', desc: 'Conduit Pipes', initial: 'PL' },
  { name: 'Ventac', desc: 'Electrical Accessories', initial: 'VT' },
  { name: 'Lisha', desc: 'Wiring Solutions', initial: 'LI' },
  { name: 'Vasavi', desc: 'Cables & Fittings', initial: 'VA' },
];

export default function Brands() {
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
          </p>
        </div>

        <div className="brands__grid">
          {brands.map(brand => (
            <div key={brand.name} className="brand-card glass-card">
              <div className="brand-card__logo">
                <span>{brand.initial}</span>
              </div>
              <div className="brand-card__info">
                <h3 className="brand-card__name">{brand.name}</h3>
                <p className="brand-card__desc">{brand.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="brands__marquee-wrap">
          <div className="brands__marquee">
            {[...brands, ...brands].map((b, i) => (
              <span key={i} className="brands__marquee-item">
                {b.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
