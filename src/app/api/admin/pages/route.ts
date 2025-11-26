import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization') || request.headers.get('Authorization');
    const token = authHeader?.replace(/^Bearer\s+/i, '').trim();

    if (!token || token === '') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Return list of available pages
    const pages = ['home', 'about', 'contact', 'products', 'work'];

    return NextResponse.json({ pages }, { status: 200 });
  } catch (error) {
    console.error('Error fetching pages:', error);
    const errorDetails = error instanceof Error ? {
      message: error.message,
      stack: error.stack
    } : { message: 'Unknown error' };
    
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: errorDetails.message
      },
      { status: 500 }
    );
  }
}

