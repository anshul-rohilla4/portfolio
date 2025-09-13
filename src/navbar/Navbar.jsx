import React from "react";

const Navbar = () => {
    return (
        <nav className=" top-0 left-0 w-full bg-gradient-to-r from-purple-600 to-pink-500 shadow-md z-50">
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
                {/* Logo / Name */}
                <div className="text-2xl font-bold text-white tracking-wide">
                    <a
                        href="https://anshul-rohilla4.github.io/Linktree/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform duration-300"
                    >
                        ME
                    </a>
                </div>

                {/* Nav Links */}
                <div className="flex space-x-6 text-lg font-medium">
                    <a
                        href="#Home"
                        className="text-white hover:text-yellow-300 transition-colors duration-300 relative group"
                    >
                        Home
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a
                        href="#About"
                        className="text-white hover:text-yellow-300 transition-colors duration-300 relative group"
                    >
                        About
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a
                        href="#Skills"
                        className="text-white hover:text-yellow-300 transition-colors duration-300 relative group"
                    >
                        Skills
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a
                        href="#Projects"
                        className="text-white hover:text-yellow-300 transition-colors duration-300 relative group"
                    >
                        Projects
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a
                        href="#Contact"
                        className="text-white hover:text-yellow-300 transition-colors duration-300 relative group"
                    >
                        Contact
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
