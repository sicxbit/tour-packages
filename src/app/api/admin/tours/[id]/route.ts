import { prisma } from "@/lib/prisma";
import { validateTourPayload } from "@/lib/validators";
import { NextResponse } from "next/server";

interface Params {
  params: Promise<{ id: string }>;
}

export async function PATCH(request: Request, { params }: Params) {
  try {
    const { id } = await params;
    const body = await request.json();
    const validation = validateTourPayload(body);

    if (!validation.valid || !validation.data) {
      return NextResponse.json({ error: validation.message }, { status: 400 });
    }

    const tour = await prisma.tour.update({
      where: { id },
      data: validation.data,
    });

    return NextResponse.json({ tour });
  } catch {
    return NextResponse.json({ error: "Failed to update tour" }, { status: 500 });
  }
}

export async function DELETE(_: Request, { params }: Params) {
  try {
    const { id } = await params;
    await prisma.tour.delete({ where: { id } });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to delete tour" }, { status: 500 });
  }
}
