import React, { useState, useEffect } from 'react';
import { ShoppingCart, Heart, Zap, ArrowRight, X } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import './Products.css';

export const categories = [
  { id: 'all',     label: 'All Products' },
  { id: 'wiring',  label: 'Wiring & Cables' },
  { id: 'switches',label: 'Switches & Sockets' },
  { id: 'pipes',   label: 'Pipes & Fittings' },
  { id: 'lighting',label: 'Lighting' },
  { id: 'safety',  label: 'Safety & Protection' },
];

export const products = [
  // ── WIRING ──
  { id: 1,  category: 'wiring',   image: '/cat_wiring.png',   name: 'Copper Flexible Wire 1.5 sq mm', brand: 'Polycab', price: 890,  originalPrice: 1100, tag: 'Bestseller',
    desc: 'Single-core copper flexible wire, ideal for household wiring. Heat & moisture resistant PVC insulation.' },
  { id: 2,  category: 'wiring',   image: '/cat_wiring.png',   name: 'Copper Flexible Wire 2.5 sq mm', brand: 'Polycab', price: 1250, originalPrice: 1500, tag: 'Popular',
    desc: 'High-conductivity 2.5 sq mm copper wire for power points and heavy appliances.' },
  { id: 3,  category: 'wiring',   image: '/cat_wiring.png',   name: 'Copper Flexible Wire 4 sq mm',   brand: 'Polycab', price: 1890, originalPrice: 2200, tag: 'Heavy Duty',
    desc: '4 sq mm multi-strand wire for AC units and high-load circuits. FRLS grade.' },
  { id: 4,  category: 'wiring',   image: '/cat_wiring.png',   name: 'Armoured Cable 3-Core 1.5 sq mm',brand: 'Lisha',   price: 2400, originalPrice: 2800, tag: 'Durable',
    desc: 'Steel armoured underground cable for outdoor and industrial applications.' },
  { id: 5,  category: 'wiring',   image: '/cat_wiring.png',   name: 'Co-axial TV Cable (100m)',        brand: 'Vasavi',  price: 750,  originalPrice: 950,  tag: 'Value Pack',
    desc: 'RG6 co-axial cable for cable TV and satellite antenna connections. Low loss.' },
  { id: 6,  category: 'wiring',   image: '/cat_wiring.png',   name: 'Earth Wire 2.5 sq mm (Green)',    brand: 'Polycab', price: 680,  originalPrice: 820,  tag: 'Safety',
    desc: 'Green-insulated earth wire for grounding all electrical installations.' },
  { id: 7,  category: 'wiring',   image: '/cat_wiring.png',   name: 'Multi-strand Wire 6 sq mm',       brand: 'Lisha',   price: 2800, originalPrice: 3200, tag: 'Industrial',
    desc: 'Heavy gauge multi-strand copper wire for motor and pump connections.' },
  { id: 8,  category: 'wiring',   image: '/cat_wiring.png',   name: 'FRLS Wire 1.5 sq mm (Red)',       brand: 'Vasavi',  price: 1050, originalPrice: 1250, tag: 'Fire Safe',
    desc: 'Fire Retardant Low Smoke wire. Meets IS 694 standards. Ideal for high-rise buildings.' },
  { id: 9,  category: 'wiring',   image: '/cat_wiring.png',   name: 'Submersible Pump Cable 3-Core',   brand: 'Polycab', price: 3500, originalPrice: 4000, tag: 'Waterproof',
    desc: '3-core waterproof cable designed for submersible water pumps. PVC jacket.' },
  { id: 10, category: 'wiring',   image: '/cat_wiring.png',   name: 'Telephone Cable 2-Pair (100m)',   brand: 'Vasavi',  price: 450,  originalPrice: 580,  tag: 'Bundle',
    desc: '2-pair copper telephone wire for landline and intercom installations.' },

  // ── SWITCHES ──
  { id: 11, category: 'switches', image: '/cat_switches.png', name: '6A One-Way Modular Switch',       brand: 'Legrand', price: 185,  originalPrice: 220,  tag: 'Premium',
    desc: 'Elegant modular one-way switch. Silver contact points. 6A rating for lights and fans.' },
  { id: 12, category: 'switches', image: '/cat_switches.png', name: '16A Two-Way Switch',              brand: 'Legrand', price: 245,  originalPrice: 290,  tag: 'Popular',
    desc: 'Staircase and passage two-way switching. Rated 16A for heavy appliances.' },
  { id: 13, category: 'switches', image: '/cat_switches.png', name: '6A 3-Pin Socket Outlet',          brand: 'Legrand', price: 210,  originalPrice: 260,  tag: 'Essential',
    desc: 'Universal 3-pin socket with shutter protection. Compatible with all plug types.' },
  { id: 14, category: 'switches', image: '/cat_switches.png', name: '16A 5-Pin Industrial Socket',     brand: 'Legrand', price: 380,  originalPrice: 450,  tag: 'Industrial',
    desc: '16A round-pin socket for ACs, washing machines and heavy appliances.' },
  { id: 15, category: 'switches', image: '/cat_switches.png', name: 'Electronic Fan Regulator',        brand: 'Crompton',price: 320,  originalPrice: 390,  tag: 'Energy Saving',
    desc: 'Step-less electronic fan speed regulator. No energy waste. Cool operation.' },
  { id: 16, category: 'switches', image: '/cat_switches.png', name: 'Bell Push Switch (Flush)',        brand: 'Legrand', price: 95,   originalPrice: 120,  tag: 'Compact',
    desc: 'Flush-mounted bell push switch. Suitable for doorbell and call bell circuits.' },
  { id: 17, category: 'switches', image: '/cat_switches.png', name: 'LED Dimmer Switch 300W',          brand: 'Legrand', price: 550,  originalPrice: 680,  tag: 'Smart',
    desc: 'Rotary LED dimmer for dimmable LED and incandescent lights. Max 300W.' },
  { id: 18, category: 'switches', image: '/cat_switches.png', name: 'USB Charging Socket 2.4A',        brand: 'Legrand', price: 490,  originalPrice: 580,  tag: 'Modern',
    desc: 'Dual USB socket with 2.4A fast charging. Built-in overcharge protection.' },
  { id: 19, category: 'switches', image: '/cat_switches.png', name: '4-Module Switch Board Frame',     brand: 'Legrand', price: 145,  originalPrice: 180,  tag: 'Accessory',
    desc: 'Modular 4-gang switch plate frame in white. Compatible with all modular switches.' },
  { id: 20, category: 'switches', image: '/cat_switches.png', name: 'DP Isolator Switch 32A',          brand: 'Legrand', price: 420,  originalPrice: 500,  tag: 'Heavy Duty',
    desc: 'Double-pole isolator switch for AC and water heater circuits. 32A rating.' },

  // ── PIPES ──
  { id: 21, category: 'pipes',    image: '/cat_pipes.png',    name: 'PVC Conduit Pipe 20mm (3m)',      brand: 'Plato',   price: 65,   originalPrice: 80,   tag: 'Standard',
    desc: 'ISI marked 20mm grey PVC conduit pipe. Rigid, fire-retardant, UV stabilised.' },
  { id: 22, category: 'pipes',    image: '/cat_pipes.png',    name: 'PVC Conduit Pipe 25mm (3m)',      brand: 'Plato',   price: 85,   originalPrice: 105,  tag: 'Standard',
    desc: '25mm conduit pipe for concealed and surface wiring. Impact resistant.' },
  { id: 23, category: 'pipes',    image: '/cat_pipes.png',    name: 'PVC Conduit Pipe 32mm (3m)',      brand: 'Plato',   price: 110,  originalPrice: 135,  tag: 'Heavy Gauge',
    desc: '32mm large bore conduit for cable trays and underground duct work.' },
  { id: 24, category: 'pipes',    image: '/cat_pipes.png',    name: 'PVC Elbow 90° 20mm (Pack of 10)',brand: 'Plato',   price: 45,   originalPrice: 60,   tag: 'Value Pack',
    desc: '90-degree elbow bends for PVC conduit 20mm. Pack of 10 pieces.' },
  { id: 25, category: 'pipes',    image: '/cat_pipes.png',    name: 'PVC Junction Box 4x4 Inch',       brand: 'Plato',   price: 55,   originalPrice: 70,   tag: 'Essential',
    desc: 'Surface-mount junction box for wire termination and distribution points.' },
  { id: 26, category: 'pipes',    image: '/cat_pipes.png',    name: 'CPVC Pipe ½" (Hot Water, 3m)',    brand: 'Aquatek', price: 180,  originalPrice: 220,  tag: 'Hot & Cold',
    desc: 'CPVC pipe rated up to 93°C. Ideal for solar heater and hot water plumbing.' },
  { id: 27, category: 'pipes',    image: '/cat_pipes.png',    name: 'uPVC Pressure Pipe 1" Class 4',   brand: 'Aquatek', price: 145,  originalPrice: 180,  tag: 'Pressure',
    desc: 'uPVC Class 4 pressure pipe for overhead water tanks and supply lines.' },
  { id: 28, category: 'pipes',    image: '/cat_pipes.png',    name: 'Flexible Conduit Pipe 20mm (5m)',brand: 'Plato',   price: 195,  originalPrice: 240,  tag: 'Flexible',
    desc: 'Corrugated flexible conduit pipe for machine wiring and vibration areas.' },
  { id: 29, category: 'pipes',    image: '/cat_pipes.png',    name: 'PVC Reducer 25mm to 20mm (10pk)',brand: 'Plato',   price: 35,   originalPrice: 48,   tag: 'Fitting',
    desc: 'Push-fit reducer coupling for joining different sized conduit pipes.' },
  { id: 30, category: 'pipes',    image: '/cat_pipes.png',    name: 'Conduit Saddle Clip 20mm (50pk)',brand: 'Plato',   price: 60,   originalPrice: 80,   tag: 'Accessory',
    desc: 'Screw-fix saddle clips for surface conduit mounting. Pack of 50.' },

  // ── LIGHTING ──
  { id: 31, category: 'lighting', image: '/cat_lighting.png', name: 'LED Bulb 9W Warm White (Pack 4)', brand: 'Crompton',price: 299,  originalPrice: 380,  tag: 'Bestseller',
    desc: '9W LED bulb with 900 lm output. B22 base. 3000K warm white. 25000 hr life.' },
  { id: 32, category: 'lighting', image: '/cat_lighting.png', name: 'LED Tube Light 20W 4ft',           brand: 'Crompton',price: 380,  originalPrice: 480,  tag: 'Office',
    desc: '20W LED batten, replaces 40W fluorescent. 6500K cool daylight. 3 yr warranty.' },
  { id: 33, category: 'lighting', image: '/cat_lighting.png', name: 'LED Panel Light 18W Square',       brand: 'Crompton',price: 650,  originalPrice: 820,  tag: 'Premium',
    desc: '18W slim LED panel, 1800 lm. Surface/recess mount. 4000K neutral white.' },
  { id: 34, category: 'lighting', image: '/cat_lighting.png', name: 'LED Downlight 7W Round',           brand: 'Crompton',price: 220,  originalPrice: 290,  tag: 'Recess',
    desc: 'Recessed LED spot light 7W. Cut-out 90mm. Cool white 6500K. IP20 rated.' },
  { id: 35, category: 'lighting', image: '/cat_lighting.png', name: 'LED Strip Light 5m RGB+Remote',    brand: 'Crompton',price: 599,  originalPrice: 750,  tag: 'Decorative',
    desc: 'Colour-changing RGB LED strip 5m with remote. Adhesive back. 12V DC.' },
  { id: 36, category: 'lighting', image: '/cat_lighting.png', name: 'LED Flood Light 30W (Outdoor)',    brand: 'Crompton',price: 750,  originalPrice: 950,  tag: 'Outdoor',
    desc: '30W waterproof LED flood light IP65. 3000 lm. Ideal for security lighting.' },
  { id: 37, category: 'lighting', image: '/cat_lighting.png', name: 'LED Bulkhead Light 12W',           brand: 'Crompton',price: 480,  originalPrice: 600,  tag: 'Durable',
    desc: 'IP54 bulkhead lamp 12W for outdoor walls, stairways and car parks.' },
  { id: 38, category: 'lighting', image: '/cat_lighting.png', name: 'Emergency LED Light 8W',           brand: 'Crompton',price: 890,  originalPrice: 1100, tag: 'Safety',
    desc: '8W rechargeable emergency light. 4-hr backup. Auto on-off during power cut.' },
  { id: 39, category: 'lighting', image: '/cat_lighting.png', name: 'LED Street Light 50W',             brand: 'Crompton',price: 1800, originalPrice: 2200, tag: 'Industrial',
    desc: '50W street light for roads and parking. IP66 waterproof. 140 lm/W efficacy.' },
  { id: 40, category: 'lighting', image: '/cat_lighting.png', name: 'LED Candle Bulb 5W (6-Pack)',      brand: 'Crompton',price: 349,  originalPrice: 420,  tag: 'Décor',
    desc: '5W E14 candle LED bulb. 500 lm, warm white 3000K. For chandeliers & fans.' },

  // ── SAFETY ──
  { id: 41, category: 'safety',   image: '/cat_safety.png',   name: 'MCB 6A Single Pole (C-Curve)',    brand: 'Legrand', price: 185,  originalPrice: 230,  tag: 'Essential',
    desc: '6A single-pole MCB for lighting circuits. C-curve. 6kA breaking capacity.' },
  { id: 42, category: 'safety',   image: '/cat_safety.png',   name: 'MCB 16A Single Pole (C-Curve)',   brand: 'Legrand', price: 195,  originalPrice: 240,  tag: 'Popular',
    desc: '16A SP MCB for socket and appliance circuits. IS/IEC 60898-1 certified.' },
  { id: 43, category: 'safety',   image: '/cat_safety.png',   name: 'MCB 32A Double Pole',             brand: 'Legrand', price: 420,  originalPrice: 520,  tag: 'Heavy Duty',
    desc: '32A double-pole MCB for AC mains and water heaters. 10kA rated.' },
  { id: 44, category: 'safety',   image: '/cat_safety.png',   name: '4-Way MCB Distribution Board',   brand: 'Legrand', price: 680,  originalPrice: 850,  tag: 'Panel',
    desc: '4-way single-door flush distribution board with transparent cover. Din rail.' },
  { id: 45, category: 'safety',   image: '/cat_safety.png',   name: 'RCCB 25A 30mA 2-Pole',           brand: 'Legrand', price: 950,  originalPrice: 1200, tag: 'Protection',
    desc: 'Residual Current Circuit Breaker 25A/30mA. Protects against earth leakage.' },
  { id: 46, category: 'safety',   image: '/cat_safety.png',   name: 'Surge Protection Device (SPD)',   brand: 'Legrand', price: 1200, originalPrice: 1500, tag: 'Surge Guard',
    desc: 'Type 2 SPD for protection against lightning surges and voltage transients.' },
  { id: 47, category: 'safety',   image: '/cat_safety.png',   name: 'Earthing Electrode Kit 3m',       brand: 'Legrand', price: 1800, originalPrice: 2200, tag: 'Grounding',
    desc: 'GI earthing electrode with clamps and earth wire. Complete earthing solution.' },
  { id: 48, category: 'safety',   image: '/cat_safety.png',   name: 'PVC Insulation Tape (Pack of 5)',brand: 'Polycab', price: 120,  originalPrice: 160,  tag: 'Accessory',
    desc: 'Self-adhesive PVC electrical tape. Flame retardant. 19mm x 20m per roll.' },
  { id: 49, category: 'safety',   image: '/cat_safety.png',   name: 'Cable Tie Pack 100pcs 300mm',     brand: 'Polycab', price: 85,   originalPrice: 110,  tag: 'Organiser',
    desc: 'Nylon cable ties 300mm x 4.8mm. Heat resistant. Self-locking. 100-piece pack.' },
  { id: 50, category: 'safety',   image: '/cat_safety.png',   name: 'RCBO 16A 30mA (MCB+RCCB)',        brand: 'Legrand', price: 1450, originalPrice: 1800, tag: 'Combo',
    desc: 'Combined MCB+RCCB device. Overload, short-circuit and earth fault protection.' },
];

