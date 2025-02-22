"use client"

import type React from "react"

import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Footer() {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    router.push(href)
    setTimeout(() => {
      const element = document.getElementById(href.slice(1))
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  const footerItems = ["About", "Projects", "Skills", "Contact"]

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {footerItems.map((item) => (
            <div key={item} className="pb-6">
              <Link
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleClick(e, `#${item.toLowerCase()}`)}
                className="text-sm leading-6 text-gray-400 hover:text-gray-200 cursor-pointer"
              >
                {item}
              </Link>
            </div>
          ))}
        </nav>
        <p className="mt-10 text-center text-sm leading-5 text-gray-400">Designed & Developed with ❤️ by Zhi Song</p>
      </div>
    </footer>
  )
}

