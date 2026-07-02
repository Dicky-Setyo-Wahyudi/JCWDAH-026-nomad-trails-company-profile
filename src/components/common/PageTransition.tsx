import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

const PageTransition = ({ children }: Props) => {
	return (
		<motion.div
			initial={{
				opacity: 0,
				y: 25,
				scale: 0.99,
			}}
			animate={{
				opacity: 1,
				y: 0,
				scale: 1,
			}}
			exit={{
				opacity: 0,
				y: -25,
				scale: 0.99,
			}}
			transition={{
				duration: 0.45,
				ease: [0.25, 0.46, 0.45, 0.94],
			}}
		>
			{children}
		</motion.div>
	);
};

export default PageTransition;