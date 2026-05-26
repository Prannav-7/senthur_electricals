import React, { useState, useEffect } from 'react';
import { ShoppingCart, CalendarCheck, Zap, ArrowRight, X, FileText, Download } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useScrollReveal } from '../hooks/useAnimations';
import './Products.css';

// ── Asset image helper (no individual imports needed) ──
const img = (name) => new URL(`../assets/image/${name}`, import.meta.url).href;


// ── Catalogue Downloads ──
export const catalogues = [
  {
    id: 'atomberg',
    brand: 'Atomberg',
    title: 'Atomberg Fan Catalogue',
    subtitle: 'Summer 2026 — BLDC Ceiling Fans',
    file: '/Atomberg Fan Catalogue Summer 2026.pdf',
    color: '#00b4d8',
    description: 'Full range of Atomberg BLDC fans — Efficio Alpha, Renesa Prime, Studio Nexus Smart, Aris Contour & more. Energy ratings, specifications & pricing inside.',
  },
  {
    id: 'ebc',
    brand: 'EBC',
    title: 'EBC Electricals Catalogue',
    subtitle: 'Aug 2024 — Switches, Sockets & MCBs',
    file: '/EBC Catalouge 28-08-24-Low.pdf',
    color: '#e63946',
    description: 'Complete EBC product range — modular switches, sockets, fan regulators, MCBs, distribution boards & accessories for residential use.',
  },
  {
    id: 'havells',
    brand: 'Havells',
    title: 'Havells Fan Catalogue',
    subtitle: '2025 — BLDC & Decorative Fans',
    file: '/FANCATAHAV_MARG28325COMD-1.pdf',
    color: '#e63000',
    description: 'Havells fan range — Epic, Epic Signia, Stealth Air, Fab Pro, Inveno LX, Neoma Underlight and more. Full specs & price list enclosed.',
  },
];

export const categories = [
  { id: 'all',      label: 'All Products' },
  { id: 'wiring',   label: 'Wiring & Cables' },
  { id: 'switches', label: 'Switches & Sockets' },
  { id: 'fans',     label: 'Fans' },
  { id: 'pipes',    label: 'Pipes & Fittings' },
  { id: 'lighting', label: 'Lighting' },
  { id: 'safety',   label: 'Safety & Protection' },
];

