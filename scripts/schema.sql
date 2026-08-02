-- =========================================================
-- AUTOFLOW FULL-STACK E-COMMERCE SQL DATABASE SCHEMA
-- Target Database: PostgreSQL / MySQL / SQLite / Supabase
-- =========================================================

-- 1. Users Table
CREATE TABLE IF NOT EXISTS users (
  id VARCHAR(64) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  username VARCHAR(100) UNIQUE,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  role VARCHAR(50) DEFAULT 'CUSTOMER', -- 'SUPER_ADMIN', 'ADMIN', 'MANAGER', 'CUSTOMER'
  avatar TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Customer Addresses Table
CREATE TABLE IF NOT EXISTS addresses (
  id VARCHAR(64) PRIMARY KEY,
  user_id VARCHAR(64) REFERENCES users(id) ON DELETE CASCADE,
  full_address TEXT NOT NULL,
  city VARCHAR(100) NOT NULL,
  state VARCHAR(100) NOT NULL,
  country VARCHAR(50) NOT NULL, -- 'Bangladesh' | 'India'
  postal_code VARCHAR(20) NOT NULL,
  is_default BOOLEAN DEFAULT FALSE
);

-- 3. Categories Table
CREATE TABLE IF NOT EXISTS categories (
  id VARCHAR(64) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  icon VARCHAR(100),
  image TEXT,
  parent_id VARCHAR(64) REFERENCES categories(id),
  item_count INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. Products Table
CREATE TABLE IF NOT EXISTS products (
  id VARCHAR(64) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  sku VARCHAR(100) UNIQUE NOT NULL,
  barcode VARCHAR(100),
  slug VARCHAR(255) UNIQUE NOT NULL,
  brand VARCHAR(100) NOT NULL,
  model VARCHAR(100),
  category_id VARCHAR(64) REFERENCES categories(id),
  category_name VARCHAR(100) NOT NULL,
  subcategory_name VARCHAR(100),
  images JSON NOT NULL, -- Array of image URLs
  video_url TEXT,
  description TEXT NOT NULL,
  specifications JSON NOT NULL, -- Key-value JSON pairs
  regular_price DECIMAL(10, 2) NOT NULL,
  sale_price DECIMAL(10, 2),
  discount INT DEFAULT 0,
  stock_quantity INT DEFAULT 0,
  variants JSON, -- Colors, sizes, storage capacity
  weight VARCHAR(50),
  dimensions VARCHAR(50),
  warranty VARCHAR(255),
  tags JSON,
  rating DECIMAL(3, 2) DEFAULT 4.8,
  review_count INT DEFAULT 0,
  is_featured BOOLEAN DEFAULT FALSE,
  is_bestseller BOOLEAN DEFAULT FALSE,
  is_new_arrival BOOLEAN DEFAULT FALSE,
  is_flash_sale BOOLEAN DEFAULT FALSE,
  flash_sale_end_time TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 5. Product Reviews Table
CREATE TABLE IF NOT EXISTS reviews (
  id VARCHAR(64) PRIMARY KEY,
  product_id VARCHAR(64) REFERENCES products(id) ON DELETE CASCADE,
  user_name VARCHAR(255) NOT NULL,
  rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT NOT NULL,
  is_verified BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 6. Orders Table
CREATE TABLE IF NOT EXISTS orders (
  id VARCHAR(64) PRIMARY KEY,
  order_number VARCHAR(100) UNIQUE NOT NULL,
  customer_name VARCHAR(255) NOT NULL,
  customer_email VARCHAR(255) NOT NULL,
  customer_phone VARCHAR(50) NOT NULL,
  shipping_address TEXT NOT NULL,
  city VARCHAR(100) NOT NULL,
  state VARCHAR(100) NOT NULL,
  country VARCHAR(50) NOT NULL, -- 'Bangladesh' | 'India'
  postal_code VARCHAR(20) NOT NULL,
  status VARCHAR(50) DEFAULT 'PENDING', -- 'PENDING', 'CONFIRMED', 'PROCESSING', 'SHIPPED', 'DELIVERED', 'CANCELLED'
  payment_method VARCHAR(50) NOT NULL, -- 'bKash', 'Nagad', 'UPI', 'Razorpay', 'COD'
  payment_status VARCHAR(50) DEFAULT 'PENDING',
  subtotal DECIMAL(10, 2) NOT NULL,
  discount_amount DECIMAL(10, 2) DEFAULT 0.00,
  shipping_cost DECIMAL(10, 2) DEFAULT 0.00,
  total_amount DECIMAL(10, 2) NOT NULL,
  currency VARCHAR(10) NOT NULL, -- 'BDT', 'INR', 'USD'
  coupon_code VARCHAR(50),
  tracking_number VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 7. Order Items Table
CREATE TABLE IF NOT EXISTS order_items (
  id VARCHAR(64) PRIMARY KEY,
  order_id VARCHAR(64) REFERENCES orders(id) ON DELETE CASCADE,
  product_id VARCHAR(64) REFERENCES products(id),
  product_name VARCHAR(255) NOT NULL,
  quantity INT NOT NULL,
  unit_price DECIMAL(10, 2) NOT NULL,
  selected_color VARCHAR(50),
  selected_storage VARCHAR(50)
);

-- 8. Coupons Table
CREATE TABLE IF NOT EXISTS coupons (
  id VARCHAR(64) PRIMARY KEY,
  code VARCHAR(50) UNIQUE NOT NULL,
  discount_type VARCHAR(20) NOT NULL, -- 'PERCENTAGE' | 'FIXED'
  discount_value DECIMAL(10, 2) NOT NULL,
  min_purchase DECIMAL(10, 2),
  expires_at TIMESTAMP,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 9. Payment Gateways Config Table
CREATE TABLE IF NOT EXISTS payment_gateways (
  id VARCHAR(64) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  country VARCHAR(50) NOT NULL, -- 'Bangladesh' | 'India'
  is_enabled BOOLEAN DEFAULT TRUE,
  fee_percentage DECIMAL(4, 2) DEFAULT 0.00
);

-- Indexes for lightning fast queries
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_brand ON products(brand);
CREATE INDEX IF NOT EXISTS idx_products_slug ON products(slug);
CREATE INDEX IF NOT EXISTS idx_orders_customer_email ON orders(customer_email);
CREATE INDEX IF NOT EXISTS idx_orders_number ON orders(order_number);
