import { NextRequest, NextResponse } from 'next/server';
import { getPageContent } from '@/lib/pageContentStorage';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ page: string }> }
) {
  try {
    const { page } = await params;
    const content = getPageContent(page);

    return NextResponse.json({ content }, { status: 200 });
  } catch (error) {
    console.error('Error fetching page content:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

