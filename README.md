# Tour Packages (Next.js + Prisma)

This project uses Next.js App Router with Prisma + PostgreSQL for backend APIs, auth, and admin tour management.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create env file:

```bash
cp .env.example .env
```

3. Set values in `.env`:
- `DATABASE_URL`
- `JWT_SECRET`
- `ADMIN_EMAIL`
- `ADMIN_PASSWORD`

4. Run migration:

```bash
npm run db:migrate
```

5. Seed initial admin user:

```bash
npm run db:seed
```

6. Start app:

```bash
npm run dev
```

Then login using `ADMIN_EMAIL` / `ADMIN_PASSWORD` and open `/admin`.

## Available scripts

- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run db:migrate`
- `npm run db:seed`
