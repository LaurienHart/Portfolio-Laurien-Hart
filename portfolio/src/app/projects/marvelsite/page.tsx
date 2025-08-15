import Image from "next/image";

export default function EindprojectMarvel() {
    return (
        <main className="max-w-5xl mx-auto py-20 px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">
                Eindproject Advanced Programming Techniques
            </h2>

            {/* Intro */}
            <div className="mb-10">
                <p className="text-gray-600 leading-relaxed mb-4">
                    Voor dit eindproject heb ik gekozen om een Marvel webapplicatie te
                    maken. Als Marvel fan leek het me leuk om een site te hebben met een
                    overzicht van alle films en series die uitgekomen zijn. De styling van
                    de site werd met Bootstrap gemaakt.
                </p>
                <Image
                    src="/fotos/homemarvel.png"
                    alt="Home Marvel"
                    className="w-full rounded-2xl shadow-md object-cover mb-4"
                />
            </div>

            {/* Filtering */}
            <div className="mb-10">
                <p className="text-gray-600 leading-relaxed mb-4">
                    Er werd ook een mogelijkheid gemaakt om te filteren op specifieke
                    zaken. Op de foto zie je de filtering van de films maar is ook
                    beschikbaar bij de series.
                </p>
                <Image
                    src="/fotos/filter.png"
                    alt="Filter"
                    className="w-full rounded-2xl shadow-md object-cover mb-4"
                />
            </div>

            {/* Quiz */}
            <div className="mb-10">
                <p className="text-gray-600 leading-relaxed mb-4">
                    Ook leuk is de quiz met 20 vragen die afwisselen zodat je steeds een
                    andere quiz krijgt.
                </p>
                <Image
                    src="/fotos/quiz.png"
                    alt="Quiz"
                    className="w-full rounded-2xl shadow-md object-cover mb-4"
                />
            </div>

            {/* Account */}
            <div className="mb-10">
                <p className="text-gray-600 leading-relaxed mb-4">
                    Je hebt een mogelijkheid om een account aan te maken zodat je films en
                    series kan toevoegen aan je favorieten.
                </p>
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
        </main>
    )
}
