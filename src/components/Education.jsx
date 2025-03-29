import { GraduationCap, Calendar } from "lucide-react"

const Education = () => {
  const educationData = [
    {
      degree: "Master of Computer Science",
      institution: "Stanford University",
      duration: "2020 - 2022",
      description:
        "Specialized in Artificial Intelligence and Machine Learning with a focus on Neural Networks and Deep Learning.",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "MIT",
      duration: "2016 - 2020",
      description:
        "Graduated with honors. Focused on software engineering and web development. Participated in various hackathons and coding competitions.",
    },
    {
      degree: "High School Diploma",
      institution: "Tech High School",
      duration: "2012 - 2016",
      description: "Graduated as valedictorian with a focus on mathematics and computer science.",
    },
  ]

  return (
    <section id="education" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-800">
      <div className="section-container">
        <h2 className="section-title mb-16 dark:text-white">Education</h2>

        <div className="space-y-8">
          {educationData.map((item, index) => (
            <div key={index} className="card dark:bg-slate-900 dark:text-white hover:translate-y-[-5px]">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-sky-100 dark:bg-sky-900 rounded-full flex items-center justify-center">
                    <GraduationCap size={32} className="text-sky-500" />
                  </div>
                </div>

                <div className="flex-grow">
                  <h3 className="text-xl font-bold">{item.degree}</h3>
                  <h4 className="text-lg text-slate-600 dark:text-slate-400">{item.institution}</h4>
                  <div className="flex items-center text-slate-500 dark:text-slate-500 mt-1 mb-2">
                    <Calendar size={16} className="mr-2" />
                    <span>{item.duration}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

