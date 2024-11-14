import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        navigate('/logout');
    };

    // Search function to handle search input and redirect
    const handleSearch = () => {
        const query = searchQuery.trim();
        if (query) {
            // Redirect to search results page with the query
            navigate(`/search?query=${encodeURIComponent(query)}`);
        }
    };

    return (
        <div className="shadow-md  bg-gray-400">
            <div className="flex items-center justify-between mx-auto max-w-6xl h-20 px-4">
                <div className="flex-1 flex items-center justify-center">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search job titles"
                        className="border border-gray-300 rounded-l-lg py-2 px-4 focus:outline-none max-w-md"
                    />
                    <button
                        onClick={handleSearch}
                        className="bg-[#483D8B] text-white px-4 py-2 rounded-r-lg transition duration-300"
                    >
                        Search
                    </button>
                </div>
                <div className="hidden md:flex items-center gap-4 ml-8">
                    <div className="relative">
                        <button
                            onClick={toggleDropdown}
                            className="border border-[#FF885B] text-black px-4 py-2 rounded hover:bg-[#FF885B] hover:text-white transition duration-300"
                        >
                            Jobs
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute bg-white text-black mt-2 py-2 w-48 rounded shadow-lg">
                                <Link to="/jobs/work-from-home" className="block px-4 py-2 hover:bg-gray-200">Work From Home</Link>
                                <Link to="/jobs/delhi" className="block px-4 py-2 hover:bg-gray-200">Jobs in Delhi</Link>
                            </div>
                        )}
                    </div>
                    {isLoggedIn ? (
                        <button
                            onClick={handleLogout}
                            className="border border-[#FF885B] text-black px-4 py-2 rounded hover:bg-[#FF885B] hover:text-white transition duration-300"
                        >
                            Logout
                        </button>
                    ) : (
                        <>
                            <Link to="/login">
                                <button className="border border-[#FF885B] text-black px-4 py-2 rounded hover:bg-[#FF885B] hover:text-white transition duration-300">Log In</button>
                            </Link>
                            <Link to="/signup">
                                <button className="bg-[#FF885B] text-black px-4 py-2 rounded hover:bg-[#FF885B] hover:text-white transition duration-300">Sign Up</button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
