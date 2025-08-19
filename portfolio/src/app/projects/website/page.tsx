import Image from "next/image";

export default function Website() {
    return (
        <div className="max-w-5xl mx-auto py-20 px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">Website Project</h2>

            {/* Intro */}
            <div className="mb-10">
                <p className="text-gray-600 leading-relaxed mb-4">
                    Het eerste project van de opleiding graduaat programmeren was het maken
                    van een website, die kan dienen als een portfolio
                </p>
                <Image
                    src="/fotos/WebsiteEindversie.png"
                    width={1000}
                    height={1000}
                    alt="Website Eindversie"/>
            </div>

            {/* Tools */}
            <div className="mb-10">
                <h2>Tools/programma&apos;s:</h2>
                <li>HTML5</li>
                <li>CSS</li>
                <li>Visual Studio Code</li>
                <li>Responsive menu</li>
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
