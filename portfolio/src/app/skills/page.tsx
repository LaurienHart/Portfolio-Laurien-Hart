import {
    Database,
    Container,
    GitBranch,
    FileText,
    Coffee,
    Boxes,
    Braces,
    FileCode2,
    Layers,
    TerminalSquare
} from "lucide-react";

export default function Skills() {

    const skills = [
        { name: "JavaScript", icon: Braces },
        { name: "TypeScript", icon: Braces },
        { name: "Java", icon: Coffee },
        { name: "PHP", icon: TerminalSquare },
        { name: "HTML5", icon: FileCode2 },
        { name: "Bootstrap", icon: Layers },
        { name: "CSS", icon: Layers },
        { name: "Spring Boot", icon: Boxes },
        { name: "React", icon: Boxes },
        { name: "SQL", icon: Database },
        { name: "PostgreSQL", icon: Database },
        { name: "NoSQL", icon: Database },
        { name: "MongoDB", icon: Database },
        { name: "Git", icon: GitBranch },
        { name: "Docker", icon: Container },
        { name: "MS Office", icon: FileText },
    ]

    const certificates = [
        { name: "Snowflake", icon: Database, link: "/certificates/Snowflake%20certificate.pdf" },
    ]

    return (
        <div className="max-w-4xl mx-auto py-20 px-6">
            {/* Skills */}
            <h1 className="text-4xl font-bold mb-8 text-center">Skills</h1>
            <p className="text-gray-600 text-center mb-12">
                Programmeertalen, frameworks en tools waarmee ik ervaring heb:
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

            {/* Certificaten */}
            <h1 className="text-3xl font-bold my-12 text-center">Behaalde certificaten</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {certificates.map(({ name, icon: Icon, link }, index) => (
                    <a
                        key={index}
                        href={link}
                        download
                        className="p-6 rounded-2xl shadow-md bg-indigo-100 hover:shadow-lg transition flex items-center justify-between cursor-pointer"
                    >
                        <p className="text-lg font-semibold text-gray-800">{name}</p>
                        <Icon className="w-6 h-6 text-gray-500" />
                    </a>
                ))}
            </div>
        </div>
    )
}
