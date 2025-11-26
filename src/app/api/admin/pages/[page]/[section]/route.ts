import { NextRequest, NextResponse } from 'next/server';
import { savePageContent, getPageContent } from '@/lib/pageContentStorage';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ page: string; section: string }> }
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

    const { page, section } = await params;
    const content = getPageContent(page, section);

    return NextResponse.json({ content }, { status: 200 });
  } catch (error) {
    console.error('Error fetching section content:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ page: string; section: string }> }
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

    const { page, section } = await params;
    const body = await request.json();
    const { content } = body;

    if (!content) {
      return NextResponse.json(
        { error: 'Content is required' },
        { status: 400 }
      );
    }

    const savedContent = savePageContent(page, section, content);

    return NextResponse.json(
      { 
        message: 'Content saved successfully', 
        section: savedContent 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error saving content:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

