import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const body = await req.json();

    const { name, phone, email, message } = body;

    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const responseData = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "ramprasadpanthagiri90@gmail.com",
      subject: "New Appointment Request",
      html: `
        <h2>New Appointment Request</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message || "No message"}</p>
      `,
    });

    console.log("responseData", responseData);

    return NextResponse.json({
      success: true,
      message: "Appointment request sent successfully",
    });
  } catch (error) {
    console.error("Appointment API Error:", error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}