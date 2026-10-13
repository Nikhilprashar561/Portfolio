import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, honeypot } = body;

    // 1. Silent rejection for automated bot submissions (Honeypot trap)
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Message processed" });
    }

    // 2. Strict validation of required fields
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid name." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, message: "Please provide a message with at least 10 characters." },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.CONTACT_RECEIVER_EMAIL || "nikhilprashar561@gmail.com";
    const resendApiKey = process.env.RESEND_API_KEY;

    // 3. If RESEND_API_KEY is configured in .env, dispatch email through Resend API
    if (resendApiKey) {
      const emailPayload = {
        from: process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>",
        to: recipientEmail,
        reply_to: email.trim(),
        subject: `New Portfolio Inquiry from ${name.trim()}`,
        text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`,
      };

      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailPayload),
      });

      if (!resendResponse.ok) {
        const errorData = await resendResponse.text();
        console.error("Resend API error:", errorData);
        return NextResponse.json(
          {
            success: false,
            message: "Email provider error. Please contact Nikhil directly at nikhilprashar561@gmail.com.",
          },
          { status: 502 }
        );
      }

      return NextResponse.json({
        success: true,
        message: "Your message has been sent successfully.",
      });
    }

    // 4. Development / Fallback mode when external credentials are not yet set
    console.log("=== [PORTFOLIO CONTACT FORM SUBMISSION] ===");
    console.log(`From: ${name.trim()} <${email.trim()}>`);
    console.log(`To: ${recipientEmail}`);
    console.log(`Message:\n${message.trim()}`);
    console.log("==========================================");

    return NextResponse.json({
      success: true,
      message: "Message received. (Note: Email service logged on server; configure RESEND_API_KEY in .env for automated SMTP delivery).",
      deliveredOffline: true,
    });
  } catch (err: unknown) {
    console.error("Contact route handler error:", err);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}
