import Image from "next/image";

export default function apenSite() {
    return (
        <main className="max-w-5xl mx-auto py-20 px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">
                Educatieve apenwebsite
            </h2>

            {/* Intro */}
            <div className="mb-10">
                <p> Een volgend project was het maken van een website met javascript.
                    Ik heb voor een educatieve apen-site gekozen waar je niet alleen info over apen kan
                    terugvinden maar ook zelf onderzoek kan doen.
                </p>
                <Image
                    src="/fotos/homeapen.png"
                    width={1000}
                    height={1000}
                    alt="Home apen"
                />
                <br />
                <p> Met een interactieve landkaart kan je zien waar deze apen leven.</p>
                <Image
                    src="/fotos/ApensiteWereldkaart.png"
                    width={1000}
                    height={1000}
                    alt="Apensite wereldkaart"
                />
            </div>

            {/* Tools */}
            <div className="mb-10">
                <h2>Tools/programma&apos;s:</h2>
                <li>Javascript</li>
                <li>Bootstrap</li>
                <li>React</li>
                <li>Firestore Database</li>
                <li>Intellij</li>
            </div>

            {/* Back Link */}
            <div className="text-center">
                <a href="/projects" className="text-indigo-300 hover:underline font-medium">
                    Terug
                </a>
            </div>
        </main>
    )
}
