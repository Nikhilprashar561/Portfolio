import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, date, timeSlot, topic, note } = body;

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

    if (!date || typeof date !== "string") {
      return NextResponse.json(
        { success: false, message: "Please select a preferred meeting date." },
        { status: 400 }
      );
    }

    if (!timeSlot || typeof timeSlot !== "string") {
      return NextResponse.json(
        { success: false, message: "Please select a preferred time slot." },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.CONTACT_RECEIVER_EMAIL || "nikhilprashar561@gmail.com";
    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      const emailPayload = {
        from: process.env.RESEND_FROM_EMAIL || "Meeting Requests <onboarding@resend.dev>",
        to: recipientEmail,
        reply_to: email.trim(),
        subject: `Meeting Request: ${topic || "New Project"} - ${name.trim()}`,
        text: `New Meeting Request Details:\n\nClient Name: ${name.trim()}\nClient Email: ${email.trim()}\nTopic: ${
          topic || "General Discussion"
        }\nRequested Date: ${date}\nRequested Time Slot: ${timeSlot}\nNotes: ${
          note ? note.trim() : "None provided"
        }\n\nPlease reply directly to this email or send a calendar invite.`,
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
        message: "Meeting request dispatched successfully.",
      });
    }

    // Development / Server logging mode
    console.log("=== [PORTFOLIO MEETING REQUEST] ===");
    console.log(`From: ${name.trim()} <${email.trim()}>`);
    console.log(`Topic: ${topic}`);
    console.log(`Date: ${date} | Time: ${timeSlot}`);
    console.log(`Note: ${note || "None"}`);
    console.log("===================================");

    return NextResponse.json({
      success: true,
      message: "Meeting request recorded successfully.",
      deliveredOffline: true,
    });
  } catch (err: unknown) {
    console.error("Schedule route handler error:", err);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred while processing your meeting request." },
      { status: 500 }
    );
  }
}
