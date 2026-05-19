import React, { createContext, useContext, useState, useCallback } from 'react';

const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback((product) => {
    setItems(prev => {
      const exists = prev.find(i => i.id === product.id);
      return exists ? prev.filter(i => i.id !== product.id) : [...prev, product];
    });
  }, []);

  const isWishlisted = useCallback((id) => items.some(i => i.id === id), [items]);
  const removeFromWishlist = useCallback((id) => setItems(prev => prev.filter(i => i.id !== id)), []);

  return (
    <WishlistContext.Provider value={{ items, toggle, isWishlisted, removeFromWishlist, isOpen, setIsOpen, count: items.length }}>
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlist = () => useContext(WishlistContext);
