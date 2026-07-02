import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Star } from "lucide-react";
import Avatar1 from "../../assets/images/testimonials/avatar-1.jpg";
import Avatar2 from "../../assets/images/testimonials/avatar-2.jpg";
import Avatar3 from "../../assets/images/testimonials/avatar-3.jpg";
import Avatar4 from "../../assets/images/testimonials/avatar-4.jpg";
import Avatar5 from "../../assets/images/testimonials/avatar-5.jpg";
import Avatar6 from "../../assets/images/testimonials/avatar-6.jpg";

const testimonials = [
	{
		name: "John Doe",
		role: "Mountain Explorer",
		image: Avatar1,
		comment: "Amazing experience! Everything was well organized.",
	},
	{
		name: "Sarah Wilson",
		role: "Adventure Traveler",
		image: Avatar2,
		comment: "Highly recommended for anyone who loves adventure.",
	},
	{
		name: "Michael Lee",
		role: "Backpacker",
		image: Avatar3,
		comment: "Professional guides and unforgettable memories.",
	},
	{
		name: "Kevin Tan",
		role: "Nature Lover",
		image: Avatar4,
		comment: "One of the best hiking trips I've ever joined.",
	},
	{
		name: "Emma Watson",
		role: "Photographer",
		image: Avatar5,
		comment: "Beautiful scenery and excellent service.",
	},
	{
		name: "Alex Johnson",
		role: "Traveler",
		image: Avatar6,
		comment: "I will definitely come back again next year.",
	},
];

const Testimonials = () => {
	return (
		<section id="testimonial" className="py-24 bg-white" data-aos="fade-up">
			<div className="max-w-7xl mx-auto px-6">
				<h2 className="text-5xl font-bold text-center text-[#0F4C75]"> Testimonials </h2>
				<p className="text-center text-gray-500 mt-5">
					What our travelers say
				</p>

				<Swiper
					modules={[Pagination, Navigation, Autoplay]}
					spaceBetween={30}
					loop={true}
					grabCursor={true}
					navigation
					speed={800}
					autoplay={{delay: 3000, disableOnInteraction: false,pauseOnMouseEnter: true,
					}}
					pagination={{
						clickable: true,
					}}
					breakpoints={{
						0: {
							slidesPerView: 1,
						},
						768: {
							slidesPerView: 2,
						},
						1024: {
							slidesPerView: 3,
						},
					}}
					className="mt-16 pb-16"
					>

					{testimonials.map((item, index) => (
						<SwiperSlide key={index}>
							<div className="group bg-white rounded-3xl shadow-lg p-8 min-h-[360px] h-full text-center cursor-pointer hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
								<div className="flex justify-center mb-5">
									<img src={item.image} alt={item.name} className="w-16 h-16 rounded-full object-cover border-2 border-[#BBE1FA] shadow-md mx-auto group-hover:scale-110 transition-all duration-300"/>
								</div>

								<div className="flex justify-center gap-1 mt-5">
									{Array.from({ length: 5 }).map((_, index) => (
										<Star key={index} size={18} fill="#FACC15" strokeWidth={0}/>
									))}
								</div>

								<p className="mt-6 italic leading-8 text-gray-600"> "{item.comment}" </p>
								<h4 className="mt-5 text-center font-bold text-lg text-[#0F4C75]"> {item.name} </h4>
								<p className="text-center text-sm text-gray-500"> {item.role} </p>
							</div>
						</SwiperSlide>
					))}
				</Swiper>

			</div>
		</section>
	);
};

export default Testimonials;