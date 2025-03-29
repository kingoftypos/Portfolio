"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart",
      image: "/placeholder.svg?height=100&width=100",
      testimonial:
        "John is an exceptional developer who delivered our project on time and exceeded our expectations. His attention to detail and problem-solving skills are impressive.",
    },
    {
      name: "Michael Chen",
      position: "CTO, InnovateCorp",
      image: "/placeholder.svg?height=100&width=100",
      testimonial:
        "Working with John was a pleasure. He understood our requirements perfectly and implemented solutions that were both elegant and efficient. I highly recommend him for any web development project.",
    },
    {
      name: "Emily Rodriguez",
      position: "Product Manager, DesignHub",
      image: "/placeholder.svg?height=100&width=100",
      testimonial:
        "John's expertise in frontend development transformed our user interface. He's not only technically skilled but also has a great eye for design and user experience.",
    },
    {
      name: "David Kim",
      position: "Founder, StartupX",
      image: "/placeholder.svg?height=100&width=100",
      testimonial:
        "I've worked with many developers, but John stands out for his communication skills and dedication. He's a problem solver who goes above and beyond to deliver quality work.",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1))
  }

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white dark:bg-slate-900">
      <div className="section-container">
        <h2 className="section-title mb-16 dark:text-white">Testimonials</h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 z-10">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-md flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
            </div>

            <div className="card dark:bg-slate-800 py-10 px-8 md:px-12">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 mb-6 relative">
                  <div className="absolute -top-4 -right-4">
                    <Quote size={32} className="text-sky-500 opacity-50" />
                  </div>
                  <img
                    src={testimonialsData[currentIndex].image || "/placeholder.svg"}
                    alt={testimonialsData[currentIndex].name}
                    className="w-full h-full object-cover rounded-full border-4 border-sky-100 dark:border-sky-900"
                  />
                </div>

                <p className="text-slate-600 dark:text-slate-300 mb-6 italic">
                  "{testimonialsData[currentIndex].testimonial}"
                </p>

                <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                  {testimonialsData[currentIndex].name}
                </h3>
                <p className="text-slate-500 dark:text-slate-400">{testimonialsData[currentIndex].position}</p>
              </div>
            </div>

            <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 z-10">
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-md flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index
                    ? "bg-sky-500"
                    : "bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

