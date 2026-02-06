import { SignJWT, jwtVerify } from "jose";

export type SessionRole = "ADMIN" | "USER";

export interface SessionPayload {
  sub: string;
  role: SessionRole;
  email: string;
}

const SESSION_COOKIE = "session";
const encoder = new TextEncoder();

function getJwtSecret() {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET is not configured");
  }
  return encoder.encode(secret);
}

export async function signSessionToken(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(payload.sub)
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(getJwtSecret());
}

export async function verifySessionToken(token: string): Promise<SessionPayload> {
  const { payload } = await jwtVerify(token, getJwtSecret());

  return {
    sub: String(payload.sub),
    role: payload.role === "ADMIN" ? "ADMIN" : "USER",
    email: String(payload.email),
  };
}

export { SESSION_COOKIE };
