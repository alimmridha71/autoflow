// ============================================================
// AUTOFLOW E-COMMERCE — COMPLETE MOCK DATA
// 24 Products, 12 Categories, 8 Orders, 5 Coupons, Brands, Blog
// ============================================================

import {
  Product, CategoryItem, Order, Coupon, PaymentGatewayConfig,
  BlogPost, Brand, SupportTicket, Notification, Warehouse,
  Supplier, StockEntry, CmsPage, ShippingZone
} from './types';

// ---- CATEGORIES (12 categories covering all requested) ----

export const INITIAL_CATEGORIES: CategoryItem[] = [
  {
    id: 'cat-1',
    name: 'Smartphones',
    slug: 'smartphones',
    icon: 'Smartphone',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop',
    subcategories: ['Flagship Phones', '5G Smartphones', 'Gaming Phones', 'Budget Phones', 'Foldable Phones'],
    itemCount: 42
  },
  {
    id: 'cat-2',
    name: 'Laptops & PCs',
    slug: 'laptops-pcs',
    icon: 'Laptop',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop',
    subcategories: ['MacBooks', 'Gaming Laptops', 'Ultrabooks', 'Desktop PCs', 'Monitors'],
    itemCount: 38
  },
  {
    id: 'cat-3',
    name: 'Earbuds & Headphones',
    slug: 'audio',
    icon: 'Headphones',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    subcategories: ['TWS Earbuds', 'Noise Cancelling', 'Gaming Headsets', 'Bluetooth Speakers'],
    itemCount: 54
  },
  {
    id: 'cat-4',
    name: 'Smart Watches',
    slug: 'smart-watches',
    icon: 'Watch',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop',
    subcategories: ['Fitness Bands', 'Apple Watches', 'Sports Watches', 'Calling Watches'],
    itemCount: 29
  },
  {
    id: 'cat-5',
    name: 'Gaming Gear',
    slug: 'gaming',
    icon: 'Gamepad2',
    image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=800&auto=format&fit=crop',
    subcategories: ['Consoles', 'Mechanical Keyboards', 'Gaming Mice', 'Controllers', 'VR Headsets'],
    itemCount: 31
  },
  {
    id: 'cat-6',
    name: 'Drones & Cameras',
    slug: 'cameras-drones',
    icon: 'Camera',
    image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=800&auto=format&fit=crop',
    subcategories: ['4K Drones', 'Action Cameras', 'DSLR Cameras', 'Gimbals & Tripods'],
    itemCount: 19
  },
  {
    id: 'cat-7',
    name: 'Smart Home & Power',
    slug: 'smart-home',
    icon: 'Zap',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop',
    subcategories: ['Power Banks', 'Fast Chargers', 'Smart Plugs', 'Security Cameras', 'Routers'],
    itemCount: 46
  },
  {
    id: 'cat-8',
    name: 'Tablets',
    slug: 'tablets',
    icon: 'Tablet',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800&auto=format&fit=crop',
    subcategories: ['iPad', 'Android Tablets', 'Drawing Tablets', 'Kids Tablets'],
    itemCount: 22
  },
  {
    id: 'cat-9',
    name: 'Storage & Memory',
    slug: 'storage',
    icon: 'HardDrive',
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?q=80&w=800&auto=format&fit=crop',
    subcategories: ['SSD', 'HDD', 'USB Flash Drives', 'Memory Cards', 'External Storage'],
    itemCount: 35
  },
  {
    id: 'cat-10',
    name: 'Graphics Cards',
    slug: 'graphics-cards',
    icon: 'Cpu',
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=800&auto=format&fit=crop',
    subcategories: ['NVIDIA GeForce', 'AMD Radeon', 'Workstation GPUs', 'Mining GPUs'],
    itemCount: 14
  },
  {
    id: 'cat-11',
    name: 'Networking',
    slug: 'networking',
    icon: 'Wifi',
    image: 'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?q=80&w=800&auto=format&fit=crop',
    subcategories: ['WiFi Routers', 'Mesh Systems', 'Range Extenders', 'Network Switches'],
    itemCount: 18
  },
  {
    id: 'cat-12',
    name: 'Accessories',
    slug: 'accessories',
    icon: 'Cable',
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop',
    subcategories: ['Phone Cases', 'Screen Protectors', 'Cables', 'Adapters', 'Laptop Bags'],
    itemCount: 62
  }
];

// ---- PRODUCTS (24 products across categories) ----

