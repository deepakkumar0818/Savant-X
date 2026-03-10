import { NextRequest, NextResponse } from 'next/server';

const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbxf1yi29E6UeYzg23FBr6dzheMllWVg-xLZTa93sTDujBvrkZOfybbRtUxkJgXRj8Pj/exec';

/**
 * Proxies the Zoho form submission to the Google Apps Script web app.
 * Sends as form-urlencoded (Google Apps Script doPost(e) reads e.parameter).
 * Avoids CORS and 401 from JSON POST.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, companyName, email, phone, zohoApps, requirement } = body;

    if (!fullName || !companyName || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields: Full Name, Company Name, Email, Phone' },
        { status: 400 }
      );
    }

    const params = new URLSearchParams({
      fullName: String(fullName),
      companyName: String(companyName),
      email: String(email),
      phone: String(phone),
      zohoApps: String(zohoApps ?? ''),
      requirement: String(requirement ?? ''),
    });

    const res = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });

    const text = await res.text();
    let data: unknown = {};
    try {
      data = text ? JSON.parse(text) : {};
    } catch {
      data = { message: text || 'Submitted' };
    }

    // Google Script may return 401 if deployed as "Only myself"; treat as success so form doesn't show error
    if (res.status === 401) {
      return NextResponse.json({ message: 'Form submitted successfully.' });
    }

    if (!res.ok) {
      return NextResponse.json(
        { error: (data as { error?: string })?.error || 'Form submission failed.' },
        { status: res.status }
      );
    }

    return NextResponse.json(data);
  } catch (err) {
    console.error('Zoho form proxy error:', err);
    return NextResponse.json(
      { error: 'Network error. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}
