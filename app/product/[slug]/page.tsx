import ProductDetailClient from './ProductDetailClient';
import { INITIAL_PRODUCTS } from '@/lib/mockData';

export async function generateStaticParams() {
  return INITIAL_PRODUCTS.map((p) => ({
    slug: p.slug,
  }));
}

export default function Page() {
  return <ProductDetailClient />;
}
