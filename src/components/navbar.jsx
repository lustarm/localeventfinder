import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [recentSearches, setRecentSearches] = useState([]);
    const [isFocused, setIsFocused] = useState(false);
    const navigate = useNavigate();

    // Load recent searches from localStorage when the component mounts
    useEffect(() => {
        const savedSearches = JSON.parse(localStorage.getItem("recentSearches")) || [];
        setRecentSearches(savedSearches);
    }, []);

    // Save recent searches to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
    }, [recentSearches]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/find/${searchQuery}`);
            addRecentSearch(searchQuery);
        }
    };

    const addRecentSearch = (query) => {
        const updatedSearches = [query, ...recentSearches.filter(item => item !== query)];
        setRecentSearches(updatedSearches.slice(0, 5)); // Keep only the last 5 searches
    };

    const handleRecentSearchClick = (query) => {
        setSearchQuery(query);
        navigate(`/find/${query}`);
    };

    const handleDeleteRecentSearch = (query) => {
        setRecentSearches(recentSearches.filter(item => item !== query));
    };

    return (
        <nav className="bg-gray-800 text-white p-3 shadow-lg">
            <div className="font-gae container mx-auto flex justify-between items-center">
                <div className="font-bold text-lg">
                    <Link to="/">
                        Local Event Finder
                    </Link>
                </div>

                {/* Search Bar with Recent Searches */}
                <form onSubmit={handleSearch} className="flex items-center space-x-2 relative">
                    <input
                        type="text"
                        placeholder="Search events..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        className="p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded"
                    >
                        Search
                    </button>

                    {/* Recent Searches Dropdown (Only visible when focused) */}
                    {isFocused && recentSearches.length > 0 && (
                        <div className="absolute top-12 bg-gray-700 text-white rounded shadow-lg w-full max-w-xs mt-2">
                            <ul className="p-2">
                                {recentSearches.map((item, index) => (
                                    <li key={index} className="flex justify-between items-center py-1 px-2 hover:bg-gray-600">
                                        <span
                                            onClick={() => handleRecentSearchClick(item)}
                                            className="cursor-pointer"
                                        >
                                            {item}
                                        </span>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleDeleteRecentSearch(item);
                                            }}
                                            className="text-red-500 hover:text-red-700 font-semibold"
                                        >
                                            &times;
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </form>

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

