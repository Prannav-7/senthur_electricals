import React from 'react';
import Hero from '../components/Hero';
import TopSelling from '../components/TopSelling';
import About from '../components/About';
import Products from '../components/Products';
import Brands from '../components/Brands';
import WhyUs from '../components/WhyUs';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <TopSelling />
      <About />
      <Products preview={true} />
      <Brands />
      <WhyUs />
      <Contact />
    </>
  );
}
