const features: Item[] = [
    {
        icon: "storefront",
        title: "Dynamic Market Place",
        content: "Thrivr provides creators with a suite of tools to manage their business and scale, offering dynamic pricing options."
    },
    {
        icon: "schedule",
        title: "Time-Saving Tools",
        content: "Thrivr helps creators free up time by automating tasks, allowing them to focus on creating content."
    },
    {
        icon: "analytics",
        title: "Business Growth Tracking",
        content: "Integrated analytics and tracking tools help creators stay on top of their business performance and growth."
    }
]

const Overview = () => {
    return (
        <section id="overview" className="bg-primary text-white py-24 px-5">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-10">Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-secondary p-8 rounded-md text-center transition-transform duration-300 hover:scale-105">
                            <i className="material-icons text-cta text-5xl mb-4">{feature.icon}</i>
                            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                            <p className="text-gray-300 leading-relaxed">
                                {feature.content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default Overview;