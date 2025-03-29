import kingoftypos from "../utils/kingoftypos.jpg"
const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-slate-900">
      <div className="section-container">
        <h2 className="section-title mb-16 dark:text-white">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img
              src={kingoftypos}
              alt="About Me"
              className="rounded-3xl shadow-lg max-w-full h-auto w-[400px] object-cover border-4 border-slate-100 dark:border-slate-800"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">
              I'm Shreyansh, a passionate Full Stack Developer and Competitive Programmer.
            </h3>

            <p className="text-slate-600 dark:text-slate-400 mb-4">
              I am a full stack web developer with a passion for creating interactive and responsive web applications. I
              have experience working with JavaScript, React, Node.js, Express, MongoDB, HTML, CSS, and Git.
            </p>

            <p className="text-slate-600 dark:text-slate-400 mb-4">
              My journey in web development started in 2023, and since then, I've worked on various projects that have
              helped me grow as a developer. I enjoy solving complex problems and learning new technologies.
              Apart from that i am also a passionate competitive programmer. I love to solve problems and participate in coding competitions. 
              I am rated 1526 on codechef(2-star) ,pupil on codeforces (rating 1209), and 1801 rated on leetcode.
              I have a strong foundation in data structures and algorithms, which helps me tackle challenges efficiently.
            </p>

            <p className="text-slate-600 dark:text-slate-400 mb-6">
              When I'm not coding, you'll find me reading, or exploring astronomy and science in general. I believe
              in continuous learning and improving my skills to stay updated with the latest trends as an Engineer and also as an human.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Name:</h4>
                <p className="text-slate-600 dark:text-slate-400">Shreyansh</p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Email:</h4>
                <p className="text-slate-600 dark:text-slate-400">mshreyansh121@gmail.com</p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-800 dark:text-white mb-2">From:</h4>
                <p className="text-slate-600 dark:text-slate-400">Ghaziabad,India</p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Availability:</h4>
                <p className="text-slate-600 dark:text-slate-400">Available for Full time/Intern Roles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

