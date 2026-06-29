import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import AuthLayout from "../layout/AuthLayout";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Teams from "../pages/Teams/Team";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import CreateBlog from "../pages/CreateBlog/CreateBlog";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>

                {/* Main Layout */}
                <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/teams" element={<Teams />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/create-blog" element={<CreateBlog />} />
                </Route>

                {/* Auth Layout */}
                <Route element={<AuthLayout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;