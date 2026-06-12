import { Reveal } from "@/components/ui/Reveal";
import { PostIcon, UsersIcon, CheckIcon } from "@/components/ui/icons";

const POSTERS = [
  "DAOs that need contributors for development, design, and content",
  "Protocols running grant programmes or hackathons",
  "Businesses paying for crypto-native freelance work",
  "Individuals with a task and a budget",
];

const BUILDERS = [
  "Developers building on Stacks",
  "Designers, writers, and creators in the Bitcoin ecosystem",
  "Global builders — Lagos, Nairobi, Buenos Aires, Manila",
  "Anyone who wants to get paid in Bitcoin without a bank",
];

function Column({
  icon: Icon,
  title,
  items,
}: {
  icon: typeof PostIcon;
  title: string;
  items: string[];
}) {
  return (
    <div className="card h-full">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-bitcoin/10 text-bitcoin">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-white/70">
            <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-bitcoin" />
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function WhoItsFor() {
  return (
    <section id="who-its-for" className="section">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow text-center">Who it&apos;s for</p>
          <h2 className="heading mx-auto mt-4 max-w-2xl text-center">
            Two Sides, One Marketplace
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <Reveal>
            <Column icon={PostIcon} title="For Posters" items={POSTERS} />
          </Reveal>
          <Reveal delay={0.1}>
            <Column icon={UsersIcon} title="For Builders" items={BUILDERS} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
