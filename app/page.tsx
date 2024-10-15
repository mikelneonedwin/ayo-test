import { NavBar } from "@/components/global";
import {
    Features,
    Hero,
    HowItWorks,
    Preview,
    WhatYouGet
} from "@/components/main";

export default function Home() {
    return (
        <section>
            <NavBar />
            <Hero />
            <Preview />
            <HowItWorks />
            <WhatYouGet />
            <Features />
        </section>
    )
}