import { Trophy, Award, Star, Medal } from "lucide-react"

const Achievements = () => {
  const achievementsData = [
    {
      title: "Best Web Developer Award",
      description:
        "Recognized as the best web developer in the annual tech conference for outstanding contributions to web development.",
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      year: "2022",
    },
    {
      title: "1st Place Hackathon",
      description:
        "Won first place in a 48-hour hackathon by developing an innovative solution for healthcare accessibility.",
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      year: "2021",
    },
    {
      title: "Open Source Contributor",
      description:
        "Recognized as a top contributor to several open-source projects with over 500 contributions on GitHub.",
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      year: "2020",
    },
    {
      title: "Excellence in Innovation",
      description: "Received an award for developing a revolutionary algorithm that improved system efficiency by 40%.",
      icon: <Medal className="w-8 h-8 text-yellow-500" />,
      year: "2019",
    },
  ]

  return (
    <section id="achievements" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-800">
      <div className="section-container">
        <h2 className="section-title mb-16 dark:text-white">Achievements</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievementsData.map((achievement, index) => (
            <div key={index} className="card dark:bg-slate-900 dark:text-white hover:shadow-xl transition-shadow">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center">
                    {achievement.icon}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{achievement.title}</h3>
                    <span className="text-sm font-medium bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 px-3 py-1 rounded-full">
                      {achievement.year}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements

