const features: Item[] = [
    {
        icon: "storefront",
        title: "Digital Storefront",
        content: "Create a digital storefront to showcase and sell your products. Thrivr provides analytics to track sales and growth."
    },
    {
        icon: "sell",
        title: "Dynamic Pricing",
        content: "Set pricing dynamically based on demand, audience, and other market factors to maximize revenue potential."
    },
    {
        icon: "analytics",
        title: "Business Analytics",
        content: "Monitor your business growth with powerful analytics that give insights into sales, traffic, and more."
    },
    {
        icon: "lock",
        title: "Access Control",
        content: "Control who has access to your products and content with integrated user management features."
    },
    {
        icon: "create",
        title: "Content Creation Tools",
        content: "Thrivr integrates tools to help you create and manage content across social platforms easily."
    },
    {
        icon: "campaign",
        title: "Marketing Tools",
        content: "Boost your product’s visibility with integrated marketing improvement tools to help you reach a larger audience."
    }
];

const Features = () => {
    return (
        <section id="features" className="bg-[#1A1A1A] text-white py-24 px-5">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-10">Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-[#232323] p-8 rounded-md text-left transition-transform duration-300 hover:scale-105"
                        >
                            <i className="material-icons text-[#00C896] text-5xl mb-4">{feature.icon}</i>
                            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                            <p className="text-gray-300 leading-relaxed">{feature.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;