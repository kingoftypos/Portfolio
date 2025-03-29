import { Briefcase, Calendar } from "lucide-react"

const Experience = () => {
  const experienceData = [
    {
      position: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      duration: "2021 - Present",
      description:
        "Lead the frontend development team in building responsive and accessible web applications. Implemented modern React practices and improved performance by 40%. Mentored junior developers and conducted code reviews.",
      responsibilities: [
        "Architected and implemented new features using React and TypeScript",
        "Improved application performance and accessibility",
        "Led the migration from CSS to Tailwind CSS",
        "Collaborated with UX/UI designers to implement pixel-perfect designs",
      ],
    },
    {
      position: "Full Stack Developer",
      company: "Digital Innovations",
      duration: "2018 - 2021",
      description:
        "Developed and maintained full-stack applications using the MERN stack. Collaborated with cross-functional teams to deliver high-quality software solutions on time.",
      responsibilities: [
        "Built RESTful APIs using Node.js and Express",
        "Developed frontend interfaces with React",
        "Implemented authentication and authorization systems",
        "Optimized database queries for MongoDB and PostgreSQL",
      ],
    },
    {
      position: "Junior Web Developer",
      company: "WebCraft Studios",
      duration: "2016 - 2018",
      description:
        "Started as an intern and was promoted to a full-time position. Worked on various client projects, focusing on frontend development with HTML, CSS, and JavaScript.",
      responsibilities: [
        "Developed responsive websites using HTML5, CSS3, and JavaScript",
        "Assisted senior developers in implementing new features",
        "Fixed bugs and improved website performance",
        "Participated in client meetings and gathered requirements",
      ],
    },
  ]

  return (
    <section id="experience" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-800">
      <div className="section-container">
        <h2 className="section-title mb-16 dark:text-white">Experience</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-sky-200 dark:bg-sky-900"></div>

          <div className="space-y-12">
            {experienceData.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-sky-500 rounded-full border-4 border-white dark:border-slate-800 z-10"></div>

                {/* Content */}
                <div className="md:w-1/2"></div>
                <div className="md:w-1/2 ml-10 md:ml-0">
                  <div className="card dark:bg-slate-900 dark:text-white">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900 rounded-full flex items-center justify-center">
                        <Briefcase size={24} className="text-sky-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{item.position}</h3>
                        <h4 className="text-lg text-slate-600 dark:text-slate-400">{item.company}</h4>
                      </div>
                    </div>

                    <div className="flex items-center text-slate-500 dark:text-slate-500 mb-4">
                      <Calendar size={16} className="mr-2" />
                      <span>{item.duration}</span>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 mb-4">{item.description}</p>

                    <div>
                      <h5 className="font-semibold mb-2">Key Responsibilities:</h5>
                      <ul className="list-disc pl-5 text-slate-600 dark:text-slate-400 space-y-1">
                        {item.responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

