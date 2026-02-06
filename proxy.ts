import { middleware } from "./middleware";

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};

export function proxy(request: Parameters<typeof middleware>[0]) {
  return middleware(request);
}
