import React from "react";
import { FaGithub, FaVideo, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        title: "Yelp-Camp",
        links: [ // UNCHANGED - Kept completely original
            { label: "GitHub", url: "https://github.com/anshul-rohilla4/campaingnService.git", icon: <FaGithub /> },
            { label: "Demo Video", url: "https://drive.google.com/file/d/1-dUYeBYLAwwIKOxXcb29QzAL1v20PT9y/view?usp=drive_link", icon: <FaVideo /> },
        ],
        description: [ // Descriptions are the only part that is updated
            "Deployed a Node.js-based campground listing application with full CI/CD automation using Jenkins.",
            "Implemented a multi-stage pipeline including code checkout, testing, Trivy vulnerability scans, Docker builds, and Kubernetes deployments.",
            "Managed cloud infrastructure with 3 EC2 instances for development, CI/CD, and a production Kubernetes cluster.",
        ],
        tools: "Jenkins, Docker, Trivy, Kubernetes, AWS EC2, Duck DNS",
    },
    {
        title: "Movie Finder",
        links: [ // UNCHANGED - Kept completely original
            { label: "GitHub", url: "https://github.com/anshul-rohilla4/movieDesk", icon: <FaGithub /> }
        ],
        description: [
            "Built a React-based web application for searching movies and viewing trending content.",
            "Integrated the TMDb API for real-time data and an Appwrite backend for user features.",
            "Engineered a debounced search function to optimize API usage and enhance user experience.",
        ],
        tools: "React, Tailwind CSS, Vite, Appwrite, TMDb API",
    },
    {
        title: "Flood Monitoring System",
        links: [ // UNCHANGED - Kept completely original
            { label: "GitHub", url: "https://github.com/anshul-rohilla4/Flood-management-sys", icon: <FaGithub /> }
        ],
        description: [
            "Engineered an IoT-based system for real-time flood detection using water level and rainfall sensors.",
            "Programmed an automated alert system to notify stakeholders via SMS and email.",
        ],
        tools: "Arduino Uno, C++",
    },
    {
        title: "Recipe Nanny",
        links: [ // UNCHANGED - Kept completely original
            { label: "Github", url: "https://github.com/anshul-rohilla4/recipeNanny", icon: <FaGithub /> },
            { label: "Live", url: "https://genie-rasoi.netlify.app/", icon: <FaExternalLinkAlt /> }
        ],
        description: [
            "Developed an intelligent web application that generates recipes based on user-provided ingredients and kitchen tools.",
            "Integrated the OpenRouter AI API to power the recipe generation logic.",
        ],
        tools: "React, tailwind CSS, OpenRouter AI API"
    },
    {
        title: "The Explorer Alien",
        links: [ // UNCHANGED - Kept completely original
            { label: "Github", url: "https://github.com/anshul-rohilla4/firstWebGame", icon: <FaGithub /> },
            { label: "Live", url: "https://alien-robber.netlify.app", icon: <FaExternalLinkAlt /> }
        ],
        description: [
            "Developed a 2D web-based game where the player controls an alien to collect coins.",
            "Implemented game logic for scoring, random item placement, and player movement using the Phaser framework.",
        ],
        tools: "HTML, CSS, JavaScript (with Phaser game framework)",
    },
    {
        title: "Restaurant Menu Web",
        links: [ // UNCHANGED - Kept completely original
            { label: "Github", url: "https://github.com/anshul-rohilla4/restaurant-menu-web", icon: <FaGithub /> },
            { label: "Live", url: "https://restaurant-gus.netlify.app/", icon: <FaExternalLinkAlt /> }
        ],
        description: [
            "Developed a responsive web application for browsing interactive restaurant menus.",
            "Designed and built a clean UI with Bootstrap to ensure seamless menu navigation.",
        ],
        tools: "HTML, CSS, JavaScript, Bootstrap",
    },
    {
        title: "Spring Boot Demo Application",
        links: [ // UNCHANGED - Kept completely original
            { label: "Github", url: "https://github.com/anshul-rohilla4/springBootWebApp.git", icon: <FaGithub /> }
        ],
        description: [
            "Developed a full-stack web application to demonstrate modern Java backend development using Spring Boot.",
            "Implemented full CRUD (Create, Read, Update, Delete) functionality for data management.",
            "Utilized the Spring MVC pattern to handle HTTP requests and separate business logic from the user interface.",
        ],
        tools: "Java, SpringBoot, Maven, SpringMVC",
    }
];



const Projects = () => {
    return (
        <section id="Projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center text-purple-700 mb-8 sm:mb-10 lg:mb-12">
                    Projects
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl p-4 sm:p-5 lg:p-6 transition-all duration-300 hover:scale-[1.02] border border-gray-100 hover:border-purple-200"
                        >
                            {/* Project Title */}
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 leading-tight">
                                {project.title}
                            </h3>

                            {/* Project Links */}
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-4 sm:mb-5">
                                {project.links.map((link, i) => (
                                    <a
                                        key={i}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-purple-600 hover:text-pink-500 transition-colors duration-200 text-sm sm:text-base font-medium bg-purple-50 hover:bg-pink-50 px-3 py-1.5 rounded-lg w-fit"
                                    >
                                        <span className="text-sm sm:text-base">{link.icon}</span>
                                        <span>{link.label}</span>
                                    </a>
                                ))}
                            </div>

                            {/* Project Description */}
                            <div className="mb-4 sm:mb-5">
                                <ul className="space-y-2 sm:space-y-2.5 text-gray-700">
                                    {project.description.map((point, i) => (
                                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm lg:text-base leading-relaxed">
                                            <span className="text-purple-500 mt-1.5 flex-shrink-0">•</span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tools Section */}
                            <div className="pt-3 sm:pt-4 border-t border-gray-100">
                                <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                                    <span className="font-semibold text-purple-700">Tools: </span>
                                    <span className="text-gray-700">{project.tools}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Optional: View More Projects Button */}
                <div className="text-center mt-8 sm:mt-10 lg:mt-12">
                    <a
                        href="https://github.com/anshul-rohilla4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                    >
                        <FaGithub className="text-sm sm:text-base" />
                        View More on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;