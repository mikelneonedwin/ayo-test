const steps = [
    {
        icon: 'settings',
        title: 'Set up your storefront in minutes',
        description: 'Easily get started by setting up your own storefront with Thrivr’s intuitive interface.'
    },
    {
        icon: 'upload',
        title: 'Upload your products and set pricing dynamically',
        description: 'Upload your products, and adjust prices dynamically based on demand and other factors.'
    },
    {
        icon: 'insights',
        title: 'Track your business growth with integrated analytics',
        description: 'Monitor sales, customer behavior, and other key metrics to track the growth of your business.'
    }
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="bg-[#1A1A1A] text-white py-24 px-5">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-10">
                    How It Works
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-[#232323] p-8 rounded-md text-left transition-transform duration-300 hover:scale-105">
                            <i className="material-icons text-[#00C896] text-5xl mb-4">{step.icon}</i>
                            <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                            <p className="text-gray-300 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
