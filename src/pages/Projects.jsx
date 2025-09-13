import React from "react";
import { FaGithub, FaVideo } from "react-icons/fa";

const projects = [
    {
        title: "Yelp-Camp",
        links: [
            { label: "GitHub", url: "https://github.com/anshul-rohilla4/campaingnService.git", icon: <FaGithub /> },
            { label: "Demo Video", url: "https://drive.google.com/file/d/1-dUYeBYLAwwIKOxXcb29QzAL1v20PT9y/view?usp=drive_link", icon: <FaVideo /> },
        ],
        description: [
            "Deployed Node.js-based campground listing application with full CI/CD automation using Jenkins.",
            "Implemented multi-stage pipeline including code checkout, testing, Trivy vulnerability scans, Docker builds, and Kubernetes deployments.",
            "Managed cloud infrastructure with 3 EC2 instances for local development, Jenkins CI/CD, and Kubernetes production cluster (Duck DNS).",
        ],
        tools: "Jenkins, Docker, Trivy, Kubernetes, AWS EC2, Duck DNS",
    },
    {
        title: "Movie Finder",
        links: [
            { label: "GitHub", url: "https://github.com/anshul-rohilla4/movieDesk", icon: <FaGithub /> }
        ],
        description: [
            "React-based web application for searching movies and viewing trending content.",
            "Integrated TMDb API and Appwrite backend with debounced search optimization.",
        ],
        tools: "React, TailwindCSS, Vite, Appwrite, TMDb API",
    },
    {
        title: "Flood Monitoring System",
        links: [
            { label: "GitHub", url: "https://github.com/anshul-rohilla4/Flood-management-sys", icon: <FaGithub /> }
        ],
        description: [
            "IoT-based system for real-time flood detection using water level and rainfall sensors.",
            "Implemented alert system via SMS/email notifications for stakeholders.",
        ],
        tools: "Arduino Uno, C++",
    },
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