import React, { useRef, useEffect, useState } from "react";
import { FaJs, FaReact, FaNodeJs, FaGitAlt, FaDocker, FaJava } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiSpringboot, SiCplusplus, SiMysql, SiKubernetes, SiJenkins, SiAwsamplify } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
    const categories = [
        {
            title: "Programming Languages",
            skills: [
                { icon: <FaJava className="text-red-600" />, name: "Java" },
                { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
                { icon: <SiTypescript className="text-blue-600" />, name: "TypeScript" },
                { icon: <SiCplusplus className="text-blue-500" />, name: "C++" },
            ],
        },
        {
            title: "Web Development",
            skills: [
                { icon: <FaReact className="text-sky-500" />, name: "React.js" },
                { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
                { icon: <SiSpringboot className="text-green-700" />, name: "Spring Boot" },
                { icon: <SiTailwindcss className="text-cyan-400" />, name: "TailwindCSS" },
            ],
        },
        {
            title: "Cloud & DevOps",
            skills: [
                { icon: <SiAwsamplify className="text-orange-500" />, name: "AWS EC2" },
                { icon: <FaDocker className="text-blue-500" />, name: "Docker" },
                { icon: <SiKubernetes className="text-blue-600" />, name: "Kubernetes" },
                { icon: <SiJenkins className="text-red-500" />, name: "Jenkins" },
            ],
        },
        {
            title: "Databases",
            skills: [
                { icon: <SiMysql className="text-blue-600" />, name: "MySQL" },
            ],
        },
        {
            title: "Tools",
            skills: [
                { icon: <FaGitAlt className="text-orange-600" />, name: "Git" },
                { icon: <VscVscode className="text-blue-400" />, name: "VS Code" },
                { icon: <span className="text-gray-700 font-bold">Ln</span>, name: "Linux" },
            ],
        },
    ];

    const refs = useRef([]);
    const [visible, setVisible] = useState([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.dataset.index);
                        if (!visible.includes(index)) {
                            setVisible((v) => [...v, index]);
                        }
                    }
                });
            },
            { threshold: 0.2 }
        );

        refs.current.forEach((ref) => ref && observer.observe(ref));

        return () => refs.current.forEach((ref) => ref && observer.unobserve(ref));
    }, [visible]);

    return (
        <div id="Skills" className="flex flex-col items-center justify-center min-h-screen p-12">
            <h2 className="text-6xl font-bold text-purple-700 mb-12">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-6xl">
                {categories.map((category, idx) => (
                    <div
                        key={idx}
                        ref={(el) => (refs.current[idx] = el)}
                        data-index={idx}
                        className={`p-6 bg-purple-50 rounded-xl shadow-md transition-all duration-700 transform ${visible.includes(idx) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                            }`}
                        style={{ transitionDelay: `${idx * 150}ms` }}
                    >
                        <h3 className="text-3xl font-semibold text-purple-700 mb-6">{category.title}</h3>
                        <div className="grid grid-cols-2 gap-6">
                            {category.skills.map((skill, i) => (
                                <div key={i} className="flex flex-col items-center">
                                    <div className="text-5xl mb-2">{skill.icon}</div>
                                    <p className="text-lg font-medium text-gray-700">{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
