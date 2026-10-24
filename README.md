# VELA — landing page

**Catch every thought. Push every action.**

A standalone landing page and email waitlist for **VELA**, an AI productivity layer for your phone: you share a thought, voice note, screenshot or link to VELA, it works out what you meant (an event, a reminder, an email draft, an expense) and sends it to the right app.

Live: **[velanoah.vercel.app](https://velanoah.vercel.app)**

The VELA app itself (Flutter) and its Next.js site are in a separate repository: [ken-muritu/vela](https://github.com/ken-muritu/vela).

## What's on the page

- Hero, the problem, how it works (share → intent classification → action) and the feature list
- Who it's for, the tech stack and pricing (Free and Pro, in KES)
- A Solana section describing the planned USDC payments and SOL task stakes
- A waitlist form that saves emails to Supabase

## Stack

| | |
|---|---|
| Build | Vite 5, React 18, TypeScript |
| UI | Tailwind CSS 3, shadcn/ui (Radix), Framer Motion, Lucide icons |
| Data | Supabase (Postgres) for the waitlist |
| Web3 | Solana wallet adapter (Phantom, devnet) |

## Run it locally

```bash
npm install
npm run dev
```

The waitlist needs a Supabase project. Set these environment variables (for example in a local env file, which git ignores):

| Variable | What it is |
|---|---|
| `VITE_SUPABASE_URL` | Your Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Your project's public anon key |

Without them the page still runs, and the form says the waitlist is unavailable.

Create the table by running the SQL in `supabase/migrations/`. It creates `waitlist` (`id`, `email` unique, `created_at`) with row-level security turned on and an insert-only policy for anonymous visitors, so nobody can read the list from the browser.

## Scripts

| Command | Does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build |
| `npm run lint` | ESLint |

## Licence

Copyright © 2026 Kennedy Muritu. All rights reserved. The code is public to read, not to reuse. See [LICENSE](LICENSE).
