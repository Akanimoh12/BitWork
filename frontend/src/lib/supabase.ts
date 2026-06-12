import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/**
 * Supabase browser client. Returns null when env vars are missing so the
 * landing page still renders locally without credentials configured.
 */
export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

export type WaitlistResult =
  | { status: "success" }
  | { status: "duplicate" }
  | { status: "error"; message: string };

const POSTGRES_UNIQUE_VIOLATION = "23505";

/**
 * Insert an email into the `waitlist` table.
 * Duplicate emails (unique constraint) are reported gracefully.
 */
export async function joinWaitlist(email: string): Promise<WaitlistResult> {
  const trimmed = email.trim().toLowerCase();

  if (!supabase) {
    return {
      status: "error",
      message: "Waitlist is not configured. Add your Supabase keys to .env.local.",
    };
  }

  const { error } = await supabase.from("waitlist").insert({ email: trimmed });

  if (error) {
    if (error.code === POSTGRES_UNIQUE_VIOLATION) {
      return { status: "duplicate" };
    }
    return { status: "error", message: error.message };
  }

  return { status: "success" };
}
