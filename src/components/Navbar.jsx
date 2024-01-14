import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="header font-poppins">
            <NavLink to='/' className="w-28 h-10  rounded-lg bg-transparent items-center justify-center flex  font-bold  border border-orange-400 border-r-4">
                <p  className="blue-gradient_text">iamafridi</p>
            </NavLink>
            <nav className="flex text-lg gap-7 font-medium">
                <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-red-900' : 'blue-gradient_text'}>
                    Projects
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? 'text-red-900' : 'blue-gradient_text'}>
                    Know more about me
                </NavLink>
            </nav>
        </header >
    );
};

export default Navbar;