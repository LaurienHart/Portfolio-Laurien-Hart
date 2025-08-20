import Image from "next/image";

export default function starWars() {
    return (
        <div className="max-w-5xl mx-auto py-20 px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">
                Eindopdracht Hybrid apps
            </h2>

            {/* Intro */}
            <div className="mb-10">
                <p>De eindopdracht voor het vak Hybrid apps vond ik persoonlijk het leukste
                    project om te maken.  In het thema StarWars heb ik een universum gemaakt
                    met verschillende planeten.  In dit universum kan je rondvliegen.
                </p>
                <Image
                    src="/fotos/Homepage Starwars.png"
                    alt="Homepage van StarWars"
                    width={1000}
                    height={1000}
                />
            </div>

            {/* Tools */}
            <div className="mb-10">
                <h2>Tools/programma&apos;s:</h2>
                <li>Typescript</li>
                <li>Tailwind</li>
                <li>Next.js</li>
                <li>Three.js</li>
            </div>

            {/* Demo */}
            <div className="mb-10">
                <p>
                    Benieuwd!?! Hier is de link naar de {' '}
                    <a
                        href="https://laurien-hart-eindopdracht-hybrid.vercel.app/"
                        className="text-indigo-600 hover:underline"
                    >
                        website.
                    </a>
                </p>
                <p>Als je de onderstaande foto ziet op de site moet je even
                    wachten omdat het nogal zwaar/groot is kan het even duren voor het ingeladen is.
                </p>
                <Image
                    src="/fotos/loading screen starwars.png"
                    alt="Homepage van StarWars"
                    width={400}
                    height={400}
                />
                <br/>
                <p> Ik moest ook een topic presenteren. Die kan je
                    <a
                        href="https://github.com/LaurienHart/Laurien-Hart-hybrid-topic"
                        className="text-indigo-600 hover:underline"
                    > hier </a>
                    vinden.
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
