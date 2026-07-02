import Banner from "../../assets/images/about-banner.png";
import AboutImage from "../../assets/images/abouts.jpg";
import { Target, Eye } from "lucide-react";
import PageTransition from "../../components/common/PageTransition";

const About = () => {
	return (
		<>
			<PageTransition>
				<section className="relative h-[400px] flex items-center justify-center overflow-hidden">
					<img src={Banner} alt="About Banner" className="absolute inset-0 w-full h-full object-cover"/>
					<div className="absolute inset-0 bg-black/60" />
					<div className="relative text-center px-6">
						<p className="uppercase tracking-[4px] text-[#BBE1FA] font-semibold"> About Us </p>
						<h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold text-white"> Explore Beyond Limits </h1>
						<p className="mt-6 max-w-2xl text-gray-200 leading-8">
							Nomad Trails creates unforgettable outdoor adventures,
							connecting travelers with Indonesia's most beautiful destinations.
						</p>
					</div>
				</section>

				<section className="py-24 bg-white" data-aos="fade-up">
					<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
						<img src={AboutImage} alt="About" loading="lazy" className="rounded-3xl shadow-2xl h-[450px] w-full object-cover hover:scale-[1.02] transition duration-500"/>
						
						<div>
							<p className="uppercase tracking-[4px] text-[#3282B8] font-semibold"> Our Story </p>
							<h2 className="mt-4 text-4xl font-bold text-[#0F4C75]"> Adventure Starts With Passion </h2>

							<p className="mt-8 text-gray-600 leading-8">
								Nomad Trails was founded with a passion for outdoor
								exploration and unforgettable experiences.
								We believe every journey should be safe,
								enjoyable, and meaningful.
							</p>

							<p className="mt-6 text-gray-600 leading-8">
								Our experienced guides are committed to helping
								every traveler discover nature while protecting
								the environment for future generations.
							</p>

						</div>
					</div>
				</section>

				<section className="py-24 bg-[#F9F7F7]" data-aos="fade-up">
					<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
						<div className="bg-white rounded-3xl p-10 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all">
							<Target size={45} className="text-[#3282B8]"/>
							<h3 className="mt-6 text-3xl font-bold text-[#0F4C75]"> Our Mission </h3>
							<p className="mt-6 leading-8 text-gray-600">
								Deliver memorable outdoor adventures through
								professional service, safety, and sustainable tourism.
							</p>
						</div>

						<div className="bg-white rounded-3xl p-10 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all">
							<Eye size={45} className="text-[#3282B8]"/>
							<h3 className="mt-6 text-3xl font-bold text-[#0F4C75]"> Our Vision </h3>
							<p className="mt-6 leading-8 text-gray-600">
								Become Indonesia's trusted adventure company,
								inspiring people to explore nature responsibly.
							</p>
						</div>
					</div>
				</section>
			</PageTransition>
		</>
	);
};

export default About;