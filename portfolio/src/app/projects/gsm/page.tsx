import Image from "next/image";

export default function gsm() {
    return (
        <main className="max-w-5xl mx-auto py-20 px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">
                App voor de GSM
            </h2>

            {/* Intro */}
            <div className="mb-10">
                <p>Een ander project was het maken van een GSM app. Voor dit project heb ik het thema nintendo gekozen.</p>
                <Image
                    src="/fotos/homepageGSM.png"
                    width={300}
                    height={600}
                    alt="Homepagina GSM"
                />
            </div>

            {/* Tools */}
            <div className="mb-10">
                <h2>Tools/programma&apos;s:</h2>
                <li>Flutter</li>
                <li>Dart</li>
                <li>Android Studio</li>
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
