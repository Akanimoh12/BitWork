"use client";

import { useState, type FormEvent } from "react";
import { joinWaitlist } from "@/lib/supabase";
import { CheckIcon } from "@/components/ui/icons";

type Status = "idle" | "loading" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function WaitlistForm({
  buttonLabel = "Get Early Access",
  successMessage = "You're on the list. We'll be in touch.",
  className = "",
}: {
  buttonLabel?: string;
  successMessage?: string;
  className?: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!EMAIL_RE.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setMessage("");

    const result = await joinWaitlist(email);

    if (result.status === "success") {
      setStatus("success");
      setMessage(successMessage);
      setEmail("");
    } else if (result.status === "duplicate") {
      setStatus("success");
      setMessage("You're already on the list. We'll be in touch.");
      setEmail("");
    } else {
      setStatus("error");
      setMessage(result.message);
    }
  }

  if (status === "success") {
    return (
      <div
        className={`flex items-center justify-center gap-2 rounded-full border border-bitcoin/40 bg-bitcoin/10 px-6 py-3.5 text-sm font-medium text-bitcoin ${className}`}
        role="status"
      >
        <CheckIcon className="h-4 w-4 shrink-0" />
        <span>{message}</span>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full ${className}`}
      noValidate
    >
      <div className="flex w-full flex-col gap-3 sm:flex-row">
        <input
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@email.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          className="input-field flex-1"
          aria-label="Email address"
          required
        />
        <button
          type="submit"
          className="btn-primary whitespace-nowrap"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Joining…" : buttonLabel}
        </button>
      </div>
      {status === "error" && message && (
        <p className="mt-2 text-left text-sm text-red-400">{message}</p>
      )}
    </form>
  );
}
