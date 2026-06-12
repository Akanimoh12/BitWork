-- BitWork waitlist table
-- Run this in the Supabase SQL editor (or via the CLI) to set up email capture.

create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  created_at timestamptz not null default now()
);

-- Enforce case-insensitive email storage at the app layer (we lowercase on insert).
create index if not exists waitlist_email_idx on public.waitlist (email);

-- Enable Row Level Security and allow anonymous inserts only.
alter table public.waitlist enable row level security;

-- Allow anyone (anon key) to add themselves to the waitlist.
drop policy if exists "Allow anonymous waitlist inserts" on public.waitlist;
create policy "Allow anonymous waitlist inserts"
  on public.waitlist
  for insert
  to anon
  with check (true);

-- Note: no select policy is created, so emails cannot be read with the anon key.
