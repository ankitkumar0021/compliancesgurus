import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const emailTo = process.env.EMAIL_TO;
    const emailFrom = process.env.EMAIL_FROM || 'onboarding@resend.dev';

    if (!apiKey || !emailTo) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { name, email, phone, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, Email and Message are required' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: emailFrom,
      to: [emailTo],
      replyTo: email,
      subject: subject || 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || '-'}</p>
        <p><strong>Subject:</strong> ${subject || '-'}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Email sending failed' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
    });

  } catch (err) {
    console.error('Server error:', err);
    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    );
  }
}