export const INITIAL_PRODUCTS: Product[] = [
  // 1. Flagship Smartphone
  {
    id: 'prod-1',
    name: 'Autoflow Titan Phone 16 Pro Max 512GB',
    sku: 'AF-PH-16PM',
    barcode: '890123456001',
    slug: 'autoflow-titan-phone-16-pro-max',
    brand: 'Autoflow',
    model: 'Titan Pro 2026',
    category: 'Smartphones',
    subcategory: 'Flagship Phones',
    images: [
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Experience unmatched speed with the Autoflow Titan Phone 16 Pro Max. Aerospace-grade titanium chassis, 120Hz Super Retina XDR Display, 50MP triple quad-camera system with 10x optical zoom, and ultra-fast 5G wireless performance.',
    specifications: [
      { label: 'Processor', value: 'Bionic A18 Pro 3nm Chip' },
      { label: 'Display', value: '6.9" OLED 120Hz ProMotion' },
      { label: 'Storage', value: '512GB NVMe' },
      { label: 'RAM', value: '12GB Unified LPDDR5X' },
      { label: 'Camera', value: '50MP Main + 50MP UltraWide + 50MP Telephoto' },
      { label: 'Battery', value: '5000 mAh with 45W Fast Charging' },
      { label: 'OS', value: 'Autoflow OS 5 (Android 15 Based)' }
    ],
    features: ['Face ID', '5G Ultra Wideband', 'MagSafe Wireless Charging', 'Satellite SOS', 'USB-C 3.2'],
    regularPrice: 1299,
    salePrice: 1149,
    discount: 11,
    stockQuantity: 45,
    variants: {
      colors: ['Natural Titanium', 'Dark Obsidian', 'Cyber Gold', 'Ice Silver'],
      storages: ['256GB', '512GB', '1TB'],
      rams: ['12GB']
    },
    weight: '221g',
    dimensions: '163 x 77.6 x 8.25 mm',
    warranty: '2 Years Official Warranty',
    returnPolicy: '7 days return / 15 days replacement',
    shippingInfo: { freeShipping: true, estimatedDays: '2-4 business days', shippingFrom: 'Dhaka, BD' },
    tags: ['Flagship', '5G', 'Best Camera', 'OLED', 'Fast Charger'],
    rating: 4.9,
    reviewCount: 128,
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: true,
    isFlashSale: true,
    isTrending: true,
    flashSaleEndTime: '2026-08-10T23:59:59Z',
    faqs: [
      { question: 'Is this phone waterproof?', answer: 'Yes, it has IP68 water and dust resistance rating up to 6m for 30 minutes.' },
      { question: 'Does it support 5G in Bangladesh?', answer: 'Yes, it supports all 5G bands available in Bangladesh and India.' },
      { question: 'What comes in the box?', answer: 'Phone, USB-C cable, SIM tool, documentation. Charger sold separately.' }
    ],
    relatedProductIds: ['prod-3', 'prod-7', 'prod-13'],
    reviews: [
      { id: 'rev-1', userName: 'Tanvir Ahmed', rating: 5, date: '2026-07-28', comment: 'Mindblowing camera performance! Delivery was super fast via bKash payment in Dhaka.', verified: true },
      { id: 'rev-2', userName: 'Rahul Sharma', rating: 5, date: '2026-07-24', comment: 'Top quality smartphone. Battery lasts 2 full days easily. Paid with UPI seamlessly.', verified: true },
      { id: 'rev-3', userName: 'Nusrat Jahan', rating: 4, date: '2026-07-20', comment: 'Amazing phone but wish the charger was included in the box.', verified: true }
    ]
  },
  // 2. Laptop / MacBook
  {
    id: 'prod-2',
    name: 'Autoflow UltraBook M3 Pro 16" Liquid Retina',
    sku: 'AF-NB-M3P16',
    barcode: '890123456002',
    slug: 'autoflow-ultrabook-m3-pro-16',
    brand: 'Autoflow',
    model: 'M3 Pro 2026',
    category: 'Laptops & PCs',
    subcategory: 'MacBooks',
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Designed for creator powerhouses. Featuring a 16-inch 120Hz Mini-LED display, 36GB Unified Memory, 1TB High Speed SSD, 22-hour battery longevity, and whisper-quiet fanless cooling system.',
    specifications: [
      { label: 'Processor', value: '14-Core M3 Pro Silicon' },
      { label: 'GPU', value: '18-Core Integrated GPU' },
      { label: 'RAM', value: '36GB Unified Memory' },
      { label: 'Storage', value: '1TB PCIe Gen4 SSD' },
      { label: 'Display', value: '16.2-inch XDR 3456x2234 1600 nits' },
      { label: 'Weight', value: '2.14 kg' }
    ],
    features: ['Thunderbolt 4', 'HDMI 2.1', 'SD Card Slot', '6-Speaker Sound System', 'MagSafe 3'],
    regularPrice: 2499,
    salePrice: 2299,
    discount: 8,
    stockQuantity: 18,
    variants: {
      colors: ['Space Black', 'Silver'],
      storages: ['512GB', '1TB', '2TB'],
      rams: ['18GB', '36GB']
    },
    warranty: '1 Year International + 1 Year Local Warranty',
    returnPolicy: '15 days return policy',
    shippingInfo: { freeShipping: true, estimatedDays: '3-5 business days', shippingFrom: 'Mumbai, IN' },
    tags: ['Laptop', 'Workstation', 'Mini-LED', 'Heavy Gaming', 'Video Editing'],
    rating: 4.95,
    reviewCount: 84,
    isFeatured: true,
    isBestSeller: true,
    isTrending: true,
    relatedProductIds: ['prod-8', 'prod-5'],
    reviews: [
      { id: 'rev-4', userName: 'Arjun Patel', rating: 5, date: '2026-07-22', comment: 'Best laptop I have ever used. The display is stunning for photo editing.', verified: true },
      { id: 'rev-5', userName: 'Sadia Akter', rating: 5, date: '2026-07-18', comment: 'Battery life is incredible. Lasts my entire work day easily.', verified: true }
    ]
  },
  // 3. Earbuds
  {
    id: 'prod-3',
    name: 'Autoflow ANC Sonic Air Pods Pro 2',
    sku: 'AF-AUD-APP2',
    barcode: '890123456003',
    slug: 'autoflow-anc-sonic-air-pods-pro-2',
    brand: 'Autoflow',
    model: 'Sonic Air 2',
    category: 'Earbuds & Headphones',
    subcategory: 'TWS Earbuds',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Active Noise Cancellation up to 45dB with Spatial Audio and dynamic head tracking. MagSafe charging case with built-in speaker and lanyard loop.',
    specifications: [
      { label: 'Noise Cancellation', value: 'Active Hybrid ANC 45dB' },
      { label: 'Battery Life', value: '8 Hours Earbuds + 32 Hours Case' },
      { label: 'Bluetooth', value: 'v5.4 Ultra Low Latency' },
      { label: 'Water Resistance', value: 'IPX5 Sweat & Water Resistant' }
    ],
    features: ['Spatial Audio', 'Adaptive Transparency', 'MagSafe Charging', 'Find My Integration'],
    regularPrice: 199,
    salePrice: 139,
    discount: 30,
    stockQuantity: 120,
    variants: { colors: ['Glossy White', 'Matte Black', 'Navy Blue'] },
    warranty: '6 Months Replacement Warranty',
    returnPolicy: '7 days replacement only',
    shippingInfo: { freeShipping: true, estimatedDays: '1-3 business days', shippingFrom: 'Dhaka, BD' },
    tags: ['ANC', 'Wireless', 'Spatial Audio', 'TWS'],
    rating: 4.85,
    reviewCount: 310,
    isFeatured: true,
    isFlashSale: true,
    isDeal: true,
    flashSaleEndTime: '2026-08-10T23:59:59Z',
    relatedProductIds: ['prod-1', 'prod-14'],
    reviews: [
      { id: 'rev-6', userName: 'Mehedi Hasan', rating: 5, date: '2026-07-26', comment: 'Best ANC earbuds at this price point. Sound quality is insane!', verified: true },
      { id: 'rev-7', userName: 'Deepika Roy', rating: 4, date: '2026-07-21', comment: 'Great noise cancellation. Fits perfectly. Battery could be a bit better.', verified: true }
    ]
  },
  // 4. Smartwatch
  {
    id: 'prod-4',
    name: 'Autoflow Pulse Watch Ultra 2 Titanium GPS',
    sku: 'AF-WTC-ULT2',
    barcode: '890123456004',
    slug: 'autoflow-pulse-watch-ultra-2',
    brand: 'Autoflow',
    model: 'Pulse Ultra 2026',
    category: 'Smart Watches',
    subcategory: 'Sports Watches',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'The ultimate adventure smartwatch. Dual-frequency precision GPS, 3000 nits sapphire crystal touchscreen, ECG heart monitor, oxygen sensor, and 100m water dive rating.',
    specifications: [
      { label: 'Display', value: '1.96" Sapphire AMOLED 3000 nits' },
      { label: 'Sensors', value: 'ECG, SpO2, Heart Rate, Temperature, Altimeter' },
      { label: 'Battery', value: 'Up to 72 Hours in Low Power Mode' },
      { label: 'Water Resistance', value: '100m EN13319 Dive Certified' }
    ],
    features: ['Crash Detection', 'Fall Detection', 'Action Button', 'Workout Tracking 100+ Sports'],
    regularPrice: 499,
    salePrice: 429,
    discount: 14,
    stockQuantity: 24,
    variants: { colors: ['Titanium Orange Strap', 'Ocean Blue Strap', 'Black Trail Loop'] },
    warranty: '1 Year Full Brand Warranty',
    returnPolicy: '15 days return',
    tags: ['Smartwatch', 'ECG', 'Fitness', 'GPS', 'Titanium'],
    rating: 4.9,
    reviewCount: 67,
    isBestSeller: true,
    isDeal: true,
    relatedProductIds: ['prod-1', 'prod-3'],
    reviews: [
      { id: 'rev-8', userName: 'Karim Uddin', rating: 5, date: '2026-07-25', comment: 'Best smartwatch for fitness tracking. The GPS accuracy is excellent!', verified: true }
    ]
  },
  // 5. Gaming Keyboard
  {
    id: 'prod-5',
    name: 'Autoflow CyberBlade Mechanical Gaming Keyboard RGB',
    sku: 'AF-GM-CBK87',
    barcode: '890123456005',
    slug: 'autoflow-cyberblade-gaming-keyboard',
    brand: 'Autoflow',
    model: 'CyberBlade Pro',
    category: 'Gaming Gear',
    subcategory: 'Mechanical Keyboards',
    images: [
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Hot-swappable optical yellow linear switches, per-key RGB backlighting, gasket mounted aluminum body, wireless 2.4GHz + Bluetooth 5.2 + Type-C tri-mode connection.',
    specifications: [
      { label: 'Switches', value: 'Hot-Swappable Custom Yellow Linear (45g)' },
      { label: 'Keycaps', value: 'Double-shot PBT Cherry Profile' },
      { label: 'Connectivity', value: '2.4Ghz Wireless / Bluetooth / Type-C' },
      { label: 'Battery', value: '4000mAh (Up to 200 hrs RGB Off)' }
    ],
    features: ['N-Key Rollover', 'Macro Keys', 'Software Customization', 'Gasket Mount'],
    regularPrice: 149,
    salePrice: 109,
    discount: 26,
    stockQuantity: 60,
    variants: { colors: ['Cyber Punk Black', 'Retro Chalk White'] },
    warranty: '1 Year Warranty',
    returnPolicy: '7 days return',
    tags: ['Gaming', 'Keyboard', 'RGB', 'Mechanical', 'Wireless'],
    rating: 4.78,
    reviewCount: 92,
    isNewArrival: true,
    isTrending: true,
    relatedProductIds: ['prod-15', 'prod-8'],
    reviews: [
      { id: 'rev-9', userName: 'Sakib Al Hasan', rating: 5, date: '2026-07-23', comment: 'The typing experience is absolutely buttery smooth. Love the RGB!', verified: true }
    ]
  },
  // 6. Drone
  {
    id: 'prod-6',
    name: 'Autoflow SkyHawk 4K HDR GPS Drone Camera',
    sku: 'AF-DRN-SH4K',
    barcode: '890123456006',
    slug: 'autoflow-skyhawk-4k-hdr-drone',
    brand: 'Autoflow',
    model: 'SkyHawk Pro 4K',
    category: 'Drones & Cameras',
    subcategory: '4K Drones',
    images: [
      'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Ultralight under 249g foldable drone with 4K 60fps HDR video camera, 3-axis mechanical gimbal, 10km video transmission distance, and omnidirectional obstacle sensing.',
    specifications: [
      { label: 'Camera Sensor', value: '1/1.3" CMOS 48MP' },
      { label: 'Flight Time', value: '45 Minutes per Battery' },
      { label: 'Range', value: '10 km HD Transmission' },
      { label: 'Weight', value: '249 grams (No license required)' }
    ],
    features: ['ActiveTrack 5.0', 'MasterShots', 'Hyperlapse', 'QuickTransfer'],
    regularPrice: 799,
    salePrice: 699,
    discount: 12,
    stockQuantity: 15,
    variants: { colors: ['Arctic White', 'Carbon Gray'] },
    warranty: '1 Year Drone Warranty',
    returnPolicy: '7 days return (unopened)',
    tags: ['Drone', '4K Camera', 'HDR', 'Gimbal', 'GPS'],
    rating: 4.92,
    reviewCount: 41,
    isFeatured: true,
    relatedProductIds: ['prod-16'],
    reviews: [
      { id: 'rev-10', userName: 'Amit Kumar', rating: 5, date: '2026-07-19', comment: 'Incredible footage quality! Perfect for travel vlogging.', verified: true }
    ]
  },
  // 7. GaN Charger
  {
    id: 'prod-7',
    name: 'Autoflow TurboVolt 140W GaN 5-Port Power Station',
    sku: 'AF-PWR-140GAN',
    barcode: '890123456007',
    slug: 'autoflow-turbovolt-140w-gan-charger',
    brand: 'Autoflow',
    model: 'TurboVolt 140W',
    category: 'Smart Home & Power',
    subcategory: 'Fast Chargers',
    images: [
      'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Charge 5 devices simultaneously at ultra speeds. Powered by GaN III technology with Power Delivery 3.1 capable of charging a 16-inch laptop in under 45 minutes.',
    specifications: [
      { label: 'Total Output', value: '140W Max' },
      { label: 'Ports', value: '3x USB-C PD3.1 + 2x USB-A QC4.0' },
      { label: 'Technology', value: 'GaN III Semiconductor' }
    ],
    features: ['Universal Voltage', 'Overheat Protection', 'Short Circuit Protection'],
    regularPrice: 89,
    salePrice: 59,
    discount: 33,
    stockQuantity: 95,
    warranty: '2 Years Warranty',
    returnPolicy: '15 days return',
    tags: ['Charger', 'GaN', 'Power Delivery', 'Fast Charge'],
    rating: 4.88,
    reviewCount: 142,
    isBestSeller: true,
    isFlashSale: true,
    isDeal: true,
    flashSaleEndTime: '2026-08-10T23:59:59Z',
    relatedProductIds: ['prod-13', 'prod-1'],
    reviews: [
      { id: 'rev-11', userName: 'Priti Saha', rating: 5, date: '2026-07-27', comment: 'Charges my laptop and phone at the same time. Amazing value!', verified: true }
    ]
  },
  // 8. Gaming Monitor
  {
    id: 'prod-8',
    name: 'Autoflow Vision 34" Curved 175Hz Quantum OLED Gaming Monitor',
    sku: 'AF-MON-V34OLED',
    barcode: '890123456008',
    slug: 'autoflow-vision-34-curved-oled-monitor',
    brand: 'Autoflow',
    model: 'Vision Q-OLED 34',
    category: 'Laptops & PCs',
    subcategory: 'Monitors',
    images: [
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Immerse yourself in true blacks and vibrant 175Hz response speed. 34-inch 1800R curved QD-OLED display with 0.03ms response time, DisplayHDR True Black 400, and USB-C 90W power passthrough.',
    specifications: [
      { label: 'Screen Size', value: '34-inch Ultrawide 21:9 Curved 1800R' },
      { label: 'Panel Type', value: 'Quantum Dot OLED' },
      { label: 'Refresh Rate', value: '175Hz' },
      { label: 'Response Time', value: '0.03ms GTG' },
      { label: 'Resolution', value: '3440 x 1440 UWQHD' }
    ],
    features: ['G-Sync Compatible', 'FreeSync Premium Pro', 'USB-C 90W PD', 'KVM Switch'],
    regularPrice: 1199,
    salePrice: 999,
    discount: 16,
    stockQuantity: 8,
    warranty: '3 Years Burn-in Guarantee Warranty',
    returnPolicy: '15 days return',
    tags: ['Monitor', 'OLED', 'Curved', '175Hz', 'Gaming'],
    rating: 4.96,
    reviewCount: 38,
    isFeatured: true,
    isTrending: true,
    relatedProductIds: ['prod-2', 'prod-5'],
    reviews: [
      { id: 'rev-12', userName: 'Rishab Jain', rating: 5, date: '2026-07-20', comment: 'The OLED blacks are insane. Best monitor for gaming and content creation.', verified: true }
    ]
  },
  // 9. Tablet
  {
    id: 'prod-9',
    name: 'Autoflow Slate Pro 12.9" M2 Tablet 256GB',
    sku: 'AF-TAB-SP12',
    barcode: '890123456009',
    slug: 'autoflow-slate-pro-12-tablet',
    brand: 'Autoflow',
    model: 'Slate Pro 12.9 2026',
    category: 'Tablets',
    subcategory: 'iPad',
    images: [
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1561154464-82e9adf32764?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'The ultimate creative canvas. 12.9-inch Liquid Retina XDR display with ProMotion 120Hz, M2 chip performance, Apple Pencil 2 support, and all-day battery life.',
    specifications: [
      { label: 'Display', value: '12.9" Liquid Retina XDR Mini-LED' },
      { label: 'Chip', value: 'M2 8-Core CPU + 10-Core GPU' },
      { label: 'RAM', value: '8GB Unified' },
      { label: 'Storage', value: '256GB' },
      { label: 'Camera', value: '12MP Wide + 10MP Ultra Wide + LiDAR' }
    ],
    features: ['Face ID', 'Apple Pencil 2 Support', 'Magic Keyboard Compatible', 'Stage Manager'],
    regularPrice: 1099,
    salePrice: 999,
    discount: 9,
    stockQuantity: 22,
    variants: {
      colors: ['Space Gray', 'Silver'],
      storages: ['128GB', '256GB', '512GB', '1TB']
    },
    warranty: '1 Year Warranty',
    returnPolicy: '15 days return',
    tags: ['Tablet', 'iPad', 'M2', 'Drawing', 'Creative'],
    rating: 4.88,
    reviewCount: 56,
    isNewArrival: true,
    isFeatured: true,
    relatedProductIds: ['prod-2', 'prod-1'],
    reviews: [
      { id: 'rev-13', userName: 'Farhan Alam', rating: 5, date: '2026-07-15', comment: 'Perfect for digital art. The Pencil latency is practically zero.', verified: true }
    ]
  },
  // 10. Bluetooth Speaker
  {
    id: 'prod-10',
    name: 'Autoflow BoomBox X500 Portable Bluetooth Speaker',
    sku: 'AF-SPK-BX500',
    barcode: '890123456010',
    slug: 'autoflow-boombox-x500-bluetooth-speaker',
    brand: 'Autoflow',
    model: 'BoomBox X500',
    category: 'Earbuds & Headphones',
    subcategory: 'Bluetooth Speakers',
    images: [
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=800&auto=format&fit=crop'
    ],
    description: '50W powerful stereo sound with deep bass. IP67 waterproof and dustproof, 24-hour battery, built-in power bank function, and PartyBoost pairing for multi-speaker setup.',
    specifications: [
      { label: 'Output', value: '50W RMS Stereo' },
      { label: 'Battery', value: '24 Hours Playtime' },
      { label: 'Waterproof', value: 'IP67 Rated' },
      { label: 'Bluetooth', value: 'v5.3 with aptX HD' }
    ],
    features: ['PartyBoost Multi-Speaker', 'Built-in Power Bank', 'USB-C Charging', 'LED Light Show'],
    regularPrice: 179,
    salePrice: 129,
    discount: 27,
    stockQuantity: 80,
    variants: { colors: ['Midnight Black', 'Ocean Blue', 'Army Green'] },
    warranty: '1 Year Warranty',
    returnPolicy: '7 days return',
    tags: ['Speaker', 'Bluetooth', 'Portable', 'Waterproof', 'Bass'],
    rating: 4.72,
    reviewCount: 88,
    isBestSeller: true,
    isTrending: true,
    isDeal: true,
    relatedProductIds: ['prod-3', 'prod-14']
  },
  // 11. Gaming Mouse
  {
    id: 'prod-11',
    name: 'Autoflow StrikeForce Ultra Wireless Gaming Mouse',
    sku: 'AF-GM-SFU',
    barcode: '890123456011',
    slug: 'autoflow-strikeforce-ultra-gaming-mouse',
    brand: 'Autoflow',
    model: 'StrikeForce Ultra',
    category: 'Gaming Gear',
    subcategory: 'Gaming Mice',
    images: [
      'https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Pro-grade 30K DPI optical sensor with 8KHz polling rate, ultra-lightweight 58g magnesium alloy shell, optical switches rated for 100M clicks, and RGB underglow.',
    specifications: [
      { label: 'Sensor', value: 'Focus Pro 30K DPI Optical' },
      { label: 'Weight', value: '58g Ultra-Light' },
      { label: 'Polling Rate', value: '8000Hz HyperPolling' },
      { label: 'Battery', value: '70 Hours Wireless' }
    ],
    features: ['Optical Switches', 'Hyperscroll Wheel', 'On-board Memory', '5 Programmable Buttons'],
    regularPrice: 129,
    salePrice: 99,
    discount: 23,
    stockQuantity: 70,
    variants: { colors: ['Matte Black', 'Mercury White'] },
    warranty: '2 Years Warranty',
    returnPolicy: '7 days return',
    tags: ['Gaming', 'Mouse', 'Wireless', 'Ultra-Light', 'RGB'],
    rating: 4.81,
    reviewCount: 65,
    isNewArrival: true,
    isTrending: true,
    relatedProductIds: ['prod-5', 'prod-8']
  },
  // 12. SSD
  {
    id: 'prod-12',
    name: 'Autoflow HyperDrive 2TB NVMe Gen5 SSD',
    sku: 'AF-SSD-HD2T',
    barcode: '890123456012',
    slug: 'autoflow-hyperdrive-2tb-nvme-ssd',
    brand: 'Autoflow',
    model: 'HyperDrive Gen5',
    category: 'Storage & Memory',
    subcategory: 'SSD',
    images: [
      'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Blazing fast PCIe Gen5 NVMe SSD with sequential read speeds up to 14,000 MB/s. Built with 3D TLC NAND and DRAM cache for sustained performance.',
    specifications: [
      { label: 'Capacity', value: '2TB' },
      { label: 'Interface', value: 'PCIe Gen5 x4 NVMe 2.0' },
      { label: 'Read Speed', value: 'Up to 14,000 MB/s' },
      { label: 'Write Speed', value: 'Up to 12,000 MB/s' },
      { label: 'Endurance', value: '2400 TBW' }
    ],
    features: ['Hardware Encryption', 'DRAM Cache', 'SLC Caching', 'Heatsink Included'],
    regularPrice: 249,
    salePrice: 199,
    discount: 20,
    stockQuantity: 40,
    variants: { storages: ['1TB', '2TB', '4TB'] },
    warranty: '5 Years Warranty',
    returnPolicy: '15 days return',
    tags: ['SSD', 'NVMe', 'Gen5', 'Storage', 'PC Build'],
    rating: 4.91,
    reviewCount: 73,
    isBestSeller: true,
    isDeal: true,
    relatedProductIds: ['prod-17', 'prod-18']
  },
  // 13. Power Bank
  {
    id: 'prod-13',
    name: 'Autoflow MagPower 20000mAh Wireless Power Bank',
    sku: 'AF-PWR-MP20K',
    barcode: '890123456013',
    slug: 'autoflow-magpower-20000-wireless-power-bank',
    brand: 'Autoflow',
    model: 'MagPower 20K',
    category: 'Smart Home & Power',
    subcategory: 'Power Banks',
    images: [
      'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?q=80&w=800&auto=format&fit=crop'
    ],
    description: '20000mAh capacity with MagSafe wireless charging, 65W USB-C PD output, airline-safe design, LED display, and simultaneous 4-device charging.',
    specifications: [
      { label: 'Capacity', value: '20000mAh / 74Wh' },
      { label: 'Output', value: '65W USB-C PD + 15W MagSafe' },
      { label: 'Ports', value: '2x USB-C + 1x USB-A + Wireless' },
      { label: 'Weight', value: '420g' }
    ],
    features: ['MagSafe Compatible', 'LED Battery Display', 'Pass-Through Charging', 'Airline Safe'],
    regularPrice: 79,
    salePrice: 59,
    discount: 25,
    stockQuantity: 150,
    variants: { colors: ['Black', 'White', 'Purple'] },
    warranty: '1 Year Warranty',
    returnPolicy: '7 days return',
    tags: ['Power Bank', 'Wireless', 'MagSafe', 'Portable Charger'],
    rating: 4.76,
    reviewCount: 198,
    isBestSeller: true,
    isFlashSale: true,
    flashSaleEndTime: '2026-08-10T23:59:59Z',
    relatedProductIds: ['prod-7', 'prod-1']
  },
  // 14. Over-Ear Headphones
  {
    id: 'prod-14',
    name: 'Autoflow Studio Max ANC Over-Ear Headphones',
    sku: 'AF-AUD-SMAX',
    barcode: '890123456014',
    slug: 'autoflow-studio-max-anc-headphones',
    brand: 'Autoflow',
    model: 'Studio Max',
    category: 'Earbuds & Headphones',
    subcategory: 'Noise Cancelling',
    images: [
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Premium over-ear headphones with 50dB ANC, 50mm custom drivers, Hi-Res Audio certification, 40-hour battery, and memory foam ear cushions for all-day comfort.',
    specifications: [
      { label: 'Driver', value: '50mm Custom Dynamic' },
      { label: 'ANC', value: '50dB Adaptive Noise Cancellation' },
      { label: 'Battery', value: '40 Hours with ANC On' },
      { label: 'Audio', value: 'Hi-Res Audio, LDAC, aptX Adaptive' }
    ],
    features: ['Multi-Point Connection', 'Wear Detection', 'App EQ Customization', 'Foldable Design'],
    regularPrice: 349,
    salePrice: 279,
    discount: 20,
    stockQuantity: 35,
    variants: { colors: ['Midnight Black', 'Desert Sand', 'Deep Blue'] },
    warranty: '1 Year Warranty',
    returnPolicy: '15 days return',
    tags: ['Headphones', 'ANC', 'Over-Ear', 'Hi-Res', 'Wireless'],
    rating: 4.87,
    reviewCount: 124,
    isNewArrival: true,
    isFeatured: true,
    relatedProductIds: ['prod-3', 'prod-10']
  },
  // 15. Gaming Console Controller
  {
    id: 'prod-15',
    name: 'Autoflow Nexus Pro Wireless Gaming Controller',
    sku: 'AF-GM-NPC',
    barcode: '890123456015',
    slug: 'autoflow-nexus-pro-wireless-controller',
    brand: 'Autoflow',
    model: 'Nexus Pro',
    category: 'Gaming Gear',
    subcategory: 'Controllers',
    images: [
      'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Hall-effect analog sticks with zero drift, adaptive triggers, HD haptic feedback, 3.5mm headphone jack, and cross-platform compatibility with PC, PS5, Switch, and mobile.',
    specifications: [
      { label: 'Connectivity', value: '2.4GHz Dongle + Bluetooth 5.2 + USB-C' },
      { label: 'Battery', value: '30 Hours Playtime' },
      { label: 'Sticks', value: 'Hall-Effect (No Drift)' },
      { label: 'Compatible', value: 'PC, PS5, Switch, iOS, Android' }
    ],
    features: ['Hall-Effect Sticks', 'Adaptive Triggers', 'Macro Buttons', 'Gyro Aiming'],
    regularPrice: 69,
    salePrice: 54,
    discount: 21,
    stockQuantity: 90,
    variants: { colors: ['Cosmic Black', 'Glacier White', 'Cyber Red'] },
    warranty: '1 Year Warranty',
    returnPolicy: '7 days return',
    tags: ['Controller', 'Gaming', 'Wireless', 'Hall-Effect'],
    rating: 4.83,
    reviewCount: 45,
    isTrending: true,
    isDeal: true,
    relatedProductIds: ['prod-5', 'prod-11']
  },
  // 16. Action Camera
  {
    id: 'prod-16',
    name: 'Autoflow ActionX 5K Waterproof Sports Camera',
    sku: 'AF-CAM-AX5K',
    barcode: '890123456016',
    slug: 'autoflow-actionx-5k-sports-camera',
    brand: 'Autoflow',
    model: 'ActionX 5K',
    category: 'Drones & Cameras',
    subcategory: 'Action Cameras',
    images: [
      'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=800&auto=format&fit=crop'
    ],
    description: '5.3K 60fps video with HyperSmooth 6.0 stabilization, 27MP photos, 10m waterproof without case, voice control, and live streaming capability.',
    specifications: [
      { label: 'Video', value: '5.3K60 / 4K120' },
      { label: 'Photo', value: '27MP with SuperPhoto' },
      { label: 'Stabilization', value: 'HyperSmooth 6.0' },
      { label: 'Waterproof', value: '10m Without Housing' }
    ],
    features: ['Voice Control', 'Live Streaming', 'TimeWarp 3.0', 'GPS'],
    regularPrice: 399,
    salePrice: 349,
    discount: 12,
    stockQuantity: 28,
    variants: { colors: ['Black'] },
    warranty: '1 Year Warranty',
    returnPolicy: '7 days return (unopened)',
    tags: ['Action Camera', '5K', 'Waterproof', 'Sports', 'Vlog'],
    rating: 4.79,
    reviewCount: 57,
    isNewArrival: true,
    relatedProductIds: ['prod-6']
  },
  // 17. Graphics Card
  {
    id: 'prod-17',
    name: 'Autoflow GeForce RTX 5080 16GB GDDR7 OC',
    sku: 'AF-GPU-5080',
    barcode: '890123456017',
    slug: 'autoflow-geforce-rtx-5080-16gb',
    brand: 'Autoflow',
    model: 'RTX 5080 OC',
    category: 'Graphics Cards',
    subcategory: 'NVIDIA GeForce',
    images: [
      'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Next-gen NVIDIA Blackwell architecture with 16GB GDDR7, ray tracing cores, DLSS 4 Frame Generation, and triple-fan cooling design for extreme 4K gaming performance.',
    specifications: [
      { label: 'GPU', value: 'NVIDIA Blackwell GB203' },
      { label: 'VRAM', value: '16GB GDDR7 256-bit' },
      { label: 'Boost Clock', value: '2.7 GHz OC' },
      { label: 'TDP', value: '300W' },
      { label: 'Outputs', value: '3x DisplayPort 2.1 + 1x HDMI 2.1b' }
    ],
    features: ['DLSS 4', 'Ray Tracing 5th Gen', 'AV1 Encoding', 'Resizable BAR'],
    regularPrice: 999,
    salePrice: 899,
    discount: 10,
    stockQuantity: 12,
    variants: {},
    warranty: '3 Years Warranty',
    returnPolicy: '15 days return',
    tags: ['GPU', 'RTX', 'NVIDIA', 'Gaming', '4K'],
    rating: 4.94,
    reviewCount: 29,
    isFeatured: true,
    isTrending: true,
    relatedProductIds: ['prod-8', 'prod-12']
  },
  // 18. External HDD
  {
    id: 'prod-18',
    name: 'Autoflow VaultDrive 4TB USB-C External HDD',
    sku: 'AF-HDD-VD4T',
    barcode: '890123456018',
    slug: 'autoflow-vaultdrive-4tb-external-hdd',
    brand: 'Autoflow',
    model: 'VaultDrive 4TB',
    category: 'Storage & Memory',
    subcategory: 'HDD',
    images: [
      'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?q=80&w=800&auto=format&fit=crop'
    ],
    description: '4TB portable external hard drive with USB-C 3.2 Gen1, hardware encryption, shock-resistant design, and automatic backup software included.',
    specifications: [
      { label: 'Capacity', value: '4TB' },
      { label: 'Interface', value: 'USB-C 3.2 Gen1 (USB-A adapter included)' },
      { label: 'Speed', value: 'Up to 130 MB/s' },
      { label: 'Encryption', value: '256-bit AES Hardware' }
    ],
    features: ['Auto Backup Software', 'Drop Resistant (2m)', 'Password Protection', 'Mac + PC Compatible'],
    regularPrice: 109,
    salePrice: 89,
    discount: 18,
    stockQuantity: 55,
    variants: { colors: ['Black', 'Blue', 'Red'] },
    warranty: '3 Years Warranty',
    returnPolicy: '15 days return',
    tags: ['HDD', 'External', 'Backup', 'Storage', 'Portable'],
    rating: 4.65,
    reviewCount: 112,
    isBestSeller: true,
    relatedProductIds: ['prod-12']
  },
  // 19. WiFi Router
  {
    id: 'prod-19',
    name: 'Autoflow NetStorm WiFi 7 Mesh Router System (3-Pack)',
    sku: 'AF-NET-NS7M3',
    barcode: '890123456019',
    slug: 'autoflow-netstorm-wifi7-mesh-router',
    brand: 'Autoflow',
    model: 'NetStorm WiFi 7',
    category: 'Networking',
    subcategory: 'Mesh Systems',
    images: [
      'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'WiFi 7 tri-band mesh system covering 7500 sq ft. Speeds up to 22Gbps combined, MLO technology, and supports 200+ connected devices simultaneously.',
    specifications: [
      { label: 'WiFi Standard', value: 'WiFi 7 (802.11be)' },
      { label: 'Bands', value: 'Tri-Band 2.4GHz + 5GHz + 6GHz' },
      { label: 'Speed', value: 'Up to 22 Gbps Combined' },
      { label: 'Coverage', value: '7500 sq ft (3-Pack)' }
    ],
    features: ['MLO Technology', 'WPA3 Security', 'Parental Controls', 'QoS Gaming Mode'],
    regularPrice: 599,
    salePrice: 499,
    discount: 16,
    stockQuantity: 18,
    variants: {},
    warranty: '2 Years Warranty',
    returnPolicy: '15 days return',
    tags: ['Router', 'WiFi 7', 'Mesh', 'Networking'],
    rating: 4.82,
    reviewCount: 34,
    isNewArrival: true,
    relatedProductIds: []
  },
  // 20. Smart Home Security Camera
  {
    id: 'prod-20',
    name: 'Autoflow GuardEye 4K PTZ Smart Security Camera',
    sku: 'AF-SH-GE4K',
    barcode: '890123456020',
    slug: 'autoflow-guardeye-4k-security-camera',
    brand: 'Autoflow',
    model: 'GuardEye 4K',
    category: 'Smart Home & Power',
    subcategory: 'Security Cameras',
    images: [
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=800&auto=format&fit=crop'
    ],
    description: '4K Ultra HD PTZ camera with 360° pan, AI person detection, color night vision, two-way audio, and local + cloud storage options.',
    specifications: [
      { label: 'Resolution', value: '4K Ultra HD (3840x2160)' },
      { label: 'Pan/Tilt', value: '355° Pan / 120° Tilt' },
      { label: 'Night Vision', value: 'Color Night Vision 30m' },
      { label: 'Storage', value: 'microSD (up to 512GB) + Cloud' }
    ],
    features: ['AI Person Detection', 'Two-Way Audio', 'Activity Zones', 'RTSP Support'],
    regularPrice: 79,
    salePrice: 59,
    discount: 25,
    stockQuantity: 65,
    variants: { colors: ['White'] },
    warranty: '1 Year Warranty',
    returnPolicy: '7 days return',
    tags: ['Security Camera', 'Smart Home', '4K', 'PTZ', 'AI'],
    rating: 4.68,
    reviewCount: 89,
    isTrending: true,
    isDeal: true,
    relatedProductIds: ['prod-19']
  },
  // 21. Desktop PC
  {
    id: 'prod-21',
    name: 'Autoflow ThunderCore i9 Gaming Desktop PC',
    sku: 'AF-DT-TC-I9',
    barcode: '890123456021',
    slug: 'autoflow-thundercore-i9-gaming-desktop',
    brand: 'Autoflow',
    model: 'ThunderCore i9',
    category: 'Laptops & PCs',
    subcategory: 'Desktop PCs',
    images: [
      'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Pre-built gaming powerhouse with Intel i9-14900KS, RTX 5080, 64GB DDR5, 2TB NVMe Gen5 SSD, custom liquid cooling, and tempered glass RGB chassis.',
    specifications: [
      { label: 'CPU', value: 'Intel Core i9-14900KS 24-Core' },
      { label: 'GPU', value: 'NVIDIA RTX 5080 16GB' },
      { label: 'RAM', value: '64GB DDR5 6400MHz' },
      { label: 'Storage', value: '2TB NVMe Gen5 + 4TB HDD' },
      { label: 'Cooling', value: '360mm AIO Liquid Cooler' }
    ],
    features: ['Custom Liquid Cooling', 'Tempered Glass Case', 'RGB ARGB Sync', 'WiFi 7 Built-in'],
    regularPrice: 3499,
    salePrice: 2999,
    discount: 14,
    stockQuantity: 5,
    variants: {},
    warranty: '3 Years Comprehensive Warranty',
    returnPolicy: '15 days return (unopened)',
    tags: ['Desktop', 'Gaming PC', 'i9', 'RTX 5080', 'Custom Build'],
    rating: 4.97,
    reviewCount: 15,
    isFeatured: true,
    relatedProductIds: ['prod-17', 'prod-8', 'prod-12']
  },
  // 22. Phone Case / Accessory
  {
    id: 'prod-22',
    name: 'Autoflow ArmorShield MagSafe Phone Case',
    sku: 'AF-ACC-ASC',
    barcode: '890123456022',
    slug: 'autoflow-armorshield-magsafe-phone-case',
    brand: 'Autoflow',
    model: 'ArmorShield',
    category: 'Accessories',
    subcategory: 'Phone Cases',
    images: [
      'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Military-grade drop protection MagSafe case with built-in kickstand, antimicrobial coating, and precision camera cutouts. Compatible with Autoflow Titan Phone 16 series.',
    specifications: [
      { label: 'Protection', value: 'MIL-STD-810G (3m Drop)' },
      { label: 'Material', value: 'Polycarbonate + TPU + Aluminum' },
      { label: 'MagSafe', value: 'Built-in N52 Magnets' }
    ],
    features: ['Built-in Kickstand', 'Antimicrobial Coating', 'Raised Camera Lip', 'MagSafe Compatible'],
    regularPrice: 39,
    salePrice: 29,
    discount: 25,
    stockQuantity: 200,
    variants: {
      colors: ['Carbon Black', 'Navy Blue', 'Forest Green', 'Desert Tan', 'Clear']
    },
    warranty: 'Lifetime Warranty',
    returnPolicy: '30 days return',
    tags: ['Phone Case', 'MagSafe', 'Protection', 'Accessory'],
    rating: 4.71,
    reviewCount: 234,
    isBestSeller: true,
    isDeal: true,
    relatedProductIds: ['prod-1', 'prod-23']
  },
  // 23. USB-C Cable
  {
    id: 'prod-23',
    name: 'Autoflow FlexLink 240W USB-C Braided Cable 2m',
    sku: 'AF-ACC-FL240',
    barcode: '890123456023',
    slug: 'autoflow-flexlink-240w-usb-c-cable',
    brand: 'Autoflow',
    model: 'FlexLink 240W',
    category: 'Accessories',
    subcategory: 'Cables',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=800&auto=format&fit=crop'
    ],
    description: '240W PD3.1 USB-C to USB-C cable with 40Gbps data transfer, Thunderbolt 4 compatible, nylon braided with aluminum connectors, 2m length.',
    specifications: [
      { label: 'Power', value: '240W PD3.1 Max' },
      { label: 'Data', value: '40Gbps USB4 / Thunderbolt 4' },
      { label: 'Length', value: '2 meters' },
      { label: 'Material', value: 'Nylon Braided + Aluminum' }
    ],
    features: ['E-Marker Chip', 'Bend Tested 30K+', 'Video Output 8K60', 'Universal Compatibility'],
    regularPrice: 29,
    salePrice: 19,
    discount: 34,
    stockQuantity: 300,
    variants: {
      colors: ['Black', 'White', 'Space Gray'],
      sizes: ['1m', '2m', '3m']
    },
    warranty: 'Lifetime Warranty',
    returnPolicy: '30 days return',
    tags: ['Cable', 'USB-C', 'Thunderbolt', 'Fast Charge'],
    rating: 4.82,
    reviewCount: 342,
    isFlashSale: true,
    isDeal: true,
    flashSaleEndTime: '2026-08-10T23:59:59Z',
    relatedProductIds: ['prod-7', 'prod-13']
  },
  // 24. Smart Plug
  {
    id: 'prod-24',
    name: 'Autoflow SmartPlug Mini WiFi 4-Pack',
    sku: 'AF-SH-SPM4',
    barcode: '890123456024',
    slug: 'autoflow-smartplug-mini-wifi-4-pack',
    brand: 'Autoflow',
    model: 'SmartPlug Mini',
    category: 'Smart Home & Power',
    subcategory: 'Smart Plugs',
    images: [
      'https://images.unsplash.com/photo-1558089687-f282ffcbc126?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'WiFi smart plugs with energy monitoring, voice control via Alexa/Google, timer scheduling, away mode, and compact design that won\'t block adjacent outlets.',
    specifications: [
      { label: 'Connectivity', value: 'WiFi 2.4GHz' },
      { label: 'Max Load', value: '15A / 1800W' },
      { label: 'Compatibility', value: 'Alexa, Google Home, SmartThings' },
      { label: 'Quantity', value: '4 Pack' }
    ],
    features: ['Energy Monitoring', 'Schedule & Timer', 'Away Mode', 'Voice Control', 'No Hub Required'],
    regularPrice: 39,
    salePrice: 29,
    discount: 25,
    stockQuantity: 180,
    variants: {},
    warranty: '1 Year Warranty',
    returnPolicy: '15 days return',
    tags: ['Smart Plug', 'WiFi', 'Smart Home', 'Alexa', 'Energy'],
    rating: 4.58,
    reviewCount: 156,
    isDeal: true,
    relatedProductIds: ['prod-20', 'prod-19']
  }
];

// ---- ORDERS (8 diverse orders) ----

export const INITIAL_ORDERS: Order[] = [
  {
    id: 'ord-1001',
    orderNumber: 'AF-BD-89210',
    date: '2026-08-01 14:32',
    customerName: 'Rafiqul Islam',
    customerEmail: 'rafiqul@example.com',
    customerPhone: '+880 1712-345678',
    shippingAddress: { address: 'House 42, Road 11, Banani', city: 'Dhaka', state: 'Dhaka Division', country: 'Bangladesh', postalCode: '1213' },
    items: [{ product: INITIAL_PRODUCTS[0], quantity: 1, selectedColor: 'Natural Titanium', selectedStorage: '512GB' }],
    paymentMethod: 'bKash',
    paymentStatus: 'PAID',
    status: 'PROCESSING',
    subtotal: 1149,
    discount: 50,
    shippingCost: 5,
    total: 1104,
    currency: 'BDT',
    couponCode: 'AUTOFLOW50',
    trackingNumber: 'TRK-BD-90812',
    timeline: [
      { status: 'PENDING', timestamp: '2026-08-01 14:32', note: 'Order placed' },
      { status: 'CONFIRMED', timestamp: '2026-08-01 14:35', note: 'Payment confirmed via bKash' },
      { status: 'PROCESSING', timestamp: '2026-08-01 15:00', note: 'Order being prepared' }
    ]
  },
  {
    id: 'ord-1002',
    orderNumber: 'AF-IN-55419',
    date: '2026-08-02 08:15',
    customerName: 'Priya Sundaram',
    customerEmail: 'priya.s@example.com',
    customerPhone: '+91 98765-43210',
    shippingAddress: { address: '204, Park Avenue, Indiranagar', city: 'Bengaluru', state: 'Karnataka', country: 'India', postalCode: '560038' },
    items: [{ product: INITIAL_PRODUCTS[2], quantity: 2, selectedColor: 'Glossy White' }],
    paymentMethod: 'UPI',
    paymentStatus: 'PAID',
    status: 'SHIPPED',
    subtotal: 278,
    discount: 0,
    shippingCost: 10,
    total: 288,
    currency: 'INR',
    trackingNumber: 'TRK-IN-11042',
    timeline: [
      { status: 'PENDING', timestamp: '2026-08-02 08:15' },
      { status: 'CONFIRMED', timestamp: '2026-08-02 08:16', note: 'UPI payment verified' },
      { status: 'PROCESSING', timestamp: '2026-08-02 09:00' },
      { status: 'SHIPPED', timestamp: '2026-08-02 12:30', note: 'Dispatched via Blue Dart' }
    ]
  },
  {
    id: 'ord-1003',
    orderNumber: 'AF-BD-71034',
    date: '2026-07-30 11:20',
    customerName: 'Asha Begum',
    customerEmail: 'asha@example.com',
    customerPhone: '+880 1812-554433',
    shippingAddress: { address: 'Flat 3B, Green Tower, Uttara', city: 'Dhaka', state: 'Dhaka Division', country: 'Bangladesh', postalCode: '1230' },
    items: [
      { product: INITIAL_PRODUCTS[4], quantity: 1, selectedColor: 'Cyber Punk Black' },
      { product: INITIAL_PRODUCTS[10], quantity: 1, selectedColor: 'Matte Black' }
    ],
    paymentMethod: 'Nagad',
    paymentStatus: 'PAID',
    status: 'DELIVERED',
    subtotal: 208,
    discount: 20,
    shippingCost: 5,
    total: 193,
    currency: 'BDT',
    couponCode: 'GADGET10',
    trackingNumber: 'TRK-BD-81233',
    timeline: [
      { status: 'PENDING', timestamp: '2026-07-30 11:20' },
      { status: 'CONFIRMED', timestamp: '2026-07-30 11:25' },
      { status: 'SHIPPED', timestamp: '2026-07-31 09:00' },
      { status: 'DELIVERED', timestamp: '2026-08-01 14:00', note: 'Signed by Asha Begum' }
    ]
  },
  {
    id: 'ord-1004',
    orderNumber: 'AF-IN-88201',
    date: '2026-07-29 16:45',
    customerName: 'Vikram Malhotra',
    customerEmail: 'vikram@example.com',
    customerPhone: '+91 99887-76655',
    shippingAddress: { address: '15/B, MG Road, Connaught Place', city: 'New Delhi', state: 'Delhi', country: 'India', postalCode: '110001' },
    items: [{ product: INITIAL_PRODUCTS[1], quantity: 1, selectedColor: 'Space Black', selectedStorage: '1TB' }],
    paymentMethod: 'Razorpay',
    paymentStatus: 'PAID',
    status: 'CONFIRMED',
    subtotal: 2299,
    discount: 0,
    shippingCost: 0,
    total: 2299,
    currency: 'INR',
    trackingNumber: 'TRK-IN-22901',
    timeline: [
      { status: 'PENDING', timestamp: '2026-07-29 16:45' },
      { status: 'CONFIRMED', timestamp: '2026-07-29 16:50', note: 'Razorpay payment confirmed' }
    ]
  },
  {
    id: 'ord-1005',
    orderNumber: 'AF-BD-45678',
    date: '2026-07-28 09:30',
    customerName: 'Kamal Hossain',
    customerEmail: 'kamal@example.com',
    customerPhone: '+880 1912-112233',
    shippingAddress: { address: 'House 7, Road 3, GEC Circle', city: 'Chittagong', state: 'Chittagong Division', country: 'Bangladesh', postalCode: '4000' },
    items: [{ product: INITIAL_PRODUCTS[6], quantity: 2 }],
    paymentMethod: 'Cash on Delivery',
    paymentStatus: 'PENDING',
    status: 'PENDING',
    subtotal: 118,
    discount: 0,
    shippingCost: 5,
    total: 123,
    currency: 'BDT',
    trackingNumber: 'TRK-BD-55544',
    timeline: [
      { status: 'PENDING', timestamp: '2026-07-28 09:30', note: 'COD order placed' }
    ]
  },
  {
    id: 'ord-1006',
    orderNumber: 'AF-IN-33290',
    date: '2026-07-25 20:10',
    customerName: 'Sneha Gupta',
    customerEmail: 'sneha@example.com',
    customerPhone: '+91 88776-55443',
    shippingAddress: { address: '42, Jubilee Hills, Road No. 36', city: 'Hyderabad', state: 'Telangana', country: 'India', postalCode: '500033' },
    items: [{ product: INITIAL_PRODUCTS[3], quantity: 1, selectedColor: 'Ocean Blue Strap' }],
    paymentMethod: 'PhonePe',
    paymentStatus: 'PAID',
    status: 'CANCELLED',
    subtotal: 429,
    discount: 0,
    shippingCost: 8,
    total: 437,
    currency: 'INR',
    trackingNumber: 'TRK-IN-99001',
    notes: 'Customer requested cancellation - ordered wrong size',
    timeline: [
      { status: 'PENDING', timestamp: '2026-07-25 20:10' },
      { status: 'CONFIRMED', timestamp: '2026-07-25 20:12' },
      { status: 'CANCELLED', timestamp: '2026-07-26 10:00', note: 'Cancelled by customer request' }
    ]
  },
  {
    id: 'ord-1007',
    orderNumber: 'AF-BD-92100',
    date: '2026-07-22 13:15',
    customerName: 'Nusrat Jahan',
    customerEmail: 'nusrat@example.com',
    customerPhone: '+880 1612-998877',
    shippingAddress: { address: 'House 25, Sector 7, Uttara', city: 'Dhaka', state: 'Dhaka Division', country: 'Bangladesh', postalCode: '1230' },
    items: [
      { product: INITIAL_PRODUCTS[21], quantity: 2, selectedColor: 'Carbon Black' },
      { product: INITIAL_PRODUCTS[22], quantity: 3, selectedColor: 'Black' }
    ],
    paymentMethod: 'SSLCommerz',
    paymentStatus: 'PAID',
    status: 'DELIVERED',
    subtotal: 115,
    discount: 0,
    shippingCost: 5,
    total: 120,
    currency: 'BDT',
    trackingNumber: 'TRK-BD-33456',
    timeline: [
      { status: 'PENDING', timestamp: '2026-07-22 13:15' },
      { status: 'CONFIRMED', timestamp: '2026-07-22 13:20' },
      { status: 'SHIPPED', timestamp: '2026-07-23 10:00' },
      { status: 'DELIVERED', timestamp: '2026-07-24 15:30' }
    ]
  },
  {
    id: 'ord-1008',
    orderNumber: 'AF-IN-67890',
    date: '2026-07-20 07:45',
    customerName: 'Arjun Patel',
    customerEmail: 'arjun@example.com',
    customerPhone: '+91 77665-44332',
    shippingAddress: { address: '18, Bandra West, Turner Road', city: 'Mumbai', state: 'Maharashtra', country: 'India', postalCode: '400050' },
    items: [{ product: INITIAL_PRODUCTS[16], quantity: 1 }],
    paymentMethod: 'Google Pay',
    paymentStatus: 'REFUNDED',
    status: 'RETURNED',
    subtotal: 899,
    discount: 0,
    shippingCost: 0,
    total: 899,
    currency: 'INR',
    trackingNumber: 'TRK-IN-44567',
    notes: 'Product returned due to DOA (Dead on Arrival). Full refund processed.',
    timeline: [
      { status: 'PENDING', timestamp: '2026-07-20 07:45' },
      { status: 'CONFIRMED', timestamp: '2026-07-20 07:50' },
      { status: 'SHIPPED', timestamp: '2026-07-21 09:00' },
      { status: 'DELIVERED', timestamp: '2026-07-23 14:00' },
      { status: 'RETURNED', timestamp: '2026-07-25 10:00', note: 'DOA - return accepted' },
      { status: 'REFUNDED', timestamp: '2026-07-26 11:00', note: 'Full refund via Google Pay' }
    ]
  }
];

// ---- COUPONS (5 diverse coupons) ----

export const INITIAL_COUPONS: Coupon[] = [
  {
    id: 'c-1',
    code: 'AUTOFLOW50',
    discountType: 'FIXED',
    discountValue: 50,
    minPurchase: 500,
    expiresAt: '2026-12-31',
    usageLimit: 100,
    usedCount: 23,
    isActive: true
  },
  {
    id: 'c-2',
    code: 'GADGET10',
    discountType: 'PERCENTAGE',
    discountValue: 10,
    minPurchase: 100,
    maxDiscount: 200,
    expiresAt: '2026-12-31',
    usageLimit: 500,
    usedCount: 87,
    isActive: true
  },
  {
    id: 'c-3',
    code: 'FREESHIP',
    discountType: 'FREE_SHIPPING',
    discountValue: 0,
    minPurchase: 50,
    expiresAt: '2026-09-30',
    usageLimit: 200,
    usedCount: 45,
    isActive: true
  },
  {
    id: 'c-4',
    code: 'WELCOME20',
    discountType: 'PERCENTAGE',
    discountValue: 20,
    minPurchase: 200,
    maxDiscount: 100,
    expiresAt: '2026-12-31',
    usageLimit: 1000,
    usedCount: 156,
    isActive: true
  },
  {
    id: 'c-5',
    code: 'SUMMER100',
    discountType: 'FIXED',
    discountValue: 100,
    minPurchase: 1000,
    expiresAt: '2026-08-31',
    usageLimit: 50,
    usedCount: 12,
    isActive: true
  }
];

// ---- PAYMENT GATEWAYS ----

export const INITIAL_GATEWAYS: PaymentGatewayConfig[] = [
  // Bangladesh
  { id: 'gw-bkash', name: 'bKash', country: 'Bangladesh', enabled: true, feePercentage: 1.5 },
  { id: 'gw-nagad', name: 'Nagad', country: 'Bangladesh', enabled: true, feePercentage: 1.2 },
  { id: 'gw-rocket', name: 'Rocket', country: 'Bangladesh', enabled: true, feePercentage: 1.5 },
  { id: 'gw-ssl', name: 'SSLCommerz', country: 'Bangladesh', enabled: true, feePercentage: 2.0 },
  { id: 'gw-bd-bank', name: 'Bank Transfer', country: 'Bangladesh', enabled: true, feePercentage: 0 },
  { id: 'gw-bd-cod', name: 'Cash on Delivery', country: 'Bangladesh', enabled: true, feePercentage: 0 },
  // India
  { id: 'gw-razorpay', name: 'Razorpay', country: 'India', enabled: true, feePercentage: 2.0 },
  { id: 'gw-upi', name: 'UPI / BHIM', country: 'India', enabled: true, feePercentage: 0 },
  { id: 'gw-phonepe', name: 'PhonePe', country: 'India', enabled: true, feePercentage: 0 },
  { id: 'gw-googlepay', name: 'Google Pay', country: 'India', enabled: true, feePercentage: 0 },
  { id: 'gw-paytm', name: 'Paytm', country: 'India', enabled: true, feePercentage: 1.5 },
  { id: 'gw-in-cod', name: 'Cash on Delivery', country: 'India', enabled: true, feePercentage: 0 },
];

// ---- BRANDS ----

export const INITIAL_BRANDS: Brand[] = [
  { id: 'br-1', name: 'Autoflow', slug: 'autoflow', logo: '⚡', productCount: 24 },
  { id: 'br-2', name: 'Apple', slug: 'apple', logo: '🍎', productCount: 0 },
  { id: 'br-3', name: 'Samsung', slug: 'samsung', logo: '📱', productCount: 0 },
  { id: 'br-4', name: 'Sony', slug: 'sony', logo: '🎧', productCount: 0 },
  { id: 'br-5', name: 'NVIDIA', slug: 'nvidia', logo: '🎮', productCount: 0 },
  { id: 'br-6', name: 'DJI', slug: 'dji', logo: '🚁', productCount: 0 },
  { id: 'br-7', name: 'Logitech', slug: 'logitech', logo: '🖱️', productCount: 0 },
  { id: 'br-8', name: 'Bose', slug: 'bose', logo: '🔊', productCount: 0 },
  { id: 'br-9', name: 'Xiaomi', slug: 'xiaomi', logo: '📲', productCount: 0 },
  { id: 'br-10', name: 'Anker', slug: 'anker', logo: '🔋', productCount: 0 },
];

// ---- BLOG POSTS ----

export const INITIAL_BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Top 10 Smartphones to Buy in 2026 — Complete Buyer\'s Guide',
    slug: 'top-10-smartphones-2026-buyers-guide',
    excerpt: 'Our experts tested over 50 smartphones to bring you the definitive list of the best phones for every budget and use case in 2026.',
    content: `## Introduction\n\nThe smartphone market in 2026 has never been more exciting. From AI-powered cameras to week-long battery life, here are our top picks.\n\n## 1. Autoflow Titan Phone 16 Pro Max\n\nThe undisputed king of smartphones. With its A18 Pro chip, 50MP triple camera, and titanium build, this phone sets the standard for what a flagship should be.\n\n### Key Highlights\n- 6.9" OLED 120Hz ProMotion display\n- 5000 mAh battery with 45W fast charging\n- Available in 4 stunning colors\n\n## 2. Samsung Galaxy S26 Ultra\n\nSamsung continues to push boundaries with the S26 Ultra, featuring a 200MP camera sensor and built-in S Pen.\n\n## 3. Google Pixel 10 Pro\n\nThe best pure Android experience with Google's Tensor G5 chip and legendary computational photography.\n\n## Conclusion\n\nWhether you're a photographer, gamer, or business professional, there's a perfect smartphone for you in 2026. Visit our [shop](/shop?category=smartphones) to explore all options.`,
    coverImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop',
    author: 'Alim Rahman',
    authorAvatar: '',
    category: 'Buying Guides',
    tags: ['Smartphones', '2026', 'Buying Guide', 'Flagship'],
    publishedAt: '2026-07-28',
    readTime: '8 min read',
    comments: [
      { id: 'bc-1', author: 'Tanvir', email: 'tanvir@example.com', content: 'Great article! I just ordered the Titan Phone 16 Pro Max.', date: '2026-07-29' }
    ]
  },
  {
    id: 'blog-2',
    title: 'How to Set Up Your Perfect Home Office with Smart Gadgets',
    slug: 'perfect-home-office-smart-gadgets-setup',
    excerpt: 'Transform your workspace with the right monitors, keyboards, and smart devices. Here\'s our step-by-step guide.',
    content: `## Building the Ultimate Home Office\n\nRemote work is here to stay, and having the right tech setup can dramatically boost your productivity.\n\n## Essential Monitor\n\nThe Autoflow Vision 34" Curved OLED is our top pick. The ultrawide format gives you more screen real estate than dual monitors.\n\n## Keyboard & Mouse\n\nOur CyberBlade Mechanical Keyboard paired with the StrikeForce Ultra Mouse creates the perfect input combo.\n\n## Smart Home Integration\n\nAdd smart plugs to automate your office lighting and equipment power management.\n\n## Conclusion\n\nInvesting in quality peripherals pays for itself in increased productivity and comfort.`,
    coverImage: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop',
    author: 'Alim Rahman',
    category: 'Tips & Tricks',
    tags: ['Home Office', 'Productivity', 'Smart Home', 'Setup Guide'],
    publishedAt: '2026-07-25',
    readTime: '6 min read',
    comments: []
  },
  {
    id: 'blog-3',
    title: 'WiFi 7 Explained: Everything You Need to Know',
    slug: 'wifi-7-explained-everything-you-need-to-know',
    excerpt: 'WiFi 7 is the next leap in wireless connectivity. Learn what it means for your home network and which devices support it.',
    content: `## What is WiFi 7?\n\nWiFi 7 (802.11be) is the latest wireless standard offering speeds up to 46 Gbps, Multi-Link Operation, and 320 MHz channels.\n\n## Key Features\n\n- **Speed**: Up to 4x faster than WiFi 6E\n- **Latency**: Sub-1ms latency for gaming\n- **MLO**: Connect across multiple bands simultaneously\n- **Capacity**: Support 200+ devices\n\n## Who Needs WiFi 7?\n\nIf you have a smart home with dozens of connected devices, stream 4K/8K content, or need lag-free gaming, WiFi 7 is worth the upgrade.\n\n## Our Recommendation\n\nThe Autoflow NetStorm WiFi 7 Mesh Router is the best value WiFi 7 system available.`,
    coverImage: 'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?q=80&w=800&auto=format&fit=crop',
    author: 'Alim Rahman',
    category: 'Tech News',
    tags: ['WiFi 7', 'Networking', 'Technology', 'Router'],
    publishedAt: '2026-07-20',
    readTime: '5 min read',
    comments: [
      { id: 'bc-2', author: 'Rahul', email: 'rahul@example.com', content: 'Very informative! Just upgraded my router based on this article.', date: '2026-07-22' }
    ]
  }
];

// ---- SUPPORT TICKETS (sample) ----

export const INITIAL_TICKETS: SupportTicket[] = [
  {
    id: 'tkt-1',
    subject: 'Order AF-BD-89210 delivery delay',
    message: 'My order was supposed to arrive yesterday but tracking shows no update since 2 days.',
    status: 'OPEN',
    priority: 'HIGH',
    createdAt: '2026-08-01 16:00',
    updatedAt: '2026-08-01 16:00',
    replies: [
      { id: 'tr-1', author: 'Admin Support', isAdmin: true, message: 'We apologize for the delay. We have escalated this with our courier partner. Expected delivery within 24 hours.', date: '2026-08-01 17:30' }
    ]
  },
  {
    id: 'tkt-2',
    subject: 'Request for product exchange',
    message: 'I received a Navy Blue earbuds but I ordered Matte Black. Please arrange an exchange.',
    status: 'IN_PROGRESS',
    priority: 'MEDIUM',
    createdAt: '2026-07-30 10:20',
    updatedAt: '2026-07-31 09:00',
    replies: []
  }
];

// ---- NOTIFICATIONS (sample) ----

export const INITIAL_NOTIFICATIONS: Notification[] = [
  { id: 'notif-1', type: 'ORDER', title: 'Order Confirmed', message: 'Your order AF-BD-89210 has been confirmed and is being processed.', isRead: true, createdAt: '2026-08-01 14:35', link: '/account' },
  { id: 'notif-2', type: 'PROMOTION', title: 'Flash Sale Live!', message: 'Up to 34% OFF on chargers, cables, and power banks. Limited time only!', isRead: false, createdAt: '2026-08-01 10:00', link: '/shop?filter=flash' },
  { id: 'notif-3', type: 'STOCK', title: 'Back in Stock', message: 'Autoflow Vision 34" OLED Monitor is back in stock! Only 8 units left.', isRead: false, createdAt: '2026-07-31 08:00', link: '/product/autoflow-vision-34-curved-oled-monitor' },
  { id: 'notif-4', type: 'SYSTEM', title: 'Welcome to Autoflow', message: 'Thank you for joining Autoflow. Enjoy 10% OFF with code WELCOME20 on your first order.', isRead: true, createdAt: '2026-07-28 12:00' }
];

// ---- WAREHOUSES ----

export const INITIAL_WAREHOUSES: Warehouse[] = [
  { id: 'wh-1', name: 'Dhaka Central Warehouse', location: 'Tejgaon, Dhaka, Bangladesh', manager: 'Karim Uddin', productsCount: 450 },
  { id: 'wh-2', name: 'Mumbai Distribution Hub', location: 'Andheri East, Mumbai, India', manager: 'Rohit Sharma', productsCount: 380 },
  { id: 'wh-3', name: 'Chittagong Port Facility', location: 'Agrabad, Chittagong, Bangladesh', manager: 'Habib Rahman', productsCount: 120 }
];

// ---- SUPPLIERS ----

export const INITIAL_SUPPLIERS: Supplier[] = [
  { id: 'sup-1', name: 'TechSource Global Ltd', email: 'info@techsource.com', phone: '+86 400-123-4567', country: 'China', productsSupplied: 18 },
  { id: 'sup-2', name: 'ElectroParts Bangladesh', email: 'sales@electroparts.bd', phone: '+880 2-9875432', country: 'Bangladesh', productsSupplied: 8 },
  { id: 'sup-3', name: 'IndiaChip Distributors', email: 'orders@indiachip.in', phone: '+91 22-4567890', country: 'India', productsSupplied: 12 }
];

// ---- STOCK HISTORY (sample entries) ----

export const INITIAL_STOCK_ENTRIES: StockEntry[] = [
  { id: 'se-1', productId: 'prod-1', productName: 'Autoflow Titan Phone 16 Pro Max', previousStock: 30, newStock: 45, change: 15, reason: 'New shipment received from TechSource', date: '2026-07-28' },
  { id: 'se-2', productId: 'prod-8', productName: 'Autoflow Vision 34" OLED Monitor', previousStock: 0, newStock: 8, change: 8, reason: 'Restocked after high demand', date: '2026-07-31' },
  { id: 'se-3', productId: 'prod-21', productName: 'Autoflow ThunderCore i9 Desktop', previousStock: 10, newStock: 5, change: -5, reason: '5 units sold', date: '2026-08-01' }
];

// ---- SHIPPING ZONES ----

export const INITIAL_SHIPPING_ZONES: ShippingZone[] = [
  {
    id: 'sz-1',
    name: 'Bangladesh',
    countries: ['Bangladesh'],
    methods: [
      { id: 'sm-1', name: 'Standard Delivery', description: '5-7 business days', cost: 5, estimatedDays: '5-7', isEnabled: true },
      { id: 'sm-2', name: 'Express Delivery', description: '1-3 business days', cost: 15, estimatedDays: '1-3', isEnabled: true },
      { id: 'sm-3', name: 'Store Pickup', description: 'Pick up from Dhaka office', cost: 0, estimatedDays: '1', isEnabled: true },
      { id: 'sm-4', name: 'Free Shipping', description: 'Orders over $100', cost: 0, estimatedDays: '5-7', isEnabled: true }
    ]
  },
  {
    id: 'sz-2',
    name: 'India',
    countries: ['India'],
    methods: [
      { id: 'sm-5', name: 'Standard Delivery', description: '5-10 business days', cost: 8, estimatedDays: '5-10', isEnabled: true },
      { id: 'sm-6', name: 'Express Delivery', description: '2-4 business days', cost: 20, estimatedDays: '2-4', isEnabled: true },
      { id: 'sm-7', name: 'Free Shipping', description: 'Orders over $150', cost: 0, estimatedDays: '5-10', isEnabled: true }
    ]
  }
];
