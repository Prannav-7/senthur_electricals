import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Brands from './components/Brands';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ background: 'var(--dark-900)', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Brands />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
