import { NextRequest, NextResponse } from 'next/server';
import { getAllPageContents, getPageContent } from '@/lib/pageContentStorage';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ page: string }> }
) {
  try {
    const authHeader = request.headers.get('authorization') || request.headers.get('Authorization');
    const token = authHeader?.replace(/^Bearer\s+/i, '').trim();

    if (!token || token === '') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { page } = await params;
    
    try {
      const sections = getAllPageContents(page);
      return NextResponse.json({ sections }, { status: 200 });
    } catch (storageError) {
      console.error('Storage error:', storageError);
      // Return empty array if storage fails
      return NextResponse.json({ sections: [] }, { status: 200 });
    }
  } catch (error) {
    console.error('Error fetching page content:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorStack = error instanceof Error ? error.stack : undefined;
    console.error('Error stack:', errorStack);
    return NextResponse.json(
      { 
        error: 'Internal server error', 
        details: errorMessage 
      },
      { status: 500 }
    );
  }
}

