import crypto from "node:crypto";
import { NextResponse } from "next/server";

const ONE_DAY_SECONDS = 60 * 60 * 24;

function signSession(payload: string, secret: string) {
  return crypto.createHmac("sha256", secret).update(payload).digest("base64url");
}

export async function POST(req: Request) {
  try {
    const { email, password } = (await req.json()) as {
      email?: string;
      password?: string;
    };

    if (!email || !password) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;
    const sessionSecret = process.env.SESSION_SECRET;

    if (!adminEmail || !adminPassword || !sessionSecret) {
      return NextResponse.json({ error: "Server authentication is not configured" }, { status: 500 });
    }

    if (email !== adminEmail || password !== adminPassword) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    const payload = JSON.stringify({ email, iat: Date.now() });
    const payloadBase64 = Buffer.from(payload).toString("base64url");
    const signature = signSession(payloadBase64, sessionSecret);
    const token = `${payloadBase64}.${signature}`;

    const response = NextResponse.json({ ok: true });
    response.cookies.set({
      name: "cc_session",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: ONE_DAY_SECONDS,
      path: "/",
    });

    return response;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
