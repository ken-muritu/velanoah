/*
  # Create waitlist table

  1. New Tables
    - `waitlist`
      - `id` (uuid, primary key, auto-generated)
      - `email` (text, unique, not null)
      - `created_at` (timestamptz, default now())

  2. Security
    - Enable RLS on `waitlist` table
    - Add INSERT policy for anonymous users (public waitlist signups)
    - No SELECT/UPDATE/DELETE policies for anon — only backend can read
*/

CREATE TABLE IF NOT EXISTS waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_tables
    WHERE schemaname = 'public'
      AND tablename = 'waitlist'
      AND rowsecurity = true
  ) THEN
    ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;
  END IF;
END $$;

-- Allow anonymous inserts (public waitlist signup)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'waitlist'
      AND policyname = 'Allow public waitlist signup'
  ) THEN
    CREATE POLICY "Allow public waitlist signup"
      ON waitlist
      FOR INSERT
      TO anon
      WITH CHECK (true);
  END IF;
END $$;
