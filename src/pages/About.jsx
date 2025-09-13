import React from 'react'
// import collegeLogo from "../assets/src/assets/college logo.png"


const About = () => {


    const educationData = [
        {
            degree: "B.Tech (CSE)",
            institute: "SRMIST, Tamil Nadu",
            year: "2022 - Present",
        },
        {
            degree: "Senior Secondary (12th)",
            institute: "St. Mary's Convent School, Uttrakhand",
            year: "2020 - 2022",
        },
        {
            degree: "Secondary (10th)",
            institute: "St. Mary's Convent School, Uttrakhand",
            year: "2018 - 2020",
        },
    ];


    return (
        <div id="About" className="flex flex-row gap-14 justify-around pt-32 p-20 min-h-screen ">
            <div className="left flex flex-col gap-6 text-purple-600 max-w-xs pt-48">
                <div className="info-block p-5 bg-gradient-to-r from-purple-200 via-pink-200 to-purple-100 rounded-xl flex flex-col items-center text-center shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300">
                    <p className="text-2xl font-bold text-purple-700 mb-2">Languages</p>
                    <p className="text-lg">English, Hindi</p>
                </div>
                <div className="info-block p-5 bg-gradient-to-r from-purple-200 via-pink-200 to-purple-100 rounded-xl flex flex-col items-center text-center shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300">
                    <p className="text-2xl font-semibold">Passion Areas</p>
                    <p className="text-xl">Full-Stack Development, DSA, Generative AI</p>
                </div>

                <div className="info-block p-5 bg-gradient-to-r from-purple-200 via-pink-200 to-purple-100 rounded-xl flex flex-col items-center text-center shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300">
                    <p className="text-2xl font-semibold">Experience</p>
                    <p className="text-xl">Learner</p>
                </div>
            </div>

            <div className="right flex flex-col gap-6 text-purple-700 max-w-2xl">
                <p className="about-heading text-6xl font-bold">About me</p>
                <p className="about-text text-4xl leading-relaxed">
                    Hi, I’m Anshul — a passionate learner and problem solver. I enjoy exploring new technologies, building small projects, and tackling challenges to grow my skills.
                </p>
                <div className="education flex flex-col gap-10 relative">
                    {educationData.map((edu, index) => (
                        <div key={index} className="flex flex-row gap-4 relative">
                            {/* Dot and vertical line */}
                            <div className="flex flex-col items-center mt-1"> {/* mt-1 aligns the dot with degree */}
                                <div className="w-4 h-4 bg-purple-700 rounded-full"></div>
                                {index !== educationData.length - 1 && (
                                    <div className="w-1 bg-purple-700 flex-1"></div>
                                )}
                            </div>

                            {/* Education text */}
                            <div>
                                <p className="text-3xl font-semibold">{edu.degree}</p>
                                <p className="text-2xl">{edu.institute}</p>
                                <p className="text-xl text-gray-400">{edu.year}</p>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default About

// passionate learner,developer, solver