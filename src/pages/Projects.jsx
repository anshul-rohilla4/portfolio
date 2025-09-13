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
        <section id="Projects" className="py-16">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-purple-700 mb-12">
                    Projects
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300"
                        >
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                {project.title}
                            </h3>
                            <div className="flex gap-4 mb-4">
                                {project.links.map((link, i) => (
                                    <a
                                        key={i}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-purple-600 hover:text-pink-500"
                                    >
                                        {link.icon} {link.label}
                                    </a>
                                ))}
                            </div>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                                {project.description.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                            <p className="text-sm text-gray-600">
                                <span className="font-semibold">Tools: </span>
                                {project.tools}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
