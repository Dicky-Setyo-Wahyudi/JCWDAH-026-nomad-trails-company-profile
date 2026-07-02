import {Mountain,Tent,Map,ArrowRight} from "lucide-react";
import {Link} from "react-router-dom";

const services = [
	{
		title: "Mountain Hiking",
		description: "Explore Indonesia's most beautiful mountain trails with experienced guides.",
		icon: Mountain,
	},
	{
		title: "Camping Adventure",
		description:"Enjoy nature with complete camping equipment and comfortable campsites.",
		icon: Tent,
	},
	{
		title: "Private Adventure",
		description: "Customized outdoor trips for families, couples, and private groups.",
		icon: Map,
	},
];

const ServicesPreview = () => {
	return (
		<section id="services" className="py-24 bg-[#F9F7F7]" data-aos="fade-up">
			<div className="max-w-7xl mx-auto px-6">
				<div className="text-center">
					<p className="uppercase tracking-[4px] text-[#3282B8] font-semibold"> Our Services </p>
					<h2 className="mt-4 text-4xl lg:text-5xl font-bold text-[#0F4C75]"> Choose Your Adventure</h2>
					<p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
						We provide exciting outdoor experiences designed
						for beginners, families, and professional adventurers.
					</p>

				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
					{services.map((service, index) => {
						const Icon = service.icon;
						return (
							<div key={index} className="group bg-white p-8 rounded-3xl border border-transparent shadow-lg hover:border-[#3282B8] hover:shadow-2xl hover:-translate-y-3 transition-all duration-300">
								<div className="w-16 h-16 bg-[#BBE1FA] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
									<Icon size={32} className="text-[#0F4C75]"/>
								</div>
								<h3 className="mt-8 text-2xl font-bold text-[#0F4C75]"> {service.title} </h3>
								<p className="mt-4 leading-8 text-gray-600"> {service.description} </p>

								<Link to="/blog" className="mt-8 inline-flex items-center gap-2 font-semibold text-[#3282B8] group-hover:gap-4 transition-all"> Learn More
									<ArrowRight size={18}/>
								</Link>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default ServicesPreview;