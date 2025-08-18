export default function About() {
    return (
        <div className="max-w-5xl mx-auto py-20 px-6">
            <h1 className="text-4xl font-bold mb-12 text-center">Over Mij</h1>

            <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Profielfoto */}
                <div>
                    <img
                        src="/Profielfoto.jpg"
                        alt="Profielfoto"
                        className="w-full rounded-2xl shadow-lg object-cover"
                    />
                </div>

                {/* Tekst */}
                <div>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                        Ik heb altijd al een passie gehad voor computers, wat me vanzelf in de wereld van programmeren heeft gebracht.
                        Door de jaren heen heb ik mijn vaardigheden ontwikkeld en ontdekt hoeveel plezier ik heb in het maken van
                        nuttige en creatieve digitale oplossingen.
                    </p>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                        Op dit moment werk ik aan persoonlijke projecten terwijl ik actief op zoek ben naar een kans om mijn carrière
                        als ontwikkelaar te starten. Ik kijk ernaar uit om deel uit te maken van een team waarin ik kan bijdragen, leren
                        en verder groeien.
                    </p>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Buiten het programmeren ben ik een grote Marvel-fan, klim ik graag op muren en zul je me
                        vaak in mijn vrije tijd zien gamen.
                    </p>

                    {/* CV Downloadknop */}
                    <a
                        href="/CV%20Laurien%20Hart.pdf"
                        download
                        className="inline-block bg-indigo-100 font-medium py-3 px-6 rounded-2xl shadow-md hover:bg-indigo-500 hover:text-white transition"
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </div>
    )
}
