import React from 'react';
import WhyUs from '../components/WhyUs';
import './PageHero.css';

export default function WhyUsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero__content">
          <h1 className="page-hero__title">Why Choose <span>Senthur</span></h1>
          <p className="page-hero__desc">
            Discover what makes us the most trusted electrical & hardware store
            in Vellakovil — quality, price, and service you can count on.
          </p>
        </div>
      </div>
      <WhyUs />
    </>
  );
}
