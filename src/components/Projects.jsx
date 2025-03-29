"use client"

import { useState } from "react"
import { ExternalLink, GitlabIcon as GitHub } from "lucide-react"

const Projects = () => {
  const categories = ["All", "Web", "Mobile", "UI/UX", "Other"]
  const [activeCategory, setActiveCategory] = useState("All")

  const projectsData = [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce platform with payment integration, user authentication, and admin dashboard.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Web",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      title: "Task Management App",
      description:
        "A task management application with drag-and-drop functionality, user authentication, and real-time updates.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Web",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      title: "Weather Mobile App",
      description: "A mobile application that provides real-time weather information based on user location.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Mobile",
      technologies: ["React Native", "API Integration", "Geolocation"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills with dark mode support.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Web",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      title: "Dashboard UI Design",
      description: "A modern dashboard UI design with interactive charts and data visualization components.",
      image: "/placeholder.svg?height=300&width=500",
      category: "UI/UX",
      technologies: ["Figma", "Adobe XD", "Illustrator"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      title: "Blog Platform",
      description: "A blog platform with content management system, user authentication, and comment functionality.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Web",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
    },
  ]

  const filteredProjects =
    activeCategory === "All" ? projectsData : projectsData.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-16 md:py-24 bg-white dark:bg-slate-900">
      <div className="section-container">
        <h2 className="section-title mb-16 dark:text-white">Projects</h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? "bg-sky-500 text-white"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="card group dark:bg-slate-800 overflow-hidden">
              <div className="relative overflow-hidden mb-4">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-md transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-sky-500 bg-opacity-0 group-hover:bg-opacity-70 flex items-center justify-center gap-4 transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-sky-500 hover:bg-sky-50 transition-colors"
                    aria-label="View live site"
                  >
                    <ExternalLink size={18} />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-sky-500 hover:bg-sky-50 transition-colors"
                    aria-label="View GitHub repository"
                  >
                    <GitHub size={18} />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">{project.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

