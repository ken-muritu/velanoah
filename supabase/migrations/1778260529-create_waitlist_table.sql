/*
  # Create waitlist table

  1. New Tables
    - `waitlist`
      - `id` (uuid, primary key, auto-generated)
      - `email` (text, unique, not null) — the subscriber's email address
      - `created_at` (timestamptz, default now()) — when they signed up

  2. Security
    - Enable RLS on `waitlist` table
    - Add INSERT policy so anyone (anon) can add their email
    - No SELECT/UPDATE/DELETE for anon — only backend can read the list
*/

CREATE TABLE IF NOT EXISTS waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public waitlist signup)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'waitlist'
      AND policyname = 'Anyone can join waitlist'
  ) THEN
    CREATE POLICY "Anyone can join waitlist"
      ON waitlist
      FOR INSERT
      TO anon
      WITH CHECK (true);
  END IF;
END $$;
