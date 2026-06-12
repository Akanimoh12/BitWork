import { LightningIcon, XIcon, StreamIcon } from "@/components/ui/icons";

const BUILT_ON = ["Stacks", "sBTC", "USDCx", "STX", "StackStream"];

export function Footer() {
  return (
    <footer className="border-t border-border py-14">
      <div className="container-content">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 text-lg font-bold text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-bitcoin/15 text-bitcoin">
                <LightningIcon className="h-4 w-4" />
              </span>
              BitWork
            </div>
            <p className="mt-4 text-sm text-white/55">Work delivered. Bitcoin earned.</p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Connect
            </p>
            <a
              href="https://x.com/BitWorkXYZ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-bitcoin"
            >
              <XIcon className="h-4 w-4" />
              @BitWorkXYZ
            </a>
            <a
              href="https://www.stackstream.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-bitcoin"
            >
              <StreamIcon className="h-4 w-4" />
              StackStream
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Built on
            </p>
            <div className="flex flex-wrap gap-2">
              {BUILT_ON.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border px-3 py-1 text-xs text-white/60"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-xs text-white/40">
          © {new Date().getFullYear()} BitWork. The opportunity marketplace built on Bitcoin.
        </div>
      </div>
    </footer>
  );
}
