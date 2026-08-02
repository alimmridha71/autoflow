import type { Metadata } from 'next';
import './globals.css';
import { StoreProvider } from '@/lib/store';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import QuickViewModal from '@/components/QuickViewModal';
import CompareModal from '@/components/CompareModal';
import Toast from '@/components/Toast';

export const metadata: Metadata = {
  title: 'Autoflow - Smart Electronics. Smart Shopping.',
  description: 'Production-ready e-commerce store for smartphones, laptops, audio gear, smart watches, and electronic gadgets in Bangladesh & India.',
  keywords: 'Autoflow, E-commerce, Electronics, Smartphones, Laptops, Earbuds, bKash, Nagad, Razorpay, UPI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-slate-950 text-slate-100 min-h-screen flex flex-col antialiased selection:bg-blue-500 selection:text-white">
        <StoreProvider>
          <Header />
          <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-4">
            {children}
          </main>
          <Footer />
          <CartDrawer />
          <QuickViewModal />
          <CompareModal />
          <Toast />
        </StoreProvider>
      </body>
    </html>
  );
}
