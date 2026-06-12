import { Reveal } from "@/components/ui/Reveal";
import { TargetIcon, BriefcaseIcon, GiftIcon, TrophyIcon } from "@/components/ui/icons";

const QUESTS = [
  {
    icon: TargetIcon,
    name: "Bounty",
    body: "Fixed reward, open to all — the best or first submission wins.",
    methods: ["sBTC", "USDCx", "STX"],
  },
  {
    icon: BriefcaseIcon,
    name: "Project",
    body: "Applied gig work — one assignee, one scoped deliverable.",
    methods: ["sBTC", "USDCx", "STX"],
  },
  {
    icon: GiftIcon,
    name: "Grant",
    body: "Milestone-based funding that unlocks as work is delivered.",
    methods: ["sBTC", "USDCx", "STX"],
  },
  {
    icon: TrophyIcon,
    name: "Hackathon",
    body: "Time-boxed competition with a prize pool split across winners.",
    methods: ["sBTC", "USDCx", "STX"],
  },
];

export function QuestTypes() {
  return (
    <section className="section">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow text-center">Quest types</p>
          <h2 className="heading mx-auto mt-4 max-w-2xl text-center">What You Can Post</h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {QUESTS.map(({ icon: Icon, name, body, methods }, i) => (
            <Reveal key={name} delay={i * 0.08}>
              <div className="card card-hover flex h-full flex-col">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-bitcoin/10 text-bitcoin">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">{body}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {methods.map((m) => (
                    <span key={m} className="badge">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
