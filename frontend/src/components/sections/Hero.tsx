"use client";

import { motion } from "framer-motion";
import { WaitlistForm } from "@/components/WaitlistForm";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="grid-backdrop pointer-events-none absolute inset-0 -z-10" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-bitcoin/10 blur-[140px]"
        aria-hidden
      />

      <div className="container-content text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs text-white/70"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-bitcoin" />
          Built on Stacks · Settled on Bitcoin
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          The Opportunity Marketplace
          <br className="hidden sm:block" />{" "}
          Built on <span className="text-bitcoin">Bitcoin</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg"
        >
          Post work. Lock payment on-chain. Get paid in sBTC, USDCx, or STX —
          streamed block by block. No middlemen. No Discord chaos. No waiting.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-10 max-w-md"
        >
          <WaitlistForm />
          <p className="mt-3 text-xs text-white/40">
            Join the waitlist for early access. No spam, ever.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
