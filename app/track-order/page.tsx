import { Suspense } from 'react';
import TrackOrderClient from './TrackOrderClient';

export const dynamic = 'force-dynamic';

export default function TrackOrderPage() {
  return (
    <Suspense fallback={<div className="min-h-screen py-20 text-center text-slate-400 font-bold">Loading order tracker...</div>}>
      <TrackOrderClient />
    </Suspense>
  );
}
