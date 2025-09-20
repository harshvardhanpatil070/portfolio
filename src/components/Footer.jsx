import {
  Twitter,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";
import brandLogo from "../assets/images/icon.png";

export default function Footer() {
  return (
    <footer
      className="
        relative isolate overflow-hidden bg-[#223b67]
        pt-24 pb-10 px-4 sm:px-6 lg:px-8
        rounded-t-[64px]
      "
    >
      {/* backdrop gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#223b67] to-[#1a2e57]" />

      <div className="relative mx-auto max-w-6xl">
        {/* top row */}
        <div
          className="
            flex flex-col lg:flex-row items-center justify-between
            gap-8 p-8 rounded-3xl bg-[#1f2f55]/80 backdrop-blur-sm
          "
        >
          {/* logo & name */}
          <div className="flex flex-col lg:flex-row items-center gap-3">
          
            <span className="text-2xl font-bold text-white">
              Harshvardhan Patil
            </span>
            <span className="lg:ml-6 text-sm text-white/70">
              © 2025. All rights reserved.
            </span>
          </div>

          {/* quick links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium">
            <a href="#hero" className="text-white/80 hover:text-white">
              Home
            </a>
            <a href="#skills" className="text-white/80 hover:text-white">
              Skills
            </a>
            <a href="#projects" className="text-white/80 hover:text-white">
              Projects
            </a>
            <a href="#timeline" className="text-white/80 hover:text-white">
              Journey
            </a>
            <a href="#contact" className="text-white/80 hover:text-white">
              Contact
            </a>
          </nav>

          {/* social icons */}
          <div className="flex gap-4">
            {[
              { Icon: Linkedin, link: "https://linkedin.com/in/yourprofile" },
              { Icon: Github, link: "https://github.com/yourusername" },
              { Icon: Instagram, link: "https://instagram.com/yourusername" },
              { Icon: Twitter, link: "https://twitter.com/yourusername" },
            ].map(({ Icon, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full border border-white/20
                  text-white/80 hover:text-white hover:border-white/40 transition
                "
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* footer note */}
        <p className="mt-10 text-center text-xs leading-relaxed text-white/70">
          Designed & built with React, TailwindCSS, and Framer Motion.  
          Passionate about Information Systems, Data, and Project Management.
        </p>
      </div>
    </footer>
  );
}