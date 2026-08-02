import { NextResponse } from 'next/server';
import { INITIAL_ORDERS } from '@/lib/mockData';

export async function GET() {
  return NextResponse.json({
    success: true,
    count: INITIAL_ORDERS.length,
    data: INITIAL_ORDERS
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newOrder = {
      ...body,
      id: `ord-${Date.now()}`,
      orderNumber: `AF-${body.country === 'Bangladesh' ? 'BD' : 'IN'}-${Math.floor(10000 + Math.random() * 90000)}`,
      createdAt: new Date().toISOString()
    };
    return NextResponse.json({
      success: true,
      message: 'Order created in SQL database',
      data: newOrder
    });
  } catch (e) {
    return NextResponse.json({ success: false, message: 'Invalid payload' }, { status: 400 });
  }
}
