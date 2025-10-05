import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, service, message, budget } = body;

    // Validate required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // dk0133964@gmail.com
        pass: process.env.EMAIL_PASS, // App password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'dk0133964@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
          <div style="background: linear-gradient(135deg, #3b82f6, #6366f1); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            <p style="color: #e0e7ff; margin: 10px 0 0 0;">SavantX Website Contact Form</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #1e293b; margin-top: 0; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">Contact Information</h2>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #3b82f6; margin: 0 0 10px 0; font-size: 16px;">👤 Personal Details</h3>
              <p style="margin: 5px 0; color: #475569;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 5px 0; color: #475569;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></p>
              <p style="margin: 5px 0; color: #475569;"><strong>Phone:</strong> ${phone || 'Not provided'}</p>
              <p style="margin: 5px 0; color: #475569;"><strong>Company:</strong> ${company || 'Not provided'}</p>
            </div>

            <div style="margin-bottom: 20px;">
              <h3 style="color: #3b82f6; margin: 0 0 10px 0; font-size: 16px;">🛠️ Project Details</h3>
              <p style="margin: 5px 0; color: #475569;"><strong>Service Needed:</strong> ${service}</p>
              <p style="margin: 5px 0; color: #475569;"><strong>Budget Range:</strong> ${budget || 'Not specified'}</p>
            </div>

            <div style="margin-bottom: 20px;">
              <h3 style="color: #3b82f6; margin: 0 0 10px 0; font-size: 16px;">💬 Message</h3>
              <div style="background: #f1f5f9; padding: 15px; border-radius: 8px; border-left: 4px solid #3b82f6;">
                <p style="margin: 0; color: #475569; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
            </div>

            <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; border: 1px solid #bae6fd;">
              <h3 style="color: #0369a1; margin: 0 0 10px 0; font-size: 16px;">📧 Quick Actions</h3>
              <p style="margin: 5px 0; color: #0369a1;">
                <a href="mailto:${email}?subject=Re: Your SavantX Inquiry&body=Hi ${name},%0A%0AThank you for reaching out to SavantX..." 
                   style="color: #0369a1; text-decoration: none; font-weight: 500;">
                  Reply to ${name}
                </a>
              </p>
              <p style="margin: 5px 0; color: #0369a1;">
                <strong>Submitted:</strong> ${new Date().toLocaleString('en-US', { 
                  timeZone: 'Asia/Kolkata',
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric', 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #64748b; font-size: 14px;">
            <p>This email was sent from the SavantX website contact form.</p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
