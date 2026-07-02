import { useEffect, useState } from "react";

const ScrollProgress = () => {
	const [scroll, setScroll] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const totalHeight =
				document.documentElement.scrollHeight -
				document.documentElement.clientHeight;

			const progress =
				(window.scrollY / totalHeight) * 100;

			setScroll(progress);
		};

		window.addEventListener("scroll", handleScroll);

		return () =>
			window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="fixed top-0 left-0 z-[9999] h-1 bg-[#3282B8] transition-all duration-200"
			style={{
				width: `${scroll}%`,
			}}
		/>
	);
};

export default ScrollProgress;