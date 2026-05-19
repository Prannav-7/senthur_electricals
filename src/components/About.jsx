import React from 'react';
import { Award, Users, Clock, ThumbsUp } from 'lucide-react';
import './About.css';

const stats = [
  { icon: Award, value: '10+', label: 'Top Brands' },
  { icon: Users, value: '5000+', label: 'Happy Customers' },
  { icon: Clock, value: '15+', label: 'Years Experience' },
  { icon: ThumbsUp, value: '1000+', label: 'Products' },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about__grid">
          <div className="about__left">
            <div className="badge">Who We Are</div>
            <h2 className="section-title about__title">
              Powering Your Home &
              <span className="about__title-accent"> Business</span>
            </h2>
            <div className="divider" style={{ margin: '16px 0' }} />
            <p className="section-subtitle about__desc">
              Senthur Electricals & Hardwares has been the most trusted name for
              electrical and hardware needs in Vellakovil. Founded by
              <strong style={{ color: 'var(--text-primary)' }}> T. Booopathiraja B.E.(Civil)</strong>,
              we bring engineering expertise to every product we sell.
            </p>
            <p className="section-subtitle about__desc" style={{ marginTop: 12 }}>
              Located at the heart of KNT Complex on Muthur Road, we stock a
              comprehensive range of electrical accessories, wiring solutions,
              pipes, fittings, and hardware products from India's leading brands.
            </p>
            <div className="about__highlights">
              {['Licensed & Certified', 'Genuine Products Only', 'Expert Guidance', 'Competitive Pricing'].map(h => (
                <div key={h} className="about__highlight-item">
                  <div className="about__highlight-dot" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about__right">
            <div className="about__owner-card glass-card">
              <div className="about__owner-avatar">
                <span>TB</span>
              </div>
              <div className="about__owner-info">
                <h3 className="about__owner-name">T. Booopathiraja</h3>
                <span className="about__owner-role">B.E. (Civil) – Proprietor</span>
                <div className="about__owner-phones">
                  <a href="tel:9677334525" className="about__phone">📞 96773 34525</a>
                  <a href="tel:9384976959" className="about__phone">📞 93849 76959</a>
                </div>
              </div>
            </div>

            <div className="about__stats">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="about__stat glass-card">
                  <div className="about__stat-icon">
                    <Icon size={22} />
                  </div>
                  <div className="about__stat-value">{value}</div>
                  <div className="about__stat-label">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
