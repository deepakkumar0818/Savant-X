import { NextRequest, NextResponse } from 'next/server';
import { getContacts } from '@/lib/contactStorage';

export async function GET(request: NextRequest) {
  try {
    // In production, verify the admin token properly
    const authHeader = request.headers.get('authorization') || request.headers.get('Authorization');
    const token = authHeader?.replace(/^Bearer\s+/i, '').trim();

    if (!token || token === '') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const contacts = getContacts();
    return NextResponse.json(contacts, { status: 200 });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

