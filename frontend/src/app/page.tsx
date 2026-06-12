import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { QuestTypes } from "@/components/sections/QuestTypes";
import { Payment } from "@/components/sections/Payment";
import { WhyStacks } from "@/components/sections/WhyStacks";
import { WhoItsFor } from "@/components/sections/WhoItsFor";
import { WaitlistCTA } from "@/components/sections/WaitlistCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <QuestTypes />
        <Payment />
        <WhyStacks />
        <WhoItsFor />
        <WaitlistCTA />
      </main>
      <Footer />
    </>
  );
}
