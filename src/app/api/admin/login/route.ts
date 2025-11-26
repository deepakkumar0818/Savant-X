import { NextRequest, NextResponse } from 'next/server';

// In production, use environment variables and proper password hashing
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@savantx.com';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Validate credentials
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      // In production, use JWT tokens or session management
      // For now, we'll use a simple token
      const token = Buffer.from(`${email}:${Date.now()}`).toString('base64');

      return NextResponse.json(
        { 
          message: 'Login successful',
          token,
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

