import { Mail, Linkedin, Github, FileText } from "lucide-react";
import resume from "../assets/resume.pdf"
export default function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#2c487c] rounded-[48px] sm:rounded-[64px] py-24 px-4 sm:px-6 lg:px-8"
    >
      {/* lighter background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#2c487c] to-[#223b68]" />

      <div className="relative mx-auto max-w-3xl text-center">
        {/* heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Let’s{" "}
          <span className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:bg-[#D7E056] after:rounded-sm">
            Connect
          </span>
        </h2>
        <p className="mt-4 text-lg text-white/80">
          I’m always open to discussing opportunities, collaborations, or just
          having a conversation about Information Systems and Project
          Management.
        </p>

        {/* contact links */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center">
          <a
            href="mailto:harshvardhanpatil070@gmail.com"
            className="flex flex-col items-center gap-2 p-6 rounded-xl bg-[#16294b] hover:bg-[#1f3764] transition shadow-lg shadow-black/30"
          >
            <Mail className="text-[#D7E056]" size={28} />
            <span className="text-sm font-medium text-white">Email</span>
          </a>

          <a
            href="https://linkedin.com/in/contactharshvardhanpatil"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 p-6 rounded-xl bg-[#16294b] hover:bg-[#1f3764] transition shadow-lg shadow-black/30"
          >
            <Linkedin className="text-[#D7E056]" size={28} />
            <span className="text-sm font-medium text-white">LinkedIn</span>
          </a>

          <a
            href="https://github.com/harshvardhanpatil070"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 p-6 rounded-xl bg-[#16294b] hover:bg-[#1f3764] transition shadow-lg shadow-black/30"
          >
            <Github className="text-[#D7E056]" size={28} />
            <span className="text-sm font-medium text-white">GitHub</span>
          </a>

          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 p-6 rounded-xl bg-[#16294b] hover:bg-[#1f3764] transition shadow-lg shadow-black/30"
          >
            <FileText className="text-[#D7E056]" size={28} />
            <span className="text-sm font-medium text-white">Resume</span>
          </a>
        </div>

        {/* optional CTA button */}
        <div className="mt-12">
          <a
            href="mailto:harshvardhanpatil070@gmail.com"
            className="inline-block px-6 py-3 rounded-lg bg-[#D7E056] text-[#1a1a1a] font-semibold shadow-md hover:brightness-110 transition"
          >
            Send me a message
          </a>
        </div>
      </div>
    </section>
  );
}