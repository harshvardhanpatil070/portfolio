// Navbar.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import resume from "../assets/resume.pdf";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when menu open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  // animation variants
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const panelVariants = {
    hidden: { x: "20%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: "20%", opacity: 0 },
  };

  // small helper to close + navigate
  const navClose = (href) => {
    // allow hash links to scroll; close menu first
    setOpen(false);
    if (href && href.startsWith("#")) {
      const id = href.slice(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 260); // wait for panel to close (matches animation)
    }
  };

  return (
    <>
      {/* ――― nav pill ――― */}
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50
                    w-[calc(100%-1.5rem)] sm:w-[calc(100%-3rem)] lg:w-[calc(100%-6rem)]
                    transition-all duration-300 ${
                      scrolled ? "shadow-xl bg-white/10" : "shadow-md bg-white/5"
                    } 
                    backdrop-blur-lg border border-white/20 rounded-[32px]`}
        aria-label="Primary"
      >
        <div className="flex items-center px-6 md:px-10 py-3">
          {/* logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            
            <span className="text-lg sm:text-xl font-bold text-white">
              Harshvardhan Patil
            </span>
          </Link>

          {/* desktop links */}
          <div className="hidden lg:flex items-center gap-8 ml-auto text-sm font-medium text-white">
            <a href="#hero" className="hover:text-gray-300">Home</a>
            <a href="#skills" className="hover:text-gray-300">Skills</a>
            <a href="#projects" className="hover:text-gray-300">Projects</a>
            <a href="#timeline" className="hover:text-gray-300">Journey</a>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-3 py-1 rounded-full bg-[#D7E056] text-[#0b0b0b] font-semibold"
            >
              Résumé
            </a>
          </div>

          {/* mobile hamburger */}
          <div className="ml-auto lg:hidden">
            <button
              onClick={() => setOpen(true)}
              className="p-2 text-white/90 hover:text-white rounded-full hover:bg-white/10"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* ――― mobile slide-over ――― */}
      <AnimatePresence>
        {open && (
          <>
            {/* overlay */}
            <motion.div
              key="overlay"
              initial={reduce ? false : "hidden"}
              animate="visible"
              exit="hidden"
              variants={overlayVariants}
              transition={{ duration: 0.22 }}
              className="fixed inset-0 z-50 bg-black/50"
              onClick={() => setOpen(false)}
              aria-hidden
            />

            {/* panel */}
            <motion.aside
              key="panel"
              initial={reduce ? false : "hidden"}
              animate="visible"
              exit="exit"
              variants={panelVariants}
              transition={{ duration: 0.32, ease: "easeOut" }}
              className="fixed right-0 top-0 z-50 h-full w-[86vw] max-w-[420px] bg-[#0f1216] text-white shadow-2xl"
              role="dialog"
              aria-modal="true"
            >
              <div className="h-full flex flex-col">
                {/* header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-white/6">
                  <div className="flex items-center gap-3">
                    
                    <span className="font-semibold text-lg">Harshvardhan Patil</span>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Close menu"
                    className="p-2 rounded-full hover:bg-white/6"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* content: vertically centered links like your screenshot */}
                <div className="flex-1 overflow-auto">
                  <nav className="h-full flex flex-col items-center justify-center gap-8 px-6">
                    <a
                      href="#hero"
                      onClick={() => navClose("#hero")}
                      className="text-xl font-semibold text-white tracking-wide"
                    >
                      HOME
                    </a>

                    <a
                      href="#projects"
                      onClick={() => navClose("#projects")}
                      className="text-xl font-semibold text-white tracking-wide"
                    >
                      PROJECTS
                    </a>

                    <a
                      href="#timeline"
                      onClick={() => navClose("#Journey")}
                      className="text-xl font-semibold text-white tracking-wide"
                    >
                      Journey

                    </a>

                    <a
                      href="#contact"
                      onClick={() => navClose("#contact")}
                      className="text-xl font-semibold text-white tracking-wide"
                    >
                      CONTACT
                    </a>

                    <a
                      href={resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 w-full"
                    >
                      <div
                        className="mx-auto w-[85%] text-center px-6 py-3 rounded-md bg-[#5b56ff] text-white font-semibold text-lg"
                        role="button"
                      >
                        RÉSUMÉ
                      </div>
                    </a>
                  </nav>
                </div>

                {/* footer small note */}
                <div className="px-6 py-4 border-t border-white/6 text-center text-xs text-white/60">
                  Designed & built with React • Tailwind • Framer Motion
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}