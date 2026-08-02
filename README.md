# Autoflow - Full-Stack E-Commerce Web Application

**Tagline:** Smart Electronics. Smart Shopping.

Autoflow is a full-stack, production-ready e-commerce platform built for selling electronic gadgets, smartphones, laptops, audio equipment, smartwatches, and accessories across Bangladesh and India.

---

## Key Features

### Storefront & Customer Experience
- **Apple-Inspired Aesthetic**: Glassmorphism, smooth animations, dynamic dark/light mode toggle.
- **Multi-Currency**: Instant switching between **BDT (৳)**, **INR (₹)**, and **USD ($)** with live conversion.
- **Multi-Language**: Support for **English**, **Bangla (বাংলা)**, and **Hindi (हिंदी)**.
- **Instant Search & Auto-Suggestions**: Real-time search with simulated voice search capability.
- **Interactive Gadget Cards**: Quick view popup, side-by-side spec comparison modal, wishlist toggle, and quick add-to-cart.
- **Product Detail Pages**: Multi-image gallery previews, technical spec sheet tables, warranty indicators, color/storage variant selection, customer ratings & review submission form.
- **Cart & Multi-Step Checkout**: Discount coupon system (`AUTOFLOW50`), shipping calculations, and regional checkout.
- **Bangladesh & India Payments**:
  - **Bangladesh**: bKash, Nagad, Rocket, SSLCommerz, Cash on Delivery.
  - **India**: Razorpay, UPI, PhonePe, Paytm, Cash on Delivery.
- **Order Tracking & Printable Receipt**: Real-time order tracking timeline and print-ready receipt invoices.
- **Customer Portal**: Past order history, saved addresses, wishlist management.

---

## Admin Dashboard (`/admin`)

### Demo Credentials
- **Username:** `Alim`
- **Password:** `123456`

*(Includes a 1-click Auto Fill button on the login screen for testing convenience).*

### Admin Features
- **KPI Summary Cards**: Revenue analytics, total orders, product catalog count, low stock warnings.
- **Product Management (`/admin/products`)**: Add new electronic gadgets, edit pricing, manage stock levels, generate SKUs & barcodes, upload images, delete products.
- **Order Management (`/admin/orders`)**: View all customer orders, filter by status, update order progress (`PENDING` -> `CONFIRMED` -> `PROCESSING` -> `SHIPPED` -> `DELIVERED` -> `CANCELLED`), and view/print invoices.
- **Category & Brand Manager (`/admin/categories`)**: Add and edit product categories and subcategory tags.
- **Coupon Manager (`/admin/coupons`)**: Create promo codes with percentage or fixed dollar discounts and minimum spend thresholds.
- **Payment Gateway Config (`/admin/payments`)**: Toggle active payment gateways for Bangladesh and India.
- **Reports & Analytics (`/admin/reports`)**: Export sales history, inventory audits, and regional tax reports in CSV, PDF, or Excel formats.

---

## Tech Stack

- **Framework**: Next.js 15 (App Router with TypeScript)
- **Styling**: Tailwind CSS, CSS Glassmorphism
- **Icons**: `lucide-react`
- **State & Data Layer**: React Context + `localStorage` real-time synchronization
- **Database Schema**: Prisma ORM (`prisma/schema.prisma`) for PostgreSQL/Supabase

---

## Installation & Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Set Environment Variables**:
   Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

3. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Access Admin Panel**:
   Navigate to [http://localhost:3000/admin/login](http://localhost:3000/admin/login) and log in using:
   - Username: `Alim`
   - Password: `123456`

---

## Project Folder Structure

```
Autoflow e-commerce/
├── app/
│   ├── account/          # Customer dashboard & wishlist
│   ├── admin/            # Admin Panel (Login, Overview, Products, Orders, Categories, Coupons, Payments, Reports)
│   ├── cart/             # Shopping cart page & coupon input
│   ├── checkout/         # Multi-step regional checkout & payment selection
│   ├── order-confirmation/# Printable order receipt & invoice
│   ├── product/[slug]/   # Detailed product view with specs & reviews
│   ├── shop/             # Catalog page with search, price slider & filters
│   ├── track-order/      # Live order tracking page
│   ├── globals.css       # Design tokens & glassmorphic styles
│   ├── layout.tsx        # Root layout with header, footer & modals
│   └── page.tsx          # Homepage with hero slider, flash sale & categories
├── components/           # Reusable UI components (Header, MegaMenu, HeroSlider, FlashSale, ProductCard, QuickViewModal, CompareModal, CartDrawer, Footer, Toast)
├── lib/
│   ├── mockData.ts       # Pre-populated electronics dataset & categories
│   ├── store.ts          # Global state manager with local storage persistence
│   └── types.ts          # TypeScript domain interfaces
├── prisma/
│   └── schema.prisma     # Prisma database schema definition
├── .env.example
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```
