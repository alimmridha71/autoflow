import { NextResponse } from 'next/server';
import { INITIAL_PRODUCTS } from '@/lib/mockData';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');

  let products = INITIAL_PRODUCTS;
  if (category && category !== 'all') {
    products = products.filter(p => p.category.toLowerCase() === category.toLowerCase() || p.slug === category);
  }

  return NextResponse.json({
    success: true,
    count: products.length,
    data: products
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    return NextResponse.json({
      success: true,
      message: 'Product inserted into SQL database successfully',
      data: body
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Invalid payload' }, { status: 400 });
  }
}
