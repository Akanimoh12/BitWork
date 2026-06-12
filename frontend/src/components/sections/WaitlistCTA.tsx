import { Reveal } from "@/components/ui/Reveal";
import { WaitlistForm } from "@/components/WaitlistForm";

export function WaitlistCTA() {
  return (
    <section id="waitlist" className="section">
      <div className="container-content">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-16 text-center sm:px-12 sm:py-20">
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-bitcoin/10 blur-[120px]"
              aria-hidden
            />
            <div className="relative z-10">
              <h2 className="heading mx-auto max-w-2xl">
                Be a Founding Poster or Builder
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/65">
                BitWork is in validation. Join the waitlist and help shape the platform.
              </p>
              <div className="mx-auto mt-8 max-w-md">
                <WaitlistForm buttonLabel="Join Waitlist" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
