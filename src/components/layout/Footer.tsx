import Logo from "../../assets/logo/logo.png";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
	return (
		<footer className="bg-[#082C47] text-white">
			<div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-3 gap-14">
				<div>
					<div className="flex items-center gap-3">
						<img src={Logo} className="w-14"/>
						<div>
							<h2 className="text-2xl font-bold"> Nomad Trails </h2>
							<p className="text-gray-400 text-sm"> Adventure Company </p>
						</div>
					</div>

					<p className="mt-6 leading-8 text-gray-300">
						Explore Indonesia with professional guides and unforgettable outdoor adventures.
					</p>
				</div>

				<div>
					<h3 className="text-2xl font-semibold"> Contact </h3>
					<div className="space-y-5 mt-8">
						<p className="flex gap-3">
							<MapPin />
							Jakarta, Indonesia
						</p>

						<p className="flex gap-3">
							<Mail />
							info@nomadtrails.com
						</p>

						<p className="flex gap-3">
							<Phone />
							+62 812 3456 7890
						</p>
					</div>
				</div>
				<div>

					<h3 className="text-2xl font-semibold"> Business Hours </h3>
					<p className="mt-8 leading-8 text-gray-300">
						Monday - Friday
						<br />
						08:00 - 18:00 WIB
						<br /><br />
						Saturday
						<br />
						09:00 - 15:00 WIB
					</p>
				</div>
			</div>

			<div className="border-t border-white/10 py-6 text-center text-gray-400">
				© 2026 Nomad Trails Adventure Company
			</div>
		</footer>
	);
};

export default Footer;