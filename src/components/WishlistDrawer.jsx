import React from 'react';
import { X, Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import './WishlistDrawer.css';

export default function WishlistDrawer() {
  const { items, isOpen, setIsOpen, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleMoveToCart = (item) => {
    addToCart(item);
    removeFromWishlist(item.id);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="drawer-overlay" onClick={() => setIsOpen(false)} />
      <div className="wishlist-drawer">
        <div className="cart-drawer__header">
          <div className="cart-drawer__title">
            <Heart size={20} />
            <span>Wishlist</span>
            {items.length > 0 && <span className="cart-drawer__count">{items.length}</span>}
          </div>
          <button className="drawer-close" onClick={() => setIsOpen(false)} aria-label="Close wishlist">
            <X size={20} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="cart-drawer__empty">
            <Heart size={48} strokeWidth={1} />
            <p>Your wishlist is empty</p>
            <span>Save products you love here</span>
          </div>
        ) : (
          <div className="cart-drawer__items">
            {items.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item__img" />
                <div className="cart-item__info">
                  <h4 className="cart-item__name">{item.name}</h4>
                  <span className="cart-item__brand">{item.brand}</span>
                  <div className="cart-item__price">₹{item.price.toLocaleString()}</div>
                </div>
                <div className="cart-item__controls">
                  <button
                    className="btn-primary wishlist-item__cart-btn"
                    onClick={() => handleMoveToCart(item)}
                    title="Move to Cart"
                  >
                    <ShoppingCart size={13} /> Add to Cart
                  </button>
                  <button className="cart-item__remove" onClick={() => removeFromWishlist(item.id)} aria-label="Remove">
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
