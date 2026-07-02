import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";

const App = () => {
	useEffect(() => {
		AOS.init({
			duration: 800,
			once: true,
			offset: 100,
		});
	}, []);

	return (
        <>
			<ToastContainer position="top-right" autoClose={3000} theme="colored"/>
            <AppRoutes />
        </>
    );
};

export default App;