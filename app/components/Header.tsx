"use client"

import type React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Home } from "lucide-react"

export default function Header() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.header
      className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Home</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-gray-100 hover:text-purple-400 transition-colors"
            >
              <Home className="h-6 w-6" />
            </button>
          </Link>
        </div>
        <div className="flex gap-x-12">
          <Link
            href="#my-projects"
            onClick={(e) => scrollToSection(e, "my-projects")}
            className="text-sm font-semibold leading-6 text-gray-100 hover:text-purple-400 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#about"
            onClick={(e) => scrollToSection(e, "about")}
            className="text-sm font-semibold leading-6 text-gray-100 hover:text-purple-400 transition-colors"
          >
            About Me
          </Link>
          <Link
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
            className="text-sm font-semibold leading-6 text-gray-100 hover:text-purple-400 transition-colors"
          >
            Contact
          </Link>
        </div>
        <div className="flex flex-1 justify-end">{/* Theme toggle button has been removed */}</div>
      </nav>
    </motion.header>
  )
}

