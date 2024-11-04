const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-3 shadow-lg">
            <div className="font-gae container mx-auto flex justify-between items-center">
                <div className="font-bold text-lg">Local Event Finder</div>
                <ul className="flex space-x-4">
                    <li>
                        <button className="bg-blue-500 hover:bg-blue-600
                            text-white font-semibold py-1 px-2 rounded-sm">
                            Login
                        </button>
                    </li>
                    <li>
                        <a href="#" className="hover:text-blue-400">
                            About
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

