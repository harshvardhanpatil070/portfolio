// HeroSection.jsx
import { motion } from "framer-motion";
import mobile from "../assets/images/icon.png";
import resume from "../assets/resume.pdf";

export default function HeroSection() {
  // Replace these placeholders with real 24px SVG/PNG icons when ready
  const iconSQL = "https://dummyimage.com/24x24/ffffff/000000.png&text=DB";
  const iconBI = "https://dummyimage.com/24x24/ffffff/000000.png&text=BI";
  const iconPM = "https://dummyimage.com/24x24/ffffff/000000.png&text=PM";
  const iconPy = "https://dummyimage.com/24x24/ffffff/000000.png&text=Py";

  return (
    <header
      id="home"
      className="relative isolate overflow-hidden bg-[#2c487c]"
      aria-label="Hero — Information Systems Portfolio"
    >
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 sm:py-28 lg:px-8 flex flex-col items-center text-center">
        {/* Small phone/dashboard preview — subtle accent */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 w-full max-w-[200px] sm:max-w-[240px] md:max-w-[260px]"
        >
          <div className="rounded-2xl bg-white/8 backdrop-blur-md border border-white/12 p-2 shadow-md inline-block">
            <img
              src={mobile}
              alt="Project or dashboard preview"
              className="w-full -rotate-[4deg] rounded-lg select-none"
            />
          </div>
        </motion.div>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 mb-4">
            <span className="h-2 w-2 rounded-full bg-[#d7ff57]" aria-hidden />
            Information Systems Portfolio
          </span>

          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white">
            Hi — I’m <span className="text-[#d7ff57]">Harshvardhan Patil</span>
            <span className="block mt-2 text-lg sm:text-xl font-semibold text-white/90">
              Information Systems Student • Project Management Enthusiast
            </span>
          </h1>

          <p className="mt-5 text-sm sm:text-base text-white/80">
            I design and deliver information systems that help businesses make
            data-driven decisions. My focus areas: databases (SQL), BI & analytics,
            cloud fundamentals, and project tools that keep teams productive.
          </p>

          {/* CTAs */}
          <div className="mt-7 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold bg-[#d7ff57] text-slate-900 shadow hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d7ff57]/60 transition"
            >
              View Projects
            </a>

            <a
              href={resume}
              download
              className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold border border-white/15 bg-white/4 text-white/90 hover:bg-white/8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/20 transition"
            >
              Download CV
            </a>
          </div>

          {/* Compact IS tech row */}
          <div className="mt-6 flex justify-center gap-5 flex-wrap">
            <div className="flex items-center gap-2">
              <img src={iconSQL} alt="SQL icon" className="h-5 w-5 rounded-sm select-none" />
              <span className="text-xs text-white/85 font-medium">SQL (MySQL, PostgreSQL)</span>
            </div>

            <div className="flex items-center gap-2">
              <img src={iconBI} alt="BI icon" className="h-5 w-5 rounded-sm select-none" />
              <span className="text-xs text-white/85 font-medium">Power BI / Tableau</span>
            </div>

            <div className="flex items-center gap-2">
              <img src={iconPM} alt="PM icon" className="h-5 w-5 rounded-sm select-none" />
              <span className="text-xs text-white/85 font-medium">Jira • MS Project</span>
            </div>

            <div className="flex items-center gap-2">
              <img src={iconPy} alt="Python icon" className="h-5 w-5 rounded-sm select-none" />
              <span className="text-xs text-white/85 font-medium">Python • APIs</span>
            </div>
          </div>

          {/* small footer note */}
    
        </motion.div>
      </div>
    </header>
  );
}