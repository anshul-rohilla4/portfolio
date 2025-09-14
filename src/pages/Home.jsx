import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter';
import profileImg from '../assets/home-profile-img.jpg'

const Home = () => {
    const spinnerFrames = ['▁', '▃', '▄', '▅', '▆', '▇', '█', '▇', '▆', '▅', '▄', '▃'];
    const [currFrame, setCurrFrame] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrFrame(prev => (prev === spinnerFrames.length - 1 ? 0 : prev + 1));
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <div id="Home" className="flex flex-col-reverse lg:flex-row gap-6 sm:gap-8 lg:gap-9 justify-center lg:justify-around items-center pt-16 sm:pt-20 lg:pt-32 px-4 sm:px-6 lg:px-20 min-h-screen">

            {/* Left Content */}
            <div className="left flex flex-col gap-4 sm:gap-5 lg:gap-6 text-center lg:text-left max-w-full lg:max-w-[680px] lg:min-w-[490px]">

                {/* Main Intro */}
                <div className="Intro text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-purple-700 pb-4 sm:pb-6 lg:pb-8 leading-tight">
                    Hi, I'm{" "}
                    <a href="https://anshul-rohilla4.github.io/Linktree/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent scale-105 inline-block lg:ml-2 xl:ml-8 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.8)] hover:scale-110">
                            Anshul
                        </span>
                    </a>

                </div>

                {/* Typewriter Section */}
                <div className="intro-lines text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl text-purple-700 pb-6 sm:pb-7 lg:pb-9 min-h-[2.5em] sm:min-h-[3em] lg:min-h-[1.5em]">
                    <Typewriter
                        words={['Developer in Progress', 'Learning Full-Stack', 'Solving Problems']}
                        loop={Infinity}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={100}
                    />
                </div>

                {/* Social Links */}
                <div className="social-links flex flex-row justify-center lg:justify-start gap-5 sm:gap-6 lg:gap-7">
                    <a
                        href="https://github.com/anshul-rohilla4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                    >
                        <FaGithub className="text-3xl sm:text-4xl lg:text-5xl text-gray-700 group-hover:text-purple-700 transform transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] active:scale-95" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/anshul-rohilla-5629a2210/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                    >
                        <FaLinkedin className="text-3xl sm:text-4xl lg:text-5xl text-gray-700 group-hover:text-purple-700 transform transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] active:scale-95" />
                    </a>
                    <a
                        href="mailto:anshulrohilla111@gmail.com"
                        className="group"
                    >
                        <FaEnvelope className="text-3xl sm:text-4xl lg:text-5xl text-gray-700 group-hover:text-purple-700 transform transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] active:scale-95" />
                    </a>
                </div>
            </div>

            {/* Right Content - Profile */}
            <div className="right flex flex-col gap-2 sm:gap-3 lg:gap-3.5 items-center flex-shrink-0">
                <img
                    src={profileImg}
                    alt="profile-pic"
                    className="w-48 h-48 sm:w-56 sm:h-56 lg:w-60 lg:h-60 xl:w-72 xl:h-72 rounded-full object-cover hover:scale-105 transition-transform duration-300 shadow-lg ring-4 ring-purple-100 hover:ring-purple-200"
                />
                <div className="mt-2 sm:mt-3 lg:mt-4 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex justify-center items-center text-purple-600 text-lg sm:text-xl lg:text-2xl transition-transform duration-75 animate-pulse">
                    {spinnerFrames[currFrame]}
                </div>
            </div>

        </div>
    )
}

export default Home