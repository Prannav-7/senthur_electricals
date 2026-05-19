import React from 'react';
import Brands from '../components/Brands';
import './PageHero.css';

export default function BrandsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero__content">
          <h1 className="page-hero__title">Our <span>Brand Partners</span></h1>
          <p className="page-hero__desc">
            We are authorised stockists of India's most trusted electrical and
            hardware brands — every product is 100% genuine and certified.
          </p>
        </div>
      </div>
      <Brands />
    </>
  );
}
