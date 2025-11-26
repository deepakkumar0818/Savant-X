import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json(
      { message: 'API is working', timestamp: new Date().toISOString() },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Test failed', details: error instanceof Error ? error.message : 'Unknown' },
      { status: 500 }
    );
  }
}



