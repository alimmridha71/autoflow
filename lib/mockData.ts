import { Product, CategoryItem, Order, Coupon, PaymentGatewayConfig } from './types';

export const INITIAL_CATEGORIES: CategoryItem[] = [
  {
    id: 'cat-1',
    name: 'Smartphones',
    slug: 'smartphones',
    icon: 'Smartphone',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop',
    subcategories: ['Flagship Phones', '5G Smartphones', 'Gaming Phones', 'Budget Phones'],
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
  }
];

export const INITIAL_PRODUCTS: Product[] = [
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
    tags: ['Flagship', '5G', 'Best Camera', 'OLED', 'Fast Charger'],
    rating: 4.9,
    reviewCount: 128,
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: true,
    isFlashSale: true,
    flashSaleEndTime: '2026-08-10T23:59:59Z',
    reviews: [
      {
        id: 'rev-1',
        userName: 'Tanvir Ahmed',
        rating: 5,
        date: '2026-07-28',
        comment: 'Mindblowing camera performance! Delivery was super fast via bKash payment in Dhaka.',
        verified: true
      },
      {
        id: 'rev-2',
        userName: 'Rahul Sharma',
        rating: 5,
        date: '2026-07-24',
        comment: 'Top quality smartphone. Battery lasts 2 full days easily. Paid with UPI seamlessly.',
        verified: true
      }
    ]
  },
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
    tags: ['Laptop', 'Workstation', 'Mini-LED', 'Heavy Gaming', 'Video Editing'],
    rating: 4.95,
    reviewCount: 84,
    isFeatured: true,
    isBestSeller: true
  },
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
    regularPrice: 199,
    salePrice: 139,
    discount: 30,
    stockQuantity: 120,
    variants: {
      colors: ['Glossy White', 'Matte Black', 'Navy Blue']
    },
    warranty: '6 Months Replacement Warranty',
    tags: ['ANC', 'Wireless', 'Spatial Audio', 'TWS'],
    rating: 4.85,
    reviewCount: 310,
    isFeatured: true,
    isFlashSale: true,
    flashSaleEndTime: '2026-08-10T23:59:59Z'
  },
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
    regularPrice: 499,
    salePrice: 429,
    discount: 14,
    stockQuantity: 24,
    variants: {
      colors: ['Titanium Orange Strap', 'Ocean Blue Strap', 'Black Trail Loop']
    },
    warranty: '1 Year Full Brand Warranty',
    tags: ['Smartwatch', 'ECG', 'Fitness', 'GPS', 'Titanium'],
    rating: 4.9,
    reviewCount: 67,
    isBestSeller: true
  },
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
    regularPrice: 149,
    salePrice: 109,
    discount: 26,
    stockQuantity: 60,
    variants: {
      colors: ['Cyber Punk Black', 'Retro Chalk White']
    },
    warranty: '1 Year Warranty',
    tags: ['Gaming', 'Keyboard', 'RGB', 'Mechanical', 'Wireless'],
    rating: 4.78,
    reviewCount: 92,
    isNewArrival: true
  },
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
    regularPrice: 799,
    salePrice: 699,
    discount: 12,
    stockQuantity: 15,
    variants: {
      colors: ['Arctic White', 'Carbon Gray']
    },
    warranty: '1 Year Drone Warranty',
    tags: ['Drone', '4K Camera', 'HDR', 'Gimbal', 'GPS'],
    rating: 4.92,
    reviewCount: 41,
    isFeatured: true
  },
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
    regularPrice: 89,
    salePrice: 59,
    discount: 33,
    stockQuantity: 95,
    warranty: '2 Years Warranty',
    tags: ['Charger', 'GaN', 'Power Delivery', 'Fast Charge'],
    rating: 4.88,
    reviewCount: 142,
    isBestSeller: true,
    isFlashSale: true,
    flashSaleEndTime: '2026-08-10T23:59:59Z'
  },
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
    regularPrice: 1199,
    salePrice: 999,
    discount: 16,
    stockQuantity: 8,
    warranty: '3 Years Burn-in Guarantee Warranty',
    tags: ['Monitor', 'OLED', 'Curved', '175Hz', 'Gaming'],
    rating: 4.96,
    reviewCount: 38,
    isFeatured: true
  }
];

