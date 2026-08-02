-- =========================================================
-- AUTOFLOW FULL-STACK E-COMMERCE SQL DATABASE SEED SCRIPT
-- Default Admin Login: Username: 'Alim', Password: '123456'
-- =========================================================

-- 1. Insert Super Admin User (Alim)
INSERT INTO users (id, name, username, email, password_hash, role)
VALUES ('usr-admin-1', 'Alim Super Admin', 'Alim', 'admin@autoflow.com', '$2b$10$e8T8Z1Z7v4A.Y0gHq7bOeuS0f5xK4f3g2h1i0j9k8l7m6n5o4p', 'SUPER_ADMIN')
ON CONFLICT (email) DO NOTHING;

-- 2. Insert Categories
INSERT INTO categories (id, name, slug, icon, image, item_count) VALUES
('cat-1', 'Smartphones', 'smartphones', 'Smartphone', 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9', 42),
('cat-2', 'Laptops & PCs', 'laptops-pcs', 'Laptop', 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8', 38),
('cat-3', 'Earbuds & Headphones', 'audio', 'Headphones', 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e', 54),
('cat-4', 'Smart Watches', 'smart-watches', 'Watch', 'https://images.unsplash.com/photo-1523275335684-37898b6baf30', 29),
('cat-5', 'Gaming Gear', 'gaming', 'Gamepad2', 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf', 31),
('cat-6', 'Drones & Cameras', 'cameras-drones', 'Camera', 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108', 19),
('cat-7', 'Smart Home & Power', 'smart-home', 'Zap', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c', 46)
ON CONFLICT (id) DO NOTHING;

-- 3. Insert Products
INSERT INTO products (
  id, name, sku, barcode, slug, brand, model, category_id, category_name, subcategory_name,
  images, description, specifications, regular_price, sale_price, discount, stock_quantity,
  variants, warranty, tags, rating, review_count, is_featured, is_bestseller, is_new_arrival, is_flash_sale
) VALUES
(
  'prod-1', 'Autoflow Titan Phone 16 Pro Max 512GB', 'AF-PH-16PM', '890123456001', 'autoflow-titan-phone-16-pro-max',
  'Autoflow', 'Titan Pro 2026', 'cat-1', 'Smartphones', 'Flagship Phones',
  '["https://images.unsplash.com/photo-1695048133142-1a20484d2569", "https://images.unsplash.com/photo-1592750475338-74b7b21085ab"]',
  'Aerospace-grade titanium chassis, 120Hz Super Retina XDR Display, 50MP triple quad-camera system with 10x optical zoom.',
  '[{"label":"Processor","value":"Bionic A18 Pro 3nm"},{"label":"Storage","value":"512GB NVMe"}]',
  1299.00, 1149.00, 11, 45,
  '{"colors":["Natural Titanium", "Dark Obsidian"], "storages":["256GB", "512GB", "1TB"]}',
  '2 Years Official Warranty', '["Flagship", "5G", "OLED"]', 4.90, 128, TRUE, TRUE, TRUE, TRUE
),
(
  'prod-2', 'Autoflow UltraBook M3 Pro 16" Liquid Retina', 'AF-NB-M3P16', '890123456002', 'autoflow-ultrabook-m3-pro-16',
  'Autoflow', 'M3 Pro 2026', 'cat-2', 'Laptops & PCs', 'MacBooks',
  '["https://images.unsplash.com/photo-1517336714731-489689fd1ca8"]',
  '16-inch 120Hz Mini-LED display, 36GB Unified Memory, 1TB High Speed SSD, 22-hour battery longevity.',
  '[{"label":"Processor","value":"14-Core M3 Pro"},{"label":"RAM","value":"36GB Unified"}]',
  2499.00, 2299.00, 8, 18,
  '{"colors":["Space Black", "Silver"], "storages":["512GB", "1TB"]}',
  '1 Year International Warranty', '["Workstation", "Mini-LED"]', 4.95, 84, TRUE, TRUE, FALSE, FALSE
),
(
  'prod-3', 'Autoflow ANC Sonic Air Pods Pro 2', 'AF-AUD-APP2', '890123456003', 'autoflow-anc-sonic-air-pods-pro-2',
  'Autoflow', 'Sonic Air 2', 'cat-3', 'Earbuds & Headphones', 'TWS Earbuds',
  '["https://images.unsplash.com/photo-1505740420928-5e560c06d30e"]',
  'Active Noise Cancellation up to 45dB with Spatial Audio and dynamic head tracking.',
  '[{"label":"ANC","value":"Active Hybrid 45dB"},{"label":"Battery","value":"8 hrs + 32 hrs case"}]',
  199.00, 139.00, 30, 120,
  '{"colors":["Glossy White", "Matte Black"]}',
  '6 Months Replacement Warranty', '["ANC", "TWS", "Wireless"]', 4.85, 310, TRUE, FALSE, FALSE, TRUE
)
ON CONFLICT (id) DO NOTHING;

-- 4. Insert Coupons
INSERT INTO coupons (id, code, discount_type, discount_value, min_purchase, is_active) VALUES
('c-1', 'AUTOFLOW50', 'FIXED', 50.00, 500.00, TRUE),
('c-2', 'GADGET10', 'PERCENTAGE', 10.00, 100.00, TRUE)
ON CONFLICT (id) DO NOTHING;

-- 5. Insert Payment Gateways
INSERT INTO payment_gateways (id, name, country, is_enabled, fee_percentage) VALUES
('gw-bkash', 'bKash', 'Bangladesh', TRUE, 1.50),
('gw-nagad', 'Nagad', 'Bangladesh', TRUE, 1.20),
('gw-rocket', 'Rocket', 'Bangladesh', TRUE, 1.50),
('gw-ssl', 'SSLCommerz', 'Bangladesh', TRUE, 2.00),
('gw-bd-cod', 'Cash on Delivery', 'Bangladesh', TRUE, 0.00),
('gw-razorpay', 'Razorpay', 'India', TRUE, 2.00),
('gw-upi', 'UPI / BHIM', 'India', TRUE, 0.00),
('gw-phonepe', 'PhonePe', 'India', TRUE, 0.00),
('gw-paytm', 'Paytm', 'India', TRUE, 1.50),
('gw-in-cod', 'Cash on Delivery', 'India', TRUE, 0.00)
ON CONFLICT (id) DO NOTHING;
