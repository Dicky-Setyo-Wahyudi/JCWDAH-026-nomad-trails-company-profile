import {ShieldCheck, Compass, Wallet, Headset} from "lucide-react";

const reasons = [
    {
        title: "Safe Adventure",
        description:"Every trip follows safety standards with certified equipment.",
        icon: ShieldCheck,
    },
    {
        title: "Professional Guides",
        description:"Experienced local guides accompany every journey.",
        icon: Compass,
    },
    {
        title: "Affordable Packages",
        description:"Premium adventure experiences at competitive prices.",
        icon: Wallet,
    },
    {
        title: "24/7 Customer Support",
        description:"Our team is always ready to assist before and during your trip.",
        icon: Headset,
    },
];

const WhyChooseUs = () => {
    return (
        <section id="why-us" className="py-24 bg-white" data-aos="fade-up">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center">
                    <p className="uppercase tracking-[4px] text-[#3282B8] font-semibold"> Why Choose Us </p>
                    <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-[#0F4C75]"> Your Trusted Adventure Partner </h2>
                    <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600"> We are committed to delivering safe, enjoyable, and memorable outdoor experiences. </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                    {reasons.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div key={index} className="group bg-[#F9F7F7] p-8 rounded-3xl shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">
                                <div className="w-16 h-16 rounded-2xl bg-[#BBE1FA] flex items-center justify-center group-hover:scale-110 transition">
                                    <Icon size={30} className="text-[#0F4C75]"/>
                                </div>
                                <h3 className="mt-6 text-xl font-bold text-[#0F4C75]"> {item.title} </h3>
                                <p className="mt-4 leading-7 text-gray-600"> {item.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;