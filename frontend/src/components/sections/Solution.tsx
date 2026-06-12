import { Reveal } from "@/components/ui/Reveal";
import { PostIcon, UsersIcon, CheckIcon, StreamIcon } from "@/components/ui/icons";

const STEPS = [
  {
    icon: PostIcon,
    title: "Post a Quest",
    body: "Define the work and lock payment into a smart contract on Stacks.",
  },
  {
    icon: UsersIcon,
    title: "Contributors Apply",
    body: "Builders from anywhere apply or submit — no gatekeepers.",
  },
  {
    icon: CheckIcon,
    title: "Work Gets Done",
    body: "Deliverables are submitted transparently against the locked funds.",
  },
  {
    icon: StreamIcon,
    title: "Approve & Stream",
    body: "Approve, and payment streams to the builder block by block.",
  },
];

export function Solution() {
  return (
    <section id="how-it-works" className="section">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow text-center">The solution</p>
          <h2 className="heading mx-auto mt-4 max-w-2xl text-center">
            BitWork Changes That
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <div
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block"
            aria-hidden
          />
          <div className="grid gap-8 md:grid-cols-4">
            {STEPS.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 0.1}>
                <div className="relative text-center md:text-left">
                  <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-surface text-bitcoin md:mx-0">
                    <Icon className="h-6 w-6" />
                    <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-bitcoin text-xs font-bold text-black">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
