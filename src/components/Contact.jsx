import React, { useState } from 'react';
import { MapPin, Phone, Clock, Send, CheckCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useAnimations';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const header = useScrollReveal();
  const infoCards = useScrollReveal({ threshold: 0.1 });
  const formReveal = useScrollReveal({ threshold: 0.1 });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const msg = `Hello! I'm ${form.name}. ${form.message} (Phone: ${form.phone})`;
    window.open(`https://wa.me/919677334525?text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div
          ref={header.ref}
          className={`contact__header reveal reveal-up ${header.isVisible ? 'revealed' : ''}`}
        >
          <div className="badge">Get In Touch</div>
          <h2 className="section-title">
            Visit or <span className="contact__title-accent">Contact Us</span>
          </h2>
          <div className="divider" style={{ margin: '12px auto' }} />
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            We'd love to hear from you. Walk in to our store or send us a
            message and we'll get back to you promptly.
          </p>
        </div>

        <div className="contact__grid">
          {/* Info Panel */}
          <div
            ref={infoCards.ref}
            className={`contact__info stagger-children ${infoCards.isVisible ? 'revealed' : ''}`}
          >
            <div className="contact__info-card glass-card">
              <div className="contact__info-icon"><MapPin size={22} /></div>
              <div>
                <h4 className="contact__info-label">Our Address</h4>
                <p className="contact__info-value">
                  315, 316, DR Nagar, KNT Complex,<br />
                  Muthur Road, Vellakovil – 638 111
                </p>
              </div>
            </div>

            <div className="contact__info-card glass-card">
              <div className="contact__info-icon"><Phone size={22} /></div>
              <div>
                <h4 className="contact__info-label">Phone Numbers</h4>
                <a href="tel:9677334525" className="contact__info-value contact__phone">96773 34525</a>
                <a href="tel:9384976959" className="contact__info-value contact__phone">93849 76959</a>
              </div>
            </div>

            <div className="contact__info-card glass-card">
              <div className="contact__info-icon"><Clock size={22} /></div>
              <div>
                <h4 className="contact__info-label">Business Hours</h4>
                <p className="contact__info-value">Mon – Sat: 9:00 AM – 8:00 PM</p>
                <p className="contact__info-value">Sunday: 10:00 AM – 9:00 PM</p>
              </div>
            </div>

            {/* Map Embed */}
            <div className="contact__map glass-card">
              <iframe
                title="Senthur Electricals Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0!2d77.6!3d10.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDU3JzAwLjAiTiA3N8KwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
                width="100%"
                height="180"
                style={{ border: 0, borderRadius: 12, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div
            ref={formReveal.ref}
            className={`contact__form-wrap glass-card reveal reveal-right ${formReveal.isVisible ? 'revealed' : ''}`}
          >
            <h3 className="contact__form-title">Send us a Message</h3>
            <p className="contact__form-sub">We'll reply via WhatsApp instantly!</p>

            {submitted && (
              <div className="contact__success">
                <CheckCircle size={18} />
                Message sent! We'll be in touch soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact__form" id="contact-form">
              <div className="contact__field">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="e.g. Ravi Kumar"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="e.g. 98765 43210"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="message">Your Enquiry</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us what products you need..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn-primary contact__submit" id="contact-submit-btn">
                <Send size={16} /> Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
