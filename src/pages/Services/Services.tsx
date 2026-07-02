import Banner from "../../assets/images/services-banner.png";
import {Mountain, Tent, Compass, Trees, Camera,Users, CalendarDays,Star} from "lucide-react";
import PageTransition from "../../components/common/PageTransition";

const services = [
	{
		title: "Mountain Hiking",
		icon: Mountain,
		duration: "2 Days",
		price: "Rp 750.000",
		description: "Experience breathtaking mountain views with professional guides.",
		popular: true,
	},
	{
		title: "Camping Adventure",
		icon: Tent,
		duration: "3 Days",
		price: "Rp 950.000",
		description: "Enjoy unforgettable camping under the stars with complete equipment.",
		popular: false,
	},
	{
		title: "Forest Exploration",
		icon: Trees,
		duration: "1 Day",
		price: "Rp 450.000",
		description: "Explore Indonesia's beautiful forests and hidden waterfalls.",
		popular: false,
	},
	{
		title: "Private Tour",
		icon: Compass,
		duration: "Flexible",
		price: "Rp 1.500.000",
		description: "Private adventure packages tailored to your preferences.",
		popular: true,
	},
	{
		title: "Photography Trip",
		icon: Camera,
		duration: "2 Days",
		price: "Rp 850.000",
		description: "Capture incredible landscapes with experienced local guides.",
		popular: false,
	},
	{
		title: "Corporate Gathering",
		icon: Users,
		duration: "1 Day",
		price: "Custom",
		description: "Outdoor team building activities for companies and organizations.",
		popular: false,
	},
];

const Services = () => {
	return (
		<>
			<PageTransition>
				<section className="relative h-[400px] flex items-center justify-center overflow-hidden">
					<img src={Banner} alt="Services Banner" className="absolute inset-0 w-full h-full object-cover"/>
					<div className="absolute inset-0 bg-black/60" />
					<div className="relative text-center px-6">
						<p className="uppercase tracking-[4px] text-[#BBE1FA] font-semibold"> Adventure Packages </p>
						<h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold text-white"> Explore Our Services </h1>
						<p className="mt-6 max-w-2xl text-gray-200 leading-8">
							Choose your next adventure and create unforgettable
							memories with Nomad Trails.
						</p>
					</div>
				</section>

				<section className="py-24 bg-[#F9F7F7]">
					<div className="max-w-7xl mx-auto px-6">
						<div className="text-center">
							<p className="uppercase tracking-[4px] text-[#3282B8] font-semibold"> Featured Packages </p>
							<h2 className="mt-4 text-4xl font-bold text-[#0F4C75]"> Adventure For Everyone </h2>
						</div>
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
							{services.map((service) => {
								const Icon = service.icon;
								return (
									<div key={service.title} className="group bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 relative">
										{service.popular && (
											<span className="absolute top-5 right-5 bg-[#3282B8] text-white text-xs px-3 py-1 rounded-full">
												Popular
											</span>
										)}

										<div className="w-16 h-16 rounded-2xl bg-[#BBE1FA] flex items-center justify-center group-hover:bg-[#3282B8] transition">
											<Icon size={34} className="text-[#0F4C75] group-hover:text-white transition"/>
										</div>
										<h3 className="mt-6 text-2xl font-bold text-[#0F4C75]"> {service.title} </h3>
										<div className="flex items-center gap-2 mt-5 text-sm text-gray-500">
											<CalendarDays size={18} /> {service.duration}
										</div>

										<div className="flex items-center gap-1 mt-4">
											{Array.from({ length: 5 }).map((_, index) => (
												<Star key={index} size={18} fill="#FACC15" strokeWidth={0}/>
											))}
										</div>
										<p className="mt-6 text-gray-600 leading-7"> {service.description} </p>
										<p className="mt-6 text-xl font-bold text-[#3282B8]"> {service.price} </p>
										<button className="mt-8 w-full bg-[#0F4C75] text-white py-3 rounded-xl hover:bg-[#3282B8] transition">
											Book Now
										</button>
									</div>
								);
							})}
						</div>
					</div>
				</section>

				<section className="py-24 bg-gradient-to-r from-[#0F4C75] to-[#3282B8]">
					<div className="max-w-4xl mx-auto text-center px-6">
						<h2 className="text-4xl font-bold text-white"> Ready For Your Next Adventure? </h2>
						<p className="mt-6 text-gray-200 leading-8">
							Let's explore Indonesia together and create unforgettable experiences.
						</p>
						<button className="mt-10 bg-white text-[#0F4C75] px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
							Contact Us
						</button>
					</div>
				</section>
			</PageTransition>
		</>
	);
};

export default Services;

            