import Image from "next/image";

export default function EindprojectWerkveld() {
    return (
        <div className="max-w-5xl mx-auto py-20 px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">
                Eindproject Voor Het Werkveld
            </h2>

            {/* Intro */}
            <div className="mb-10">
                <p className="text-gray-600 leading-relaxed mb-4">
                    In dit groepsproject, samen met 3 medestudenten moesten we een webapplicatie
                    ontwikkelen voor een fictieve klant.
                </p>
                <Image
                    src="/fotos/kunstacademie.png"
                    width={1000}
                    height={1000}
                    alt="Home Kunstacademie"/>
            </div>

            {/* Tools */}
            <div className="mb-10">
                <h2>Tools/programma&apos;s:</h2>
                <li>Java</li>
                <li>Spring/Boot</li>
                <li>Bootstrap</li>
                <li>IntelliJ</li>
                <li>Github</li>
            </div>

            {/* Back Link */}
            <div className="text-center">
                <a href="/projects" className="text-indigo-300 hover:underline font-medium">
                    Terug
                </a>
            </div>
        </div>
    )
}
