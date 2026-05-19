import React from 'react';
import About from '../components/About';
import './PageHero.css';

export default function AboutPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero__content">
          <h1 className="page-hero__title">About <span>Senthur Electricals</span></h1>
          <p className="page-hero__desc">
            Learn about our journey, our team, and our commitment to quality
            electrical & hardware products in Vellakovil.
          </p>
        </div>
      </div>
      <About />
    </>
  );
}
