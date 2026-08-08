import OrderConfirmationClient from './OrderConfirmationClient';
import { INITIAL_ORDERS } from '@/lib/mockData';

export async function generateStaticParams() {
  return INITIAL_ORDERS.map((o) => ({
    id: o.id,
  }));
}

export default function Page() {
  return <OrderConfirmationClient />;
}
