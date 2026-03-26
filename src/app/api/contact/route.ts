import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, message } = data;

    // Validate the data
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // In a production environment, you would use a service like Nodemailer, SendGrid, etc.
    // For now, we'll just log the data and return a success response
    console.log('Contact form submission:', {
      to: 'info@jcarbitrations.com',
      subject: `Contact Form Submission from ${name}`,
      body: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\n\nMessage:\n${message}`
    });

    // For demonstration purposes, we'll simulate a successful email send
    // In production, replace this with actual email sending logic
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process contact form submission' },
      { status: 500 }
    );
  }
}