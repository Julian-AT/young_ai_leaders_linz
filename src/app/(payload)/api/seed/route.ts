import { NextResponse } from "next/server";

import { getPayload } from "@/lib/payload";
import { seed } from "@/seed";

export async function POST() {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Seed disabled in production" }, { status: 403 });
  }

  try {
    const payload = await getPayload();
    const result = await seed(payload);
    return NextResponse.json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
