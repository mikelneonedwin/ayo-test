import Cta from './cta';

const FinalCTA = () => {
    return (
        <section id="final-cta" className="bg-[#1A1A1A] text-white py-24 px-5">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Be the First to Experience Thrivr</h2>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8">
                    Don’t miss out on early access to the platform that will transform your creative business. Join the waitlist today and get priority access to our launch.
                </p>
                <Cta />
            </div>
        </section>
    );
};

export default FinalCTA;