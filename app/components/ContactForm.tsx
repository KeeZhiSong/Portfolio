"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phoneNumber: z.string().min(10, { message: "Please enter a valid phone number." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })

      if (response.ok) {
        form.reset()
        alert("Thank you for your message. I'll get back to you soon!")
      } else {
        alert("Something went wrong. Please try again later.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Something went wrong. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="bg-gray-900 py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              Connect with Me!
            </span>
            <span className="ml-2">👋</span>
          </h2>
          <p className="text-lg text-gray-300">
            I'd love to hear from you. Fill out the form below and I'll get back to you as soon as possible.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-100">Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-100">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-100">Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+65 0000-0000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-100">Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Tell me about your project..." className="min-h-[120px]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
        </motion.div>

        {/* Social Media Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <div className="flex items-center gap-4">
            <div className="social-button">
              <a
                href="https://www.instagram.com/zhisong_?igsh=aTdlajZ0NjJ4ODJ6&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <button className="relative w-12 h-12 rounded-full group">
                  <div className="floater w-full h-full absolute top-0 left-0 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
                  <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-transparent rounded-full bg-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:stroke-[#171543] stroke-white duration-300"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </div>
                </button>
              </a>
            </div>
            <div className="social-button">
              <a href="https://github.com/KeeZhiSong" target="_blank" rel="noopener noreferrer" className="block">
                <button className="relative w-12 h-12 rounded-full group">
                  <div className="floater w-full h-full absolute top-0 left-0 bg-black rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
                  <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-black rounded-full">
                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path
                        className="group-hover:fill-[#171543] fill-white duration-300"
                        d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.17 6.839 9.481.5.092.683-.217.683-.481 0-.237-.009-.866-.013-1.699-2.782.603-3.37-1.338-3.37-1.338-.454-1.15-1.11-1.458-1.11-1.458-.906-.619.069-.606.069-.606 1.002.071 1.527 1.03 1.527 1.03.89 1.529 2.34 1.087 2.911.831.091-.645.348-1.087.634-1.338-2.22-.252-4.555-1.11-4.555-4.94 0-1.09.39-1.986 1.028-2.682-.103-.252-.446-1.268.098-2.642 0 0 .837-.268 2.75 1.024a9.563 9.563 0 012.496-.335 9.58 9.58 0 012.496.335c1.913-1.292 2.75-1.024 2.75-1.024.544 1.374.202 2.39.1 2.642.64.696 1.027 1.592 1.027 2.682 0 3.839-2.338 4.685-4.567 4.933.358.309.678.916.678 1.847 0 1.334-.012 2.412-.012 2.74 0 .267.18.577.688.481A12.01 12.01 0 0022 12c0-5.523-4.477-10-10-10z"
                      />
                    </svg>
                  </div>
                </button>
              </a>
            </div>
            <div className="social-button">
              <a
                href="https://www.linkedin.com/in/kee-zhi-song-41b194254/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <button className="relative w-12 h-12 rounded-full group">
                  <div className="floater w-full h-full absolute top-0 left-0 bg-blue-600 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
                  <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-blue-600 rounded-full">
                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path
                        className="group-hover:fill-[#171543] fill-white duration-300"
                        d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M8.5,19H6V10h2.5V19z M7.3,9 h-0.1C6.4,9,6,8.6,6,8.1V7.9c0-0.5,0.4-0.9,0.9-0.9h0.1C7.6,7,8,7.4,8,7.9v0.1C8,8.6,7.6,9,7.3,9z M19,19h-2.5v-4.9 c0-1.2-0.4-2-1.4-2c-0.8,0-1.3,0.6-1.5,1.2h-0.1V19H10V10h2.3v1.3h0C12.7,10.7,14,9.9,15.5,9.9c2.1,0,3.5,1.4,3.5,3.8V19z"
                      />
                    </svg>
                  </div>
                </button>
              </a>
            </div>
            <div className="social-button">
              <button className="relative w-12 h-12 rounded-full group">
                <div className="floater w-full h-full absolute top-0 left-0 bg-red-400 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
                <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-red-400 rounded-full">
                  <svg height="32" width="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path
                      className="group-hover:fill-[#171543] fill-white duration-300"
                      d="M28 5H4c-1.104 0-2 .896-2 2v18c0 1.104.896 2 2 2h24c1.104 0 2-.896 2-2V7c0-1.104-.896-2-2-2zm0 4.879L16 18 4 9.879V7l12 8 12-8v2.879zM4 23V11.885l11.446 7.63c.269.18.594.274.921.274s.652-.094.92-.274L28 11.885V23H4z"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

