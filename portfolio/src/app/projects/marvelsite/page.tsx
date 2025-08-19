import Image from "next/image";

export default function EindprojectMarvel() {
    return (
        <div className="max-w-5xl mx-auto py-20 px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">
                Eindproject Advanced Programming Techniques
            </h2>

            {/* Intro */}
            <div className="mb-10">
                <p className="text-gray-600 leading-relaxed mb-4">
                    Voor dit eindproject heb ik gekozen om een Marvel webapplicatie te
                    maken. Als Marvel fan leek het me leuk om een site te hebben met een
                    overzicht van alle films en series die uitgekomen zijn.
                </p>
                <Image
                    src="/fotos/homemarvel.png"
                    width={1000}
                    height={1000}
                    alt="Website homepage marvel"/>
            </div>

            {/* Tools */}
            <div className="mb-10">
                <h2>Tools/programma&apos;s:</h2>
                <li>Java</li>
                <li>Spring/Boot</li>
                <li>Bootstrap</li>
                <li>IntelliJ</li>
            </div>

            {/* Demo */}
            <div className="mb-10">
                <p className="text-gray-600 leading-relaxed mb-4">
                    Benieuwd!?! Hier is de link naar de {' '}
                    <a
                        href="https://www.youtube.com/watch?v=LcP6_Uusfok"
                        className="text-indigo-600 hover:underline"
                    >
                        demo
                    </a>
                </p>
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
