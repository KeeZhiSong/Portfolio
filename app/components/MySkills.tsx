"use client"

import { motion } from "framer-motion"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
})

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "C", "Assembly"],
  },  
  {
    title: "Technologies/Frameworks",
    skills: ["React", "Figma", "AWS", "CSS", "HTML"],
  },
  {
    title: "Others",
    skills: ["Microsoft Office", "Machine Learning", "Web Design", "Video Editing"],
  },
]

export default function MySkills() {
  return (
    <section id="my-skills" className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">My Skills</span>
            <span className="ml-2">💻</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
            As a Computer Science student, I've developed a diverse set of skills. Here are some of the key areas I
            specialize in:
          </p>
          <div className="space-y-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="bg-gray-800 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <h3 className={`text-2xl font-semibold text-white mb-4 ${poppins.className}`}>{category.title}</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className={`rounded-full px-4 py-2 ${
                        categoryIndex === 0
                          ? "bg-blue-500/10 text-blue-300"
                          : categoryIndex === 1
                            ? "bg-orange-500/10 text-orange-300"
                            : "bg-purple-500/10 text-purple-300"
                      }`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a href="#my-projects" className="apple-button inline-flex items-center">
              View My Projects
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

