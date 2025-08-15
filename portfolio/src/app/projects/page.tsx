"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "Website",
        description: "Een portfolio site gemaakt met HTML en CSS",
        link: "/projects/website",
    },
    {
        title: "Themasite",
        description: "Voor een school opdracht heb ik een kaassite gemaakt met alle belgische kazen!",
        link: "/projects/themasite",
    },
    {
        title: "Marvel site",
        description: "Spring/boot voor het eerst gebruikt",
        link: "/projects/marvelsite",
    },
    {
        title: "Kunstacademi",
        description: "Een groepsopdracht met sping/boot als eindwerk",
        link: "/projects/kunst",
    },
    {
        title: "ApenSite",
        description: "Met javascript een eerste site gemaakt",
        link: "/projects/apensite",
    },
    {
        title: "StarWars",
        description: "Een 3D StarWars planeten gemaakt",
        link: "/projects/starwars",
    },
    {
        title: "Portfolio",
        description: "Met alle kenis die ik heb opgebouwed in de hogeschool deze portfolio gebouwd",
        link: "/projects/portfolio",
    },
]

export default function Projects() {
    return (
        <div className="max-w-5xl mx-auto py-20 px-6">
            <motion.h1
                className="text-4xl font-bold mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Projects
            </motion.h1>

            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <motion.a
                        key={index}
                        href={project.link}
                        className="block p-6 bg-indigo-100 rounded-xl shadow-lg transition-shadow duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        whileHover={{ scale: 1.05, boxShadow: "0px 15px 25px rgba(0,0,0,0.2)" }}
                    >
                        <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                        <p className="text-gray-600">{project.description}</p>
                    </motion.a>
                ))}
            </div>
        </div>
    )
}
