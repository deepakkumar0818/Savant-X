import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const TO_EMAIL = 'siya.savantxtechnologies@gmail.com';

function escapeHtml(text: string): string {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: NextRequest) {
  try {
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass) {
      console.error('Zoho strategy: EMAIL_USER or EMAIL_PASS is missing in .env.local');
      return NextResponse.json(
        { error: 'Email is not configured. Please set EMAIL_USER and EMAIL_PASS in .env.local (use a Gmail App Password).' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { fullName, companyName, email, phone, zohoApps, lookingToBuild } = body;

    if (!fullName || !companyName || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields: Full Name, Company Name, Email, Phone' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const safe = {
      fullName: escapeHtml(fullName),
      companyName: escapeHtml(companyName),
      email: escapeHtml(email),
      phone: escapeHtml(phone),
      zohoApps: escapeHtml(zohoApps || ''),
      lookingToBuild: escapeHtml(lookingToBuild || ''),
    };

    const mailOptions = {
      from: emailUser,
      to: TO_EMAIL,
      subject: `[Zoho Strategy] New request from ${fullName} (${companyName})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
          <div style="background: linear-gradient(135deg, #3b82f6, #6366f1); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Free Zoho Strategy Call – New Request</h1>
            <p style="color: #e0e7ff; margin: 10px 0 0 0;">SavantX Zoho Integrations Page</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #1e293b; margin-top: 0; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">Contact details</h2>
            <p style="margin: 5px 0; color: #475569;"><strong>Full Name:</strong> ${safe.fullName}</p>
            <p style="margin: 5px 0; color: #475569;"><strong>Company:</strong> ${safe.companyName}</p>
            <p style="margin: 5px 0; color: #475569;"><strong>Email:</strong> <a href="mailto:${safe.email}" style="color: #3b82f6;">${safe.email}</a></p>
            <p style="margin: 5px 0; color: #475569;"><strong>Phone:</strong> <a href="tel:${safe.phone}" style="color: #3b82f6;">${safe.phone}</a></p>
            
            <h3 style="color: #3b82f6; margin: 20px 0 10px 0; font-size: 16px;">Zoho apps in use</h3>
            <p style="margin: 5px 0; color: #475569;">${safe.zohoApps || '—'}</p>
            
            <h3 style="color: #3b82f6; margin: 20px 0 10px 0; font-size: 16px;">What they want to build</h3>
            <div style="background: #f1f5f9; padding: 15px; border-radius: 8px; border-left: 4px solid #3b82f6;">
              <p style="margin: 0; color: #475569; line-height: 1.6; white-space: pre-wrap;">${safe.lookingToBuild || '—'}</p>
            </div>
            
            <p style="margin-top: 20px; color: #64748b; font-size: 14px;">
              Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
            </p>
          </div>
          
          <p style="text-align: center; margin-top: 20px; color: #64748b; font-size: 14px;">SavantX Zoho Strategy form</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Request sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    const err = error as Error & { code?: string };
    console.error('Zoho strategy form – send error:', err?.message || err);
    if (err?.code === 'EAUTH') {
      return NextResponse.json(
        { error: 'Email login failed. Use a Gmail App Password (not your normal password) in .env.local as EMAIL_PASS.' },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { error: 'Failed to send your request. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}
