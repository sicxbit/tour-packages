# Security and Functional Fixes Report

## Summary of Changes

### 1) Removed committed SSH key material
- Deleted leaked key files from repository root:
  - `Travel-Booking`
  - `Travel-Booking.pub`
- Updated `.gitignore` to reduce risk of future key commits by adding:
  - `*.pem`, `*.key`, `*id_rsa*`, `*id_ed25519*`, `*.p12`, `*.pfx`, `Travel-Booking`, `Travel-Booking.pub`

### 2) Fixed login bug (previously always succeeded)
- Updated `src/app/login/page.tsx` so redirect only happens after successful `/api/login` response.
- Replaced ambiguous client error state name `error` with `errorMsg`.
- Added server-side login endpoint at `src/app/api/login/route.ts`:
  - Accepts `POST` with `{ email, password }`.
  - Validates credentials against env vars:
    - `ADMIN_EMAIL`
    - `ADMIN_PASSWORD`
  - On success, sets HttpOnly cookie `cc_session` containing an HMAC-signed token using `SESSION_SECRET`.
  - On failure, returns HTTP 401 with safe message.
- Added logout endpoint at `src/app/api/logout/route.ts`:
  - Accepts `POST`
  - Clears `cc_session` cookie.

### 3) Fixed Next.js params typing bug
- Updated `src/app/packages/details/[id]/page.tsx`:
  - Corrected `params` type to `{ id: string }`.
  - Removed incorrect `await params` usage.
  - Removed debug logging from route.

### 4) Fixed internal navigation links (relative to absolute)
- Updated navigation item links from `"about"`/`"login"` to `"/about"`/`"/login"` in:
  - `src/app/page.tsx`
  - `src/app/about/page.tsx`
  - `src/app/package/page.tsx`
  - `src/app/vendor/page.tsx`

### 5) Removed noisy production logging and duplicate helper
- Removed unnecessary console logging in `src/lib/tours.ts`.
- Deleted duplicate helper file `src/lib/getTourById.ts` (logic already exists in `src/lib/tours.ts`).

### 6) Performance hardening of navbar scroll listeners
- Updated both navbar components to avoid state updates on every scroll event:
  - `src/components/layout/Navbar.tsx`
  - `src/components/layout/NavbarTwo.tsx`
- Applied `requestAnimationFrame` throttling pattern.
- Registered scroll listeners with `{ passive: true }`.
- Preserved existing UI markup, class names, and styling.

## New Required Environment Variables
Set these in your local `.env.local`:

- `ADMIN_EMAIL=your_admin_email@example.com`
- `ADMIN_PASSWORD=your_strong_password`
- `SESSION_SECRET=a_long_random_secret_value`

## How to Run Locally
1. Install dependencies:
   - `npm install`
2. Start development server:
   - `npm run dev`
3. Open:
   - `http://localhost:3000`

## Key Rotation / Revocation Notes (Leaked SSH Material)
If the removed SSH keys were ever used outside local testing:
1. Treat them as compromised immediately.
2. Revoke/remove corresponding public keys from all servers/services.
3. Generate new keys and redeploy securely.
4. Audit recent access logs for suspicious usage.
5. If full cleanup is required, coordinate a **history rewrite** in a separate, explicit operation (for example with `git filter-repo` or BFG) and force-push with team approval. (Not executed as part of this change.)
