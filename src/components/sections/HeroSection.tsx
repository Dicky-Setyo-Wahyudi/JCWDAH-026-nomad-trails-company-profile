import HeroImage from "../../assets/images/hero.jpg";
import {ShieldCheck,Mountain,Compass} from "lucide-react";

const HeroSection = () => {
	return (
		<section id="hero" className="relative py-24 lg:min-h-screen flex items-center bg-[#F9F7F7] overflow-hidden" data-aos="fade-up">
			<div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[#BBE1FA]/40 blur-3xl"></div>
			<div className="absolute bottom-0 -left-40 h-80 w-80 rounded-full bg-[#3282B8]/20 blur-3xl"></div>
			<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
				<div data-aos="fade-right">
					<p className="uppercase tracking-[4px] text-[#3282B8] font-semibold"> Explore Beyond Limits </p>
					<h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#0F4C75]">
						Adventure Starts
						<br />
						With The Right
						<br />
						Journey
					</h1>

					<p className="mt-8 text-base md:text-lg text-gray-600 leading-8">
						Experience unforgettable hiking, camping,
						trekking and outdoor adventures with
						professional guides across Indonesia.
					</p>

					<div className="mt-10 flex flex-col sm:flex-row gap-4">
						<a href="#services" className="bg-[#0F4C75] hover:bg-[#3282B8] hover:scale-105 transition-all duration-300 text-white px-8 py-4 rounded-xl text-center"> Explore Now </a>
						<a href="#about" className="border-2 border-[#0F4C75] hover:bg-[#0F4C75] hover:text-white hover:scale-105 transition-all duration-300 px-8 py-4 rounded-xl text-center"> Learn More </a>
					</div>

					<div className="mt-12 flex flex-col gap-5">
						<div className="flex items-center gap-3 hover:translate-x-2 transition-all duration-300">
							<ShieldCheck className="text-[#3282B8]" size={22}/>
							<span> Professional Guide </span>
						</div>

						<div className="flex items-center gap-3 hover:translate-x-2 transition-all duration-300">
							<Mountain className="text-[#3282B8]" size={22}/>
							<span> Safe Adventure Experience </span>
						</div>

						<div className="flex items-center gap-3 hover:translate-x-2 transition-all duration-300">
							<Compass className="text-[#3282B8]" size={22}/>
							<span> 24/7 Customer Support </span>
						</div>
					</div>
				</div>

				<div className="relative" data-aos="fade-left">
					<img src={HeroImage} alt="Hero" loading="eager" decoding="async" className="w-full h-[380px] md:h-[520px] lg:h-[620px] object-cover rounded-[32px] shadow-2xl hover:scale-[1.02] duration-500 transition-all"/>
						<div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-xl px-6 py-4">
							<p className="text-xl sm:text-2xl font-bold text-[#0F4C75]">  Trusted By </p>
							<h3 className="text-3xl font-bold text-[#0F4C75] mt-1"> 500+ </h3>
							<p className="text-sm text-gray-600"> Happy Adventure Travelers </p>
						</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;