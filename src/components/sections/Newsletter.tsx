import { Link } from "react-router-dom";

const Newsletter = () => {
	return (
		<section className="py-28 bg-gradient-to-r from-[#0F4C75] to-[#3282B8]" data-aos="zoom-in">
			<div className="max-w-5xl mx-auto px-6 text-center">
				<h2 className="text-5xl font-bold text-white"> Ready For Your Next Adventure? </h2>
				<p className="text-gray-200 mt-6 text-lg"> Join Nomad Trails and discover unforgettable outdoor experiences. </p>
				<Link to="/register"className="inline-block mt-10 bg-white text-[#0F4C75] font-semibold px-10 py-4 rounded-xl hover:scale-105 transition">
					Join Adventure
				</Link>
			</div>
		</section>
	);
};

export default Newsletter;