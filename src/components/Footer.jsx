import { GitlabIcon as GitHub, Linkedin, Twitter, Mail } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-sky-500 mb-2">John Doe</h2>
            <p className="text-slate-400 max-w-md">
              A passionate Full Stack Web Developer building modern and responsive web applications.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-sky-500 transition-colors"
                aria-label="GitHub"
              >
                <GitHub size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-sky-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-sky-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a
                href="mailto:example@example.com"
                className="text-slate-400 hover:text-sky-500 transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>

            <p className="text-slate-500 text-sm">&copy; {currentYear} John Doe. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

