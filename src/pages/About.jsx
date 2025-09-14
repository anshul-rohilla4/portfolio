import React from 'react'

const About = () => {

    const educationData = [
        { degree: "B.Tech (CSE) Iot spec.", institute: "SRMIST, Tamil Nadu", year: "2022 - Present" },
        { degree: "Senior Secondary (12th)", institute: "St. Mary's Convent School, Uttrakhand", year: "2021 - 2022" },
        { degree: "Secondary (10th)", institute: "St. Mary's Convent School, Uttrakhand", year: "2020 - 2021" },
    ];

    return (
        <div id="About" className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-16 pt-12 sm:pt-16 lg:pt-20 px-4 sm:px-6 md:px-12 lg:px-20 min-h-screen">

            {/* Left Info Blocks */}
            <div className="flex flex-row sm:flex-row lg:flex-col justify-between sm:justify-around lg:justify-start gap-3 sm:gap-4 lg:gap-6 w-full lg:w-1/3">
                <div className="info-block flex-1 p-3 sm:p-4 lg:p-5 bg-gradient-to-r from-purple-200 via-pink-200 to-purple-100 rounded-xl flex flex-col items-center text-center shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300">
                    <p className="text-base sm:text-lg lg:text-2xl font-bold text-purple-700 mb-1 lg:mb-2">Languages</p>
                    <p className="text-xs sm:text-sm lg:text-lg">English, Hindi</p>
                </div>

                <div className="info-block flex-1 p-3 sm:p-4 lg:p-5 bg-gradient-to-r from-purple-200 via-pink-200 to-purple-100 rounded-xl flex flex-col items-center text-center shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300">
                    <p className="text-base sm:text-lg lg:text-2xl font-semibold text-purple-700 mb-1 lg:mb-2">Passion Areas</p>
                    <p className="text-xs sm:text-sm lg:text-lg text-center">Full-Stack Development, DSA, Generative AI</p>
                </div>

                <div className="info-block flex-1 p-3 sm:p-4 lg:p-5 bg-gradient-to-r from-purple-200 via-pink-200 to-purple-100 rounded-xl flex flex-col items-center text-center shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300">
                    <p className="text-base sm:text-lg lg:text-2xl font-semibold text-purple-700 mb-1 lg:mb-2">Experience</p>
                    <p className="text-xs sm:text-sm lg:text-lg">Learner</p>
                </div>
            </div>

            {/* Right About & Education */}
            <div className="flex flex-col gap-4 sm:gap-6 w-full lg:w-2/3 text-purple-700">
                <p className="text-2xl sm:text-3xl lg:text-5xl font-bold">About me</p>
                <p className="text-sm sm:text-base lg:text-2xl leading-relaxed">
                    Hi, I'm Anshul — a passionate learner and problem solver. I enjoy exploring new technologies, building projects, and tackling challenges to grow my skills.
                </p>

                {/* Education Timeline */}
                <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 mt-2 sm:mt-4">
                    {educationData.map((edu, index) => (
                        <div key={index} className="flex flex-row gap-3 sm:gap-4 relative items-start">
                            {/* Dot and vertical line */}
                            <div className="flex flex-col items-center mt-1 sm:mt-1.5 relative">
                                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-purple-700 rounded-full z-10"></div>
                                {index !== educationData.length - 1 && (
                                    <div className="absolute top-2.5 sm:top-3 lg:top-4 w-0.5 bg-purple-700 h-12 sm:h-16 lg:h-20"></div>
                                )}
                            </div>

                            {/* Education text */}
                            <div className="flex-1">
                                <p className="text-base sm:text-lg lg:text-3xl font-semibold leading-tight">{edu.degree}</p>
                                <p className="text-xs sm:text-sm lg:text-2xl mt-1">{edu.institute}</p>
                                <p className="text-xs lg:text-xl text-gray-400 mt-0.5">{edu.year}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default About