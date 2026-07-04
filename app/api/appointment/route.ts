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

    const { name, phone, email, message, problem, date, time } = body;

    if (!name || !phone || !date || !time) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    const appointmentDate = new Date(date);
const today = new Date();
today.setHours(0, 0, 0, 0);

if (isNaN(appointmentDate.getTime())) {
  return NextResponse.json(
    { error: "Invalid appointment date." },
    { status: 400 }
  );
}

if (appointmentDate < today) {
  return NextResponse.json(
    { error: "Past dates are not allowed." },
    { status: 400 }
  );
}


    const responseData = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "dr.avinashdentalcare@gmail.com",
      subject: "New Appointment Request",
      html: `
 <div style="font-family:Arial,sans-serif;max-width:650px;margin:auto">

<h2 style="color:#2563EB;">
New Appointment Request
</h2>

<p>
A patient has submitted a new appointment request from the website.
</p>

<table style="width:100%;border-collapse:collapse;">
<tr>
<td style="padding:10px;font-weight:bold;">Patient Name</td>
<td style="padding:10px;">${name}</td>
</tr>

<tr>
<td style="padding:10px;font-weight:bold;">Phone Number</td>
<td style="padding:10px;">${phone}</td>
</tr>

<tr>
<td style="padding:10px;font-weight:bold;">Email</td>
<td style="padding:10px;">${email}</td>
</tr>

<tr>
<td style="padding:10px;font-weight:bold;">Problem</td>
<td style="padding:10px;">${problem || "Not specified"}</td>
</tr>

<tr>
<td style="padding:10px;font-weight:bold;">Preferred Date</td>
<td style="padding:10px;">${date}</td>
</tr>

<tr>
<td style="padding:10px;font-weight:bold;">Preferred Time</td>
<td style="padding:10px;">${time}</td>
</tr>
</table>

<hr style="margin:20px 0">

<p style="font-size:12px;color:#666;">
Submitted through Avinash Dental Care website.
</p>

</div>
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