import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
            <div className="text-xl font-bold">MyApp</div>
            <ul className="flex space-x-6">
                <li>
                    <Link href="/" className="hover:text-gray-400">Home</Link>
                </li>
                <li>
                    <Link href="/about" className="hover:text-gray-400">About</Link>
                </li>
                <li>
                    <Link href="/projects" className="hover:text-gray-400">Projects</Link>
                </li>
                <li>
                    <Link href="/contact" className="hover:text-gray-400">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}
