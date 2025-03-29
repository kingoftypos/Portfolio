import { Trophy, Award, Star, Medal } from "lucide-react"

const Achievements = () => {
  const achievementsData = [
    {
      title: "Leetcode",
      description:
        "Ranked 1801 on Leetcode with over 500 problems solved, showcasing strong problem-solving skills and algorithmic knowledge.",
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
    },
    {
      title: "CodeForces",
      description:
        "Ranked Pupil (max.1209) on Codeforces",
      icon: <Award className="w-8 h-8 text-yellow-500" />,
    },
    {
      title: "Codechef",
      description:
        "Ranked 1526 on codechef ie 2-star.",
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      
    },
    {
      title: "Team Lead at Think-AI Club",
      description: "Organised various webinars and coding competitions as a team lead.",
      icon: <Medal className="w-8 h-8 text-yellow-500" />,
      
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

