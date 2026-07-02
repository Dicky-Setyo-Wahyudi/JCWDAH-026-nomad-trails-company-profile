import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const ScrollTopButton = () => {
	const [show, setShow] = useState(false);
	useEffect(() => {
		const onScroll = () => {
			setShow(window.scrollY > 300);
		};
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	if (!show) return null;

	return (
		<button onClick={() => window.scrollTo({top: 0, behavior: "smooth",})}
			className="fixed bottom-6 right-6 bg-[#0F4C75] text-white p-4 rounded-full shadow-xl hover:bg-[#3282B8] z-50">
			<ChevronUp />
		</button>
	);
};

export default ScrollTopButton;