function AddedToast({ show, name }) {
  if (!show) return null;
  return (
    <div className="added-toast">
      <Zap size={14} /> Added: {name}
    </div>
  );
}

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { toggle, isWishlisted } = useWishlist();
  const [toastVisible, setToastVisible] = useState(false);
  const wishlisted = isWishlisted(product.id);

  const handleAddToCart = (e) => {
    e.stopPropagation(); e.preventDefault();
    addToCart(product);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 1800);
  };

  const handleWishlist = (e) => {
    e.stopPropagation(); e.preventDefault();
    toggle(product);
  };

  const handleBuyNow = (e) => {
    e.stopPropagation(); e.preventDefault();
    const msg = `Hi! I want to buy:\n• ${product.name} (${product.brand})\nPrice: ₹${product.price.toLocaleString()}\n\nPlease confirm availability.`;
    window.open(`https://wa.me/919677334525?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const discount = Math.round((1 - product.price / product.originalPrice) * 100);

  return (
    <div className="product-card-v2">
      <AddedToast show={toastVisible} name={product.name} />

      {/* Clickable image */}
      <Link to={`/products/${product.id}`} className="pcv2__img-link">
        <div className="pcv2__img-wrap">
          <img src={product.image} alt={product.name} className="pcv2__img" loading="lazy" />
          <div className="pcv2__overlay" />
          <span className="pcv2__tag">{product.tag}</span>
          {discount > 0 && <span className="pcv2__discount">-{discount}%</span>}
          <div className="pcv2__view-overlay">View Details →</div>
        </div>
      </Link>

      <button
        className={`pcv2__wishlist-btn ${wishlisted ? 'pcv2__wishlist-btn--active' : ''}`}
        onClick={handleWishlist}
        aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
      >
        <Heart size={16} fill={wishlisted ? 'currentColor' : 'none'} />
      </button>

      {/* Body */}
      <div className="pcv2__body">
        <div className="pcv2__brand">{product.brand}</div>
        <Link to={`/products/${product.id}`}><h3 className="pcv2__name">{product.name}</h3></Link>
        <p className="pcv2__desc">{product.desc}</p>

        <div className="pcv2__price-row">
          <span className="pcv2__price">₹{product.price.toLocaleString()}</span>
          <span className="pcv2__original">₹{product.originalPrice.toLocaleString()}</span>
        </div>

        <div className="pcv2__actions">
          <button className="pcv2__btn pcv2__btn--cart" onClick={handleAddToCart} id={`cart-btn-${product.id}`}>
            <ShoppingCart size={14} /> Cart
          </button>
          <button className="pcv2__btn pcv2__btn--wish" onClick={handleWishlist} id={`wish-btn-${product.id}`}>
            <Heart size={14} fill={wishlisted ? 'currentColor' : 'none'} />
            {wishlisted ? 'Saved' : 'Wishlist'}
          </button>
          <button className="pcv2__btn pcv2__btn--buy" onClick={handleBuyNow} id={`buy-btn-${product.id}`}>
            <Zap size={14} /> Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

// Unique brand list derived from products
const allBrands = ['All Brands', ...Array.from(new Set(products.map(p => p.brand)))];

const brandColors = {
  Polycab:  '#e63946',
  Legrand:  '#1d7dd8',
  Crompton: '#f4a261',
  Aquatek:  '#2a9d8f',
  Plato:    '#8338ec',
  Ventac:   '#06d6a0',
  Lisha:    '#f72585',
  Vasavi:   '#fb8500',
};

// preview=true → homepage mode: 10 products, no filters, View All button
export default function Products({ preview = false }) {
  const [searchParams] = useSearchParams();
  const urlCat = searchParams.get('cat') || 'all';

  const [activeCategory, setActiveCategory] = useState(urlCat);
  const [activeBrand,    setActiveBrand]    = useState('All Brands');

  // Sync when URL ?cat= changes (e.g. from footer links)
  useEffect(() => {
    if (!preview) setActiveCategory(searchParams.get('cat') || 'all');
  }, [searchParams, preview]);

  const filtered = preview
    ? products.slice(0, 10)
    : products.filter(p => {
        const catMatch   = activeCategory === 'all' || p.category === activeCategory;
        const brandMatch = activeBrand    === 'All Brands' || p.brand === activeBrand;
        return catMatch && brandMatch;
      });

  const clearFilters = () => { setActiveCategory('all'); setActiveBrand('All Brands'); };
  const hasFilter    = activeCategory !== 'all' || activeBrand !== 'All Brands';

  return (
    <section id="products" className="products">
      <div className="container">
        <div className="products__header">
          <div className="badge">{preview ? 'Featured Products' : 'Our Products'}</div>
          <h2 className="section-title">
            What We <span className="products__title-accent">Offer</span>
          </h2>
          <div className="divider" style={{ margin: '12px auto' }} />
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            {preview
              ? 'A glimpse of our best-selling electrical & hardware products.'
              : '50+ premium products across 5 categories — all from India\'s most trusted brands.'}
          </p>
        </div>

        {/* Filters — only on full page */}
        {!preview && (
          <div className="products__all-filters">
            {/* Category row */}
            <div className="products__filter-row">
              <span className="products__filter-label">Category</span>
              <div className="products__filters">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    className={`products__filter-btn ${activeCategory === cat.id ? 'products__filter-btn--active' : ''}`}
                    onClick={() => setActiveCategory(cat.id)}
                  >
                    {cat.label}
                    {cat.id !== 'all' && (
                      <span className="products__filter-count">
                        {products.filter(p => p.category === cat.id).length}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Brand row */}
            <div className="products__filter-row">
              <span className="products__filter-label">Brand</span>
              <div className="products__filters">
                {allBrands.map(brand => (
                  <button
                    key={brand}
                    className={`products__filter-btn products__brand-btn ${
                      activeBrand === brand ? 'products__filter-btn--active' : ''
                    }`}
                    style={brand !== 'All Brands' && activeBrand === brand
                      ? { background: brandColors[brand], borderColor: brandColors[brand], color: '#fff' }
                      : brand !== 'All Brands'
                        ? { '--dot-color': brandColors[brand] }
                        : {}}
                    onClick={() => setActiveBrand(brand)}
                  >
                    {brand !== 'All Brands' && (
                      <span
                        className="products__brand-dot"
                        style={{ background: brandColors[brand] }}
                      />
                    )}
                    {brand}
                  </button>
                ))}
              </div>
            </div>

            {/* Active filter summary + clear */}
            {hasFilter && (
              <div className="products__active-filters">
                {activeCategory !== 'all' && (
                  <span className="products__active-chip">
                    {categories.find(c => c.id === activeCategory)?.label}
                    <button onClick={() => setActiveCategory('all')} aria-label="Remove category filter"><X size={11} /></button>
                  </span>
                )}
                {activeBrand !== 'All Brands' && (
                  <span className="products__active-chip" style={{ '--chip-color': brandColors[activeBrand] }}>
                    {activeBrand}
                    <button onClick={() => setActiveBrand('All Brands')} aria-label="Remove brand filter"><X size={11} /></button>
                  </span>
                )}
                <span className="products__result-count">{filtered.length} product{filtered.length !== 1 ? 's' : ''} found</span>
                <button className="products__clear-btn" onClick={clearFilters}>Clear all</button>
              </div>
            )}
          </div>
        )}

        {/* Grid */}
        <div className="products__grid-v2">
          {filtered.length === 0 ? (
            <div className="products__empty">
              <p>No products found for the selected filters.</p>
              <button className="btn-outline" onClick={clearFilters}>Clear Filters</button>
            </div>
          ) : (
            filtered.map(product => <ProductCard key={product.id} product={product} />)
          )}
        </div>

        {/* View All CTA — only in preview mode */}
        {preview && (
          <div className="products__view-all">
            <p className="products__view-all-hint">Showing 10 of 50+ products</p>
            <Link to="/products" className="btn-primary products__view-all-btn" id="view-all-products-btn">
              View All Products <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
