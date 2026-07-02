import AboutImage from "../../assets/images/about.jpg";
import {CheckCircle2,ShieldCheck,MapPinned,Users} from "lucide-react";

const AboutPreview = () => {
	return (
		<section id="about" className="py-24 bg-white overflow-hidden" data-aos="fade-up">
			<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
				<div data-aos="fade-right">
					<img src={AboutImage} alt="About Nomad Trails" loading="lazy" decoding="async" className="w-full h-[500px] object-cover rounded-[32px] shadow-2xl hover:scale-[1.02] transition-all duration-500"/>
				</div>

				<div data-aos="fade-left">
					<p className="uppercase tracking-[4px] font-semibold text-[#3282B8]"> About Us </p>
					<h2 className="mt-4 text-4xl lg:text-5xl font-bold text-[#0F4C75] leading-tight">
						Adventure With Experienced Guides
					</h2>
					<p className="mt-8 text-lg leading-8 text-gray-600">
						Nomad Trails is your trusted adventure partner,
						offering unforgettable hiking, trekking,
						camping and outdoor experiences across Indonesia.
						Every journey is designed to be safe,
						exciting, and memorable.
					</p>

					<div className="grid sm:grid-cols-2 gap-6 mt-10">
						<div className="flex items-center gap-3 hover:translate-x-2 transition-all duration-300">
							<ShieldCheck size={22} className="text-[#3282B8]"/>
							<span>Professional Guides</span>
						</div>

						<div className="flex items-center gap-3 hover:translate-x-2 transition-all duration-300">
							<MapPinned size={22} className="text-[#3282B8]"/>
							<span>Best Destinations</span>
						</div>

						<div className="flex items-center gap-3 hover:translate-x-2 transition-all duration-300">
							<Users size={22} className="text-[#3282B8]"/>
							<span>Private & Group Tours</span>
						</div>

						<div className="flex items-center gap-3 hover:translate-x-2 transition-all duration-300">
							<CheckCircle2 size={22} className="text-[#3282B8]"/>
							<span>Affordable Packages</span>
						</div>
					</div>

					<a href="#services" className="inline-block mt-10 bg-[#0F4C75]	text-white px-8 py-4 rounded-xl hover:bg-[#3282B8] hover:scale-105 transition-all duration-300">
						Explore Our Services
					</a>
				</div>
			</div>
		</section>
	);
};

export default AboutPreview;