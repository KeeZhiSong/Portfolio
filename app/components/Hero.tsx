"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import styles from "./Hero.module.css"

export default function Hero() {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-8 flex justify-center items-center min-h-screen">
        <div className="text-center -mt-32">
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className={`${styles.card} text-gray-100`}>
              <div className={styles.loader}>
                <p>loading</p>
                <div className={styles.words}>
                  <span className={styles.word}>buttons</span>
                  <span className={styles.word}>forms</span>
                  <span className={styles.word}>all the fun!</span>
                  <span className={styles.word}>switches</span>
                  <span className={styles.word}>buttons</span>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {imageError ? (
              <div className="w-[150px] h-[150px] rounded-full bg-gray-700 flex items-center justify-center text-gray-400">
                Image not found
              </div>
            ) : (
              <Image
                src="/images/pic1.jpeg"
                alt="Kee Zhi Song's Profile Picture"
                width={150}
                height={150}
                className="rounded-full"
                onError={() => setImageError(true)}
              />
            )}
          </motion.div>
          <motion.h1
            className="mt-10 text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
              {"I'm\nZhi Song!"}
            </span>
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I'm currently a Computer Science Student at the National University of Singapore!
          </motion.p>
          <motion.div
            className="mt-10 flex items-center justify-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="#my-projects" className="apple-button">
              Explore My Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                const contactSection = document.getElementById("contact")
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="text-sm font-semibold leading-6 text-gray-300 hover:text-primary transition-colors"
            >
              Contact Me <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

