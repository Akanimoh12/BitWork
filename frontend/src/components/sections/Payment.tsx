import { Reveal } from "@/components/ui/Reveal";
import { BitcoinIcon, DollarIcon, StacksIcon } from "@/components/ui/icons";

const OPTIONS = [
  {
    icon: BitcoinIcon,
    name: "sBTC",
    tag: "Bitcoin-native",
    body: "Settle work in Bitcoin itself — fully backed, 1:1, secured by the Bitcoin chain.",
  },
  {
    icon: DollarIcon,
    name: "USDCx",
    tag: "Dollar-stable",
    body: "Price and pay in stable dollars when your contributors want predictable value.",
  },
  {
    icon: StacksIcon,
    name: "STX",
    tag: "Native Stacks token",
    body: "Pay in the native token of the Stacks ecosystem, the home of your community.",
  },
];

export function Payment() {
  return (
    <section className="section">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow text-center">Payments</p>
          <h2 className="heading mx-auto mt-4 max-w-2xl text-center">Choose How You Pay</h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {OPTIONS.map(({ icon: Icon, name, tag, body }, i) => (
            <Reveal key={name} delay={i * 0.1}>
              <div className="card card-hover h-full text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-bitcoin/10 text-bitcoin">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{name}</h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-bitcoin">
                  {tag}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
