import Marquee from "react-fast-marquee";
import { Icon } from "../global";
import type { MaterialIcon } from "material-icons";

type Feature = {
    icon: MaterialIcon;
    label: string;
}

const features: Feature[] = [
    { icon: "shopping_cart", label: "Easy Orders" },
    { icon: "local_shipping", label: "Fast Delivery" },
    { icon: "storefront", label: "Expand Reach" },
    { icon: "security", label: "Secure Transactions" },
    { icon: "support", label: "24/7 Support" },
    { icon: "thumb_up", label: "Customer Satisfaction" },
    { icon: "payment", label: "Multiple Payment Options" },
    { icon: "analytics", label: "Analytics Insights" },
    { icon: "attach_money", label: "Dynamic Pricing" },
    { icon: "trending_up", label: "Business Growth" },
    { icon: "verified", label: "Verified Stores" },
    { icon: "inventory", label: "Manage Inventory" },
    { icon: "language", label: "Global Reach" },
    { icon: "flash_on", label: "Fast Setup" },
    { icon: "replay", label: "Hassle-Free Returns" },
];

const renderMarquee = (speed: number, direction: "left" | "right") => (
    <Marquee
        autoFill
        pauseOnHover
        speed={speed}
        direction={direction}
    >
        <div className="flex space-x-8 text-xs mt-8">
            {features.map((feature, index) => (
                <span
                    key={index}
                    style={{ background: "rgb(248 248 248)" }}
                    className="inline-flex items-center hover:!bg-action-secondary/25 py-1.5 px-3 rounded-full"
                >
                    <Icon icon={feature.icon} className="text-action-default inline-block mr-2" />
                    {feature.label}
                </span>
            ))}
        </div>
    </Marquee>
);

const Features = () => {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-text-primary mb-8">
                    Not convinced yet? There&apos;s more!
                </h2>
                {renderMarquee(15, "left")}
                {renderMarquee(25, "right")}
                {renderMarquee(35, "left")}
            </div>
        </section>
    );
};

export default Features;