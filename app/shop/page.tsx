import { Suspense } from 'react';
import ShopClient from './ShopClient';

export const dynamic = 'force-dynamic';

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen py-20 text-center text-slate-400 font-bold">Loading Catalog...</div>}>
      <ShopClient />
    </Suspense>
  );
}
