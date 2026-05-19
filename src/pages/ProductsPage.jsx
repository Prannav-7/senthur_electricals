import React from 'react';
import Products from '../components/Products';
import './PageHero.css';

export default function ProductsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero__content">
          <h1 className="page-hero__title">Our <span>Product Catalog</span></h1>
          <p className="page-hero__desc">
            Browse 50+ genuine electrical & hardware products from India's top brands.
            Filter by category, add to cart or wishlist, and order via WhatsApp.
          </p>
        </div>
      </div>
      <Products preview={false} />
    </>
  );
}
