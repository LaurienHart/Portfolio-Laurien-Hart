"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <nav className="bg-gray-900 text-white px-6 py-4">
            <div className="flex justify-between items-center">
                {/* Logo/Brand */}
                <div className="text-xl font-bold">MyApp</div>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-6">
                    <li>
                        <Link href="/" className="hover:text-gray-400 transition-colors">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:text-gray-400 transition-colors">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects" className="hover:text-gray-400 transition-colors">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="/skills" className="hover:text-gray-400 transition-colors">
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:text-gray-400 transition-colors">
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1"
                    aria-label="Toggle mobile menu"
                >
          <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
          ></span>
                    <span
                        className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
                    ></span>
                    <span
                        className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                        }`}
                    ></span>
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <ul className="pt-4 pb-2 space-y-2">
                    <li>
                        <Link href="/" className="block py-2 px-4 hover:bg-gray-800 rounded transition-colors" onClick={closeMenu}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className="block py-2 px-4 hover:bg-gray-800 rounded transition-colors"
                            onClick={closeMenu}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/projects"
                            className="block py-2 px-4 hover:bg-gray-800 rounded transition-colors"
                            onClick={closeMenu}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/skills"
                            className="block py-2 px-4 hover:bg-gray-800 rounded transition-colors"
                            onClick={closeMenu}
                        >
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className="block py-2 px-4 hover:bg-gray-800 rounded transition-colors"
                            onClick={closeMenu}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