export const INITIAL_ORDERS: Order[] = [
  {
    id: 'ord-1001',
    orderNumber: 'AF-BD-89210',
    date: '2026-08-01 14:32',
    customerName: 'Rafiqul Islam',
    customerEmail: 'rafiqul@example.com',
    customerPhone: '+880 1712-345678',
    shippingAddress: {
      address: 'House 42, Road 11, Banani',
      city: 'Dhaka',
      state: 'Dhaka Division',
      country: 'Bangladesh',
      postalCode: '1213'
    },
    items: [
      {
        product: INITIAL_PRODUCTS[0],
        quantity: 1,
        selectedColor: 'Natural Titanium',
        selectedStorage: '512GB'
      }
    ],
    paymentMethod: 'bKash',
    paymentStatus: 'PAID',
    status: 'PROCESSING',
    subtotal: 1149,
    discount: 50,
    shippingCost: 5,
    total: 1104,
    currency: 'BDT',
    couponCode: 'AUTOFLOW50',
    trackingNumber: 'TRK-BD-90812'
  },
  {
    id: 'ord-1002',
    orderNumber: 'AF-IN-55419',
    date: '2026-08-02 08:15',
    customerName: 'Priya Sundaram',
    customerEmail: 'priya.s@example.com',
    customerPhone: '+91 98765-43210',
    shippingAddress: {
      address: '204, Park Avenue, Indiranagar',
      city: 'Bengaluru',
      state: 'Karnataka',
      country: 'India',
      postalCode: '560038'
    },
    items: [
      {
        product: INITIAL_PRODUCTS[2],
        quantity: 2,
        selectedColor: 'Glossy White'
      }
    ],
    paymentMethod: 'UPI',
    paymentStatus: 'PAID',
    status: 'SHIPPED',
    subtotal: 278,
    discount: 0,
    shippingCost: 10,
    total: 288,
    currency: 'INR',
    trackingNumber: 'TRK-IN-11042'
  }
];

export const INITIAL_COUPONS: Coupon[] = [
  {
    id: 'c-1',
    code: 'AUTOFLOW50',
    discountType: 'FIXED',
    discountValue: 50,
    minPurchase: 500,
    expiresAt: '2026-12-31',
    isActive: true
  },
  {
    id: 'c-2',
    code: 'GADGET10',
    discountType: 'PERCENTAGE',
    discountValue: 10,
    minPurchase: 100,
    expiresAt: '2026-12-31',
    isActive: true
  }
];

export const INITIAL_GATEWAYS: PaymentGatewayConfig[] = [
  // Bangladesh
  { id: 'gw-bkash', name: 'bKash', country: 'Bangladesh', enabled: true, feePercentage: 1.5 },
  { id: 'gw-nagad', name: 'Nagad', country: 'Bangladesh', enabled: true, feePercentage: 1.2 },
  { id: 'gw-rocket', name: 'Rocket', country: 'Bangladesh', enabled: true, feePercentage: 1.5 },
  { id: 'gw-ssl', name: 'SSLCommerz', country: 'Bangladesh', enabled: true, feePercentage: 2.0 },
  { id: 'gw-bd-cod', name: 'Cash on Delivery', country: 'Bangladesh', enabled: true, feePercentage: 0 },

  // India
  { id: 'gw-razorpay', name: 'Razorpay', country: 'India', enabled: true, feePercentage: 2.0 },
  { id: 'gw-upi', name: 'UPI / BHIM', country: 'India', enabled: true, feePercentage: 0 },
  { id: 'gw-phonepe', name: 'PhonePe', country: 'India', enabled: true, feePercentage: 0 },
  { id: 'gw-paytm', name: 'Paytm', country: 'India', enabled: true, feePercentage: 1.5 },
  { id: 'gw-in-cod', name: 'Cash on Delivery', country: 'India', enabled: true, feePercentage: 0 },
];
