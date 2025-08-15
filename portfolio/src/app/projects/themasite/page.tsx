export default function ThemaWebsite() {
    return (
        <main className="max-w-5xl mx-auto py-20 px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">Thema Website</h2>

            {/* Intro */}
            <div className="mb-10">
                <p className="text-gray-600 leading-relaxed mb-4">
                    Een tweede project is het maken van een themasite. Ik heb gekozen voor kaas.
                    Ik heb deze website responsive gemaakt met HTML5 en Bootstrap.
                </p>
            </div>

            {/* Hoofdpagina's */}
            <div className="mb-10">
                <p className="text-gray-600 leading-relaxed mb-4">
                    De website bestaat uit 3 hoofdpagina&apos;s:
                </p>
                <ol className="list-decimal list-inside text-gray-600 mb-4">
                    <li>Home</li>
                    <li>Soorten kaas</li>
                    <li>Recepten</li>
                </ol>
            </div>

            {/* Home page */}
            <div className="mb-10">
                <p className="text-gray-600 leading-relaxed mb-4">
                    In de homepagina heb ik een navbar en footer aangemaakt. Daarna heb ik er een tekst bij gezet.
                </p>
                <img
                    src="/fotos/website home aangepast.png"
                    alt="Homeversie"
                    className="w-full rounded-2xl shadow-md object-cover mb-4"
                />
            </div>

            {/* Soorten kaas */}
            <div className="mb-10">
                <p className="text-gray-600 leading-relaxed mb-4">
                    Op de pagina &apos;soorten kaas&apos; heb ik deze ingedeeld in 5 verschillende pagina&apos;s; 1 voor elke soort.
                    Hiervoor heb ik de functie &apos;cards&apos; gebruikt. Hier kan je foto&apos;s terugvinden van 300 verschillende
                    soorten Belgische kazen.
                </p>
                <img
                    src="/fotos/website kaas soorten.png"
                    alt="Soorten kaas"
                    className="w-full rounded-2xl shadow-md object-cover mb-4"
                />
            </div>

            {/* Recepten */}
            <div className="mb-10">
                <p className="text-gray-600 leading-relaxed mb-4">
                    Bij &apos;recepten&apos; vind je 3 lekkere kaasrecepten terug. Op de pagina heb ik de functie &apos;carousel&apos; gebruikt.
                </p>
                <img
                    src="/fotos/Recepten website kaas.png"
                    alt="Recepten"
                    className="w-full rounded-2xl shadow-md object-cover mb-4"
                />
            </div>

            {/* Visit website */}
            <div className="mb-10 text-gray-600">
                <p>
                    <a href="/projects" className="text-indigo-300 hover:underline">Terug</a>
                </p>
            </div>
        </main>
    )
}
