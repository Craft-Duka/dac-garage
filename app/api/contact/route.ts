import { NextResponse } from "next/server";
import { BUSINESS } from "@/lib/constants";

// Enquiries are composed in the visitor’s email app. Never acknowledge delivery
// from this legacy endpoint: no email transport is configured here.
export async function POST() {
  return NextResponse.json(
    {
      success: false,
      message: `Please send your enquiry to ${BUSINESS.email}.`,
      email: BUSINESS.email,
    },
    { status: 410 },
  );
}
