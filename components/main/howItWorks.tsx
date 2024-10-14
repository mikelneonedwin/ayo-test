import { Icon } from "../global";

const steps: Item[] = [
    {
        icon: "link", //<Link className="text-[#CD27B1] text-5xl" />,
        title: "Create your Thrivr store link",
        content: "Set up in minutes with no technical skills required.",
    },
    {
        icon: "share", //<Share className="text-[#CD27B1] text-5xl" />,
        title: "Share your link anywhere",
        content: "Social media, emails, or messages—wherever your audience is.",
    },
    {
        icon: "analytics", //<Analytics className="text-[#CD27B1] text-5xl" />,
        title: "Manage and track your sales",
        content: "Get real-time insights into your orders and growth.",
    },
];

const HowItWorks = () => {
    return (
        <section className="bg-main-bg py-16 move-up">
            <div className="container mx-auto px-4 text-center">
                <h2
                    className="text-4xl font-bold text-gray-900 mb-6"
                    style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}
                >
                    How Thrivr Smart Links Work
                </h2>
                <p className="text-lg text-gray-600 mb-10">
                    Effortlessly showcase your products, streamline orders, and grow your business—all from one smart link.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md transition transform hover:scale-105 hover:shadow-lg hover:bg-[#FDC574]">
                            <div className="flex justify-center mb-4">
                                <Icon icon={step.icon} className="text-main-hover text-5xl" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                            <p className="text-gray-600">{step.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
