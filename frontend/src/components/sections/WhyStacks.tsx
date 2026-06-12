import { Reveal } from "@/components/ui/Reveal";

const STATS = [
  { value: "Active", label: "DAOs already coordinating on Stacks" },
  { value: "Growing", label: "Developer community building on Bitcoin" },
  { value: "$27M", label: "Ecosystem budget funding the work" },
];

export function WhyStacks() {
  return (
    <section className="section">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow text-center">Why Stacks, why now</p>
          <h2 className="heading mx-auto mt-4 max-w-4xl text-center">
            Gitcoin for Ethereum. Superteam for Solana.{" "}
            <span className="text-bitcoin">BitWork for Bitcoin.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-white/65">
            Every major ecosystem grew a coordination layer for getting work done and
            getting builders paid. Bitcoin never had one — until Stacks made smart
            contracts and on-chain payments practical. The DAOs, the developers, and the
            budget are already here. BitWork is the layer that connects them.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {STATS.map(({ value, label }, i) => (
            <Reveal key={label} delay={i * 0.1}>
              <div className="card h-full text-center">
                <p className="text-3xl font-bold text-bitcoin sm:text-4xl">{value}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
