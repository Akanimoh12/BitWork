"use client";

import { useEffect, useState } from "react";
import { LightningIcon } from "@/components/ui/icons";

const NAV_LINKS = [
  { label: "How it Works", href: "#how-it-works" },
  { label: "For Posters", href: "#who-its-for" },
  { label: "For Builders", href: "#who-its-for" },
  { label: "Get Early Access", href: "#waitlist" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border/80 bg-background/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="container-content flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 text-lg font-bold tracking-tight text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-bitcoin/15 text-bitcoin">
            <LightningIcon className="h-4 w-4" />
          </span>
          BitWork
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a href="#waitlist" className="btn-primary">
            Join Waitlist
          </a>
        </div>

        <button
          className="btn-ghost md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="text-base leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-white/80"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#waitlist"
              onClick={() => setOpen(false)}
              className="btn-primary mt-1 w-full"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
