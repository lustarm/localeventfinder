import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from './searchbar';

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [recentSearches, setRecentSearches] = useState([]);
    const [isFocused, setIsFocused] = useState(false);
    const navigate = useNavigate();

    return (
        <nav className="bg-gray-800 text-white p-3 shadow-lg">
            <div className="font-gae container mx-auto flex justify-between items-center">
                <div className="font-bold text-lg">
                    <Link to="/">
                        Local Event Finder
                    </Link>
                </div>
                <SearchBar />
                <ul className="flex space-x-4 ml-4">
                    <li>
                        <Link to="/" className="hover:text-blue-400 font-semibold">
                            Home
                        </Link>
                    </li>
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
                        <Link to="/about" className="hover:text-blue-400 font-semibold">
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

