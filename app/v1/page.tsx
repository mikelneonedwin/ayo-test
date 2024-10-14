import { 
  Features, 
  Hero, 
  HowItWorks, 
  Launch, 
  Overview, 
  Waitlist 
} from "@/components/home";

export default function Home() {
  return (
    <section className="bg-primary text-white">
      <Hero/>
      <Overview/>
      <Features/>
      <HowItWorks/>
      <Launch/>
      <Waitlist/>
    </section>
  )
}