export default function About() {
    return (
        <div className="max-w-5xl mx-auto py-20 px-6">
            <h1 className="text-4xl font-bold mb-12 text-center">About Me</h1>

            <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Profile Picture */}
                <div>
                    <img
                        src="/Profielfoto.jpg" // <-- put your image in public/profile.jpg
                        alt="Profile picture"
                        className="w-full rounded-2xl shadow-lg object-cover"
                    />
                </div>

                {/* Text */}
                <div>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                        I’ve always had a passion for computers, which naturally led me into the world of programming.
                        Over the years, I’ve developed my skills and discovered how much I enjoy creating useful and creative digital solutions.
                    </p>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                        At the moment, I’m working on personal projects while actively looking for an opportunity to start my career
                        as a developer. I’m excited to join a team where I can contribute, learn, and grow further.
                    </p>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Outside of coding, I’m a big Marvel fan, I enjoy wall climbing, and you’ll often find me gaming in my free time.
                    </p>

                    {/* CV Download Button */}
                    <a
                        href="/CV%20Laurien%20Hart.pdf" // <-- put your CV in public/cv.pdf
                        download
                        className="inline-block bg-blue-600 text-white font-medium py-3 px-6 rounded-2xl shadow-md hover:bg-blue-700 transition"
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </div>
    );
}
