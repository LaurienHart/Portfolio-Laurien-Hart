import Image from "next/image";

export default function EindprojectWerkveld() {
    return (
        <main className="max-w-5xl mx-auto py-20 px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">
                Eindproject Voor Het Werkveld
            </h2>

            {/* Intro */}
            <div className="mb-10">
                <p className="text-gray-600 leading-relaxed mb-4">
                    Dit is een groepsproject waarmee we met 4 personen een webapplicatie
                    voor een &quot;klant&quot; moeten ontwikkelen. Onze klant is de kunstacademie van
                    Mechelen.
                </p>
                <Image
                    src="/fotos/kunstacademie.png"
                    alt="Home Kunstacademie"
                    className="w-full rounded-2xl shadow-md object-cover mb-4"
                />
                <p className="text-gray-600 leading-relaxed mb-4">
                    Ze willen een applicatie waarbij cursisten hun werken kunnen opslaan,
                    voorraden kunnen beheren en de uitgegeven kosten kunnen bijhouden. Een
                    online veiling werd ook voorzien zodat klanten de kunstwerken kunnen
                    aankopen.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                    Afhankelijk van het profiel kan je bepaalde zaken uitvoeren:
                </p>
            </div>

            {/* Roles */}
            <div className="mb-10">
                <p className="text-gray-600 leading-relaxed mb-2">
                    <strong>Klant:</strong> Kan bieden op kunstwerken, reacties achterlaten
                    en een score geven.
                </p>
                <p className="text-gray-600 leading-relaxed mb-2">
                    <strong>Cursist:</strong> Kan alles wat een klant kan. Kunnen zich
                    inschrijven voor groepsreizen, groepsaankopen en andere openbare werken zien.
                </p>
                <p className="text-gray-600 leading-relaxed mb-2">
                    <strong>Secretariaat:</strong> Kan zien wie zich heeft ingeschreven voor
                    de groepsreizen.
                </p>
                <p className="text-gray-600 leading-relaxed mb-2">
                    <strong>Admin:</strong> Beheert de site.
                </p>
            </div>

            {/* Back Link */}
            <div className="text-center">
                <a href="/projects" className="text-indigo-300 hover:underline font-medium">
                    Terug
                </a>
            </div>
        </main>
    );
}
