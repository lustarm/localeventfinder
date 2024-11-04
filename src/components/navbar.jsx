import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const isAboutPage = location.pathname === '/about';

    return (
        <nav className="bg-gray-800 text-white p-3 shadow-lg">
            <div className="font-gae container mx-auto flex justify-between items-center">
                <div className="font-bold text-lg">Local Event Finder</div>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/login" className="hover:text-blue-400 font-semibold">
                            Log in
                        </Link>
                    </li>
                    <li>
                        <Link to="/signup" className="hover:text-blue-400 font-semibold">
                            Sign up
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-blue-400 font-semibold">
                            Contact Us
                        </Link>
                    </li>
                    <li>
                        <Link to={isAboutPage ? "/" : "/about"} className="hover:text-blue-400
                                                                            font-semibold">
                            {isAboutPage ? "Home" : "About"}
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

