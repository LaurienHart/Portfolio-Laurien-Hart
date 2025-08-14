import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
    return (
        <div className="max-w-3xl mx-auto py-20 px-6 text-center">
            <h1 className="text-4xl font-bold mb-6">Contact</h1>
            <p className="text-gray-600 mb-10">
                I’d love to connect! Feel free to reach out to me through email or on my
                professional profiles below.
            </p>

            {/* Contact Options */}
            <div className="flex justify-center gap-6 flex-wrap">
                {/* Email */}
                <a
                    href="mailto:laurien.hart@outlook.com"
                    className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-2xl shadow transition"
                >
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span>Email</span>
                </a>

                {/* LinkedIn */}
                <a
                    href="https://www.linkedin.com/in/laurien-hart"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-2xl shadow transition"
                >
                    <Linkedin className="w-5 h-5 text-blue-600" />
                    <span>LinkedIn</span>
                </a>

                {/* GitHub */}
                <a
                    href="https://github.com/LaurienHart"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-2xl shadow transition"
                >
                    <Github className="w-5 h-5 text-gray-800" />
                    <span>GitHub</span>
                </a>
            </div>
        </div>
    );
}
