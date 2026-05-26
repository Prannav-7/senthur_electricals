import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, CalendarCheck, Zap, ArrowLeft, CheckCircle, Phone, Package, Tag, Star } from 'lucide-react';
import { products, categories } from '../components/Products';
import { useCart } from '../context/CartContext';
import './ProductDetailPage.css';

/* ── Per-category spec generator ── */
function getSpecs(p) {
  const base = [
    { label: 'Brand',    value: p.brand },
    { label: 'Category', value: categories.find(c => c.id === p.category)?.label || p.category },
  ];
  const extra = {
    wiring: [
      { label: 'Conductor', value: 'Annealed Copper' },
      { label: 'Insulation', value: 'PVC / FRLS' },
      { label: 'Voltage Rating', value: '1100 V' },
      { label: 'Standard', value: 'IS 694 / IS 1554' },
      { label: 'Temperature', value: '-15°C to +70°C' },
    ],
    switches: [
      { label: 'Material', value: 'Polycarbonate' },
      { label: 'Mounting', value: 'Modular / Flush' },
      { label: 'Standard', value: 'IS 3854 / IEC 60669' },
      { label: 'Finish', value: 'Gloss White' },
      { label: 'Warranty', value: '2 Years' },
    ],
    pipes: [
      { label: 'Material', value: 'Rigid PVC / CPVC' },
      { label: 'Color', value: 'Grey / Cream' },
      { label: 'Standard', value: 'IS 9537 / IS 4985' },
      { label: 'Length', value: '3 m per piece' },
      { label: 'Flame', value: 'Self-extinguishing' },
    ],
    lighting: [
      { label: 'Base', value: 'B22 / E27 / GU10' },
      { label: 'Lifetime', value: '25,000 Hours' },
      { label: 'CRI', value: '> 80' },
      { label: 'Warranty', value: '2-3 Years' },
      { label: 'Standard', value: 'IS 16102 / BEE' },
    ],
    safety: [
      { label: 'Breaking Capacity', value: '6 kA – 10 kA' },
      { label: 'Standard', value: 'IS/IEC 60898' },
      { label: 'Mounting', value: 'DIN Rail' },
      { label: 'Warranty', value: '2 Years' },
      { label: 'Certifications', value: 'ISI / CE Marked' },
    ],
  };
  return [...base, ...(extra[p.category] || [])];
}

