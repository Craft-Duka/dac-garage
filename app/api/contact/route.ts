import { NextResponse } from "next/server";
const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL;

// Enquiries are composed in the visitor’s email app. Never acknowledge delivery
// from this legacy endpoint: no email transport is configured here.
export async function POST(request: Request) {
  try {
    if (!N8N_WEBHOOK_URL) {
      return NextResponse.json(
        { success: false, message: "The enquiry service is not configured." },
        { status: 503 },
      );
    }
    const payload = await request.json();
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return NextResponse.json(
        { success: false, message: "The enquiry could not be sent." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, message: "The enquiry could not be sent." },
      { status: 500 },
    );
  }
}
