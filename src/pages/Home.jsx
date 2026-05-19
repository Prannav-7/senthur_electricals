import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Brands from '../components/Brands';
import WhyUs from '../components/WhyUs';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products preview={true} />
      <Brands />
      <WhyUs />
      <Contact />
    </>
  );
}
