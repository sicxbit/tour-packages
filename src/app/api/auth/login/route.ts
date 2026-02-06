import { SESSION_COOKIE, signSessionToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: string; password?: string };
    const email = body.email?.trim().toLowerCase();
    const password = body.password?.trim();

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
    }

    const envAdminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();
    const envAdminPassword = process.env.ADMIN_PASSWORD?.trim();

    let user = await prisma.user.findUnique({ where: { email } });

    if (envAdminEmail && envAdminPassword && email === envAdminEmail && password === envAdminPassword) {
      const envPasswordHash = await bcrypt.hash(envAdminPassword, 10);

      user = await prisma.user.upsert({
        where: { email: envAdminEmail },
        update: { passwordHash: envPasswordHash, role: "ADMIN" },
        create: {
          email: envAdminEmail,
          name: "Admin",
          passwordHash: envPasswordHash,
          role: "ADMIN",
        },
      });
    }

    if (!user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const token = await signSessionToken({
      sub: user.id,
      email: user.email,
      role: user.role,
    });

    const response = NextResponse.json({ ok: true, role: user.role });

    response.cookies.set({
      name: SESSION_COOKIE,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch {
    return NextResponse.json({ error: "Failed to log in" }, { status: 500 });
  }
}
