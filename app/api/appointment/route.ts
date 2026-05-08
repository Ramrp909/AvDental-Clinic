import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, phone, email, message } = body;

    // Basic validation
    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email
    const responsedData = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'ramprasadpanthagiri90@gmail.com',
      subject: 'New Appointment Request',
      html: `
        <h2>New Appointment Request</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message || 'No message'}</p>
      `,
    });

    console.log("respondedData", responsedData)
    return NextResponse.json({
      success: true,
      message: 'Appointment request sent successfully',
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}