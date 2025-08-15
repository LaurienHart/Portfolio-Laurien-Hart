import { Code, Database, Container, GitBranch, FileText, Coffee, Boxes } from "lucide-react";

export default function Skills() {
    const skills = [
        { name: "MS Office", icon: FileText },
        { name: "Java", icon: Coffee },
        { name: "Spring Boot", icon: Boxes },
        { name: "JavaScript", icon: Code },
        { name: "HTML", icon: Code },
        { name: "CSS", icon: Code },
        { name: "Bootstrap", icon: Code },
        { name: "SQL", icon: Database },
        { name: "PostgreSQL", icon: Database },
        { name: "NoSQL", icon: Database },
        { name: "MongoDB", icon: Database },
        { name: "Git", icon: GitBranch },
        { name: "Docker", icon: Container },
        { name: "PHP", icon: Code },
    ]

    return (
        <div className="max-w-4xl mx-auto py-20 px-6">
            <h1 className="text-4xl font-bold mb-8 text-center">Skills</h1>
            <p className="text-gray-600 text-center mb-12">
                A list of programming languages, frameworks, and tools I am experienced with.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {skills.map(({ name, icon: Icon }, index) => (
                    <div
                        key={index}
                        className="p-6 rounded-2xl shadow-md bg-indigo-100 hover:shadow-lg transition flex items-center justify-between"
                    >
                        <p className="text-lg font-semibold text-gray-800">{name}</p>
                        <Icon className="w-6 h-6 text-gray-500" />
                    </div>
                ))}
            </div>
        </div>
    )
}