export const products = [
  // ── WIRING ──
  { id: 1,  category: 'wiring',   image: img('Copper Flexible Wire 1.5 sq mm.png'),   name: 'Copper Flexible Wire 1.5 sq mm', brand: 'Polycab', price: 890,  originalPrice: 1100, tag: 'Bestseller',
    desc: 'Single-core copper flexible wire, ideal for household wiring. Heat & moisture resistant PVC insulation.' },
  { id: 2,  category: 'wiring',   image: img('Copper Flexible Wire 2.5 sq mm.png'),   name: 'Copper Flexible Wire 2.5 sq mm', brand: 'Polycab', price: 1250, originalPrice: 1500, tag: 'Popular',
    desc: 'High-conductivity 2.5 sq mm copper wire for power points and heavy appliances.' },
  { id: 3,  category: 'wiring',   image: img('Copper Flexible Wire 4 sq mm.png'),     name: 'Copper Flexible Wire 4 sq mm',   brand: 'Polycab', price: 1890, originalPrice: 2200, tag: 'Heavy Duty',
    desc: '4 sq mm multi-strand wire for AC units and high-load circuits. FRLS grade.' },
  { id: 4,  category: 'wiring',   image: img('Armoured Cable 3-Core 1.5 sq mm.png'), name: 'Armoured Cable 3-Core 1.5 sq mm',brand: 'Lisha',   price: 2400, originalPrice: 2800, tag: 'Durable',
    desc: 'Steel armoured underground cable for outdoor and industrial applications.' },
  { id: 5,  category: 'wiring',   image: img('Co-axial TV Cable (100m).png'),         name: 'Co-axial TV Cable (100m)',        brand: 'Vasavi',  price: 750,  originalPrice: 950,  tag: 'Value Pack',
    desc: 'RG6 co-axial cable for cable TV and satellite antenna connections. Low loss.' },
  { id: 6,  category: 'wiring',   image: img('Earth Wire 2.5 sq mm (Green).png'),     name: 'Earth Wire 2.5 sq mm (Green)',    brand: 'Polycab', price: 680,  originalPrice: 820,  tag: 'Safety',
    desc: 'Green-insulated earth wire for grounding all electrical installations.' },
  { id: 7,  category: 'wiring',   image: img('Multi-strand Wire 6 sq mm.png'),        name: 'Multi-strand Wire 6 sq mm',       brand: 'Lisha',   price: 2800, originalPrice: 3200, tag: 'Industrial',
    desc: 'Heavy gauge multi-strand copper wire for motor and pump connections.' },
  { id: 8,  category: 'wiring',   image: img('FRLS Wire 1.5 sq mm (Red).png'),        name: 'FRLS Wire 1.5 sq mm (Red)',       brand: 'Vasavi',  price: 1050, originalPrice: 1250, tag: 'Fire Safe',
    desc: 'Fire Retardant Low Smoke wire. Meets IS 694 standards. Ideal for high-rise buildings.' },
  { id: 9,  category: 'wiring',   image: '/cat_wiring.png',                           name: 'Submersible Pump Cable 3-Core',   brand: 'Polycab', price: 3500, originalPrice: 4000, tag: 'Waterproof',
    desc: '3-core waterproof cable designed for submersible water pumps. PVC jacket.' },
  { id: 10, category: 'wiring',   image: img('Telephone Cable 2-Pair (100m).png'),   name: 'Telephone Cable 2-Pair (100m)',   brand: 'Vasavi',  price: 450,  originalPrice: 580,  tag: 'Bundle',
    desc: '2-pair copper telephone wire for landline and intercom installations.' },

  // ── SWITCHES ──
  { id: 11, category: 'switches', image: img('6A One-Way Modular Switch.png'),        name: '6A One-Way Modular Switch',       brand: 'Legrand', price: 185,  originalPrice: 220,  tag: 'Premium',
    desc: 'Elegant modular one-way switch. Silver contact points. 6A rating for lights and fans.' },
  { id: 12, category: 'switches', image: img('16A Two-Way Switch.png'),               name: '16A Two-Way Switch',              brand: 'Legrand', price: 245,  originalPrice: 290,  tag: 'Popular',
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
  { id: 21, category: 'pipes',    image: img('PVC Conduit Pipe 20mm (3m).png'),      name: 'PVC Conduit Pipe 20mm (3m)',      brand: 'Plato',   price: 65,   originalPrice: 80,   tag: 'Standard',
    desc: 'ISI marked 20mm grey PVC conduit pipe. Rigid, fire-retardant, UV stabilised.' },
  { id: 22, category: 'pipes',    image: img('PVC Conduit Pipe 20mm (3m).png'),      name: 'PVC Conduit Pipe 25mm (3m)',      brand: 'Plato',   price: 85,   originalPrice: 105,  tag: 'Standard',
    desc: '25mm conduit pipe for concealed and surface wiring. Impact resistant.' },
  { id: 23, category: 'pipes',    image: img('PVC Conduit Pipe 32mm (3m).png'),      name: 'PVC Conduit Pipe 32mm (3m)',      brand: 'Plato',   price: 110,  originalPrice: 135,  tag: 'Heavy Gauge',
    desc: '32mm large bore conduit for cable trays and underground duct work.' },
  { id: 24, category: 'pipes',    image: '/cat_pipes.png',    name: 'PVC Elbow 90° 20mm (Pack of 10)',brand: 'Plato',   price: 45,   originalPrice: 60,   tag: 'Value Pack',
    desc: '90-degree elbow bends for PVC conduit 20mm. Pack of 10 pieces.' },
  { id: 25, category: 'pipes',    image: '/cat_pipes.png',    name: 'PVC Junction Box 4x4 Inch',       brand: 'Plato',   price: 55,   originalPrice: 70,   tag: 'Essential',
    desc: 'Surface-mount junction box for wire termination and distribution points.' },
  { id: 26, category: 'pipes',    image: '/cat_pipes.png',    name: 'CPVC Pipe ½" (Hot Water, 3m)',    brand: 'Aquatek', price: 180,  originalPrice: 220,  tag: 'Hot & Cold',
    desc: 'CPVC pipe rated up to 93°C. Ideal for solar heater and hot water plumbing.' },
  { id: 27, category: 'pipes',    image: '/cat_pipes.png',    name: 'uPVC Pressure Pipe 1" Class 4',   brand: 'Aquatek', price: 145,  originalPrice: 180,  tag: 'Pressure',
    desc: 'uPVC Class 4 pressure pipe for overhead water tanks and supply lines.' },
  { id: 28, category: 'pipes',    image: img('PVC Conduit Pipe 20mm (3m).png'),      name: 'Flexible Conduit Pipe 20mm (5m)',brand: 'Plato',   price: 195,  originalPrice: 240,  tag: 'Flexible',
    desc: 'Corrugated flexible conduit pipe for machine wiring and vibration areas.' },
  { id: 29, category: 'pipes',    image: '/cat_pipes.png',    name: 'PVC Reducer 25mm to 20mm (10pk)',brand: 'Plato',   price: 35,   originalPrice: 48,   tag: 'Fitting',
    desc: 'Push-fit reducer coupling for joining different sized conduit pipes.' },
  { id: 30, category: 'pipes',    image: '/cat_pipes.png',    name: 'Conduit Saddle Clip 20mm (50pk)',brand: 'Plato',   price: 60,   originalPrice: 80,   tag: 'Accessory',
    desc: 'Screw-fix saddle clips for surface conduit mounting. Pack of 50.' },

  // ── LIGHTING ──
  { id: 31, category: 'lighting', image: img('LED Bulb 9W Warm White (Pack 4).png'),  name: 'LED Bulb 9W Warm White (Pack 4)', brand: 'Crompton',price: 299,  originalPrice: 380,  tag: 'Bestseller',
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
  { id: 41, category: 'safety',   image: img('MCB 6A Single Pole (C-Curve).png'),    name: 'MCB 6A Single Pole (C-Curve)',    brand: 'Legrand', price: 185,  originalPrice: 230,  tag: 'Essential',
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

  // ── SWITCHES: GM, Havells, Anchor, Fybros, Lisha ──
  { id: 51, category: 'switches', image: img('6A One-Way Modular Switch.png'),        name: 'GM 6A One-Way Modular Switch',     brand: 'GM',      price: 95,  originalPrice: 120,  tag: 'Popular',
    desc: 'GM 6A one-way modular switch with silver contacts. Sleek gloss-white finish for residential use.' },
  { id: 52, category: 'switches', image: img('16A Two-Way Switch.png'),               name: 'GM 16A Heavy Duty Switch',         brand: 'GM',      price: 145, originalPrice: 180,  tag: 'Heavy Duty',
    desc: 'GM 16A two-way heavy duty switch. Ideal for ACs, geysers and high-load circuits.' },
  { id: 53, category: 'switches', image: img('6A One-Way Modular Switch.png'),        name: 'GM 6A 3-Pin Socket with Shutter',  brand: 'GM',      price: 128, originalPrice: 160,  tag: 'Safe',
    desc: 'GM 6A socket with child-safety shutters. Universal pin acceptance.' },
  { id: 54, category: 'switches', image: img('6A One-Way Modular Switch.png'),        name: 'Havells Crabtree 6A Switch',       brand: 'Havells', price: 210, originalPrice: 260,  tag: 'Premium',
    desc: 'Havells Crabtree modular switch with piano-style rocker. ISI marked, 6A rated.' },
  { id: 55, category: 'switches', image: img('16A Two-Way Switch.png'),               name: 'Havells 16A 3-Pin Socket',         brand: 'Havells', price: 285, originalPrice: 340,  tag: 'Reliable',
    desc: 'Havells 16A heavy-duty socket with safety shutters. Fits all standard modular plates.' },
  { id: 56, category: 'switches', image: img('16A Two-Way Switch.png'),               name: 'Havells Electronic Fan Dimmer',    brand: 'Havells', price: 380, originalPrice: 460,  tag: 'Energy Saving',
    desc: 'Havells electronic fan speed dimmer. Step-less speed control, no energy waste.' },
  { id: 57, category: 'switches', image: img('6A One-Way Modular Switch.png'),        name: 'Anchor Roma 6A One-Way Switch',    brand: 'Anchor',  price: 88,  originalPrice: 110,  tag: 'Affordable',
    desc: 'Anchor Roma classic 6A modular switch. Most popular choice for residential projects.' },
  { id: 58, category: 'switches', image: img('6A One-Way Modular Switch.png'),        name: 'Anchor Roma 6A 3-Pin Socket',      brand: 'Anchor',  price: 112, originalPrice: 140,  tag: 'Value',
    desc: 'Anchor Roma 3-pin socket with shutters. Snap-fit to standard modular boxes.' },
  { id: 59, category: 'switches', image: '/cat_switches.png', name: 'Fybros 6A Modular Switch',         brand: 'Fybros',  price: 78,  originalPrice: 98,   tag: 'Budget',
    desc: 'Fybros 6A modular switch. Sturdy polycarbonate body. ISI marked. Budget-friendly.' },
  { id: 60, category: 'switches', image: '/cat_switches.png', name: 'Fybros 16A Socket Outlet',         brand: 'Fybros',  price: 130, originalPrice: 165,  tag: 'Economy',
    desc: 'Fybros 16A socket with child safety shutters. Snap-fit installation.' },

  // ── FANS: Havells (FANCATAHAV catalogue), Atomberg (Summer 2026 catalogue), Orient Electric, Crompton ──
  // Havells BLDC Fan Range — from FANCATAHAV catalogue
  { id: 61, category: 'fans',     image: '/cat_lighting.png', name: 'Havells Epic BLDC 1200mm',          brand: 'Havells',  price: 3299,  originalPrice: 3999,  tag: 'Bestseller',
    desc: 'Havells Epic 1200mm BLDC ceiling fan. 35W, 100% copper motor, remote & regulator compatible. EcoActive technology.' },
  { id: 62, category: 'fans',     image: '/cat_lighting.png', name: 'Havells Epic Signia BLDC 1200mm',    brand: 'Havells',  price: 4999,  originalPrice: 5999,  tag: 'Smart Display',
    desc: 'Havells Epic Signia with interactive LED speed/mode display, RF remote. Sleep, Breeze & Boost modes. 5-star BEE.' },
  { id: 63, category: 'fans',     image: '/cat_lighting.png', name: 'Havells Stealth Air BLDC 1200mm',    brand: 'Havells',  price: 5499,  originalPrice: 6499,  tag: 'Silent',
    desc: 'Havells Stealth Air — aerodynamic blades for near-silent operation. Premium finish, RF remote. 5-star rated.' },
  { id: 64, category: 'fans',     image: '/cat_lighting.png', name: 'Havells Fab Pro BLDC 1200mm',        brand: 'Havells',  price: 2999,  originalPrice: 3699,  tag: 'Value',
    desc: 'Havells Fab Pro entry-level BLDC fan. 38W, remote control, 5-star rated. Ideal for bedrooms & living rooms.' },
  { id: 65, category: 'fans',     image: '/cat_lighting.png', name: 'Havells Inveno LX BLDC 1200mm',      brand: 'Havells',  price: 6499,  originalPrice: 7999,  tag: 'Premium',
    desc: 'Havells Inveno LX premium ABS blades for ultra-silent, high-airflow performance. Smart RF remote, 5-star.' },
  { id: 66, category: 'fans',     image: '/cat_lighting.png', name: 'Havells Neoma Underlight BLDC 1200mm',brand: 'Havells', price: 8999,  originalPrice: 10999, tag: 'Underlight',
    desc: 'Havells Neoma BLDC with integrated LED underlight. App + voice control, Sleep/Boost modes. 5-star premium.' },
  { id: 67, category: 'fans',     image: '/cat_lighting.png', name: 'Havells Sprint Table Fan 400mm',     brand: 'Havells',  price: 1450,  originalPrice: 1800,  tag: 'Table Fan',
    desc: 'Havells Sprint 400mm table fan. 55W motor, 3-speed settings, 2-year warranty. Compact & powerful.' },

  // Atomberg Fan Range — from Summer 2026 catalogue
  { id: 68, category: 'fans',     image: '/cat_lighting.png', name: 'Atomberg Efficio Alpha 1200mm BLDC', brand: 'Atomberg', price: 2799,  originalPrice: 3499,  tag: 'Popular',
    desc: 'Atomberg Efficio Alpha — standard BLDC, remote control, 28W. Saves up to 65% energy. 5-year warranty.' },
  { id: 69, category: 'fans',     image: '/cat_lighting.png', name: 'Atomberg Renesa Prime 1200mm BLDC',  brand: 'Atomberg', price: 3999,  originalPrice: 4799,  tag: 'Smart',
    desc: 'Atomberg Renesa Prime with RF remote, LED speed indicator, timer & sleep mode. 28W BLDC. 5-star rated.' },
  { id: 70, category: 'fans',     image: '/cat_lighting.png', name: 'Atomberg Studio Nexus Smart 1200mm', brand: 'Atomberg', price: 5499,  originalPrice: 6499,  tag: 'IoT Smart',
    desc: 'Atomberg Studio Nexus — IoT-enabled, app & voice control (Alexa/Google). Boost, Sleep, Breeze modes. 5-star.' },
  { id: 89, category: 'fans',     image: '/cat_lighting.png', name: 'Atomberg Aris Contour 1200mm BLDC',  brand: 'Atomberg', price: 6999,  originalPrice: 8499,  tag: 'Designer',
    desc: 'Atomberg Aris Contour — premium design, high airflow, smart features. 30W BLDC. App & voice control.' },
  { id: 90, category: 'fans',     image: '/cat_lighting.png', name: 'Atomberg Renesa+ 900mm BLDC',        brand: 'Atomberg', price: 3499,  originalPrice: 4199,  tag: 'Compact',
    desc: 'Atomberg Renesa+ 900mm compact BLDC fan for smaller rooms. Remote, timer, LED indicator. 25W.' },
  { id: 91, category: 'fans',     image: '/cat_lighting.png', name: 'Orient Electric Apex-FX 1200mm',     brand: 'Orient Electric', price: 2400, originalPrice: 2900, tag: 'Durable',
    desc: 'Orient Apex-FX 1200mm with double ball bearing motor. 3-speed pull-chain.' },
  { id: 92, category: 'fans',     image: '/cat_lighting.png', name: 'Orient Electric Aeroquiet 1200mm',   brand: 'Orient Electric', price: 2950, originalPrice: 3600, tag: 'Silent',
    desc: 'Orient Aeroquiet — ultra-silent at 36 dB. 3-year warranty, anti-dust coating.' },
  { id: 93, category: 'fans',     image: '/cat_lighting.png', name: 'Crompton Aura Prime 1200mm',         brand: 'Crompton', price: 2200, originalPrice: 2700, tag: 'Reliable',
    desc: 'Crompton Aura Prime 1200mm ceiling fan. 74W motor, anti-dust coating. 2-year warranty.' },

  // ── LIGHTING: Philips, Havells, Wipro, Panasonic, Orient ──
  { id: 71, category: 'lighting', image: '/cat_lighting.png', name: 'Philips LED Bulb 9W Warm White',    brand: 'Philips',  price: 110, originalPrice: 140,  tag: 'Trusted',
    desc: 'Philips 9W B22 LED bulb, 950 lm, 3000K warm white. 2-year replacement warranty.' },
  { id: 72, category: 'lighting', image: '/cat_lighting.png', name: 'Philips Stellar Bright Tube 20W',   brand: 'Philips',  price: 360, originalPrice: 450,  tag: 'Office',
    desc: 'Philips 20W LED batten 4ft. 2200 lm, cool daylight 6500K. Instant start, no flicker.' },
  { id: 73, category: 'lighting', image: '/cat_lighting.png', name: 'Philips LED Flood Light 20W',       brand: 'Philips',  price: 680, originalPrice: 850,  tag: 'Outdoor',
    desc: 'Philips 20W IP65 flood light. 2200 lm cool white. Ideal for security lighting.' },
  { id: 74, category: 'lighting', image: '/cat_lighting.png', name: 'Havells Adore LED Downlight 7W',    brand: 'Havells',  price: 245, originalPrice: 310,  tag: 'Premium',
    desc: 'Havells Adore 7W round LED downlight. Cut-out 90mm. Cool white 6500K. IP20.' },
  { id: 75, category: 'lighting', image: '/cat_lighting.png', name: 'Havells Ludo LED Panel Light 18W',  brand: 'Havells',  price: 680, originalPrice: 860,  tag: 'Panel',
    desc: 'Havells Ludo 18W slim LED panel. 1800 lm, neutral white 4000K. Recess/surface mount.' },
  { id: 76, category: 'lighting', image: '/cat_lighting.png', name: 'Wipro Garnet LED Bulb 9W',          brand: 'Wipro',    price: 98,  originalPrice: 125,  tag: 'Value',
    desc: 'Wipro Garnet 9W LED bulb. 900 lm, B22, warm white 3000K. 2-year warranty.' },
  { id: 77, category: 'lighting', image: '/cat_lighting.png', name: 'Wipro LED Tube 18W 4ft',            brand: 'Wipro',    price: 320, originalPrice: 400,  tag: 'Popular',
    desc: 'Wipro 18W 4ft LED batten. 1800 lm daylight output. Energy-star rated.' },
  { id: 78, category: 'lighting', image: '/cat_lighting.png', name: 'Panasonic LED Bulb 10W Cool Day',   brand: 'Panasonic',price: 120, originalPrice: 155,  tag: 'Reliable',
    desc: 'Panasonic 10W LED bulb. 1000 lm, B22, cool daylight. 25,000 hr rated life.' },
  { id: 79, category: 'lighting', image: '/cat_lighting.png', name: 'Orient Electric LED Bulb 12W',      brand: 'Orient',   price: 105, originalPrice: 135,  tag: 'Bright',
    desc: 'Orient 12W LED bulb. 1200 lm, B22, cool white 6500K. ISI marked.' },
  { id: 80, category: 'lighting', image: '/cat_lighting.png', name: 'Wipro LED Strip 5m RGB+Remote',     brand: 'Wipro',    price: 560, originalPrice: 700,  tag: 'Decorative',
    desc: 'Wipro 5m RGB LED strip with remote. Adhesive backed, 12V DC, for home decor.' },

  // ── WIRING: Finolex, KEI, Havells ──
  { id: 81, category: 'wiring',   image: '/cat_wiring.png',   name: 'Finolex 1.5 sq mm PVC Wire',       brand: 'Finolex',  price: 820, originalPrice: 1020, tag: 'Quality',
    desc: 'Finolex 1.5 sq mm flexible copper wire. FR PVC insulation. IS 694 certified.' },
  { id: 82, category: 'wiring',   image: '/cat_wiring.png',   name: 'Finolex 2.5 sq mm FR Wire',        brand: 'Finolex',  price: 1180, originalPrice: 1450,tag: 'Popular',
    desc: 'Finolex 2.5 sq mm wire for power circuits. Smooth pull-through PVC sheathing.' },
  { id: 83, category: 'wiring',   image: '/cat_wiring.png',   name: 'KEI 1.5 sq mm FR Copper Wire',     brand: 'KEI',      price: 800, originalPrice: 980,  tag: 'FR Grade',
    desc: 'KEI Industries FR wire 1.5 sq mm. Oxygen-free copper. IS 694:2010 certified.' },
  { id: 84, category: 'wiring',   image: '/cat_wiring.png',   name: 'Havells Lifeline 2.5 sq mm FRLS',  brand: 'Havells',  price: 1320, originalPrice: 1600,tag: 'Premium',
    desc: 'Havells Lifeline FRLS copper wire 2.5 sq mm. Zero halogen, eco-friendly cable.' },

  // ── SAFETY: Havells, Siemens, Schneider, EBC ──
  { id: 85, category: 'safety',   image: img('MCB 6A Single Pole (C-Curve).png'),    name: 'Havells 6A MCB Single Pole',       brand: 'Havells',  price: 195,  originalPrice: 240,  tag: 'Popular',
    desc: 'Havells MCB 6A single-pole C-curve. 10kA breaking capacity. ISI marked.' },
  { id: 86, category: 'safety',   image: '/cat_safety.png',   name: 'Havells RCCB 25A 30mA 2-Pole',     brand: 'Havells',  price: 980,  originalPrice: 1250, tag: 'Protection',
    desc: 'Havells RCCB 25A/30mA double-pole. Earth leakage protection for all circuits.' },
  { id: 87, category: 'safety',   image: '/cat_safety.png',   name: 'Siemens 5SL MCB 16A SP C-Curve',   brand: 'Siemens',  price: 220,  originalPrice: 275,  tag: 'Industrial',
    desc: 'Siemens 5SL MCB 16A C-curve. 6kA breaking capacity. IEC 60898-1 certified.' },
  { id: 88, category: 'safety',   image: '/cat_safety.png',   name: 'Schneider iC60N MCB 32A SP',        brand: 'Schneider',price: 380,  originalPrice: 470,  tag: 'Premium',
    desc: 'Schneider Electric iC60N 32A MCB. IEC/EN 60898-1 compliant. DIN rail mount.' },

  // ── EBC — from EBC Catalouge 28-08-24 ──
  { id: 94, category: 'switches', image: img('6A One-Way Modular Switch.png'),        name: 'EBC 6A One-Way Modular Switch',     brand: 'EBC',      price: 72,   originalPrice: 95,   tag: 'Budget',
    desc: 'EBC 6A one-way modular switch. Polycarbonate body, silver contacts. ISI marked. Budget-friendly choice.' },
  { id: 95, category: 'switches', image: img('16A Two-Way Switch.png'),               name: 'EBC 16A Two-Way Switch',            brand: 'EBC',      price: 110,  originalPrice: 145,  tag: 'Value',
    desc: 'EBC 16A two-way modular switch for staircases & passages. Heavy-duty silver contacts.' },
  { id: 96, category: 'switches', image: '/cat_switches.png', name: 'EBC 6A 3-Pin Socket with Shutter',  brand: 'EBC',      price: 98,   originalPrice: 130,  tag: 'Safe',
    desc: 'EBC 6A universal 3-pin socket with child-safety shutters. ISI marked.' },
  { id: 97, category: 'switches', image: '/cat_switches.png', name: 'EBC 16A 5-Pin Industrial Socket',   brand: 'EBC',      price: 165,  originalPrice: 210,  tag: 'Industrial',
    desc: 'EBC 16A round-pin socket for ACs, washing machines. Safety shutter, snap-fit installation.' },
  { id: 98, category: 'switches', image: '/cat_switches.png', name: 'EBC Fan Speed Regulator',           brand: 'EBC',      price: 145,  originalPrice: 190,  tag: 'Economy',
    desc: 'EBC electronic fan speed regulator. Step-less control, cool operation, low power loss.' },
  { id: 99, category: 'safety',   image: img('MCB 6A Single Pole (C-Curve).png'),    name: 'EBC 6A MCB Single Pole',            brand: 'EBC',      price: 110,  originalPrice: 145,  tag: 'Economy',
    desc: 'EBC 6A single-pole MCB C-curve. ISI marked. 6kA breaking capacity for residential circuits.' },
  { id: 100,category: 'safety',   image: '/cat_safety.png',  name: 'EBC 16A MCB Single Pole',           brand: 'EBC',      price: 125,  originalPrice: 165,  tag: 'Popular',
    desc: 'EBC 16A SP MCB for socket and appliance circuits. IS/IEC 60898-1 certified.' },
  { id: 101,category: 'safety',   image: '/cat_safety.png',  name: 'EBC 4-Way Distribution Board',      brand: 'EBC',      price: 420,  originalPrice: 560,  tag: 'Panel',
    desc: 'EBC 4-way single-door flush distribution board. DIN rail, transparent cover, ISI marked.' },
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
  const [toastVisible, setToastVisible] = useState(false);
  const [demoBooked,   setDemoBooked]   = useState(false);

  const handleAddToCart = (e) => {
    e.stopPropagation(); e.preventDefault();
    addToCart(product);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 1800);
  };

  const handleDemo = (e) => {
    e.stopPropagation(); e.preventDefault();
    window.location.href = 'tel:9677334525';
    setDemoBooked(true);
    setTimeout(() => setDemoBooked(false), 2000);
  };

  const handleBuyNow = (e) => {
    e.stopPropagation(); e.preventDefault();
    const msg = `Hi! I want to buy:\n\u2022 ${product.name} (${product.brand})\n\nPlease confirm availability.`;
    window.open(`https://wa.me/919677334525?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="product-card-v2">
      <AddedToast show={toastVisible} name={product.name} />
      {demoBooked && (
        <div className="added-toast added-toast--demo"><CalendarCheck size={14} /> Demo Requested!</div>
      )}

      {/* Clickable image */}
      <Link to={`/products/${product.id}`} className="pcv2__img-link">
        <div className="pcv2__img-wrap">
          <img src={product.image} alt={product.name} className="pcv2__img" loading="lazy" />
          <div className="pcv2__overlay" />
          <span className="pcv2__tag">{product.tag}</span>
          <div className="pcv2__view-overlay">View Details →</div>
        </div>
      </Link>

      {/* Book a Demo floating button */}
      <button
        className="pcv2__demo-btn"
        onClick={handleDemo}
        aria-label={`Book a demo for ${product.name}`}
      >
        <CalendarCheck size={14} />
        <span>Book Demo</span>
      </button>

      {/* Body */}
      <div className="pcv2__body">
        <div className="pcv2__brand">{product.brand}</div>
        <Link to={`/products/${product.id}`}><h3 className="pcv2__name">{product.name}</h3></Link>
        <p className="pcv2__desc">{product.desc}</p>

        <div className="pcv2__actions">
          <button className="pcv2__btn pcv2__btn--cart" onClick={handleAddToCart} id={`cart-btn-${product.id}`}>
            <ShoppingCart size={14} /> Cart
          </button>
          <button className="pcv2__btn pcv2__btn--demo" onClick={handleDemo} id={`demo-btn-${product.id}`}>
            <CalendarCheck size={14} />
            Book Demo
          </button>
          <button className="pcv2__btn pcv2__btn--buy" onClick={handleBuyNow} id={`buy-btn-${product.id}`}>
            <Zap size={14} /> Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

// Brand colours for all brands
const brandColors = {
  Polycab:  '#e63946', Legrand:  '#1d7dd8', Crompton: '#f4a261',
  Aquatek:  '#2a9d8f', Plato:    '#8338ec', Ventac:   '#06d6a0',
  Lisha:    '#f72585', Vasavi:   '#fb8500',
  // Switches
  GM:       '#0077b6', Havells:  '#e63000', Anchor:   '#2dc653',
  Fybros:   '#9b5de5', EBC:      '#c62a2f',
  // Fans
  Atomberg: '#00b4d8', 'Orient Electric': '#f77f00',
  // Lighting
  Philips:  '#0057b8', Wipro:    '#007e5e', Panasonic:'#003087',
  Orient:   '#e07a00',
  // Wiring
  Finolex:  '#c1121f', KEI:      '#4361ee',
  // Safety
  Siemens:  '#009999', Schneider:'#3a86ff',
};

// ── Catalogue Download Section ──
function CatalogueSection() {
  const reveal = useScrollReveal({ threshold: 0.05 });
  return (
    <div
      ref={reveal.ref}
      className={`catalogues-section reveal reveal-up ${reveal.isVisible ? 'revealed' : ''}`}
    >
      <div className="catalogues-header">
        <div className="badge">Product Catalogues</div>
        <h2 className="section-title">Download <span className="products__title-accent">Catalogues</span></h2>
        <div className="divider" style={{ margin: '12px auto' }} />
        <p className="section-subtitle" style={{ margin: '0 auto' }}>
          Access full product specifications, models & price lists from our brand partners.
        </p>
      </div>
      <div className="catalogues-grid">
        {catalogues.map(cat => (
          <div key={cat.id} className="catalogue-card" style={{ '--cat-color': cat.color }}>
            <div className="catalogue-card__icon-wrap">
              <FileText size={32} strokeWidth={1.5} />
            </div>
            <div className="catalogue-card__body">
              <span className="catalogue-card__brand" style={{ color: cat.color }}>{cat.brand}</span>
              <h3 className="catalogue-card__title">{cat.title}</h3>
              <p className="catalogue-card__subtitle">{cat.subtitle}</p>
              <p className="catalogue-card__desc">{cat.description}</p>
            </div>
            <a
              href={cat.file}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="catalogue-card__btn"
              style={{ background: cat.color }}
              id={`download-catalogue-${cat.id}`}
            >
              <Download size={15} /> Download PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

// preview=true → homepage mode: 10 products, no filters, View All button
export default function Products({ preview = false }) {
  const [searchParams] = useSearchParams();
  const urlCat = searchParams.get('cat') || 'all';

  const [activeCategory, setActiveCategory] = useState(urlCat);
  const [activeBrand,    setActiveBrand]    = useState('All Brands');

  // Sync when URL ?cat= changes and reset brand filter
  useEffect(() => {
    if (!preview) {
      setActiveCategory(searchParams.get('cat') || 'all');
      setActiveBrand('All Brands');
    }
  }, [searchParams, preview]);

  // Only show brands relevant to current category selection
  const brandsInCategory = activeCategory === 'all'
    ? Array.from(new Set(products.map(p => p.brand)))
    : Array.from(new Set(products.filter(p => p.category === activeCategory).map(p => p.brand)));
  const allBrands = ['All Brands', ...brandsInCategory];

  const filtered = preview
    ? products.slice(0, 10)
    : products.filter(p => {
        const catMatch   = activeCategory === 'all' || p.category === activeCategory;
        const brandMatch = activeBrand    === 'All Brands' || p.brand === activeBrand;
        return catMatch && brandMatch;
      });

  const clearFilters = () => { setActiveCategory('all'); setActiveBrand('All Brands'); };
  const hasFilter    = activeCategory !== 'all' || activeBrand !== 'All Brands';

  const headerReveal = useScrollReveal();
  const gridReveal = useScrollReveal({ threshold: 0, rootMargin: '0px' });
  const ctaReveal = useScrollReveal();

  return (
    <section id="products" className="products">
      <div className="container">
        <div
          ref={headerReveal.ref}
          className={`products__header reveal reveal-up ${headerReveal.isVisible ? 'revealed' : ''}`}
        >
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
                    onClick={() => { setActiveCategory(cat.id); setActiveBrand('All Brands'); }}
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
        <div
          ref={gridReveal.ref}
          className={`products__grid-v2 ${preview ? `reveal reveal-up ${gridReveal.isVisible ? 'revealed' : ''}` : 'revealed-static'}`}
          style={{ transitionDelay: '0.15s' }}
        >
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
          <div
            ref={ctaReveal.ref}
            className={`products__view-all reveal reveal-up ${ctaReveal.isVisible ? 'revealed' : ''}`}
          >
            <p className="products__view-all-hint">Showing 10 of 100+ products</p>
            <Link to="/products" className="btn-primary products__view-all-btn" id="view-all-products-btn">
              View All Products <ArrowRight size={16} />
            </Link>
          </div>
        )}

        {/* Catalogue Downloads — only on full page */}
        {!preview && <CatalogueSection />}
      </div>
    </section>
  );
}
