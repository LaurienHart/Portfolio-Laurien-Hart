export default function starWars() {
    return (
        <main className="max-w-5xl mx-auto py-20 px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">
                Eindopdracht Hybrid apps
            </h2>

            {/* Intro */}
            <div className="mb-10">
                <img
                    src="/fotos/Homepage Starwars.png"
                    alt="Homepage van StarWars"
                    className="w-full rounded-2xl shadow-md object-cover mb-4"
                />
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
