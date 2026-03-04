# SECURITY AND FIXES REPORT

## Summary of changes and why
- Removed committed SSH key files (`Travel-Booking`, `Travel-Booking.pub`) to eliminate exposed private/public key material from the repository.
- Extended `.gitignore` with common certificate/private key patterns to prevent future accidental commits of sensitive key files.
- Fixed App Router route params typing in `src/app/(public)/packages/details/[id]/page.tsx` by typing `params` as a plain object (`{ id: string }`) and removing `await params`.
- Hardened `generateStaticParams` in the same route so static generation gracefully returns `[]` when Prisma/DB is unavailable, preventing build-time crashes in environments without a live database.
- Optimized auth login flow for env-admin credentials in `src/app/api/auth/login/route.ts` to avoid hashing and Prisma upsert on every login. It now directly mints the session token for env admin and preserves response shape.
- Improved navbar scroll handling performance in `src/components/layout/Navbar.tsx` by using a passive scroll listener and `requestAnimationFrame` throttling for state updates.
- Removed unused duplicate helper `src/lib/getTourById.ts` because it was not imported anywhere.

## File paths touched
- `.gitignore`
- `src/app/(public)/packages/details/[id]/page.tsx`
- `src/app/api/auth/login/route.ts`
- `src/components/layout/Navbar.tsx`
- `src/lib/getTourById.ts` (deleted)
- `Travel-Booking` (deleted)
- `Travel-Booking.pub` (deleted)
- `SECURITY_AND_FIXES_Report.md` (new)

## Environment variables
- Required for JWT/session auth behavior: `JWT_SECRET`
- Existing env-admin login behavior uses: `ADMIN_EMAIL`, `ADMIN_PASSWORD`

## SSH key rotation/revocation note
If the leaked SSH private key was ever used or distributed, rotate/revoke it immediately:
1. Remove/revoke the compromised key from all servers/services.
2. Generate a new SSH keypair.
3. Update authorized keys/deploy credentials.
4. Audit recent access for suspicious activity.

## Local run instructions
1. `npm install`
2. `npm run dev`
