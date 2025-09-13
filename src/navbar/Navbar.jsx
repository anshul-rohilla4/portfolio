import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-purple-600 to-pink-500 shadow-md z-50">
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
                {/* Logo / Name */}
                <div className="text-2xl font-bold text-white tracking-wide">
                    <a
                        href="https://anshul-rohilla4.github.io/Linktree/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative hover:scale-110 transition-transform duration-300 cursor-pointer text-white font-bold"
                    >
                        Anshul.
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </div>


                {/* Desktop Nav Links */}
                <div className="hidden md:flex space-x-6 text-lg font-medium">
                    {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
                        <a
                            key={link}
                            href={`#${link}`}
                            className="text-white hover:text-yellow-300 transition-colors duration-300 relative group"
                        >
                            {link}
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
                        </a>
                    ))}
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden text-white text-2xl cursor-pointer ">
                    {isOpen ? (
                        <FaTimes onClick={() => setIsOpen(false)} />
                    ) : (
                        <FaBars onClick={() => setIsOpen(true)} />
                    )}
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-purple-700 text-white flex flex-col items-center py-4 space-y-4">
                    {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
                        <a
                            key={link}
                            href={`#${link}`}
                            onClick={() => setIsOpen(false)}
                            className="text-lg hover:text-yellow-300 transition-colors duration-300"
                        >
                            {link}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
