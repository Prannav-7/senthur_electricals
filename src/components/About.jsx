import React from 'react';
import storeImg from '../assets/image/head.png';
import { Award, Users, Clock, ThumbsUp } from 'lucide-react';
import { useScrollReveal, useCountUp } from '../hooks/useAnimations';
import './About.css';

const stats = [
  { icon: Award, value: '10+', label: 'Top Brands', num: 10 },
  { icon: Users, value: '5000+', label: 'Happy Customers', num: 5000 },
  { icon: Clock, value: '15+', label: 'Years Experience', num: 15 },
  { icon: ThumbsUp, value: '1000+', label: 'Products', num: 1000 },
];

function AnimatedStat({ icon: Icon, value, label, num, trigger, index }) {
  const count = useCountUp(num, trigger, 2000);
  const suffix = value.includes('+') ? '+' : '';
  return (
    <div className="about__stat glass-card" style={{ animationDelay: `${index * 0.12}s` }}>
      <div className="about__stat-icon">
        <Icon size={22} />
      </div>
      <div className="about__stat-value">{count.toLocaleString()}{suffix}</div>
      <div className="about__stat-label">{label}</div>
    </div>
  );
}

export default function About() {
  const header = useScrollReveal();
  const left = useScrollReveal({ threshold: 0.1 });
  const ownerCard = useScrollReveal();
  const storePhoto = useScrollReveal();
  const statsReveal = useScrollReveal({ threshold: 0.2 });
  const highlights = useScrollReveal();

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about__grid">
          <div
            ref={left.ref}
            className={`about__left reveal reveal-left ${left.isVisible ? 'revealed' : ''}`}
          >
            <div className="badge">Who We Are</div>
            <h2 className="section-title about__title">
              Powering Your Home &
              <span className="about__title-accent"> Business</span>
            </h2>
            <div className="divider" style={{ margin: '16px 0' }} />
            <p className="section-subtitle about__desc">
              Senthur Electricals & Hardwares has been the most trusted name for
              electrical and hardware needs in Vellakovil. Founded by
              <strong style={{ color: 'var(--text-primary)' }}> T. Boopathiraja B.E.(Civil)</strong>,
              we bring engineering expertise to every product we sell.
            </p>
            <p className="section-subtitle about__desc" style={{ marginTop: 12 }}>
              Located at the heart of KNT Complex on Muthur Road, we stock a
              comprehensive range of electrical accessories, wiring solutions,
              pipes, fittings, and hardware products from India's leading brands.
            </p>
            <div
              ref={highlights.ref}
              className={`about__highlights stagger-children ${highlights.isVisible ? 'revealed' : ''}`}
            >
              {['Licensed & Certified', 'Genuine Products Only', 'Expert Guidance', 'Competitive Pricing'].map(h => (
                <div key={h} className="about__highlight-item">
                  <div className="about__highlight-dot" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about__right">
            <div
              ref={ownerCard.ref}
              className={`about__owner-card glass-card reveal reveal-right ${ownerCard.isVisible ? 'revealed' : ''}`}
            >
              <div className="about__owner-avatar">
                <span>TB</span>
              </div>
              <div className="about__owner-info">
                <h3 className="about__owner-name">T. Boopathiraja</h3>
                <span className="about__owner-role">B.E. (Civil) – Proprietor</span>
                <div className="about__owner-phones">
                  <a href="tel:9677334525" className="about__phone">📞 96773 34525</a>
                  <a href="tel:9384976959" className="about__phone">📞 93849 76959</a>
                </div>
              </div>
            </div>

            {/* Real store photo */}
            <div
              ref={storePhoto.ref}
              className={`about__store-photo-wrap reveal reveal-scale ${storePhoto.isVisible ? 'revealed' : ''}`}
            >
              <img src={storeImg} alt="Senthur Electricals & Hardwares store interior" className="about__store-photo" />
              <div className="about__store-photo-label">Our Store — Vellakovil</div>
            </div>

            <div
              ref={statsReveal.ref}
              className={`about__stats stagger-children ${statsReveal.isVisible ? 'revealed' : ''}`}
            >
              {stats.map((stat, i) => (
                <AnimatedStat
                  key={stat.label}
                  {...stat}
                  trigger={statsReveal.isVisible}
                  index={i}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
