"use client"

import clsx from "clsx";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Icon } from "../global";

const steps: Item[] = [
    {
        icon: "link",
        title: "Create your Thrivr store link",
        content: "Set up in minutes with no technical skills required.",
    },
    {
        icon: "share",
        title: "Share your link anywhere",
        content: "Social media, emails, or messages—wherever your audience is.",
    },
    {
        icon: "analytics",
        title: "Manage and track your sales",
        content: "Get real-time insights into your orders and growth.",
    },
];

const Tab: React.FC<Item> = ({ icon, title, content }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true })
    const [fastAnimate, setFastAnimate] = useState(false);

    useEffect(() => {
        if (!isInView || fastAnimate) return;
        setTimeout(() => {
            setFastAnimate(true);
        }, 1500);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInView])

    return (
        <div
            ref={ref}
            className={clsx(
                "bg-action-secondary/25 p-6 rounded-lg shadow-md transform hover:scale-105 hover:shadow-lg hover:bg-action-secondary",
                "[&>div>i]:animate-bounce [&>div>i]:hover:animate-ping",
                isInView
                    ? "transform-none opacity-100"
                    : "-translate-x-[-200px] opacity-0"
            )}
            style={{
                transition: fastAnimate
                    ? "all 0.3s"
                    : "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
        >
            <div className="flex justify-center mb-4">
                <Icon icon={icon} className="text-action-hover text-5xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-text-secondary">{content}</p>
        </div>
    )
}


const HowItWorks = () => {
    return (
        <section className="pb-32 pt-16 bg-white">
            <div className="container mx-auto px-4 text-center">
                <h2
                    className="text-4xl font-bold text-text-primary mb-6"
                    style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}
                >
                    How Thrivr Smart Links Work
                </h2>
                <p className="text-lg text-text-secondary mb-10">
                    Effortlessly showcase your products, streamline orders, and grow your business—all from one smart link.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-2 overflow-x-hidden">
                    {steps.map((step, index) => <Tab key={index} {...step} />)}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;