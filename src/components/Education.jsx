import { GraduationCap, Calendar } from "lucide-react"

const Education = () => {
  const educationData = [
    
    {
      degree: "Bachelor of Technology in Computer Science and Engineering Specialization in AI and ML",
      institution: "Inderprastha Engineering College, Ghaziabad",
      duration: "2021-2025",
      description:
        "Graduated with 78%. Focused on software engineering and web development. Participated in various hackathons and coding competitions.",
    },
    {
      degree: "High School",
      institution: "St. Xavier's School, Salempur",
      duration: "2016 - 2018",
      description: "Completed high school with a focus on science and mathematics with 87.5%.",
    },
    {
      degree: "Senior Secondary School",
      institution: "St. Xavier's School, Salempur",
      duration: "2018 - 2020",
      description: "Completed Senior Secondary school with a focus on science and mathematics with 86.6%.",
    }
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

