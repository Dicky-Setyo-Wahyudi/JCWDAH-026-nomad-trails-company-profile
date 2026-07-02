import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollProgress from "../components/common/ScrollProgress";
import ScrollTopButton from "../components/common/ScrollTopButton";
import ScrollToTop from "../components/common/ScrollToTop";

const MainLayout = () => {
    return (
        <>
            <ScrollProgress />
            <ScrollToTop />
            <Navbar />
            <main className="min-h-screen">
                <Outlet />
            </main>
            <Footer />
            <ScrollTopButton />
        </>
    );
}

export default MainLayout;