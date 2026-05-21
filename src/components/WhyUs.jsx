import React from 'react';
import { BadgeCheck, Truck, HeadphonesIcon, DollarSign, ShieldCheck, Star } from 'lucide-react';
import { useScrollReveal } from '../hooks/useAnimations';
import './WhyUs.css';

const reasons = [
  { icon: BadgeCheck, title: 'Genuine Products', desc: 'Every product is sourced directly from authorized distributors. 100% genuine, ISI certified.' },
  { icon: DollarSign, title: 'Best Price Guaranteed', desc: 'We offer the most competitive prices in the region with no hidden charges or compromise on quality.' },
  { icon: HeadphonesIcon, title: 'Expert Guidance', desc: 'Our B.E.(Civil) qualified team helps you choose the right products for your project needs.' },
  { icon: Truck, title: 'Wide Product Range', desc: 'Over 1000+ products across electrical, plumbing, and hardware categories – all under one roof.' },
  { icon: ShieldCheck, title: 'After-Sales Support', desc: 'We stand by our products and customers even after the purchase. Your satisfaction is our priority.' },
  { icon: Star, title: 'Trusted by Thousands', desc: 'Over 5000+ satisfied customers across Vellakovil and surrounding areas trust Senthur Electricals.' },
];

export default function WhyUs() {
  const header = useScrollReveal();
  const grid = useScrollReveal({ threshold: 0.1 });
  const cta = useScrollReveal();

  return (
    <section id="whyus" className="whyus">
      <div className="whyus__bg-glow" />
      <div className="container">
        <div
          ref={header.ref}
          className={`whyus__header reveal reveal-up ${header.isVisible ? 'revealed' : ''}`}
        >
          <div className="badge">Why Choose Us</div>
          <h2 className="section-title">
            The Senthur <span className="whyus__title-accent">Advantage</span>
          </h2>
          <div className="divider" style={{ margin: '12px auto' }} />
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Decades of experience, genuine products, and a commitment to your
            satisfaction sets us apart.
          </p>
        </div>

        <div
          ref={grid.ref}
          className={`whyus__grid stagger-children ${grid.isVisible ? 'revealed' : ''}`}
        >
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="whyus-card glass-card" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="whyus-card__icon-wrap">
                <div className="whyus-card__icon">
                  <Icon size={28} />
                </div>
                <div className="whyus-card__icon-ring" />
              </div>
              <h3 className="whyus-card__title">{title}</h3>
              <p className="whyus-card__desc">{desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Strip */}
        <div
          ref={cta.ref}
          className={`whyus__cta-strip reveal reveal-up ${cta.isVisible ? 'revealed' : ''}`}
        >
          <div className="whyus__cta-text">
            <h3>Ready to start your project?</h3>
            <p>Call us or visit our store in Vellakovil today!</p>
          </div>
          <div className="whyus__cta-actions">
            <a href="tel:9677334525" className="btn-primary" id="whyus-call-btn">📞 96773 34525</a>
            <a href="tel:9384976959" className="btn-outline" id="whyus-call-btn2">📞 93849 76959</a>
          </div>
        </div>
      </div>
    </section>
  );
}
