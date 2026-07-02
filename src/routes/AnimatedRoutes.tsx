import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
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
import ProtectedRoute from "./ProtectedRoute";
import BlogDetail from "../pages/BlogDetail/BlogDetail";
import EditBlog from "../pages/EditBlog/EditBlog";
import Dashboard from "../pages/Dashboard/Dashboard";

const AnimatedRoutes = () => {
	const location = useLocation();

	return (
		<AnimatePresence mode="wait">
			<Routes location={location} key={location.pathname}>
				<Route element={<MainLayout />}>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/services" element={<Services />} />
					<Route path="/teams" element={<Teams />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/blog/:slug" element={<BlogDetail />}/>
					<Route path="/dashboard"
						element={
							<ProtectedRoute>
								<Dashboard />
							</ProtectedRoute>
						}
					/>
					<Route path="/create-blog"
						element={
							<ProtectedRoute>
								<CreateBlog />
							</ProtectedRoute>
						}
					/>
					<Route path="/edit-blog/:id"
						element={
							<ProtectedRoute>
								<EditBlog/>
							</ProtectedRoute>
						}
					/>
				</Route>

				<Route element={<AuthLayout />}>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Route>
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;