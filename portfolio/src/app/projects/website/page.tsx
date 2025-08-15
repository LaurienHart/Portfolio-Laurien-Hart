import Image from "next/image";

export default function Website() {
    return (
        <main className="max-w-5xl mx-auto py-20 px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">Website Project</h2>

            {/* Intro */}
            <div className="mb-10">
                <p className="text-gray-600 leading-relaxed mb-4">
                    Het eerste project van de opleiding graduaat programmeren is het maken
                    van een website. De website kan je zien als een portfolio waarin meer
                    uitleg staat over mezelf en de projecten waaraan ik werk.
                </p>
                <p className="text-gray-600 leading-relaxed">
                    Voor het maken van deze website gebruik ik het programma Visual Studio
                    Code dat gebruik maakt van de codetaal HTML5 en CSS voor de styling.
                </p>
            </div>

            {/* First Version */}
            <div className="mb-10">
                <p className="text-gray-600 leading-relaxed">
                    De allereerste versie van de website was heel simpel. Daar had ik de
                    pagina&apos;s &apos;Over mij&apos; en &apos;Mijn CV&apos;. Toen hebben we een stylesheet gebruikt
                    van het internet. In een volgende versie heb ik er zelf een gemaakt.
                </p>
            </div>

            {/* Multiple Pages */}
            <div className="mb-10">
                <p className="text-gray-600 leading-relaxed mb-4">
                    Een volgende opdracht was het toevoegen van meerdere pagina&apos;s, zoals je
                    in onderstaande foto kan zien.
                </p>
                <Image
                    src="/fotos/Websiteversie.jpg"
                    alt="Een versie van de site"
                    className="w-full rounded-2xl shadow-md object-cover"
                />
            </div>

            {/* Contact & Navbar */}
            <div className="mb-10">
                <p className="text-gray-600 leading-relaxed mb-4">
                    Verder heb ik nog een contactpagina toegevoegd met een werkend formulier en met de
                    feedback van de docent de navbar aangepast. Nadien nog aangevuld met een pagina voor
                    werkplekleren.
                </p>
                <Image
                    src="/fotos/webstie navbar.png"
                    alt="Website Navbar"
                    className="w-full rounded-2xl shadow-md object-cover"
                />
            </div>

            {/* Responsive Note */}
            <div className="mb-10">
                <p className="text-gray-600 leading-relaxed">
                    Ten slotte werd de website responsive gemaakt wat wil zeggen dat de
                    website op alle beeldschermen werkt.
                </p>
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
