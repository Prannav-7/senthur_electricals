import React from 'react';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Brands from './components/Brands';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <div style={{ background: 'var(--dark-900)', minHeight: '100vh' }}>
          <Navbar />
          <Hero />
          <About />
          <Products />
          <Brands />
          <WhyUs />
          <Contact />
          <Footer />
          <CartDrawer />
          <WishlistDrawer />
        </div>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
