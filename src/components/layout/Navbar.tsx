import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        <h1 className="text-2xl font-bold text-[#0F4C75]"> Nomad Trails </h1>

        <ul className="flex items-center gap-6">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/teams">Teams</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;