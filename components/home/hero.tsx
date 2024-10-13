import Cta from "./cta";

const Hero = () => {
    return (
        <section id="hero" className="bg-primary text-white py-24 px-5 text-center">
            <div className="container mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold mb-5">
                    Thrivr: Tools for Creators
                </h1>
                <p className="text-lg md:text-xl font-normal text-gray-300 leading-relaxed mb-10">
                    Grow your business, free up time for creativity, and take control with dynamic pricing, analytics, and marketing tools.
                </p>
                <Cta className="font-bold" />
            </div>
        </section>
    )
}

export default Hero;