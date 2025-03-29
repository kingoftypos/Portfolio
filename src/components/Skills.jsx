const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML", percentage: 95 },
        { name: "CSS", percentage: 90 },
        { name: "JavaScript", percentage: 92 },
        { name: "React", percentage: 88 },
        { name: "Tailwind CSS", percentage: 85 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", percentage: 85 },
        { name: "Express", percentage: 82 },
        { name: "MongoDB", percentage: 78 },
        { name: "SQL", percentage: 75 },
        { name: "Firebase", percentage: 80 },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", percentage: 90 },
        { name: "Docker", percentage: 70 },
        { name: "AWS", percentage: 65 },
        { name: "Figma", percentage: 75 },
        { name: "Jest", percentage: 72 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-16 md:py-24 bg-white dark:bg-slate-900">
      <div className="section-container">
        <h2 className="section-title mb-16 dark:text-white">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="card dark:bg-slate-800">
              <h3 className="text-xl font-bold mb-6 text-center text-slate-800 dark:text-white">{category.category}</h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                      <span className="text-slate-600 dark:text-slate-400">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                      <div className="bg-sky-500 h-2.5 rounded-full" style={{ width: `${skill.percentage}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

