import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const tours = await prisma.tour.findMany({ orderBy: { createdAt: "desc" } });
    return NextResponse.json({ tours });
  } catch {
    return NextResponse.json({ error: "Failed to fetch tours" }, { status: 500 });
  }
}
