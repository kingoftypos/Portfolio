"use client"

import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { GitlabIcon as GitHub, Linkedin, Twitter, Mail, Download } from "lucide-react"

const Hero = () => {
  const { isDarkMode } = useContext(ThemeContext)

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-slate-50 to-sky-50 dark:from-slate-900 dark:to-slate-800"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-sky-500 font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-slate-800 dark:text-white">John Doe</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-slate-600 dark:text-slate-300">
              Full Stack Developer
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-lg">
              I build exceptional and accessible digital experiences for the web. Passionate about creating solutions
              that are both functional and beautiful.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#contact" className="btn-primary">
                Contact Me
              </a>
              <a href="/resume.pdf" className="btn-outline flex items-center gap-2">
                <Download size={18} />
                Resume
              </a>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-400 transition-colors"
                aria-label="GitHub"
              >
                <GitHub size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a
                href="mailto:example@example.com"
                className="text-slate-600 hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-sky-500 bg-opacity-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Developer"
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full relative z-10 border-4 border-white dark:border-slate-800"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

