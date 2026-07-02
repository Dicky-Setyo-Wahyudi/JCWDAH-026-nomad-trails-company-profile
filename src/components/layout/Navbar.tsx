import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/logo/logo.png";
import { useAuth } from "../../hooks/useAuth";

const Navbar = () => {
	const { user, logout } = useAuth();
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const menus = [
		{ title: "Home", path: "/" },
		{ title: "About", path: "/about" },
		{ title: "Services", path: "/services" },
		{ title: "Teams", path: "/teams" },
		{ title: "Blog", path: "/blog" },
	];

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleLogout = async () => {
    	await logout();
		setIsOpen(false);
		navigate("");
	};

	return (
		<header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
				? "bg-white/80 backdrop-blur-xl shadow-lg"
				: "bg-white shadow-sm"
			}`}>
			<div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
				<Link to="/" className="flex items-center gap-3">
					<img src={Logo} alt="Nomad Trails" className="h-14 lg:h-16"/>
					<div className="hidden md:block">
						<h1 className="text-xl font-bold text-[#0F4C75]"> Nomad Trails </h1>
						<p className="text-xs text-gray-500"> Adventure Company </p>
					</div>
				</Link>

				<div className="hidden lg:flex items-center gap-8">
					{menus.map((menu) => (
						<NavLink key={menu.path} to={menu.path} className={({ isActive }) =>
								`relative font-medium transition-all duration-300 ${
									isActive
										? "text-[#3282B8]"
										: "text-gray-700 hover:text-[#3282B8]"
								}`
							}
						>
							{menu.title}
						</NavLink>
					))}

					{user && (
							<NavLink to="/dashboard" className={({ isActive }) =>
									`relative font-medium transition-all duration-300 ${
										isActive
											? "text-[#3282B8]"
											: "text-gray-700 hover:text-[#3282B8]"
									}`
								}
							>
								Dashboard
							</NavLink>
						)}

					{user ? (
					<div className="flex items-center gap-3">
						<div className="w-10 h-10 rounded-full bg-[#3282B8] text-white flex items-center justify-center font-bold">
							{user.name.charAt(0).toUpperCase()}
						</div>

						<div>
							<p className="text-xs text-gray-500">
								Welcome Back
							</p>

							<p className="font-semibold text-[#0F4C75]">
								{user.name}
							</p>
						</div>
						<button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl">
							Logout
						</button>
					</div>
						) : (
							<Link to="/login" className="bg-[#0F4C75] hover:bg-[#3282B8] hover:scale-105 transition-all text-white px-6 py-2 rounded-xl">
								Login
							</Link>
						)}
				</div>

				<button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? <X size={30} /> : <Menu size={30} />}
				</button>
			</div>

			{isOpen && (
				<div className="lg:hidden bg-white border-t shadow-md">
					<div className="flex flex-col gap-5 px-6 py-6">

						{menus.map((menu) => (
							<NavLink key={menu.path} to={menu.path} onClick={() => setIsOpen(false)} className="font-medium text-gray-700 hover:text-[#3282B8]">
								{menu.title}
							</NavLink>
						))}

						{user && (
							<NavLink
								to="/dashboard"
								onClick={() => setIsOpen(false)}
								className="font-medium text-gray-700 hover:text-[#3282B8]"
							>
								Dashboard
							</NavLink>
						)}

						{user ? (
							<>
								<p className="font-semibold text-center">
									Hi, {user.name}
								</p>

								<button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 transition text-white py-3 rounded-xl">
									Logout
								</button>
							</>
							) : (
								<Link to="/login" onClick={() => setIsOpen(false)} className="bg-[#0F4C75] text-white text-center py-3 rounded-xl">
									Login
								</Link>
							)}
					</div>
				</div>
			)}
		</header>
	);
};

export default Navbar;