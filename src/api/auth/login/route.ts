import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    if (username.trim().toLowerCase() === 'alim' && password === '123456') {
      return NextResponse.json({
        success: true,
        user: {
          id: 'usr-admin-1',
          name: 'Alim Super Admin',
          username: 'Alim',
          email: 'admin@autoflow.com',
          role: 'SUPER_ADMIN'
        },
        token: 'mock_jwt_token_autoflow_2026'
      });
    }

    return NextResponse.json({
      success: false,
      message: 'Invalid credentials. Demo credentials are Username: Alim and Password: 123456'
    }, { status: 401 });
  } catch (e) {
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}
