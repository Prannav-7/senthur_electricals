import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import WishlistDrawer from './WishlistDrawer';

export default function Layout() {
  const { pathname } = useLocation();

  return (
    <div style={{ background: 'var(--dark-900)', minHeight: '100vh' }}>
      <Navbar />
      <main key={pathname} style={{ animation: 'pageEnter 0.5s cubic-bezier(0.22, 1, 0.36, 1) both' }}>
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      <WishlistDrawer />
    </div>
  );
}
