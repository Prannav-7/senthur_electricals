import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import WishlistDrawer from './WishlistDrawer';

export default function Layout() {
  return (
    <div style={{ background: 'var(--dark-900)', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      <WishlistDrawer />
    </div>
  );
}
