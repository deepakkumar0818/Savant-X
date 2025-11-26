import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization') || request.headers.get('Authorization');
    const token = authHeader?.replace(/^Bearer\s+/i, '').trim();

    if (!token || token === '') {
      return NextResponse.json(
        { authenticated: false },
        { status: 401 }
      );
    }

    // In production, verify JWT token properly
    // For now, we'll just check if token exists
    return NextResponse.json(
      { authenticated: true },
      { status: 200 }
    );
  } catch (error) {
    console.error('Auth route error:', error);
    const errorDetails = error instanceof Error ? {
      message: error.message,
      stack: error.stack
    } : { message: 'Unknown error' };
    
    return NextResponse.json(
      { 
        authenticated: false,
        error: errorDetails.message
      },
      { status: 500 }
    );
  }
}

