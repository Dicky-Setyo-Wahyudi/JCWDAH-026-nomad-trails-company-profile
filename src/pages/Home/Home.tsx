import AboutPreview from "../../components/sections/AboutPreview";
import HeroSection from "../../components/sections/HeroSection";
import Newsletter from "../../components/sections/Newsletter";
import ServicesPreview from "../../components/sections/ServicesPreview";
import Testimonials from "../../components/sections/Testimonials";
import WhyChooseUs from "../../components/sections/WhyChooseUs";
import PageTransition from "../../components/common/PageTransition";

const Home = () => {
	return (
		<>
			<PageTransition>
			<HeroSection />

			<section id="about">
				<AboutPreview />
			</section>

			<section id="services">
				<ServicesPreview />
			</section>

			<section id="why-us">
				<WhyChooseUs />
			</section>

			<section id="testimonial">
				<Testimonials />
			</section>

			<Newsletter />

			</PageTransition>
</>
	);
};

export default Home;