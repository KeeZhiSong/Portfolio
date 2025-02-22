"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

const projects = [
  {
    id: 1,
    title: "Interactive Loading Screen",
    description: "Revamping the loading process to create an engaging and enjoyable experience for users!",
    imageUrl: "/images/pic2.jpeg",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description for Project 2",
    imageUrl: "/images/pic3.jpeg",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Description for Project 3",
    imageUrl: "/images/pic3.jpeg",
  },
  {
    id: 4,
    title: "Project 4",
    description: "Description for Project 4",
    imageUrl: "/images/pic3.jpeg",
  },
  {
    id: 5,
    title: "Project 5",
    description: "Description for Project 5",
    imageUrl: "/images/pic3.jpeg",
  },
  {
    id: 6,
    title: "Project 6",
    description: "Description for Project 6",
    imageUrl: "/images/pic3.jpeg",
  },
]

export default function PortfolioGrid() {
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({})

  const handleImageError = (id: number) => {
    console.error(`Failed to load image for project ${id}`)
    setImageErrors((prev) => ({ ...prev, [id]: true }))
  }

  return (
    <section id="my-projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold sm:text-4xl">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
              My Projects
            </span>
            <span className="ml-2">📜</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300">A showcase of my personal projects and creative designs.</p>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {projects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-800 rounded-3xl shadow-lg overflow-hidden hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-purple-500/10"
              >
                <div className="relative h-64 overflow-hidden">
                  {imageErrors[project.id] ? (
                    <div className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-400">
                      Image not found
                    </div>
                  ) : (
                    <Image
                      src={project.imageUrl || "/placeholder.svg"}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                      onError={() => handleImageError(project.id)}
                      onLoad={() => console.log(`Image loaded successfully for project ${project.id}`)}
                    />
                  )}
                  <motion.div
                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300"
                    whileHover={{ opacity: 1 }}
                  >
                    <p className="text-white text-center px-4">{project.description}</p>
                  </motion.div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">{project.title}</h3>
                  <a
                    href="https://www.flowersandsaints.com.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-300 transition-colors duration-300 inline-flex items-center"
                  >
                    View Project
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

