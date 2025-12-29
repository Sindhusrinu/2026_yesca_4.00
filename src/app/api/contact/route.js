import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const {
      fullName,
      email,
      phone,
      company,
      subject,
      reason,
      contactMethod,
      message,
    } = await req.json();

    await resend.emails.send({
      from: "YESCA Technologies <onboarding@resend.dev>",
      // to: ["contact@yesca.in"],
      to: ["mrvijaykumar.in@gmail.com"],
      replyTo: email,
      subject: subject || "New Contact Form Submission",
      text: `
Full Name: ${fullName}
Email: ${email}
Phone: ${phone || "N/A"}
Company: ${company}
Reason: ${reason}
Preferred Contact Method: ${contactMethod}

Message:
${message}
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
