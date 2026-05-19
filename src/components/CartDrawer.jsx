import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, CreditCard } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './CartDrawer.css';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeFromCart, updateQty, total, clearCart } = useCart();

  const handleBuyAll = () => {
    const msg = `Hi! I'd like to buy:\n${items.map(i => `• ${i.name} x${i.qty} = ₹${(i.price * i.qty).toLocaleString()}`).join('\n')}\n\nTotal: ₹${total.toLocaleString()}`;
    window.open(`https://wa.me/919677334525?text=${encodeURIComponent(msg)}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="drawer-overlay" onClick={() => setIsOpen(false)} />
      <div className="cart-drawer">
        <div className="cart-drawer__header">
          <div className="cart-drawer__title">
            <ShoppingBag size={20} />
            <span>Your Cart</span>
            {items.length > 0 && <span className="cart-drawer__count">{items.reduce((s,i) => s+i.qty, 0)}</span>}
          </div>
          <button className="drawer-close" onClick={() => setIsOpen(false)} aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="cart-drawer__empty">
            <ShoppingBag size={48} strokeWidth={1} />
            <p>Your cart is empty</p>
            <span>Add products to get started</span>
          </div>
        ) : (
          <>
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
                    <div className="cart-item__qty">
                      <button onClick={() => updateQty(item.id, item.qty - 1)} aria-label="Decrease"><Minus size={12} /></button>
                      <span>{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.qty + 1)} aria-label="Increase"><Plus size={12} /></button>
                    </div>
                    <div className="cart-item__subtotal">₹{(item.price * item.qty).toLocaleString()}</div>
                    <button className="cart-item__remove" onClick={() => removeFromCart(item.id)} aria-label="Remove">
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-drawer__footer">
              <div className="cart-drawer__total">
                <span>Total</span>
                <span className="cart-drawer__total-value">₹{total.toLocaleString()}</span>
              </div>
              <button className="btn-primary cart-drawer__checkout" onClick={handleBuyAll}>
                <CreditCard size={16} /> Order via WhatsApp
              </button>
              <button className="cart-drawer__clear" onClick={clearCart}>Clear Cart</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
