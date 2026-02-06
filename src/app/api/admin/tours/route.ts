import { prisma } from "@/lib/prisma";
import { validateTourPayload } from "@/lib/validators";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const tours = await prisma.tour.findMany({ orderBy: { createdAt: "desc" } });
    return NextResponse.json({ tours });
  } catch {
    return NextResponse.json({ error: "Failed to fetch tours" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = validateTourPayload(body);

    if (!validation.valid || !validation.data) {
      return NextResponse.json({ error: validation.message }, { status: 400 });
    }

    const tour = await prisma.tour.create({ data: validation.data });

    return NextResponse.json({ tour }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to create tour" }, { status: 500 });
  }
}
