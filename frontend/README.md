# BitWork — Landing Page

The marketing landing page for **BitWork**, the opportunity marketplace built on Bitcoin/Stacks. Built with Next.js 14 (App Router), Supabase for waitlist capture, Tailwind CSS, and Framer Motion.

Design is dark, Bitcoin-native, with orange (`#F7931A`) and white accents — inspired by [xverse.app](https://www.xverse.app/).

## Tech Stack

- **Next.js 14** (App Router, TypeScript)
- **Supabase** — waitlist email capture
- **Tailwind CSS** — styling
- **Framer Motion** — subtle fade-in-on-scroll animations
- **Inter** — font (via `next/font`)

## Getting Started

### 1. Install dependencies

```bash
cd frontend
npm install
```

### 2. Configure environment

Copy the example env file and fill in your Supabase project values:

```bash
cp .env.local.example .env.local
```

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

> The page renders fine without these set — the waitlist form just shows a "not configured" message instead of writing to the database.

### 3. Set up the Supabase `waitlist` table

In your Supabase project, open the **SQL Editor** and run the contents of [`supabase/schema.sql`](supabase/schema.sql). It creates:

- a `waitlist` table with `id` (uuid), `email` (unique text), and `created_at` (timestamptz)
- Row Level Security with an **insert-only** policy for the anon key (emails can be written but not read with the public key)

Duplicate emails are handled gracefully — the unique constraint is caught and the user still sees a success message.

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout, Inter font, metadata
│   │   ├── page.tsx          # Assembles all sections
│   │   └── globals.css       # Tailwind + design tokens / component classes
│   ├── components/
│   │   ├── WaitlistForm.tsx  # Reusable email capture form
│   │   ├── ui/
│   │   │   ├── Reveal.tsx     # Framer Motion fade-in-on-scroll wrapper
│   │   │   └── icons.tsx      # Inline SVG icon set
│   │   └── sections/         # The 10 page sections
│   │       ├── Navbar.tsx
│   │       ├── Hero.tsx
│   │       ├── Problem.tsx
│   │       ├── Solution.tsx
│   │       ├── QuestTypes.tsx
│   │       ├── Payment.tsx
│   │       ├── WhyStacks.tsx
│   │       ├── WhoItsFor.tsx
│   │       ├── WaitlistCTA.tsx
│   │       └── Footer.tsx
│   └── lib/
│       └── supabase.ts       # Supabase client + joinWaitlist()
├── supabase/
│   └── schema.sql            # waitlist table + RLS policy
└── .env.local.example
```

## Deploy on Vercel

1. Push this repo to GitHub.
2. Import the project in [Vercel](https://vercel.com/new). Set the **Root Directory** to `frontend`.
3. Add the two environment variables (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`) in the project settings.
4. Deploy. Vercel auto-detects Next.js — no extra config needed.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
