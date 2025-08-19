import Image from "next/image";

export default function ThemaWebsite() {
    return (
        <div className="max-w-5xl mx-auto py-20 px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">Thema Website</h2>

            {/* Intro */}
            <div className="mb-10">
                <p className="text-gray-600 leading-relaxed mb-4">
                    Een tweede project was het maken van een themasite. Ik heb gekozen voor het thema kaas.
                </p>
                <Image
                    src="/fotos/website kaas soorten.png"
                    width={1000}
                    height={1000}
                    alt="Website kaas soorten"/>
            </div>

            {/* Tools */}
            <div className="mb-10">
                <h2>Tools/programma&apos;s:</h2>
                <li>HTML5</li>
                <li>Bootstrap</li>
                <li>Visual Studio Code</li>
                <li>Carousel component</li>
                <li>Cards component</li>
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
