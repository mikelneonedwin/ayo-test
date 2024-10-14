import CTA from "./cta";

const Hero = () => {
    return (
        <section className="bg-main-bg py-16">
            <div className="container mx-auto text-center px-4">
                <h1 className="text-6xl text-text-shade mb-2 font-light leading-tight">
                    Seamless Orders, Simple Link
                </h1>
                <p className="text-5xl font-bold text-main-default mb-8">All Your Products in One Place</p>
                <p className="text-xl text-gray-600 mb-10 max-w-[83.33%] mx-auto">
                    Showcase your products and let customers place orders quickly through their favorite channels.
                </p>
                <CTA className="!inline-flex" />
            </div>
        </section>
    );
};

export default Hero;
