import Image from "next/image";

export default function portfolio() {
    return (
        <div className="max-w-5xl mx-auto py-20 px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">
                Portfolio
            </h2>

            {/* Intro */}
            <div className="mb-10">
                <p>  Met de kennis die ik opgedaan heb in de hogeschool en met zelfstudie heb ik deze site gemaakt. </p>
                <Image
                    src="/fotos/homeportfolio.png"
                    width={1000}
                    height={1000}
                    alt="Home protfolio"
                />
            </div>

            {/* Tools */}
            <div className="mb-10">
                <h2>Tools/programma&apos;s:</h2>
                <li>Typescript</li>
                <li>Tailwind</li>
                <li>Next.js</li>
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