/* ── Features per category ── */
function getFeatures(p) {
  const map = {
    wiring:   ['100% pure copper conductor', 'PVC insulation — heat & moisture resistant', 'Flame retardant (FRLS grade)', 'Colour coded for easy identification', 'ISI marked — IS 694 compliant', 'Smooth pull-through installation'],
    switches: ['Premium polycarbonate body', 'Silver alloy contact points', 'Child-safe shuttered sockets', 'Shock-proof construction', 'Compatible with all modular plates', 'Long service life — tested 80,000 cycles'],
    pipes:    ['ISI marked rigid PVC conduit', 'Self-extinguishing flame retardant', 'UV stabilised for outdoor use', 'Easy solvent-weld jointing', 'Smooth inner bore for easy wiring', 'Impact resistant at low temperatures'],
    lighting: ['High efficacy — up to 140 lm/W', 'Instant start — no warm-up delay', 'Low heat emission — cool operation', 'Mercury free — eco friendly', 'Wide beam angle — uniform illumination', 'BEE star rated for energy efficiency'],
    safety:   ['High breaking capacity protection', 'Thermal-magnetic trip mechanism', 'DIN rail snap-on mounting', 'Vibration resistant design', 'Clear ON/OFF status indication', 'Resettable — no fuse replacement needed'],
  };
  return map[p.category] || ['Genuine brand product', 'ISI certified', 'Best in class quality', 'Competitive pricing', 'Expert guidance available'];
}

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find(p => p.id === Number(id));

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [id]);

  if (!product) {
    return (
      <div className="pd-notfound">
        <h2>Product not found</h2>
        <Link to="/products" className="btn-primary">← Back to Products</Link>
      </div>
    );
  }

  const related  = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  const specs    = getSpecs(product);
  const features = getFeatures(product);

  const handleCart = () => addToCart(product);
  const handleDemo = () => {
    window.location.href = 'tel:9677334525';
  };
  const handleBuy = () => {
    const msg = `Hi! I want to buy:\n\u2022 ${product.name} (${product.brand})\n\nPlease confirm availability.`;
    window.open(`https://wa.me/919677334525?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="pd-page">
      {/* Breadcrumb */}
      <div className="pd-breadcrumb container">
        <button onClick={() => navigate(-1)} className="pd-back"><ArrowLeft size={15} /> Back</button>
        <span className="pd-bc-sep">/</span>
        <Link to="/products" className="pd-bc-link">Products</Link>
        <span className="pd-bc-sep">/</span>
        <span className="pd-bc-current">{product.name}</span>
      </div>

      {/* Main Detail */}
      <div className="container pd-main">
        {/* Left — Image */}
        <div className="pd-img-col">
          <div className="pd-img-wrap">
            <img src={product.image} alt={product.name} className="pd-img" />
            <span className="pd-img-tag">{product.tag}</span>
          </div>
          {/* Trust badges */}
          <div className="pd-badges">
            {['Genuine Product', 'ISI Certified', 'Best Price', 'WhatsApp Support'].map(b => (
              <div key={b} className="pd-badge-item"><CheckCircle size={13} />{b}</div>
            ))}
          </div>
        </div>

        {/* Right — Info */}
        <div className="pd-info-col">
          <div className="pd-brand-row">
            <span className="pd-brand">{product.brand}</span>
            <span className="pd-category-tag">{categories.find(c => c.id === product.category)?.label}</span>
          </div>

          <h1 className="pd-title">{product.name}</h1>

          <p className="pd-desc">{product.desc}</p>

          {/* Features */}
          <div className="pd-features">
            <h3 className="pd-section-title"><Star size={15} /> Key Features</h3>
            <ul className="pd-feat-list">
              {features.map(f => (
                <li key={f} className="pd-feat-item"><CheckCircle size={13} />{f}</li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="pd-actions">
            <button className="pd-btn pd-btn--cart" onClick={handleCart} id="pd-cart-btn">
              <ShoppingCart size={18} /> Add to Cart
            </button>
            <button className="pd-btn pd-btn--demo" onClick={handleDemo} id="pd-demo-btn">
              <CalendarCheck size={18} /> Book a Demo
            </button>
            <button className="pd-btn pd-btn--buy" onClick={handleBuy} id="pd-buy-btn">
              <Zap size={18} /> Buy Now
            </button>
          </div>

          <a href="tel:9677334525" className="pd-call-link">
            <Phone size={14} /> Call for bulk orders: 96773 34525
          </a>
        </div>
      </div>

      {/* Specs Table */}
      <div className="container pd-specs-wrap">
        <h2 className="pd-section-heading"><Package size={18} /> Product Specifications</h2>
        <div className="pd-specs-table">
          {specs.map(s => (
            <div key={s.label} className="pd-spec-row">
              <span className="pd-spec-label">{s.label}</span>
              <span className="pd-spec-value">{s.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div className="container pd-related">
          <h2 className="pd-section-heading"><Tag size={18} /> Related Products</h2>
          <div className="pd-related-grid">
            {related.map(rp => {
              return (
                <Link to={`/products/${rp.id}`} key={rp.id} className="pd-related-card" onClick={() => window.scrollTo({top:0})}>
                  <div className="pd-related-img-wrap">
                    <img src={rp.image} alt={rp.name} className="pd-related-img" />
                  </div>
                  <div className="pd-related-body">
                    <span className="pd-related-brand">{rp.brand}</span>
                    <h4 className="pd-related-name">{rp.name}</h4>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
