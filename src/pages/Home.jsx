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
        <div id="Home" className="flex flex-row gap-9 justify-around pt-32 p-20 min-h-screen  ">
            <div className=" left flex flex-col gap-6 max-w-[680px] min-w-[490px]">
                <span className="Intro text-8xl text-purple-700 pb-8">Hi, I'm 
                    <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 delay-75 bg-clip-text text-transparent  scale-105 inline-block">&nbsp;Anshul</span>
                </span>
                <span className="intro-lines text-6xl text-purple-700 pb-9 inline-block w-[28ch]">
                    <Typewriter
                        words={['Developer in Progress', 'Learning Full-Stack', 'Solving Problems']}
                        loop={Infinity}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={100}
                    />
                </span>
                <div className="social-links flex flex-row gap-7">
                    <a href="https://github.com/anshul-rohilla4" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-5xl hover:text-purple-700 transform transition-transform duration-200 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                    </a>
                    <a href="https://www.linkedin.com/in/anshul-rohilla-5629a2210/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-5xl hover:text-purple-700 transform transition-transform duration-200 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                    </a>
                    <a href="mailto:anshulrohilla111@gmail.com">
                        <FaEnvelope className="text-5xl hover:text-purple-700 transform transition-transform duration-200 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                    </a>
                </div>
            </div>
            <div className="right flex flex-col gap-3.5 items-center">
                <img src={profileImg} alt="profile-pic"
                    className="w-60 h-60 rounded-full object-cover min-w-[240px] hover:scale-105 transition-transform duration-300"
                />
                <div className="mt-4 w-12 h-12 flex justify-center items-center text-purple-600 text-2xl transition-transform duration-75 animate-pulse">
                    {spinnerFrames[currFrame]}
                </div>
            </div>

        </div>
    )
}





export default Home