import React from 'react';
import Contact from '../components/Contact';
import './PageHero.css';

export default function ContactPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero__content">
          <h1 className="page-hero__title">Get In <span>Touch</span></h1>
          <p className="page-hero__desc">
            Visit our store, call us, or send us a WhatsApp message — we're
            here to help you with all your electrical & hardware needs.
          </p>
        </div>
      </div>
      <Contact />
    </>
  );
}
