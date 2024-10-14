import { NavBar } from "@/components/global";
import {
    Hero,
    HowItWorks,
    Preview
} from "@/components/main";

export default function Home() {
    return (
        <section>
            <NavBar />
            <Hero />
            <Preview />
            <HowItWorks />
        </section>
    )
}