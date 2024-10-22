import React from "react";
import { Link } from "react-router-dom"; 


const Navbar = () => {
    const toggleMenu = () => {
        const menu = document.getElementById("mobileMenu");
        menu.classList.toggle("hidden");
    };

    return (
        <div className="bg-white shadow-md">
            <div className="flex items-center justify-between mx-auto max-w-6xl h-20 px-4">

                
                <div className="flex-1 flex items-center justify-center">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border border-gray-300 rounded-l-lg py-2 px-4 focus:outline-none focus:border-[#39b75d] max-w-md"
                    />
                    <button className="bg-[#483D8B] text-white px-4 py-2 rounded-r-lg transition duration-300">
                        Search
                    </button>
                </div>

                
                <div className="hidden md:flex items-center gap-2 ml-8">
                    <Link to="/login">
                        <button className="border border-[#FF885B] text-black px-4 py-2 rounded hover:bg-[#FF885B] hover:text-white transition duration-300">Log In</button>
                    </Link>
                    <Link to="/signup">
                        <button className="bg-[#FF885B] text-black px-4 py-2 rounded hover:bg-[#FF885B] hover:text-white transition duration-300">Sign Up</button>
                    </Link>


                </div>

                
                <div className="md:hidden">
                    <button className="text-black" onClick={toggleMenu}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>

           
            <div id="mobileMenu" className="md:hidden hidden">
                <ul className="block text-gray-600">
                    <li>
                        <Link to="/login" className="block px-4 py-2 hover:text-[#39b75d]">Log In</Link>
                    </li>
                    <li>
                        <Link to="/signup" className="block px-4 py-2 hover:text-[#39b75d]">Sign Up</Link>
                    </li>

                    <li>
                        <Link to="/signup" className="block px-4 py-2 hover:text-[#39b75d]">Sign Up</Link>
                    </li>

                    <li>
                        <Link to="/addcart" className="block px-4 py-2 hover:text-[#39b75d]">Cart</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;