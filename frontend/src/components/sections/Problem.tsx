import { Reveal } from "@/components/ui/Reveal";
import { ChatIcon, ClockIcon, ShieldIcon } from "@/components/ui/icons";

const PAIN_POINTS = [
  {
    icon: ChatIcon,
    title: "Discord chaos",
    body: "Work gets posted as a message in a channel, then buried under a hundred others within the hour.",
  },
  {
    icon: ClockIcon,
    title: "Multi-sig delays",
    body: "Contributors finish, then wait days for enough signers to approve a payment from a shared wallet.",
  },
  {
    icon: ShieldIcon,
    title: "No trust guarantee",
    body: "Builders start with nothing locked. Posters pay with nothing delivered. Everyone just hopes.",
  },
];

export function Problem() {
  return (
    <section className="section">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow text-center">The problem</p>
          <h2 className="heading mx-auto mt-4 max-w-3xl text-center">
            Right Now, This Is How Stacks DAOs Pay Contributors
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {PAIN_POINTS.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <div className="card card-hover h-full">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-bitcoin/10 text-bitcoin">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
