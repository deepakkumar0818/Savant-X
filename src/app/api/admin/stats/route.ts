import { NextRequest, NextResponse } from 'next/server';
import { getStats } from '@/lib/contactStorage';

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    const token = authHeader?.replace('Bearer ', '');

    if (!token) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const stats = getStats();
    return NextResponse.json(stats, { status: 200 });
  } catch (error) {
    console.error('Error fetching stats:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

