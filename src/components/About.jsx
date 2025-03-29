const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-slate-900">
      <div className="section-container">
        <h2 className="section-title mb-16 dark:text-white">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img
              src="/placeholder.svg?height=500&width=500"
              alt="About Me"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">
              I'm John, a passionate Full Stack Developer
            </h3>

            <p className="text-slate-600 dark:text-slate-400 mb-4">
              I am a full stack web developer with a passion for creating interactive and responsive web applications. I
              have experience working with JavaScript, React, Node.js, Express, MongoDB, HTML, CSS, and Git.
            </p>

            <p className="text-slate-600 dark:text-slate-400 mb-4">
              My journey in web development started in 2018, and since then, I've worked on various projects that have
              helped me grow as a developer. I enjoy solving complex problems and learning new technologies.
            </p>

            <p className="text-slate-600 dark:text-slate-400 mb-6">
              When I'm not coding, you'll find me hiking, reading, or exploring new coffee shops in the city. I believe
              in continuous learning and improving my skills to stay updated with the latest trends in web development.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Name:</h4>
                <p className="text-slate-600 dark:text-slate-400">John Doe</p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Email:</h4>
                <p className="text-slate-600 dark:text-slate-400">example@example.com</p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-800 dark:text-white mb-2">From:</h4>
                <p className="text-slate-600 dark:text-slate-400">New York, USA</p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Availability:</h4>
                <p className="text-slate-600 dark:text-slate-400">Available for freelance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

