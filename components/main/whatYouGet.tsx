/* eslint-disable @next/next/no-img-element */
import { Icon } from "../global";
import CTA from "./cta"; // CTA as a default export

const benefits: Item[] = [
    {
        icon: "shopping_cart",
        title: "Easily Manage Orders",
        content: "Streamline your order management process with Thrivr's smart links."
    },
    {
        icon: "local_shipping",
        title: "Effortless Delivery",
        content: "Track deliveries and ensure smooth operations with real-time updates."
    },
    {
        icon: "storefront",
        title: "Expand Your Reach",
        content: "Reach more customers with integrated sharing options."
    }
];

const WhatYouGetSection = () => {
    return (
        <section className="bg-action-secondary/15 py-16">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 items-center">
                {/* Left side - portrait image */}
                <div className="flex flex-col justify-center items-center md:items-start">
                    <img
                        src="https://res.cloudinary.com/catlog/image/upload/c_scale,w_900/v1670574046/front-pages/woman-with-headphones-large.webp"
                        alt="Thrivr Smart Links"
                        className="rounded-lg w-full md:w-3/4 object-cover"
                    />  
                </div>

                {/* Right side - benefits grid */}
                <div className="grid grid-cols-1 gap-6">
                    <h2 className="text-3xl font-bold text-action-default mb-6">
                        What You Get with Thrivr Smart Links
                    </h2>
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="flex items-start bg-neutral-alt-bg p-4 rounded-lg border border-neutral-borders hover:bg-action-secondary transition transform hover:scale-105 odd:hover:rotate-1 even:hover:-rotate-1 hover:shadow-lg duration-300 ease-in-out"
                        >
                            <div className="mr-4">
                                <Icon icon={benefit.icon} className="text-action-default text-4xl animate-pulse" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-text-primary mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-text-secondary">{benefit.content}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="col-span-2 text-center">
                    {/* Writeup */}
                    <p className="text-xl font-medium text-text-primary mt-6">
                        Ready to grow your business effortlessly?
                    </p>
                    {/* Waitlist CTA */}
                    <CTA className="mt-6" />
                </div>
            </div>
        </section>
    );
};

export default WhatYouGetSection;